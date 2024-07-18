import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Home() {
  return (
    <div className="mx-20">
      <div className="flex flex-col sm:flex-row items-center  justify-between">
        <div className="gap-4 flex flex-col  w-96 sm:w-90">
          <h3 className="text-yellow-300 font-monts font-bold mb-5">
            CROSS PLATFORM DEVELOPER
          </h3>
          <h1 className="text-xl font-bold tracking-wide">
            HI,I AM A CROSS PLATFORM MOBILE APPLICATION DEVELOPER BY USING REACT
            NATIVE
          </h1>
          <h4 className="text-justify text-gray-300 font-bold text-sm">
            3-years of experience with React Native Mobile app development. My
            mission is to develop and design a standard bug free mobile
            applications to the public audience.
          </h4>
        </div>
        <div className="mt-10">
          <Image
            alt="avathar_img"
            src={"/github.png"}
            width={50}
            height={50}
            className="sm:-ml-40 opacity-50"
          />
          <Image
            alt="avathar_img"
            src={"/my_avathar1.png"}
            width={400}
            height={400}
          />
          <Image
            alt="avathar_img"
            src={"/android_ios.png"}
            width={60}
            height={60}
            className="ml-40 opacity-50"
          />
        </div>
        <Image
          alt="avathar_img"
          src={"/reactnative.png"}
          width={100}
          height={100}
          className="-ml-20 -mt-10 opacity-50"
        />
      </div>
      <div className="pt-10">
        <button className="bg-green-500 rounded-full flex items-center px-8 py-3 gap-3">
          <IoLogoWhatsapp size={30} /> Lets chat on whatsapp
        </button>
      </div>
    </div>
  );
}
