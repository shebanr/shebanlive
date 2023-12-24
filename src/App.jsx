import './App.css';
import Avatar from './components/avatar';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import animationData from './assets/Animation - 1703059443200.json';
import { PiGithubLogoDuotone } from "react-icons/pi";
import { PiLinkedinLogoDuotone } from "react-icons/pi";
import SvgComponent from './components/SvgComponent';



function App() {
  return (
    <>
        <SvgComponent className='fixed top-0 left-0 w-full h-full opacity-10 p-20' />
        <div className='flex flex-col items-center justify-center space-y-10 min-h-screen p-4 sm:p-6 md:p-8 lg:p-0 z-10 relative'> 
            <div className='flex flex-col items-center justify-center space-y-10 min-h-screen'>
              <div className='pt-20'>
                <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.2} tiltMaxAngleX={25} tileMaxAngleY={25} glareBorderRadius="200px">
                  <Avatar />
                </Tilt>
              </div>
              <div className='flex flex-row items-center justify-center space-x-2'>
                <h1 className='gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-syne font-bold text-center hover:text-blue-300 transition-all duration-500'>SR</h1>
                  <div className='flex flex-col gap-1'>
                    <a href='https://www.linkedin.com/in/shebanrouf/' target='_blank' rel="noreferrer" className='text-blue-300'>
                    <PiLinkedinLogoDuotone className='text-auto sm:text-[10px] md:text-[12px] lg:text-[14px] hover:text-white transition-all duration-500'/>
                    </a>
                    <a href='https://www.github.com/shebanr' target='_blank' rel="noreferrer" className='text-blue-300'>
                    <PiGithubLogoDuotone className='text-auto sm:text-[10px] md:text-[12px] lg:text-[14px] hover:text-white transition-all duration-500'/>
                    </a>
                  </div>
              </div>
              <p className='text-auto sm:text-1xl md:text-2xl lg:text-3xl font-sg font-regular text-[#ba7fe2] hover:text-blue-300 transition-all duration-500'>Website Under Development, Coming Soon...</p> 
              <Lottie animationData={animationData} className='relative w-auto sm:w-3/4 md:w-1/2 lg:w-[500px] h-auto'/>
            </div>
        </div>
    </>
  )
}

export default App