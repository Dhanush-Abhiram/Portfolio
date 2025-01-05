import React from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaBookOpen } from "react-icons/fa";
import { GiSoccerBall, GiKnifeFork } from "react-icons/gi";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const hobbies = [
  {
    name: "Video Gaming",
    description: "I love immersive RPGs and fast-paced competitive games.",
    icon: <FaGamepad size={50} className="text-white" />,
  },
  {
    name: "Football",
    description: "Big fan of football, especially watching CR7 !!",
    icon: <GiSoccerBall size={50} className="text-white" />,
  },
  {
    name: " Mythologies",
    description: "Exploring ancient tales from different cultures.",
    icon: <FaBookOpen size={50} className="text-white" />,
  },
  {
    name: "Foodie",
    description: "Exploring cuisines and trying out new dishes.",
    icon: <GiKnifeFork size={50} className="text-white" />,
  },
];

const HobbyCard = ({ index, name, description, icon }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-6 rounded-3xl w-[250px] flex flex-col items-center'
  >
    <div className='flex flex-col items-center gap-4'>
      {icon}
      <p className='text-white font-black text-[20px]'>{name}</p>
      <p className='text-secondary text-[14px] text-center'>{description}</p>
    </div>
  </motion.div>
);

const Hobbies = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Beyond Coding</p>
          <h2 className={styles.sectionHeadText}>Hobbies & Interests.</h2>
        </motion.div>
      </div>
      
      {/* Flex container for horizontal layout */}
      <div className={`-mt-12 pb-14 ${styles.paddingX} flex justify-center gap-7`}>
        {hobbies.map((hobby, index) => (
          <HobbyCard key={hobby.name} index={index} {...hobby} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Hobbies, "");
