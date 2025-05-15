
import React from 'react';
import { CircleUserRound } from "lucide-react";

interface AiAssistantAvatarProps {
  size?: number;
  className?: string;
}

const AiAssistantAvatar = ({ size = 40, className = "" }: AiAssistantAvatarProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-guizhou-teal to-guizhou-blue rounded-full animate-pulse-light"></div>
      <div className="relative bg-gradient-to-tr from-guizhou-teal via-guizhou-blue to-primary rounded-full p-0.5">
        <div className="bg-white rounded-full p-1.5">
          <CircleUserRound size={size} className="text-guizhou-teal" />
        </div>
      </div>
    </div>
  );
};

export default AiAssistantAvatar;
