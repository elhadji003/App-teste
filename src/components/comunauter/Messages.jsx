import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircleReply } from "lucide-react";
import ButtonPagination from "../ButtonPagination"; // assure-toi que le chemin est correct

export default function Messages() {
  const messages = [
    { id: 1, sender: "Alice", content: "Hello! How are you?" },
    { id: 2, sender: "Bob", content: "Let's meet tomorrow." },
    { id: 3, sender: "Charlie", content: "Don't forget the meeting." },
    { id: 4, sender: "David", content: "Can you send me the report?" },
    { id: 5, sender: "Eve", content: "Great job on the presentation!" },
  ];

  const messagesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * messagesPerPage;
  const visibleMessages = messages.slice(
    startIndex,
    startIndex + messagesPerPage
  );

  const hasPrev = currentPage > 0;
  const hasNext = startIndex + messagesPerPage < messages.length;

  return (
    <div className="w-full lg:w-8/12 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Boîte de réception</h2>

      <div className="space-y-3 min-h-[180px] mb-4">
        {visibleMessages.map((message) => (
          <div
            key={message.id}
            className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-4 py-3"
          >
            <p className="text-sm text-gray-800">
              <span className="font-medium text-gray-900">
                {message.sender}
              </span>{" "}
              : {message.content}
            </p>
            <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition">
              <MessageCircleReply size={16} />
              Répondre
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <ButtonPagination
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={!hasPrev}
          direction="left"
          label="Précédent"
          Icon={ChevronLeft}
        />
        <ButtonPagination
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={!hasNext}
          direction="right"
          label="Suivant"
          Icon={ChevronRight}
        />
      </div>
    </div>
  );
}
