'use client'
import React, { useState } from 'react';
import { Send, Paperclip, MoreVertical } from 'lucide-react';

const MentorChatroom = () => {
  const [message, setMessage] = useState('');
  
  const messages = [
    {
      id: 1,
      sender: 'Vertical Eye',
      text: "Hello! How can I help you today?",
      time: '10:30 AM',
      avatar: '👨‍🏫'
    },
    {
      id: 2,
      sender: 'student',
      text: "Hi! I need guidance on career options.",
      time: '10:32 AM',
      avatar: '👨‍🎓'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
            👨‍🏫
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Dr. Sarah Wilson</h2>
            <p className="text-sm text-gray-400">Career Mentor</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-full transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-xs lg:max-w-md ${msg.sender === 'student' ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}>
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-sm flex-shrink-0">
                {msg.avatar}
              </div>
              <div className={`px-4 py-2 rounded-2xl ${
                msg.sender === 'student' 
                  ? 'bg-blue-600 text-white rounded-br-md' 
                  : 'bg-gray-700 text-gray-200 border border-gray-600 rounded-bl-md'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p className={`text-xs mt-1 ${
                  msg.sender === 'student' ? 'text-blue-100' : 'text-gray-400'
                }`}>
                  {msg.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-gray-800 border-t border-gray-700 px-6 py-4">
        <div className="flex items-end space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-full transition-colors">
            <Paperclip size={20} />
          </button>
          <div className="flex-1 relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="1"
              style={{ minHeight: '44px', maxHeight: '120px' }}
            />
          </div>
          <button 
            onClick={handleSendMessage}
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!message.trim()}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorChatroom;