import React, { useState } from 'react';

export default function Search() {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput('');
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="flex flex-wrap items-center gap-2 border border-gray-300 p-2 rounded-lg">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
          >
            {tag}
            <button
              onClick={() => removeTag(index)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter or comma..."
          className="flex-grow outline-none"
        />
      </div>

      {/* Just showing current tags below */}
      <div className="mt-4 text-gray-700">
        <strong>Selected Tags:</strong> {tags.join(', ')}
      </div>
    </div>
  );
}