import './App.css';
import Avatar from './components/avatar';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import animationData from './assets/Animation - 1703059443200.json';

function App() {
  return (
    <>
        <div className='flex flex-col items-center justify-center space-y-10 min-h-screen p-4 sm:p-6 md:p-8 lg:p-0'> 
            <div className='flex flex-col items-center justify-center space-y-10 min-h-screen'>
              <div className='pt-20'>
                <Tilt glareEnable={true} glareMaxOpacity={0.6} scale={1.2} tiltMaxAngleX={25} tileMaxAngleY={25} glareBorderRadius="200px">
                  <Avatar />
                </Tilt> 
              </div>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl gradient-text font-syne font-bold text-center'>SHEBAN ROUF</h1>
              <p className='text-sm sm:text-md md:text-lg lg:text-2xl font-sg font-thin text-[#ba7fe2] hover:text-blue-300 transition-all duration-500'>Website Under Development, Coming Soon...</p> 
              <Lottie animationData={animationData} className='w-full sm:w-3/4 md:w-1/2 lg:w-[1000px] h-auto'/>
            </div>
        </div>
    </>
  )
}

export default App