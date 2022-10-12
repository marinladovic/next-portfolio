function Banner() {
  return (
    <div className="banner banner-bg">
      <div className="flex flex-col pt-32 pb-16 px-4 z-20 text-center md:pt-56 md:pb-24 xl:pt-72 xl:pb-32">
        <div className="font-bold tracking-wide">
          <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
            Marin Ladović
          </h1>
          <h2 className="gradient-text italic text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
            Web Developer
          </h2>
        </div>
        <div className="pt-10">
          <p className="text-gray-400 text-sm mb-6 md:text-base">
            Interested in my work, or want to hire me?
          </p>
          <div className="flex space-x-2 md:space-x-4">
            <button className="btn btn__cta">Contact</button>
            <button className="btn btn__primary">My CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
