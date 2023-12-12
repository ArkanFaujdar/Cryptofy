import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="bg-black text-white">
      <div className="hidden md:flex justify-around items-center border-b-[1px] h-16 m-auto">
        <h1 className="m-3 ml-5 text-2xl text-green-300">Cryptofy.</h1>
        <div className="pl-32 ">
          <ul className="flex">
            <li className="p-4">Home</li>
            <li className="p-4">Products</li>
            <li className="p-4 ">Contact</li>
            <li className="p-4">About</li>
          </ul>
        </div>
      </div>

      <div className="sticky flex justify-between items-center border-b-[1px] h-16 mb-0  px-4 md:hidden ">
        <h1 className="m-0 text-2xl text-green-300">Cryptofy.</h1>
        <div onClick={() => setNav((nav) => !nav)}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      {nav && (
        <ul>
          <li className="p-4 border-b-2 ">Home</li>
          <li className="p-4 border-b-2">Products</li>
          <li className="p-4 border-b-2">Contact</li>
          <li className="p-4 border-b-2">About</li>
        </ul>
      )}
    </div>
  );
}
