function BestPractices() {
  return (
    <div className="best-practices-bg flex flex-col space-y-8 py-12 px-8 rounded-lg text-gray-100 shadow-lg md:order-1 md:pt-20 md:pb-4 lg:pt-28">
      <div className="flex flex-col space-y-2">
        <h2 className="capitalize tracking-wide text-xl font-semibold text-shadow-lg md:text-2xl lg:text-3xl">
          best practices
        </h2>
        <p className="text-sm text-shadow-lg lg:text-base">
          You have{' '}
          <span className="text-semobold underline">50 milliseconds</span> to
          make a good first impression on your potential visitors. It only takes
          that long for users to form an opinion about your website and decide
          whether they'll stay or leave.
        </p>
        <p className="text-sm text-shadow-lg lg:text-base">
          Optimizing the frontend of your website is crucial to reducing bounce
          rates and increasing conversions. My goal is to build websites that
          are fast, responsive, and accessible.
        </p>
      </div>
    </div>
  );
}

export default BestPractices;
