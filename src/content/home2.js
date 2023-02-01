import React from "react";
import "./home2.css"
import Slider from "react-slick";
import Zurag from "../assets/angilal-tsahilgaan-heregsel.webp"
import Zurag1 from "../assets/angilal-eruul-mend.webp"
import Zurag2 from "../assets/angilal-geriin-tawilga.webp"
import Zurag3 from "../assets/angilal-sport.webp"
import Zurag4 from "../assets/angilal-technology.webp"
import Zurag5 from "../assets/angilal-tejeewer-amitnii-hangamj.webp"
import Zurag6 from "../assets/angilal-togloom.webp"

const Home2 = ()=>{
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000
        };
        const data = [
            {
                key:1,
                img: Zurag,
                title:"tsahilgaan heregsel",
            },
            {
                key:2,
                img: Zurag1,
                title:"eruul mend",
            },
            {
                key:3,
                img: Zurag2,
                title:"geriin tawilga",
            },
            {
                key:4,
                img: Zurag3,
                title:"sport",
            },
            {
                key:5,
                img: Zurag4,
                title:"texnology",
            },
            {
                key:6,
                img: Zurag5,
                title:"tejeewer amitnii hamgamj",
            },
            {
                key:7,
                img: Zurag6,
                title:"togloom"
            }
        ]
    return(
        <div className="box">
            <h1>Ulirliin ontsloh emegtei</h1>
            <Slider {...settings}>
                {data.map((row)=>(
                    <div className="box1">
                        {
                       
                            <div className="box2">
                            <img src={row.img} alt="/" />
                            <h4>{row.title}</h4>
                            </div>
                        
                        }
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default Home2