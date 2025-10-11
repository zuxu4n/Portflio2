import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import LeavesOverlay from '../components/LeavesOverlay'
import Gallery from '../components/Gallery/gallery'
import ShinyText from "@/components/TextStuff/ShinyText";
import SplashCursor from '../components/SplashCursor'

const hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
        <SplashCursor />
        <div className="hero-layout">
            <header className="flex flex-col justify-center md:w-full w-screen md:px-67 px-5 mt-[-130px]">
                <div className="flex flex-col gap-7 select-none">
                    <div className='hero-text leading-[1.2] md:leading-[1] select-none'>
                        <ShinyText 
                            text="Hello," 
                            disabled={false} 
                            speed={10} 
                            className='custom-class' 
                        />
                        <ShinyText 
                            text="I'm Jason Li" 
                            disabled={false} 
                            speed={10} 
                            className='custom-class' 
                        />
                    </div>
                    <p className="text-[#ffb4aa] md:text-xl relative z-10 pointer-events-none select-none">
                        work in progress
                    </p>
                    <Button 
                        className="md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        text="click me"
                    />
                    <div className="flex space-x-6 mt-4 select-none">
                        <a href="https://linkedin.com/in/zuxu4n" target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer">
                            <i className="fa-brands fa-linkedin text-3xl text-[#0A66C2] hover:text-[#004182] transition-colors duration-200"></i>
                        </a>
                        <a href="https://github.com/zuxu4n" target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer">
                            <i className="fa-brands fa-github text-3xl text-white hover:text-gray-400 transition-colors duration-200"></i>
                        </a>
                        <a href="YOUR_RESUME_URL_HERE" target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer">
                            <i className="fa-solid fa-file text-3xl text-white hover:text-gray-400 transition-colors duration-200"></i>
                        </a>
                    </div>
                </div>
            </header>
            <figure>
                <div className='hero-3d-layout'>
                    <HeroExperience />
                </div>
            </figure>
        </div>
        <LeavesOverlay count={30} z={30}/>
        <div aria-hidden className="h-[200vh]"></div>
        <Gallery/>
        <div aria-hidden className="h-[200vh]"></div>
    </section>
  )
}

export default hero