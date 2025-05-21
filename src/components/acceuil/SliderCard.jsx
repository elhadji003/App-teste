import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/images/ibms.png";
import image2 from "../../assets/images/isep.png";
import image3 from "../../assets/images/bakeli.png";
import image4 from "../../assets/images/ism.png";
import image5 from "../../assets/images/subdeco.png";
import image6 from "../../assets/images/volkeno.png";
import image7 from "../../assets/images/3fpt.png";

const sponsors = [
  { id: 1, name: "IMBS STARTUP", image: image1 },
  { id: 2, name: "ISEP", image: image2 },
  { id: 3, name: "BAKELI", image: image3 },
  { id: 4, name: "ISM", image: image4 },
  { id: 5, name: "SUBDECO", image: image5 },
  { id: 6, name: "VOLKENO", image: image6 },
  { id: 7, name: "3FPT", image: image7 },
];

const SliderCard = () => {
  const sliderVariants = {
    animate: {
      x: [0, -1500],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="mb-10 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center">
        Nos Partenaires & Sponsors
      </h2>
      <div className="relative flex overflow-hidden mt-10">
        <motion.div
          className="flex gap-4"
          variants={sliderVariants}
          animate="animate"
        >
          {sponsors.concat(sponsors).map((sponsor, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-white p-4 shadow-lg rounded-lg flex flex-col items-center"
            >
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-16 h-16"
              />
              <h3 className="text-lg font-bold text-blue-900">
                {sponsor.name}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SliderCard;
