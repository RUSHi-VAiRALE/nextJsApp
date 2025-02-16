'use client'
import { useState, useEffect } from 'react'

export default function ChatComponent() {
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [userInput, setUserInput] = useState('')

  const conversationFlow = [
    { type: "user", text: "Hello! What is CLATians?" },
    { type: "bot", text: "CLATians is one of the best CLAT coaching institutes in Patna..." },
    { type: "user", text: "Hello! What is CLATians?" },
  ]

  useEffect(() => {
    let index = 0
    
    const showNextMessage = () => {
      if (index < conversationFlow.length) {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          setMessages(prev => [...prev, conversationFlow[index]])
          index++
          setTimeout(showNextMessage, 1000)
        }, 1500)
      }
    }

    showNextMessage()
  }, [])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (userInput.trim()) {
      setMessages(prev => [...prev, { type: 'user', text: userInput.trim() }])
      setUserInput('')
      // Here you can add logic to handle the bot's response
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white p-4 text-center font-bold">
        💬 Chat with CLATians
      </div>

      <div className="h-[350px] overflow-y-auto p-4 space-y-4">
        {conversationFlow.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 ${
              msg.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.type === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-gray-200" />
            )}
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                msg.type === 'user'
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-100'
              }`}
            >
              {msg.text}
            </div>
            {msg.type === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-200" />
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Chat Input Box */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white rounded-full hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            <i className="bi bi-send-fill"></i>
          </button>
        </form>
      </div>
    </div>
  )
} 