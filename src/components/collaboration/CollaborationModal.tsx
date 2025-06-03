import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Briefcase, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCollaborationStore } from '../../store/useCollaborationStore';

interface CollaborationModalProps {
  isOpen: boolean;
  onClose: () => void;
  ideaId: string;
  ideaTitle: string;
}

export function CollaborationModal({ isOpen, onClose, ideaId, ideaTitle }: CollaborationModalProps) {
  const [message, setMessage] = useState('');
  const sendRequest = useCollaborationStore((state) => state.sendRequest);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    sendRequest({
      ideaId,
      userId: 'current-user-id', // In a real app, get this from auth context
      status: 'pending',
      message
    });
    
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-lg overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Request to Collaborate
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Project Details
                </h4>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    You are requesting to collaborate on:
                  </p>
                  <p className="text-gray-900 dark:text-white font-medium mt-1">
                    {ideaTitle}
                  </p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Introduction Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Introduce yourself and explain why you'd be a great fit for this project..."
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                
                <div className="flex justify-end space-x-4">
                  <Button
                    variant="secondary"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                  >
                    <Send size={18} className="mr-2" />
                    Send Request
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}