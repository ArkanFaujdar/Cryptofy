export default function NewsLetter() {
  return (
    <div className="grid gap-x-px md:grid-cols-2 md:py-[125px] py-[65px] w-full bg-black text-white mx-auto px-5 md:px-8">
      <div className="m-auto md:mb-auto">
        <h1 className="sm:text-2xl md:text-3xl pb-1 font-extrabold">
          Want tips and tricks to optimize your flow?
        </h1>
        <h2 className="mb-5 md:mb-11">
          Sign up to our news letter and stay updated
        </h2>
      </div>

      <div className="m-auto grid grid-col-2">
        <div className="mb-2 m-auto grid md:flex w-full">
          <input
            type="text"
            placeholder="Enter your Email"
            className="rounded-[5px] text-center md:text-left md:pl-5 mb-1 md:mb-0 py-3 md:w-3/4"
          ></input>
          <button className="bg-green-300 md:w-1/4 text-white rounded-[5px] py-3 md:ml-1">
            Notify me
          </button>
        </div>

        <div className="text-center md:w-4/5 mx-auto ">
          <p>We care about protection of your data. Read our data privacy</p>
        </div>
      </div>
    </div>
  );
}
