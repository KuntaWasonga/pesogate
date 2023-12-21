import React from 'react'
import styles from '../style'
import './hero.css'
import { bg } from '../assets'
import { GetStarted } from './index'


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 flex justify-start items-start flex-col relative xl:px-0 sm:px-16 px-6`} style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* <div className="overlay z-[1]" /> */}
        {/*<img src={background} className="w-[100%] h-[100%] relative z-[1]" alt="landing image" srcset="" /> */}
        <div className = "z-[3]">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
              The Leading  <br className="sm:block hidden" /> {" "}
              <span className="text-gradient ">Foreign Exchange</span> {" "}
            </h1>

            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"> Solution Provider.</h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            At the forefront of finance, we navigate global markets,
            empowering through excellence, innovation, and client-centric strategies.
            Join us in redefining success in the world of finance.
          </p>
        </div>


        <div className={`flex-1 flex ${styles.flexCenter} md:mr-0  my-10 relative`}>

          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </div>
    </section>
  )
}

export default Hero