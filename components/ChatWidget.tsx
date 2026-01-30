import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/gemini';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Marhba! I am Malek, your host at Al Atik. How may I assist you with your dining experience today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const botMsg: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="glass-panel w-80 md:w-96 rounded-none shadow-2xl overflow-hidden mb-6 flex flex-col h-[500px] animate-fade-in-up border border-atik-gold/30">
          {/* Header */}
          <div className="bg-atik-ocean p-5 flex justify-between items-center text-white border-b-2 border-atik-gold">
            <div className="flex items-center gap-3">
               <div className="bg-atik-gold/20 p-2 rounded-full border border-atik-gold">
                 <Sparkles size={16} className="text-atik-gold" />
               </div>
               <div>
                 <h3 className="font-serif font-bold text-lg tracking-wide">Malek</h3>
                 <p className="text-[10px] uppercase tracking-widest opacity-80 font-ui">Concierge</p>
               </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-atik-gold transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-gray-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-atik-ocean text-white rounded-t-xl rounded-bl-xl' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-t-xl rounded-br-xl'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-4 rounded-t-xl rounded-br-xl shadow-sm flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-atik-gold rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-atik-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1.5 h-1.5 bg-atik-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Inquire about our menu..."
              className="flex-1 px-4 py-3 bg-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-atik-gold/50 transition-all font-ui"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="px-4 bg-atik-gold text-white hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 bg-atik-ocean text-white pl-6 pr-4 py-4 shadow-2xl hover:bg-atik-terracotta transition-all duration-300"
      >
        <span className="font-ui font-bold text-xs uppercase tracking-widest hidden md:inline">Ask Concierge</span>
        <div className="w-10 h-10 bg-atik-gold/20 rounded-full flex items-center justify-center border border-atik-gold group-hover:bg-white/20 transition-colors">
            <MessageSquare size={20} className="text-atik-gold group-hover:text-white" />
        </div>
      </button>
    </div>
  );
};

export default ChatWidget;