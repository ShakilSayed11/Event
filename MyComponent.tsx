import React from 'react';
import Header from './Header';
import ServiceItem from './ServiceItem';
import CallToAction from './CallToAction';
import Footer from './Footer';

interface Service {
  id: number;
  color: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    color: 'bg-sky-500',
    title: 'Business Email Solutions:',
    description: 'Secure and reliable systems to keep your communications professional.'
  },
  {
    id: 2,
    color: 'bg-violet-500',
    title: 'IT Service Management (ITSM):',
    description: 'Efficient mechanisms for managing IT services and feedback.'
  },
  {
    id: 3,
    color: 'bg-pink-500',
    title: 'Ticketing and Feedback Platforms:',
    description: 'Comprehensive systems for handling grievances and collecting valuable feedback.'
  },
  {
    id: 4,
    color: 'bg-amber-500',
    title: 'Web Development:',
    description: 'Custom website solutions to boost your digital presence.'
  },
  {
    id: 5,
    color: 'bg-yellow-500',
    title: 'Domain Management:',
    description: 'Effective management of your domain and related services.'
  }
];

const MyComponent: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col pt-3 pb-16 bg-white max-w-[680px]">
      <Header />
      <section className="flex flex-col items-center px-12 w-full max-md:px-5 max-md:max-w-full">
        <h1 className="self-stretch text-5xl font-bold text-black leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
          Enhance Efficiency with Expert IT Solutions
        </h1>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d1a4b29cebea90fe7219bf9cf1587b3564bef018d4479caa657b3761836dc30?placeholderIfAbsent=true&apiKey=db73fff6a0184cee81180041c04d8607" 
          alt="IT Solutions Illustration" 
          className="object-contain self-stretch mt-6 w-full rounded-3xl aspect-[1.46] max-md:max-w-full" 
        />
        <p className="mt-7 text-lg leading-6 text-black max-md:max-w-full">
          I'm <span className="font-bold">Shakil Sayed</span>, the Founder and CTO of Shafia ITC, specializing in streamlining operations through innovative digital solutions. We offer a range of services designed to enhance your organization's efficiency, including
        </p>
        <div className="flex flex-col mt-11 w-full text-lg max-w-[520px] max-md:mt-10 max-md:max-w-full">
          {services.map((service) => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </div>
        <div className="flex flex-col mt-11 w-full text-black max-w-[520px] max-md:mt-10 max-md:max-w-full">
          <h2 className="text-2xl font-bold leading-none max-md:max-w-full">
            What can you do with Team Templates?
          </h2>
          <p className="mt-2.5 text-lg leading-6 max-md:max-w-full">
            The possibilities are endless, but these are a few of our favorite ways to use them:
          </p>
        </div>
        <CallToAction />
        <Footer />
      </section>
    </main>
  );
};

export default MyComponent;
