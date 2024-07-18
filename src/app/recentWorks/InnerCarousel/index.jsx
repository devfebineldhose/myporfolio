"use client";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";
import { useState } from "react";
// function InnerCarousel({
//   data = [],
//   currentIndex = 0,
//   categoryIndex = 0,
//   onPrev = () => {},
//   onNext = () => {},
// }) {
//   const device_bg_Img =
//     categoryIndex == 0
//       ? "/android_bg.jpg"
//       : categoryIndex == 1
//       ? "/iphone_bg.png"
//       : "/lap_bg.png";

//   const [[imageCount, direction], setImageCount] = useState([0, 0]);

//   const activeImageIndex = wrap(0, data.length, imageCount);

//   const swipeToImage = (swipeDirection) => {
//     setImageCount([imageCount + swipeDirection, swipeDirection]);
//   };

//   const dragEndHandler = (dragInfo) => {
//     const draggedDistance = dragInfo.offset.x;
//     const swipeThreshold = 50;
//     if (draggedDistance > swipeThreshold) {
//       swipeToImage(-1);
//     } else if (draggedDistance < -swipeThreshold) {
//       swipeToImage(1);
//     }
//   };

//   const skipToImage = (imageId) => {
//     let changeDirection;
//     if (imageId > activeImageIndex) {
//       changeDirection = 1;
//     } else if (imageId < activeImageIndex) {
//       changeDirection = -1;
//     }
//     setImageCount([imageId, changeDirection]);
//   };
//   return (
//     <div className="flex flex-row justify-center items-center">
//       <MdArrowBackIos size={30} onClick={() => swipeToImage(-1)} />
//       <div className="flex flex-row justify-center pt-10">
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.div
//             key={imageCount}
//             custom={direction}
//             variants={sliderVariants}
//             style={{}}
//             initial="incoming"
//             animate="active"
//             exit="exit"
//             transition={sliderTransition}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={1}
//             onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
//             className="h-74 w-full absolute flex justify-center"
//           >
//             <div className="relative flex justify-center">
//               <Image
//                 alt={data[activeImageIndex].image + "img"}
//                 src={device_bg_Img}
//                 width={400}
//                 height={200}
//                 className={``}
//                 onClick={() => setAppIndex(i)}
//               />
//               <div className="absolute top-0 bottom-0 py-10">
//                 <Image
//                   src={data[activeImageIndex].image}
//                   height={300}
//                   width={260}
//                   alt={data[activeImageIndex].image}
//                   className="h-full object-contain"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//       <MdArrowForwardIos onClick={() => swipeToImage(1)} size={30} />
//     </div>
//   );
// }
// export default InnerCarousel;

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const App = ({ IMAGES = [], data = [], currentIndex, categoryIndex }) => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId) => {
    let changeDirection;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };

  return (
    <main>
      <div className="slider-container">
        <div className="slider">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`,
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="image"
            />
          </AnimatePresence>
        </div>

        <div className="buttons">
          <button onClick={() => swipeToImage(-1)}>PREV</button>
          <button onClick={() => swipeToImage(1)}>NEXT</button>
        </div>
      </div>

      <div className="thumbnails">
        {IMAGES.map((image) => (
          <div
            key={image.id}
            onClick={() => skipToImage(image.id)}
            className="thumbnail-container"
          >
            <img src={image.imageSrc} alt="Musician" />
            <div
              className={`active-indicator ${
                image.id === activeImageIndex ? "active" : null
              }`}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
