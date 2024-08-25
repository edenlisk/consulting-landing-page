import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {FiArrowRight} from "react-icons/fi";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import { Blurhash } from "react-blurhash";

const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    // const [isLoaded, setLoaded] = useState(false);
    // const [isLoadStarted, setLoadStarted] = useState(false);
  
    // const handleLoad = () => {
    //   setLoaded(true);
    // };
  
    // const handleLoadStarted = () => {
    //   console.log("Started: ");
    //   setLoadStarted(true);
    // };
    
    return (
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {/*TOFIX: APRROACH USING LAZY LOAD  */}
        {/* <section className="relative flex flex-col items-center justify-center embla__slide">
          <LazyLoadImage
          style={{margin:0,objectFit:'cover',objectPosition:'center',position:'absolute'}}
        // key={image.name}
        src={'https://mineralseducationcoalition.org/wp-content/uploads/miner3.jpg'}
        height={'100%'}
        width={'100%'}
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
      />
      {!isLoaded && isLoadStarted && (
        // <LazyLoadComponent>
        <Blurhash
          hash={'LKGuwEIT_NDi~pe-ERxV-:sktSRj'}
          width={333}
          height={500}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
        // </LazyLoadComponent>
      )}
          </section> */}
          {/* 1ST SLIDE */}
          <section className="embla__slide bg-[url('https://moderndiplomacy.eu/wp-content/uploads/2023/12/business-office-1068x712.jpg')] bg-cover bg-center  text-white font-semibold">
          <div className="w-full px-4 py-24 space-y-6 h-fit lg:px-28">
                    <div className="flex items-center gap-3 py-1">
                        <span className="w-[70px] p-[1.8px] rounded-full bg-red-500"></span>
                        <p className="text-lg">Meet Rani Mining Company</p>
                    </div>
                    <p className="w-full py-1 text-5xl md:text-6xl md:w-3/4">
                        Elevate business operations with Mining Process
                    </p>
                    <p className="py-1 text-lg">
                        We know how to achieve the highest standards most productively
                    </p>
                    <div className="flex items-center gap-6 space-y-4">
                        <button
                            type="button"
                            className="px-6 py-3 text-lg bg-orange-400 rounded-md "
                        >
                            Learn more
                        </button>
                        <div className="flex items-center gap-2">
                            <p className="md:text-lg">All services</p>
                            <FiArrowRight className="text-xl text-orange-500 hover:text-white"/>
                        </div>
                    </div>
                </div>
          </section>
          {/* 2ND SLIDE */}
          <section className="relative flex flex-col items-center justify-center embla__slide">
            <div className='relative flex flex-col items-center justify-center w-full h-full '>
            <img src="https://images.unsplash.com/photo-1510851896000-498520af2236?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwbmlnaHR8ZW58MHx8MHx8fDA%3D" alt="" className='absolute object-cover object-center w-full h-full'/>
            </div>
           
            <div className="absolute top-0 w-full px-4 py-24 space-y-6 font-semibold text-white h-fit lg:px-28">
                    <div className="flex items-center gap-3 py-1">
                        <span className="w-[70px] p-[1.8px] rounded-full bg-red-500"></span>
                        <p className="text-lg">Meet Rani Mining Company</p>
                    </div>
                    <p className="w-full py-1 text-5xl md:text-6xl md:w-3/4">
                        Elevate business operations with Mining Process
                    </p>
                    <p className="py-1 text-lg">
                        We know how to achieve the highest standards most productively
                    </p>
                    <div className="flex items-center gap-6 space-y-4">
                        <button
                            type="button"
                            className="px-6 py-3 text-lg bg-orange-400 rounded-md "
                        >
                            Learn more
                        </button>
                        <div className="flex items-center gap-2">
                            <p className="md:text-lg">All services</p>
                            <FiArrowRight className="text-xl text-orange-500 hover:text-white"/>
                        </div>
                    </div>
                </div>
          </section>
          {/* 3RD SLIDE */}
          <section className="relative flex flex-col items-center justify-center embla__slide">
            <div className='relative flex flex-col items-center justify-center w-full h-full '>
            <img src="https://mineralseducationcoalition.org/wp-content/uploads/miner3.jpg" alt="" className='absolute object-cover object-center w-full h-full'/>
            </div>
           
            <div className="absolute top-0 w-full px-4 py-24 space-y-6 font-semibold text-white h-fit lg:px-28">
                    <div className="flex items-center gap-3 py-1">
                        <span className="w-[70px] p-[1.8px] rounded-full bg-red-500"></span>
                        <p className="text-lg">Meet Rani Mining Company</p>
                    </div>
                    <p className="w-full py-1 text-5xl md:text-6xl md:w-3/4">
                        Elevate business operations with Mining Process
                    </p>
                    <p className="py-1 text-lg">
                        We know how to achieve the highest standards most productively
                    </p>
                    <div className="flex items-center gap-6 space-y-4">
                        <button
                            type="button"
                            className="px-6 py-3 text-lg bg-orange-400 rounded-md "
                        >
                            Learn more
                        </button>
                        <div className="flex items-center gap-2">
                            <p className="md:text-lg">All services</p>
                            <FiArrowRight className="text-xl text-orange-500 hover:text-white"/>
                        </div>
                    </div>
                </div>
          </section>

        </div>
      </div>
  )
}

export default Carousel