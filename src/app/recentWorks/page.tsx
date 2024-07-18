"use client";
import Carousel from "@/components/corousel";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useState } from "react";
import InnerCarousel from "./InnerCarousel";
export default function RecentWorks() {
  const data = [
    { image: "https://picsum.photos/seed/random101/500/500" },
    { image: "https://picsum.photos/seed/random102/500/500" },
    { image: "https://picsum.photos/seed/random101/500/500" },
    { image: "https://picsum.photos/seed/random101/500/500" },
    { image: "https://picsum.photos/seed/random101/500/500" },
  ];
  const [currentAppIndex, setAppIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const handleCategory = useCallback(
    (i: number) => {
      setCategoryIndex(i);
    },
    [categoryIndex, setCategoryIndex]
  );
  return (
    <div>
      {/* <Carousel data={data} /> */}
      <div className="gap-3 flex items-center justify-start mt-6">
        <button
          className={`${
            categoryIndex == 0 ? "bg-pink-400" : "transparent"
          } rounded p-1 `}
          onClick={() => handleCategory(0)}
        >
          Android Apps
        </button>
        <button
          className={`${
            categoryIndex == 1 ? "bg-pink-400" : "transparent"
          } rounded p-1`}
          onClick={() => handleCategory(1)}
        >
          iPhone Apps
        </button>
        <button
          className={`${
            categoryIndex == 2 ? "bg-pink-400" : "transparent"
          } rounded p-1`}
          onClick={() => handleCategory(2)}
        >
          Web Apps
        </button>
      </div>
      <div className="flex items-center justify-center bg-red-300 md:w-1/2 w-full ">
        <InnerCarousel
          data={data}
          IMAGES={data}
          currentIndex={currentAppIndex}
          categoryIndex={categoryIndex}
        />
      </div>
    </div>
  );
}
