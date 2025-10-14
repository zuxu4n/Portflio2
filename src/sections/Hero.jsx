import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import LeavesOverlay from '../components/LeavesOverlay'
import Gallery from '../components/Gallery/gallery'
import ShinyText from "@/components/TextStuff/ShinyText";
import SplashCursor from '../components/SplashCursor'
import ParallaxScroll from "../components/ParallaxScroll";
import FadeContent from '../components/FadeContent'

const hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
        <SplashCursor />
        <div className="hero-layout">
            <header className="flex flex-col justify-center md:w-full w-screen md:px-70 px-5 mt-[-130px]">
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className="flex flex-col gap-7 select-none">
                    <div className='hero-text leading-[1.2] md:leading-[1] select-none'>
                        <ShinyText 
                            text="Hello," 
                            disabled={false} 
                            speed={9} 
                            className='custom-class' 
                        />
                        <ShinyText 
                            text="I'm Jason!" 
                            disabled={false} 
                            speed={9} 
                            className='custom-class' 
                        />
                    </div>
                    <Button 
                        className="md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        text="click me"
                    />
                    <div className="flex space-x-6 mt-4 select-none">
                        <a href="https://linkedin.com/in/zuxu4n" target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer">
                            <i className="fa-brands fa-linkedin text-3xl text-white hover:text-[#004182] transition-colors duration-200"></i>
                        </a>
                        <a href="https://github.com/zuxu4n" target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer">
                            <i className="fa-brands fa-github text-3xl text-white hover:text-gray-400 transition-colors duration-200"></i>
                        </a>
                        <a href="YOUR_RESUME_URL_HERE" target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer">
                            <i className="fa-solid fa-file text-3xl text-white hover:text-gray-400 transition-colors duration-200"></i>
                        </a>
                    </div>
                </div>
                </FadeContent>
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
        <ParallaxScroll />
        <div aria-hidden className="h-[200vh]"></div>
    </section>
  )
}

export default hero