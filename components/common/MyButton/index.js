import React from 'react';

function MyButton({ children, option, classes, theme, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 
      ${disabled === true ? 'cursor-not-allowed' : 'cursor-pointer'}
      ${
        option === 'solid'
          ? `rounded-md ${
              theme === 'dark' ? 'border-[#29347a] text-[#e8e6e3] bg-[#29347a]' : 'bg-brand text-[#fff] border-brand'
            } font-rubik xl:text-lg text-sm border`
          : `place-items-center rounded-md border xl:text-lg text-sm ${
              theme === 'dark' ? 'border-[#29347a] text-[#e8e6e3]' : 'border-brand'
            }`
      } ${classes}`}
    >
      {children}
    </button>
  );
}

export default MyButton;
