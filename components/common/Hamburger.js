import React from 'react';

export default function Hamburger({ theme, open, setOpen }) {
  return (
    // <p>Hamburgir</p>
    <div
      className="relative flex h-[52px] w-[66px] cursor-pointer flex-col items-end justify-between p-[0.8rem] md:hidden"
      onClick={() => setOpen((prev) => !prev)}
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      <span
        className={`w-10 rounded-md py-[2px] ${open && 'absolute top-1/2 rotate-45'} ${
          theme === 'dark' ? 'bg-[#fff]' : 'bg-headText'
        } transition-all duration-300`}
      ></span>
      <span
        className={`${!open ? 'w-8' : 'w-10'} ${open ? 'absolute top-1/2 py-0 opacity-0' : 'py-[2px]'} rounded-md ${
          theme === 'dark' ? 'bg-[#fff]' : 'bg-headText'
        } transition-all duration-300`}
      ></span>
      <span
        className={`${!open ? 'w-6' : 'w-10'} ${open && 'absolute top-1/2 -rotate-45 '} rounded-md ${
          theme === 'dark' ? 'bg-[#fff]' : 'bg-headText'
        } py-[2px] transition-all duration-300`}
      ></span>
    </div>
  );
}
