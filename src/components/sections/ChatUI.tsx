import { useState, useRef, useEffect } from 'react';
import { 
  BrainCircuit, 
  Paperclip, 
  Send, 
  Search, 
  Settings, 
  Phone, 
  Video, 
  MoreVertical, 
  Smile, 
  Image, 
  Mic, 
  X,
  Star,
  Archive,
  Bell,
  BellOff,
  UserPlus,
  Edit3,
  Trash2,
  Download,
  Copy,
  Reply,
  Heart,
  Check,
  CheckCheck,
  Circle,
  Moon,
  Sun,
  Zap,
  MessageSquare,
  Users,
  Hash
} from 'lucide-react';

export function ChatUI(){
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('chats');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(['Sarah Chen', 'James Wilson']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [showMessageActions, setShowMessageActions] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const initialChatData = {
    'Sarah Chen': {
      messages: [
        { id: 1, user: 'Sarah Chen', message: "I've updated the market analysis document. Can you review it?", isAI: false, timestamp: '10:30 AM', status: 'read', reactions: [] },
        { id: 2, user: 'AI Assistant', message: 'Sure, I will review it and give you insights soon.', isAI: true, timestamp: '10:31 AM', status: 'read', reactions: [] },
        { id: 3, user: 'Sarah Chen', message: "Thanks! Also, could you help me prepare for tomorrow's presentation?", isAI: false, timestamp: '10:35 AM', status: 'delivered', reactions: [] },
        { id: 4, user: 'AI Assistant', message: 'Absolutely! I can help you structure your presentation and provide key talking points. What specific areas would you like to focus on?', isAI: true, timestamp: '10:36 AM', status: 'read', reactions: [{ emoji: '👍', count: 1 }] },
      ],
      isOnline: true,
      lastSeen: 'Online',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      role: 'Product Manager',
      muted: false,
      pinned: true,
      unreadCount: 0
    },
    'James Wilson': {
      messages: [
        { id: 1, user: 'James Wilson', message: "Let's discuss the user acquisition strategy.", isAI: false, timestamp: '9:15 AM', status: 'read', reactions: [] },
        { id: 2, user: 'AI Assistant', message: 'Good idea! I can analyze our current metrics and suggest improvements. Should we start with organic or paid channels?', isAI: true, timestamp: '9:16 AM', status: 'read', reactions: [] },
        { id: 3, user: 'James Wilson', message: "Let's focus on organic first. What's our current conversion rate?", isAI: false, timestamp: '9:20 AM', status: 'read', reactions: [] },
      ],
      isOnline: true,
      lastSeen: 'Online',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      role: 'Marketing Director',
      muted: false,
      pinned: false,
      unreadCount: 2
    },
    'Team Alpha': {
      messages: [
        { id: 1, user: 'Sarah Chen', message: "Morning team! Ready for today's sprint review?", isAI: false, timestamp: '8:30 AM', status: 'read', reactions: [{ emoji: '🔥', count: 3 }] },
        { id: 2, user: 'James Wilson', message: "Absolutely! I've prepared the metrics dashboard.", isAI: false, timestamp: '8:32 AM', status: 'read', reactions: [] },
        { id: 3, user: 'AI Assistant', message: 'I can provide real-time analytics during the review. Should I prepare the performance summary?', isAI: true, timestamp: '8:35 AM', status: 'read', reactions: [{ emoji: '✨', count: 2 }] },
      ],
      isOnline: false,
      lastSeen: '5 members',
      avatar: null,
      role: 'Group Chat',
      muted: false,
      pinned: true,
      unreadCount: 5,
      isGroup: true
    },
    'AI Assistant': {
      messages: [
        { id: 1, user: 'AI Assistant', message: 'Hello! I\'m here to help you with any questions or tasks. How can I assist you today?', isAI: true, timestamp: '12:00 PM', status: 'read', reactions: [] },
        { id: 2, user: 'AI Assistant', message: 'I can help with document analysis, data insights, creative writing, coding, and much more!', isAI: true, timestamp: '12:01 PM', status: 'read', reactions: [] },
      ],
      isOnline: true,
      lastSeen: 'Always available',
      avatar: null,
      role: 'AI Assistant',
      muted: false,
      pinned: true,
      unreadCount: 0
    }
  };

  const [chatData, setChatData] = useState(initialChatData);
  const [selectedUser, setSelectedUser] = useState('Sarah Chen');
  const [input, setInput] = useState('');

  const emojis = ['😀', '😂', '❤️', '👍', '👎', '😮', '😢', '😡', '🔥', '✨', '🎉', '💯'];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatData, selectedUser]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsTyping(prev => !prev);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      user: selectedUser,
      message: input,
      isAI: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
      reactions: []
    };

    setChatData(prev => ({
      ...prev,
      [selectedUser]: {
        ...prev[selectedUser],
        messages: [...prev[selectedUser].messages, newMessage]
      }
    }));
    
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        user: 'AI Assistant',
        message: getAIResponse(input),
        isAI: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'delivered',
        reactions: []
      };
      
      setChatData(prev => ({
        ...prev,
        [selectedUser]: {
          ...prev[selectedUser],
          messages: [...prev[selectedUser].messages, aiResponse]
        }
      }));
    }, 1500);
  };

  const getAIResponse = (userMessage) => {
    const responses = [
      "That's a great point! Let me analyze this further.",
      "I understand. Here's what I think would work best...",
      "Excellent question! Based on the data, I'd recommend...",
      "I can help you with that. Let me break this down step by step.",
      "That's an interesting approach. Have you considered...?",
      "Perfect! I'll get started on that right away.",
      "Great idea! This aligns well with our current strategy."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const addReaction = (messageId, emoji) => {
    setChatData(prev => ({
      ...prev,
      [selectedUser]: {
        ...prev[selectedUser],
        messages: prev[selectedUser].messages.map(msg => 
          msg.id === messageId 
            ? {
                ...msg,
                reactions: msg.reactions.find(r => r.emoji === emoji)
                  ? msg.reactions.map(r => r.emoji === emoji ? { ...r, count: r.count + 1 } : r)
                  : [...msg.reactions, { emoji, count: 1 }]
              }
            : msg
        )
      }
    }));
  };

  const filteredChats = Object.entries(chatData).filter(([name, data]) =>
    name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    data.messages.some(msg => msg.message.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const StatusIndicator = ({ status }) => {
    const icons = {
      sent: <Check size={12} className="text-gray-400" />,
      delivered: <CheckCheck size={12} className="text-gray-400" />,
      read: <CheckCheck size={12} className="text-blue-500" />
    };
    return icons[status] || <Circle size={8} className="text-gray-400" />;
  };

  return (
<>
<div className={`${darkMode ? 'dark' : ''}`}>
  {/* Main container: Use h-screen for full viewport height */}
  <div className="flex h-screen w-full rounded-none sm:rounded-2xl overflow-hidden shadow-2xl border dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-300">

    {/* Enhanced Sidebar */}
    {/* Responsive width: full on mobile when expanded, specific widths on md/lg */}
    <div
      className={`${
        sidebarCollapsed ? 'w-16' : 'w-full md:w-72 lg:w-80'
      } bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 border-r dark:border-gray-700 transition-all duration-300 flex flex-col`}
    >
      {/* Header */}
      <div className="p-3 sm:p-4 border-b dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          {!sidebarCollapsed && (
            // Responsive text size for title
            <h1 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">Messages</h1>
          )}
          <div className={`flex items-center gap-2 ${sidebarCollapsed ? 'w-full justify-center flex-col sm:flex-row' : ''}`}> {/* Adjust layout for collapsed mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {/* Responsive icon size */}
              {darkMode ? <Sun size={16} sm:size={18} className="text-yellow-500" /> : <Moon size={16} sm:size={18} className="text-gray-600" />}
            </button>
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {/* Responsive icon size. Consider changing icon based on collapsed state for better UX */}
              <Settings size={16} sm:size={18} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {!sidebarCollapsed && (
          <>
            {/* Search */}
            <div className="relative mb-3 sm:mb-4">
              <Search size={16} sm:size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..." // Shortened placeholder for mobile
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                // Responsive text size and padding for input
                className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-xl border-0 focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm"
              />
            </div>

            {/* Tabs */}
            {/* Responsive padding and text size for tabs */}
            <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-0.5 sm:p-1">
              {[
                { id: 'chats', icon: MessageSquare, label: 'Chats' },
                { id: 'groups', icon: Users, label: 'Groups' },
                { id: 'channels', icon: Hash, label: 'Channels' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-2xs xs:text-xs font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  <tab.icon size={12} sm:size={14} />
                  {tab.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-1.5 sm:p-2 space-y-1">
        {filteredChats.map(([name, data], i) => (
          <div
            key={i}
            onClick={() => {
              setSelectedUser(name);
              // On mobile, collapse sidebar when a chat is selected
              if (window.innerWidth < 768) { // md breakpoint
                setSidebarCollapsed(true);
              }
            }}
            // Responsive padding and border for selected item
            className={`cursor-pointer p-2 sm:p-3 rounded-xl transition-all duration-200 transform hover:scale-102 sm:hover:scale-105 ${
              selectedUser === name
                ? 'bg-indigo-100 dark:bg-indigo-600/30 shadow-lg border-l-2 sm:border-l-4 border-indigo-500'
                : 'hover:bg-white dark:hover:bg-gray-800 hover:shadow-md'
            } ${sidebarCollapsed ? 'flex justify-center items-center' : ''}`} // Center avatar when collapsed
          >
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Avatar */}
              <div className="relative">
                {/* Responsive avatar size */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600`}>
                  {name === 'AI Assistant' ? (
                    <BrainCircuit size={18} sm:size={20} className="text-white" />
                  ) : data.isGroup ? (
                    <Users size={18} sm:size={20} className="text-white" />
                  ) : (
                    <img src={data.avatar} alt={name} className="w-full h-full object-cover" />
                  )}
                </div>
                {/* Responsive online indicator */}
                {data.isOnline && ( // Always show online dot if data available, hide text part with !sidebarCollapsed
                  <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 ${sidebarCollapsed ? 'border-transparent dark:border-transparent' : 'border-white dark:border-gray-900'}`}></div>
                )}
                 {/* Unread count - always show if > 0 */}
                {data.unreadCount > 0 && (
                  <div className={`absolute -top-1 -right-1 bg-red-500 text-white text-2xs sm:text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-medium ${sidebarCollapsed && '!w-3 !h-3 !text-[0.5rem] !-top-0.5 !-right-0.5'}`}> {/* Adjust for collapsed */}
                    {data.unreadCount > 9 && sidebarCollapsed ? '9+' : data.unreadCount}
                  </div>
                )}
              </div>

              {!sidebarCollapsed && (
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                    <div className="flex items-center gap-1 sm:gap-2">
                      {/* Responsive text size */}
                      <span className="font-semibold text-gray-800 dark:text-white text-xs sm:text-sm truncate">{name}</span>
                      {data.pinned && <Star size={10} sm:size={12} className="text-yellow-500 fill-current" />}
                      {data.muted && <BellOff size={10} sm:size={12} className="text-gray-400" />}
                    </div>
                    <span className="text-2xs sm:text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {data.messages[data.messages.length - 1]?.timestamp}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-2xs sm:text-xs text-gray-600 dark:text-gray-400 truncate flex-1">
                      {data.messages[data.messages.length - 1]?.message}
                    </p>
                    <StatusIndicator status={data.messages[data.messages.length - 1]?.status} />
                  </div>
                  {/* Role can be hidden on very small screens if needed, or truncated */}
                  <p className="text-2xs sm:text-xs text-gray-500 dark:text-gray-500 mt-0.5 sm:mt-1 truncate">{data.role}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Online Users */}
      {!sidebarCollapsed && (
        <div className="p-2 sm:p-4 border-t dark:border-gray-700">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1.5 sm:mb-2">Online Now</h3>
          <div className="flex -space-x-1.5 sm:-space-x-2">
            {/* Responsive avatar size for online users */}
            {onlineUsers.slice(0, 5).map((user, i) => (
              <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden bg-gradient-to-br from-green-400 to-blue-500">
                <img src={chatData[user]?.avatar} alt={user} className="w-full h-full object-cover" />
              </div>
            ))}
            {onlineUsers.length > 5 && (
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xs sm:text-xs font-medium text-gray-600 dark:text-gray-300">
                +{onlineUsers.length - 5}
              </div>
            )}
          </div>
        </div>
      )}
    </div>

    {/* Enhanced Chat Area */}
    {/* Responsive visibility: Hidden on mobile if sidebar is expanded, otherwise flex */}
    <div
      className={`flex flex-col flex-1 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-950 ${
        sidebarCollapsed ? 'flex' : 'hidden md:flex' // Key class for responsiveness
      }`}
    >
      {/* Chat Header */}
      {selectedUser && chatData[selectedUser] ? ( // Render only if a user is selected
      <div className="p-3 sm:p-4 border-b dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Button to go back to chat list on mobile */}
            <button
              onClick={() => setSidebarCollapsed(false)}
              className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors md:hidden" // Show only on mobile
            >
              <ArrowLeft size={16} sm:size={18} className="text-gray-600 dark:text-gray-400" />
            </button>
            <div className="relative">
              {/* Responsive avatar size */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-violet-600">
                {selectedUser === 'AI Assistant' ? (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <BrainCircuit size={16} sm:size={18} />
                  </div>
                ) : chatData[selectedUser]?.isGroup ? (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <Users size={16} sm:size={18} />
                  </div>
                ) : (
                  <img src={chatData[selectedUser]?.avatar} alt={selectedUser} className="w-full h-full object-cover" />
                )}
              </div>
              {chatData[selectedUser]?.isOnline && (
                // Responsive online indicator
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
              )}
            </div>
            <div>
              {/* Responsive text sizes */}
              <h3 className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">{selectedUser}</h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {isTyping ? (
                  <span className="flex items-center gap-1">
                    <span className="animate-pulse">●</span>
                    <span className="animate-pulse" style={{animationDelay: '0.2s'}}>●</span>
                    <span className="animate-pulse" style={{animationDelay: '0.4s'}}>●</span>
                    typing...
                  </span>
                ) : (
                  chatData[selectedUser]?.lastSeen
                )}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Responsive padding and icon sizes */}
            <button className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <Phone size={16} sm:size={18} className="text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <Video size={16} sm:size={18} className="text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <MoreVertical size={16} sm:size={18} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
      ) : (
        // Placeholder or welcome message when no chat is selected (visible on larger screens)
        <div className="flex-1 flex items-center justify-center text-center p-4">
            <div>
                <MessageSquare size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Select a chat to start messaging</h2>
                <p className="text-gray-500 dark:text-gray-400">Or, search for existing conversations.</p>
            </div>
        </div>
      )}


      {/* Messages */}
      {selectedUser && chatData[selectedUser] && ( // Render only if a user is selected
      <div className="flex-1 overflow-y-auto p-2 xs:p-3 sm:p-4 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        {chatData[selectedUser]?.messages.map((message, i) => (
          <div
            key={message.id}
            className={`flex group ${message.isAI ? '' : 'justify-end'}`}
            style={{
              animationDelay: `${i * 100}ms`,
              animation: 'messageSlideIn 0.4s ease-out forwards'
            }}
            onMouseEnter={() => setShowMessageActions(message.id)}
            onMouseLeave={() => setShowMessageActions(null)}
          >
            {/* Responsive max-width for message bubbles */}
            <div className={`flex items-end max-w-[85%] xs:max-w-[80%] sm:max-w-[70%] md:max-w-[65%] lg:max-w-md relative ${message.isAI ? 'flex-row' : 'flex-row-reverse'}`}>
              
              {/* Message Actions */}
              {showMessageActions === message.id && (
                <div className={`absolute top-0 ${message.isAI ? 'right-0 translate-x-full ml-1' : 'left-0 -translate-x-full mr-1'} -translate-y-1/2 mb-1 sm:mb-2 flex items-center gap-0.5 sm:gap-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 p-0.5 sm:p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10`}>
                  <button onClick={() => addReaction(message.id, '👍')} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-xs sm:text-sm">👍</button>
                  <button onClick={() => addReaction(message.id, '❤️')} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-xs sm:text-sm">❤️</button>
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"><Reply size={12} sm:size={14} className="text-gray-600 dark:text-gray-400" /></button>
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"><Copy size={12} sm:size={14} className="text-gray-600 dark:text-gray-400" /></button>
                </div>
              )}

              {/* Avatar in message: responsive size */}
              <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden mx-1.5 sm:mx-2">
                {message.isAI ? (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white">
                    <BrainCircuit size={14} sm:size={16} />
                  </div>
                ) : (
                  <img src={chatData[message.user === selectedUser ? selectedUser : 'currentUser']?.avatar || chatData[selectedUser]?.avatar } alt={message.user} className="w-full h-full object-cover" />
                )}
              </div>

              {/* Message Bubble */}
              <div className="flex flex-col">
                {/* Responsive padding and text size */}
                <div
                  className={`rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-sm transform transition-all duration-200 hover:scale-102 sm:hover:scale-105 ${
                    message.isAI
                      ? 'bg-white text-gray-800 dark:bg-gray-800 dark:text-white border dark:border-gray-700'
                      : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
                  }`}
                >
                  <p className="text-2xs xs:text-xs font-medium mb-1 opacity-75">{message.user}</p>
                  <p className="text-xs sm:text-sm leading-relaxed">{message.message}</p>
                  
                  {/* Reactions */}
                  {message.reactions.length > 0 && (
                    // Responsive padding for reactions
                    <div className="flex items-center gap-1 mt-1.5 sm:mt-2 pt-1.5 sm:pt-2 border-t border-gray-200/50 dark:border-gray-600/50">
                      {message.reactions.map((reaction, idx) => (
                        <span key={idx} className="text-2xs xs:text-xs bg-gray-100/50 dark:bg-gray-700/50 rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1 flex items-center gap-1">
                          {reaction.emoji} {reaction.count}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Timestamp and Status */}
                <div className={`flex items-center gap-1.5 sm:gap-2 mt-1 px-1 sm:px-2 ${message.isAI ? '' : 'justify-end'}`}>
                  <span className="text-2xs xs:text-xs text-gray-500 dark:text-gray-400">{message.timestamp}</span>
                  {!message.isAI && <StatusIndicator status={message.status} />}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      )}

      {/* Enhanced Input Area */}
      {selectedUser && chatData[selectedUser] && ( // Render only if a user is selected
      <div className="p-2 xs:p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative">
        
        {/* Emoji Picker - responsive columns and positioning might need further tweaks based on exact behavior */}
        {showEmojiPicker && (
          <div className="absolute bottom-full left-2 sm:left-4 mb-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border dark:border-gray-700 p-2 sm:p-4 grid grid-cols-5 xs:grid-cols-6 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-10 gap-1 sm:gap-2 z-20">
            {emojis.map((emoji, i) => (
              <button
                key={i}
                onClick={() => {
                  setInput(prev => prev + emoji);
                  // setShowEmojiPicker(false); // User might want to pick multiple
                }}
                className="text-xl sm:text-2xl hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-1 sm:p-2 transition-colors"
              >
                {emoji}
              </button>
            ))}
          </div>
        )}

        {/* Quick Actions: Hide labels on xs screens */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-indigo-100 dark:bg-indigo-900/70 text-indigo-700 dark:text-indigo-300 rounded-lg text-2xs xs:text-xs font-medium hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors">
            <Zap size={12} sm:size={14} />
            <span className="hidden xs:inline">Quick Reply</span>
          </button>
          <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-green-100 dark:bg-green-900/70 text-green-700 dark:text-green-300 rounded-lg text-2xs xs:text-xs font-medium hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
            <BrainCircuit size={12} sm:size={14} />
            <span className="hidden xs:inline">AI Suggest</span>
          </button>
        </div>

        {/* Input */}
        <div className="flex items-center space-x-1.5 sm:space-x-3">
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Responsive padding and icon sizes for input action buttons */}
            <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Smile size={18} sm:size={20} />
            </button>
            <button className="hidden xs:inline-flex p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Paperclip size={18} sm:size={20} />
            </button>
            <button className="hidden sm:inline-flex p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Image size={18} sm:size={20} />
            </button>
          </div>
          
          <div className="flex-1 relative">
            {/* Responsive padding and text size for input field */}
            <input
              ref={inputRef}
              type="text"
              placeholder="Type message..." // Shortened placeholder
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-gray-100 dark:bg-gray-700 border-0 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-3 sm:px-4 pr-10 sm:pr-12 focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm placeholder-gray-500 dark:placeholder-gray-400"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            
            <button
              onMouseDown={() => setIsRecording(true)} // Implement actual recording logic
              onMouseUp={() => setIsRecording(false)}
              onMouseLeave={() => setIsRecording(false)} // Stop if mouse leaves while pressed
              className={`absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 p-1 sm:p-1.5 rounded-lg transition-all duration-200 ${
                isRecording
                  ? 'bg-red-500 text-white scale-110 animate-pulse'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Mic size={14} sm:size={16} />
            </button>
          </div>

          <button
            className="p-2.5 sm:p-3 text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl sm:rounded-2xl hover:from-indigo-700 hover:to-violet-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSend}
            disabled={!input.trim()}
          >
            <Send size={18} sm:size={20} />
          </button>
        </div>

        {/* Typing Indicator can be styled similarly if needed */}
        {isTyping && (
          <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
            <span>AI is typing...</span>
          </div>
        )}
      </div>
      )}
    </div>
  </div>

  {/* Custom Styles (ensure these are compatible with your setup, e.g. Next.js styled-jsx or global CSS) */}
  <style jsx global>{` // Changed to jsx global for wider compatibility with keyframes, or move to a CSS file
    @keyframes messageSlideIn {
      from { opacity: 0; transform: translateY(15px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    // Ensure other keyframes and scrollbar styles are defined globally or within component scope as needed.
    // The styles for scrollbar, gradients, animations, focus states from your original snippet are generally fine.
    // Consider if .backdrop-blur-sm needs to be applied to more elements if you want consistent glassmorphism.
    // Tailwind JIT mode usually handles hover:scale-105 etc., so explicit CSS for those might not be needed unless custom.
    .scrollbar-thin::-webkit-scrollbar { width: 4px; height: 4px; } /* Added height for horizontal scrollbars if any */
    .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
    .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb { background-color: #d1d5db; border-radius: 20px; border: transparent; }
    .dark .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb { background-color: #4b5563; }
    .scrollbar-thin::-webkit-scrollbar-thumb:hover { background-color: #9ca3af; }
    .dark .scrollbar-thin::-webkit-scrollbar-thumb:hover { background-color: #6b7280; }

    .animate-bounce { animation: bounce 1.4s infinite; }
    @keyframes bounce {
      0%, 100% { transform: translateY(-15%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
      50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
    }
    .animate-pulse { animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: .4; }
    }
  `}</style>
</div>
</>
  );
};

