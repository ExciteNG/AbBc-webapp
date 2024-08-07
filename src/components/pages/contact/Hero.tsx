import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[60dvh] bg-[url('/assets/contact-hero.png')] bg-cover bg-center">
      <div className="w-full md:w-1/3 h-full px-5 md:px-10 flex flex-col justify-center gap-2 text-white">
        <h1 className="font-extrabold text-4xl md:text-6xl">Contact Us</h1>
        <p className="text-xl">
          Need more information? Please contact us and we’ll be in touch soon!
        </p>
      </div>
    </div>
  );
};

export default Hero;
