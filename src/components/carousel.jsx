import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiArrowRight } from "react-icons/fi";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import { Blurhash } from "react-blurhash";
import { useNavigate } from "react-router-dom";

const Carousel = ({images, homeMainText, homeSubText}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const navigate = useNavigate();

  // const [isLoaded, setLoaded] = useState(false);
  // const [isLoadStarted, setLoadStarted] = useState(false);

  // const handleLoad = () => {
  //   setLoaded(true);
  // };

  // const handleLoadStarted = () => {
  //   console.log("Started: ");
  //   setLoadStarted(true);
  // };

  const CarouselInfo = ({ img, alt, link }) => {
    return (
      <>
        <div className="relative flex flex-col items-center justify-center w-full h-full ">
          <img
            src={`${img}`}
            alt={`${alt}`}
            className="absolute object-cover object-center w-full h-full"
          />
        </div>

        <div className="absolute top-0 w-full px-4 py-24 space-y-6 font-semibold text-white h-fit lg:px-28">
          <div className="flex items-center gap-3 py-1">
            <span className="w-[70px] p-[1.8px] rounded-full bg-red-500"></span>
            <p className="text-lg">Meet Soemc Ltd Company</p>
          </div>
          <p className="w-full py-1 text-5xl md:text-6xl md:w-3/4">
            {homeMainText}
          </p>
          <p className="py-1 text-lg">
            {homeSubText}
          </p>
          <div className="flex items-center gap-6 space-y-4">
            <button
              onClick={() => navigate(`/about-us`)}
              type="button"
              className="px-6 py-3 text-lg bg-orange-400 rounded-md "
            >
              Learn more
            </button>
            <button onClick={() => navigate(`${link}`)} className="flex items-center gap-2">
              <p className="md:text-lg">All services</p>
              <FiArrowRight className="text-xl text-orange-500 hover:text-white" />
            </button>
          </div>
        </div>
      </>
    );
  };

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
        {/* 1ST SLIDE  */}
        {images?.length ? images.map((img, index) => (
            <section key={index} className="relative flex flex-col items-center justify-center embla__slide">
              <CarouselInfo
                  img={img}
                  alt={"people-in-office"}
                  link={"/services"}
              />
            </section>
        )) : null}

        {/* 2ND SLIDE */}
        {/*<section className="relative flex flex-col items-center justify-center embla__slide">*/}
        {/*  <CarouselInfo*/}
        {/*      img={*/}
        {/*        "https://images.unsplash.com/photo-1510851896000-498520af2236?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwbmlnaHR8ZW58MHx8MHx8fDA%3D"*/}
        {/*    }*/}
        {/*    alt={"office"}*/}
        {/*    link={"/services"}*/}
        {/*  />*/}
        {/*</section>*/}
        {/*/!* 3RD SLIDE *!/*/}
        {/*<section className="relative flex flex-col items-center justify-center embla__slide">*/}
        {/*  <CarouselInfo*/}
        {/*    img={"https://mineralseducationcoalition.org/wp-content/uploads/miner3.jpg"}*/}
        {/*    alt={"mining"}*/}
        {/*    link={"/services"}*/}
        {/*  />*/}
        {/*</section>*/}
      </div>
    </div>
  );
};

export default Carousel;
