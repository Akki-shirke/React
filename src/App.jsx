import React from 'react';
import Background from './components/Background';
import Foreground from './components/Foreground';
function app() {
  return (
    <div className='w-full h-screen bg-black bg-zinc-800 '>
      <Background />
      <Foreground />
    </div>



  );
}

export default app;