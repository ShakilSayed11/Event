import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-5 items-start mt-16 w-full text-lg font-medium leading-none max-w-[520px] max-md:mt-10 max-md:max-w-full">
      <button className="overflow-hidden gap-2 self-stretch px-5 py-3 text-white bg-sky-500 rounded-xl max-md:px-5">
        Connect with us
      </button>
      <button className="overflow-hidden gap-2 self-stretch px-6 py-3 text-black bg-gray-200 rounded-xl max-md:px-5">
        Learn more
      </button>
    </div>
  );
};

export default CallToAction;
