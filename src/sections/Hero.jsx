import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import LeavesOverlay from '../components/LeavesOverlay'
import Gallery from '../components/Gallery/gallery'

const hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
        {/*background here */}
        {/*leaf animation */}

        <div className="hero-layout">
            {/*LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 mt-[-130px]">
                <div className="flex flex-col gap-7">
                    <div className='hero-text'>
                        <h1>I'm Jason Li,</h1>
                        <h1>Welcome to my
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img src={word.imgPath} 
                                                 alt={word.text}
                                                 className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                                                 />
                                            <span>{word.text}</span>
                                        </span>

                                    ))}
                                </span>
                            </span>
                        </h1>
                    </div>
                        <p className="text-[#ffb4aa] md:text-xl relative z-10 pointer-events-none">
                             work in progress
                        </p>

                        <Button 
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="click me"
                        />
                    </div>
                
                </header>
            {/*Right: 3d model*/}
            <figure>
                <div className='hero-3d-layout'>
                    <HeroExperience />
                </div>
            </figure>
        </div>
        <LeavesOverlay count={30} z={30}/>
        <div aria-hidden className="h-[100vh]"></div>
        <Gallery/>
        <div aria-hidden className="h-[200vh]"></div>
    </section>
  )
}

export default hero