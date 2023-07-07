import React, { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const EmojiPicker = ({ onEmojiSelect }) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const handleEmojiSelect = (emoji) => {
    onEmojiSelect(emoji);
    setIsPickerOpen(false);
  };

  return (
    <div className="relative">
      {isPickerOpen && (
        <div className="absolute z-10 bottom-0 right-0">
          <Picker data={data} onSelect={handleEmojiSelect} />
        </div>
      )}
      <button
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={(e) => {
          e.preventDefault();
          setIsPickerOpen(!isPickerOpen);
        }}
      >
        😊
      </button>
    </div>
  );
};

export default EmojiPicker;
