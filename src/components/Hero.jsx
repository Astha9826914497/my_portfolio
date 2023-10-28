import { motion } from "framer-motion";

import { styles } from "../styles";
import laptop from '../assets/tech/laptop1.png';
import Tilt from "react-tilt";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto m:flex-col  overflow-x-hidden`} id="home">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 overflow-x-hidden`}
      >
         <div className='flex flex-row justify-center items-center mt-5'>
          <div className="w-40 h-40">
            
          </div>
          <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#D2042D]'>Astha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Versatile software engineer adept  at React, <br className="sm:block hidden" /> Tailwind  <br /> content creation. I infuse creativity and innovation <br /> into every project, providing  holistic digital experiences.
          </p>
        </div>
          
        </div>
        
      
        <Tilt {...{max: 45,
          scale: 1,
          speed: 450,
          rotate:360,
        }}
        >
        <div className=" flex-col items-center justify-center gap-10 w-full h-full sm:flex m-10 sm:flex-col overflow-x-hidden" >    
        <motion.div className="flex mt-20 mr-40 items-center justify-center w-full h-full ml-60 sm:flex-col">
        <img src={laptop} alt="laptop"   className="w-600-full h-300 sm:block hidden" />
      </motion.div>
        </div>
        </Tilt>
        
       
      </div>

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center overflow-x-hidden'>
      
        <a href='#about'>
       
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 sm:mb-4 '>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1 sm:mt-4'
            />
          </div>
        </a>
        
      </div>
      
    </section>
  );
};

export default Hero;
