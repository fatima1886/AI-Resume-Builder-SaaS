'use client';

import React from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';

interface AiHelperButtonProps {
  currentText: string;     // The raw text from the input field
  fieldType: string;       // e.g., "Professional Summary" or "Job Description"
  onRefine: (refinedText: string) => void; // The function that updates the state
}

export default function AiHelperButton({ currentText, fieldType, onRefine }: AiHelperButtonProps) {
  // 1. Initialize the transport hook linked directly to your backend endpoint
  const { sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
    // 2. Read the completed assistant message after text generation finishes
    onFinish: ({ message }) => {
      const text = message.parts
        .filter((part) => part.type === 'text')
        .map((part) => part.text)
        .join('');
      if (text) onRefine(text.trim()); // Send refined text back up to the parent form state
    },
  });

  // Calculate loading state flags based on the SDK lifecycle status
  const isLoading = status === 'submitted' || status === 'streaming';

  const handleAiFix = async (e: React.MouseEvent) => {
    e.preventDefault();
    // Do not call the API if the user hasn't typed anything yet
    if (!currentText || currentText.trim() === '') return;

    // 3. Dispatch the payload string across the network wire
    await sendMessage({
      text: `Refine this resume ${fieldType} section: "${currentText}"`,
    });
  };

  return (
    <button
      type="button"
      disabled={isLoading || !currentText.trim()}
      onClick={handleAiFix}
      className={`text-xs font-semibold px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 ${
        isLoading
          ? 'bg-orange-50 border-orange-200 text-orange-400 cursor-not-allowed animate-pulse'
          : 'bg-white border-purple-200 text-orange-600 hover:bg-purple-50 active:bg-purple-100 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white'
      }`}
      title={`Improve your ${fieldType} using AI`}
    >
      {isLoading ? (
        <>
          {/* Subtle loading spinner utility element */}
          <svg className="animate-spin h-3.5 w-3.5 text-orange-500" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Refining...
        </>
      ) : (
        <>✨ Fix with AI</>
      )}
    </button>
  );
}
