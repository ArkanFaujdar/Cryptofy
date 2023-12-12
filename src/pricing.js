function Pricing({ imageType, userType, storage, userAllowed, sendAmount }) {
  return (
    <div className="shadow md:shadow-xl mx-auto text-center rounded-[10px] px-10 mt-3 p-5">
      <img src={imageType} alt="single" className="h-[100px] mx-auto" />
      <h1 className="text-2xl font-extrabold mt-3 border-b-[1px] py-2 border-stone-500">
        {userType}
      </h1>
      <p className="text-[19px] py-2 border-b-[1px] border-stone-500">
        {storage}GB Storage
      </p>
      <p className="text-[19px] py-2 border-b-[1px] border-stone-500">
        {userAllowed} user allowed
      </p>
      <p className="text-[19px] py-2 border-b-[1px] border-stone-500">
        Send up to {sendAmount}GB
      </p>
      <button className="py-4 md:py-3 font-bold px-16 bg-green-300 rounded-2xl m-2 hover:scale-110 text-black mt-4">
        Start Trial
      </button>
    </div>
  );
}

export default Pricing;
