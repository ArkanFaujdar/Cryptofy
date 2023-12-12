import Laptop from "./Images/laptop.jpg";

function Services() {
  return (
    <>
      <div className="grid mb-10 m-auto lg:grid-cols-2">
        <img
          src={Laptop}
          alt="laptop"
          className="250px md:h-[400px] lg-[500] m-auto px-10"
        />
        <div className="flex flex-col p-10 md:p-12">
          <h1 className="text-[16px] sm:text-[18px] text-green-300">
            DATA ANALYTICS DASHBOARD
          </h1>
          <h1 className="text-[25px] sm:text-[30px] mb-2 font-extrabold md:mb-2">
            Manage Data Centrally
          </h1>
          <p className="text-[17px] items-center overflow-scroll">
            At Cryptofy, we empower businesses to harness the full potential of
            their crypto data by providing a cutting-edge centralized management
            and analytics platform. Our comprehensive suite of services enables
            organizations to streamline data processes, gain valuable insights
            for their cryptos, and make informed decisions that drive success.
          </p>
          <button className="m-auto md:mx-0 bg-black text-white w-[250px] mt-7 py-4 px-10 rounded-2xl hover:bg-green-300 hover:text-black hover:scale-110">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Services;
