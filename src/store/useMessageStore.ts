import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

interface Conversation {
  id: string;
  participants: string[];
  lastMessage?: Message;
  unreadCount: number;
}

interface MessageStore {
  conversations: Conversation[];
  messages: Message[];
  addMessage: (message: Message) => void;
  markMessageAsRead: (messageId: string) => void;
  getConversationMessages: (conversationId: string) => Message[];
  getUnreadCount: (userId: string) => number;
}

export const useMessageStore = create<MessageStore>()(
  persist(
    (set, get) => ({
      conversations: [],
      messages: [],

      addMessage: (message) => set((state) => {
        const conversation = state.conversations.find(
          (c) => c.id === message.conversationId
        );

        if (conversation) {
          return {
            messages: [...state.messages, message],
            conversations: state.conversations.map((c) =>
              c.id === message.conversationId
                ? {
                    ...c,
                    lastMessage: message,
                    unreadCount: c.unreadCount + 1
                  }
                : c
            )
          };
        }

        return { messages: [...state.messages, message] };
      }),

      markMessageAsRead: (messageId) => set((state) => ({
        messages: state.messages.map((message) =>
          message.id === messageId ? { ...message, read: true } : message
        )
      })),

      getConversationMessages: (conversationId) => {
        return get().messages.filter(
          (message) => message.conversationId === conversationId
        );
      },

      getUnreadCount: (userId) => {
        return get().messages.filter(
          (message) => !message.read && message.senderId !== userId
        ).length;
      }
    }),
    {
      name: 'message-store'
    }
  )
);