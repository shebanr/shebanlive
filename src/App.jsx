import './App.css';
import Avatar from './components/avatar';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import animationData from './assets/Animation - 1703059443200.json';
function App() {
  
  return (
    <>
        <div className='flex flex-col items-center justify-center min-h-screen '>
          <Tilt glareEnable={true} glareMaxOpacity={0.6} scale={1.2} tiltMaxAngleX={25} tileMaxAngleY={25} glareBorderRadius="100px">
            <Avatar />
          </Tilt> 
          <h1 className='gradient-text font-syne font-bold'>SHEBAN ROUF</h1>
          <p className='text-2xl font-sg font-thin text-[#ba7fe2] mt-4 hover:text-blue-300 transition-all duration-500'>Website Under Development, Coming Soon...</p> 
          <Lottie animationData={animationData} className='w-[1000px] h-auto mt-4'/>
        </div>
    </>
  )
}

export default App