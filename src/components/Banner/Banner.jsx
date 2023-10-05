import Marquee from "react-fast-marquee";
import img1 from '../../assets/Sajek.png'
import img2 from '../../assets/sundorbon.png'
import img3 from '../../assets/Sreemongol.png'
import img4 from '../../assets/cox.png'
import bgImg1 from '../../assets/saj.jpg'
import bgImg2 from '../../assets/istockphoto-1137892510-1024x1024.jpg'
import bgImg3 from '../../assets/sri.jpg'
import bgImg4 from '../../assets/c.jpg'

import SimpleSlider from '../SimpleSlider/SimpleSlider ';
import { useState } from "react";

const Banner = () => {
  const [backgroundImage, setBackgroundImage] = useState(`${bgImg4}`)
  const [title, setTitle] = useState("Cox's bazar");
  const [pra,setPra]= useState("Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...")
  
  const handleSrimangal = () => {
    setBackgroundImage(`${bgImg3}`)
    setTitle('Srimangal')
    setPra('Srimangal, located in the northeastern part of Bangladesh, is a picturesque town renowned for its lush tea gardens, serene landscapes, and vibrant culture. Often referred to as the "Tea Capital of Bangladesh," ')
  }
  const handleSajek = () => {
    setBackgroundImage(`${bgImg1}`)
    setTitle('Sajek')
    setPra('Sajek Valley, located in the Chittagong Hill Tracts of Bangladesh, is a breathtakingly beautiful and serene destination that has gained popularity among travelers seeking natural beauty and tranquility. ')
  }
  const handleSundarban = () => {
    setBackgroundImage(`${bgImg2}`)
    setTitle('Sundarban')
    setPra('The Sundarbans is not only a place of great ecological significance but also a symbol of the delicate balance between nature and human activity. It remains a captivating destination for nature enthusiasts and conservationists alike.')
  }
  const handleCox = () => {
    setBackgroundImage(`${bgImg4}`)
    setTitle("Cox's Bazar")
  
  }
  return (
    <div>
      <div className="hero min-h-screen" style={{backgroundImage: `url(${backgroundImage})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              
                <Marquee speed={200} pauseOnClick={true}>
                <div className=" relative">
                  <img onClick={handleSajek} src={img1} className="w-2/4 rounded-lg -mt-8 shadow-2xl"                  
                  />
                  <span className="font-semibold text-5xl uppercase absolute left-3 bottom-3">Sajek</span>
                </div>
                <div className="relative">
                  <img onClick={handleSundarban} src={img2} className="w-2/4  rounded-lg shadow-3xl" />
                  <span className="font-semibold text-4xl uppercase absolute left-3 bottom-3">Sundarban</span>
              </div>
                <div className="relative">
                  <img onClick={handleSrimangal} src={img3} className="w-2/4  rounded-lg shadow-2xl" />
                  <span className="font-semibold text-4xl uppercase absolute left-3 bottom-3">Sreemongol</span>
              </div>
                <div className="relative">
                  <img onClick={handleCox} src={img4} className="  rounded-lg shadow-2xl" />
                  <span className="font-semibold text-4xl uppercase absolute left-12 bottom-24">Cox'x bazar</span>
              </div>
</Marquee>
              
             
    <div>
                <h1 className="text-5xl font-bold">{title }</h1>
                <p className="py-6">{ pra}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  </div>
</div>

      
{/* <SimpleSlider /> */}
    </div>
  );
};

export default Banner;