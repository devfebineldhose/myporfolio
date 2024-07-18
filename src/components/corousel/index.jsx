"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import KJK from "../../../public/iphone_bg.png";
const Carousel = ({ data }) => {
  const [positionIndexs, setPositionIndexs] = useState([0, 1, 2, 3, 4]);
  const handleNext = () => {
    setPositionIndexs((previndexes) =>
      previndexes.map((previndex) => (previndex + 1) % 5)
    );
  };
  const handlePrev = () => {
    setPositionIndexs((previndexes) => {
      const newArr = [...previndexes];
      return [newArr.pop(), ...newArr];
    });
  };
  const positions = ["center", "left1", "left", "right", "right1"];
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    left1: { x: "-50%", scale: 0.7, zIndex: 2, opacity: 0.5 },
    left: { x: "-90%", scale: 0.5, zIndex: 1, opacity: 0.2 },
    right: { x: "90%", scale: 0.5, zIndex: 1, opacity: 0.2 },
    right1: { x: "50%", scale: 0.7, zIndex: 2, opacity: 0.5 },
  };
  return (
    <div className="flex flex-col relative w-full h-96">
      <IoIosArrowBack
        className="text-4xl absolute mt-52 ml-10"
        onClick={handlePrev}
      />

      <div
        className="flex  flex-col items-center   bg-red-400"
        style={{ backgroundImage: `url(${KJK})` }}
      >
        {data.map((image, index) => (
          <motion.img
            key={index}
            src={image.image}
            alt={image}
            className="rounded-[12px]"
            initial="center"
            animate={positions[positionIndexs[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{
              width: "30%",
              position: "absolute",
              height: 250,
              marginTop: 100,
              pointerEvents: "none",
            }}
          />
        ))}
      </div>
      <IoIosArrowForward
        className="text-4xl absolute mt-52 mr-10 self-end"
        onClick={handleNext}
      />
    </div>
  );
};
export default Carousel;
