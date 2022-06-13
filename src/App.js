import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { Banner } from "./Components/Banner";
import { AboutUs } from "./Components/AboutUs";
import { Service } from "./Components/Service";
import { Awards } from "./Components/Awards";
import { ImageSlider } from "./Components/ImageSlider";
import { Blog } from "./Components/Blog";
import { ProductGallery } from "./Components/ProductGallery";
import { Footer } from "./Components/Footer";
import Jsondata from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import './css/style.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(Jsondata);
  }, []);

  return (
    <>
      <div className="anokhiUrja-container">
          <Header data={landingPageData.Header}/>
          <Banner data={landingPageData.Banner}/>
          <AboutUs data={landingPageData.AboutUs}/>
          <Awards data={landingPageData.Awards}/>
          {/* <ImageSlider data={landingPageData.ImageSlider}/> */}
          <ProductGallery data={landingPageData.ProductGallery}/>
          <Service data={landingPageData.Service}/>
          <Blog/>
          <Footer data={landingPageData.Footer}/>
      </div>
    </>
  );
}

export default App;
