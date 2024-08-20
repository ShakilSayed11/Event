import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col mt-10 w-full text-sm leading-none max-w-[520px] text-neutral-400 max-md:mt-10 max-md:max-w-full">
      <p className="max-md:max-w-full">
        Shakil Sayed, Founder & CTO, Shafiya ITC, Mumbai
      </p>
      <button className="mt-3 text-sky-500 max-md:max-w-full text-left">Unsubscribe</button>
      <div className="mt-3 max-md:max-w-full">
        Was this email helpful? <span className="text-neutral-400">👍</span> or 👎
      </div>
      <div className="mt-3 underline max-md:max-w-full">
        <a href="https://www.linkedin.com/in/shafiyaitc/" className="text-sky-500 underline" target="_blank" rel="noopener noreferrer">
          Visit our Linkedin profile
        </a> for more info.
      </div>
    </footer>
  );
};

export default Footer;
