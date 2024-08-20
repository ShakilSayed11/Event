import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex self-start text-lg font-bold text-black">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fd01fa2b6e36ea3c39968453a2ba093a72178b29a687e37f77e00669bd14fad?placeholderIfAbsent=true&apiKey=db73fff6a0184cee81180041c04d8607" 
        alt="Shafiya ITC Logo" 
        className="object-contain shrink-0 max-w-full aspect-[0.97] w-[113px]" 
      />
      <h2 className="self-start mt-12 basis-auto max-md:mt-10">
        Shafiya ITC
      </h2>
    </header>
  );
};

export default Header;
