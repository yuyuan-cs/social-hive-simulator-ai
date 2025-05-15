
import React from 'react';
import AiAssistantAvatar from './AiAssistantAvatar';

interface AiAssistantMessageProps {
  message: string;
  className?: string;
}

const AiAssistantMessage = ({ message, className = "" }: AiAssistantMessageProps) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      <AiAssistantAvatar size={30} />
      <div className="ai-assistant-message">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default AiAssistantMessage;
