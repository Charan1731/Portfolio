import React from 'react';

const MagicButton = ({
  title,
  icon,
  handleClick,
  otherClasses,
}: {
  title?: string;
  icon?: React.ReactNode;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`relative w-full p-[2px] overflow-hidden rounded-lg group ${otherClasses}`}
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Inner Content */}
      <div className="relative flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-md transition-all duration-300 group-hover:bg-transparent">
        {icon && <span className="text-lg">{icon}</span>}
        {title && <span className="text-sm font-medium transition-all duration-300 group-hover:text-black">{title}</span>}
      </div>
    </button>
  );
};

export default MagicButton;
