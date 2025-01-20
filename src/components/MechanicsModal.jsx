import React, { useState, useCallback } from "react";
import {
  MapPin,
  Phone,
  Star,
  MessageCircle,
  Clock,
  Wrench,
  ChevronRight,
  X,
  Send,
} from "lucide-react";

// Separate ChatInterface component
const ChatInterface = React.memo(
  ({ mechanic, onClose, messages = [], onSendMessage }) => {
    const [inputMessage, setInputMessage] = useState("");

    const handleSend = () => {
      if (!inputMessage.trim()) return;
      onSendMessage(mechanic.id, inputMessage);
      setInputMessage("");
    };

    return (
      <div className="absolute inset-0 bg-white z-10 flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="text-gray-500">
              <X className="w-6 h-6" />
            </button>
            <div>
              <h3 className="font-semibold">{mechanic.shopName}</h3>
              <p className="text-sm text-gray-500">{mechanic.phone}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                <p>{msg.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {msg.time.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:border-blue-500"
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

const MechanicsModal = ({
  showModal,
  setShowModal,
  mechanics,
  isLoadingMechanics,
}) => {
  const [selectedMechanic, setSelectedMechanic] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState({});

  const handleClose = () => {
    setShowChat(false);
    setSelectedMechanic(null);
    setShowModal(false);
  };
  const handleSendMessage = useCallback((mechanicId, messageText) => {
    setChatMessages((prev) => ({
      ...prev,
      [mechanicId]: [
        ...(prev[mechanicId] || []),
        { text: messageText, sender: "user", time: new Date() },
      ],
    }));

    // Simulate mechanic response
    setTimeout(() => {
      setChatMessages((prev) => ({
        ...prev,
        [mechanicId]: [
          ...(prev[mechanicId] || []),
          {
            text: "Thanks for reaching out! I'll be with you shortly.",
            sender: "mechanic",
            time: new Date(),
          },
        ],
      }));
    }, 1000);
  }, []);
  if (!showModal) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden relative">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Nearby Mechanics</h2>
              <p className="text-gray-500">
                Find trusted professionals in your area
              </p>
            </div>
            <button
               onClick={handleClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {isLoadingMechanics ? (
            <div className="text-center py-8">
              <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p>Finding nearby mechanics...</p>
            </div>
          ) : mechanics.length === 0 ? (
            <div className="text-center py-8">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">No mechanics found in your area</p>
            </div>
          ) : (
            <div className="space-y-4 overflow-y-auto max-h-[60vh]">
              {mechanics.map((mechanic) => (
                <div
                  key={mechanic.id}
                  className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-lg text-gray-900">
                          {mechanic.shopName}
                        </h3>
                        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">
                            {mechanic.rating || "N/A"}
                          </span>
                        </div>
                      </div>

                      <div className="mt-2 space-y-2">
                        <p className="text-gray-600 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          {mechanic.address}
                        </p>
                        {mechanic.phone && (
                          <p className="text-gray-600 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-green-500" />
                            {mechanic.phone}
                          </p>
                        )}
                        <p className="text-gray-600 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-purple-500" />
                          Open until 6:00 PM
                        </p>
                        <p className="text-gray-600 flex items-center gap-2">
                          <Wrench className="w-4 h-4 text-orange-500" />
                          Specialized in Engine Repair, Brake Service
                        </p>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <button
                          onClick={() => {
                            setSelectedMechanic(mechanic);
                            setShowChat(true);
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Chat Now
                        </button>
                        <span className="text-sm text-gray-500">
                          {mechanic.distance.toFixed(1)} km away
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {showChat && selectedMechanic && (
          <ChatInterface
            mechanic={selectedMechanic}
            messages={chatMessages[selectedMechanic.id] || []}
            onClose={() => setShowChat(false)}
            onSendMessage={handleSendMessage}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(MechanicsModal);
