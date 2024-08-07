const NewsHero = () => {
  return (
    <div className="relative w-full h-[60dvh] bg-[url('/assets/contact-hero.png')] bg-cover bg-center">
      <div className="w-full md:w-1/3 h-full px-5 md:px-10 flex flex-col justify-center gap-2 text-white">
        <h1 className="font-extrabold text-4xl md:text-6xl">News</h1>
        <p className="text-xl">
          Stay informed with the latest news from AbBC Therapies, including our
          research milestones, conference presentations, and more.
        </p>
      </div>
    </div>
  );
};

export default NewsHero;
