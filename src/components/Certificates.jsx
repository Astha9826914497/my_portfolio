import React from "react";
import { motion } from "framer-motion";
import { drive } from "../assets";
import Tilt from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const CertificateCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className=' p-15  rounded-3xl xs:w-[320px] w-full' id="certificates"  
  >
    <Tilt  options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-10 rounded-3xl sm:w-[360px] w-full'>
    <div className=' inset-0 flex justify-end m-3  relative w-full mr-5'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={drive}
                alt='drive'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
    </div>
    <div className='mt-1'>
      <div>
        <img
          src={testimonial}
          alt="testimonial"
          className='  w-full h-full object-cover rounded-2xl'
        /></div>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          
          <p className='mt-1 text-secondary text-[12px] justify-center items-center flex'>
            {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-contain flex justify-center items-center'
        />
      </div>
      
    </div>
    </Tilt>
    
  </motion.div>
);

const Certificates = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Recognition</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-20 ${styles.paddingX} flex flex-wrap gap-20  justify-center items-center mb-0 p-0`}>
        {testimonials.map((testimonial, index) => (
          <CertificateCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "");