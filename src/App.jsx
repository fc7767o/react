import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard"
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Header />
      <main>
        <ProfileCard />
      </main>
    </div>

  );
}

export default App
