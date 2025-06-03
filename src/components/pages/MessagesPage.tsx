import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import {
  Search,
  MessageSquare,
  Phone,
  Video,
  Image as ImageIcon,
  Smile,
  Send,
  MoreVertical,
  Star,
  Archive,
  Trash2,
  Settings,
  Users,
  Filter,
  ArrowLeft
} from 'lucide-react';
import { Button } from '../ui/Button';

const conversations = [
  {
    id: 1,
    user: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      status: 'online'
    },
    lastMessage: {
      text: 'Hey, I looked at your proposal and it looks great! When can we discuss the details?',
      time: '2m ago',
      unread: true
    }
  },
  {
    id: 2,
    user: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      status: 'offline'
    },
    lastMessage: {
      text: 'The latest designs are ready for review.',
      time: '1h ago',
      unread: false
    }
  },
  // Add more conversations...
];

const messages = [
  {
    id: 1,
    user: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    message: 'Hey, I looked at your proposal and it looks great! When can we discuss the details?',
    time: '2:30 PM',
    type: 'received'
  },
  {
    id: 2,
    user: {
      name: 'You',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    message: 'Thanks! How about tomorrow at 2 PM?',
    time: '2:31 PM',
    type: 'sent'
  },
  // Add more messages...
];

export function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Container>
      <div className="h-[calc(100vh-6rem)] flex">
        {/* Sidebar */}
        <div className={`
          w-full md:w-80 border-r border-gray-200 dark:border-gray-700 flex flex-col
          ${showSidebar ? 'block' : 'hidden'}
          md:block
          absolute md:relative
          bg-white dark:bg-gray-900
          z-20
          h-full
        `}>
          {/* Search and Filters */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="flex items-center justify-between">
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Filter size={18} />
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Archive size={18} />
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Star size={18} />
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Settings size={18} />
              </button>
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`
                  p-4 cursor-pointer transition-colors
                  ${selectedConversation === conversation.id
                    ? 'bg-indigo-50 dark:bg-indigo-900/40'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  }
                `}
                onClick={() => {
                  setSelectedConversation(conversation.id);
                  setShowSidebar(false);
                }}
              >
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={conversation.user.avatar}
                        alt={conversation.user.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {conversation.user.status === 'online' && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {conversation.user.name}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {conversation.lastMessage.time}
                      </span>
                    </div>
                    <p className={`
                      text-sm truncate
                      ${conversation.lastMessage.unread
                        ? 'text-gray-900 dark:text-white font-medium'
                        : 'text-gray-500 dark:text-gray-400'
                      }
                    `}>
                      {conversation.lastMessage.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className={`
          flex-1 flex flex-col
          ${!showSidebar ? 'block' : 'hidden'}
          md:block
        `}>
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  className="md:hidden mr-4 text-gray-600 dark:text-gray-400"
                  onClick={() => setShowSidebar(true)}
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img
                    src={conversations[0].user.avatar}
                    alt={conversations[0].user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-medium text-gray-900 dark:text-white">
                    {conversations[0].user.name}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Active now
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <Phone size={20} />
                </button>
                <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <Video size={20} />
                </button>
                <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`
                  max-w-[75%] md:max-w-md rounded-lg p-4
                  ${message.type === 'sent'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800'
                  }
                `}>
                  <p className={message.type === 'sent' ? 'text-white' : 'text-gray-900 dark:text-white'}>
                    {message.message}
                  </p>
                  <p className={`
                    text-xs mt-1
                    ${message.type === 'sent'
                      ? 'text-indigo-200'
                      : 'text-gray-500 dark:text-gray-400'
                    }
                  `}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <ImageIcon size={20} />
              </button>
              <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <Smile size={20} />
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg py-2 px-4 focus:ring-2 focus:ring-indigo-500"
              />
              <button
                className={`
                  p-2 rounded-full
                  ${newMessage.trim()
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                  }
                `}
                disabled={!newMessage.trim()}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}