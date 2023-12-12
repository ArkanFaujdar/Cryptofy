import Typed from "react-typed";

function Hero() {
  return (
    <div className="h-auto flex flex-col justify-start items-center pt-[75px] pb-[75px] px-auto bg-black text-white">
      <p className="font-bold mb-2 text-green-300 text-2xl">
        Growing with Data Anaytics
      </p>
      <h1 className="text-2xl md:text-6xl sm:text-4xl m-2">Grow with Data</h1>
      <div className="flex items-center justify-center text-2xl">
        <p className="m-2 text-xl sm:text-2xl">Fast, Flexible Finance for</p>
        <Typed
          strings={["BTC", "ETH", "Pi", "SASS"]}
          typeSpeed={100}
          backSpeed={150}
          loop
          className="text-xl"
        />
      </div>

      {/* For Large Screens */}
      <p className="hidden sm:flex text-gray-400 m-2 mx-7 w-fit text-2xl text-center">
        Monitor your data analytics to increase revenue for ETH, BTC and other
        cryptos
      </p>
      {/* For smaller screens */}
      <p className="text-gray-400 m-5 mt-3 text-center sm:hidden">
        Using data analytics increase revenue for your cryptos
      </p>

      <button className="py-4 md:py-3 font-bold px-16 bg-green-300 rounded-[5px] m-2 hover:scale-110 text-black mt-4">
        Get Started
      </button>
    </div>
  );
}

export default Hero;
