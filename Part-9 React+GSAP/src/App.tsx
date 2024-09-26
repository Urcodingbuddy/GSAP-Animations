import { useRef } from 'react';
import './App.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function App() {
  const boxRef = useRef(null);
  useGSAP(() => {
    gsap.from(boxRef.current,{
      opacity: 0,
      y: 100,
      duration:0.6
    })
  });

  return (
    <main className='flex justify-evenly items-center'>
      <div className='w-60 p-6 gap-6 border-2 flex flex-col justify-evenly items-center rounded-lg'>
        <div className='w-44 h-44 bg-blue-700 border-r-0 rounded-full flex-shrink-0'></div>
        <div ref={boxRef} className='w-44 h-44 bg-orange-500 border-r-0 rounded-lg flex-shrink-0'></div>
      </div>
      <div className='w-60 p-6 gap-6 flex flex-col justify-evenly items-center rounded-lg '>
        <div className='w-44 h-44 bg-blue-700 border-r-0 rounded-full flex-shrink-0'></div>
        <div className='w-44 h-44 bg-orange-500 border-r-0 rounded-lg flex-shrink-0'></div>
      </div>
    </main>
  );
}

export default App;
