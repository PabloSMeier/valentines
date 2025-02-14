"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [radio, setRadio] = useState(false);

  return (
    <main className="font-yk text-[#ec0b42] bg-[#ffcfe4] h-screen w-screen flex items-center justify-center flex-col">
      <div className="flex flex-row">
        <Image src={"/hearts.PNG"} alt="" width={200} height={40} />
        <Image src={"/hearts.PNG"} alt="" width={200} height={40} />
      </div>
      <div className="h-2/5 flex items-center justify-center">
        <h1 className="text-5xl ">Camila Campillo</h1>
      </div>
      <form className="h-3/5 flex items-center flex-col justify-start">
        <h2 className="text-2xl">Will you be my Valentine&apos;s?</h2>
        <div className="flex justify-evenly items-center w-full pt-8">
          <label className=" flex flex-row items-center justify-center space-x-1">
            <input
              className="w-3 h-3 appearance-none border-2 border-[#ec0b42]  rounded-full checked:bg-[#ec0b42] transition-all"
              type="radio"
              name="opcion"
              value="si"
              onChange={() => setRadio(true)}
            />

            <span>Yes</span>
          </label>
          <label className=" flex flex-row items-center justify-center space-x-1">
            <input
              className="w-3 h-3 appearance-none border-2 border-[#ec0b42]  rounded-full checked:bg-[#ec0b42] transition-all"
              type="radio"
              name="opcion"
              value="no"
              onChange={() => setRadio(false)}
            />
            <span>No</span>
          </label>
        </div>
        {radio ? (
          <div className="flex items-center justify-center h-full flex-col">
            <h2>Thank you my love!! we will be together foreverr!!</h2>
            <h2>I love you with every little part of my soul</h2>
            <h2>Thank you for being you</h2>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full flex-col">
            <h2>There is nothing but sadness :&#40;</h2>
          </div>
        )}
      </form>
      <div className="flex flex-row">
        <Image
          className="rotate-180"
          src={"/hearts.PNG"}
          alt=""
          width={200}
          height={40}
        />
        <Image
          className="rotate-180"
          src={"/hearts.PNG"}
          alt=""
          width={200}
          height={40}
        />
      </div>
    </main>
  );
}
