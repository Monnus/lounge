import React,{useState} from "react";
import downArrow from "../svgIcons/down-arrow-svgrepo-com.svg"
import upArrow from "../svgIcons/up-arrow-svgrepo-com.svg"
import menu from "../svgIcons/list-menu-svgrepo-com.svg"
import  {IMAGES}  from "../index.js";



// const scrollerSection=document.querySelector(".scroller");
// const scrollerIMG=document.querySelector(".scrollerIMG");
// const scrollerdivsarr=scrollerIMG.querySelector("div").length;
// let activeIndex=0;
// const changeSlide=(e)=>{
//     const sliderHeight=scrollerSection.clientHeight;
//     if(e.target.getAttribute("data-arrow") ==="upArrow"){
//         activeIndex++;
//     if(activeIndex>scrollerdivsarr-1){
//         activeIndex=0;
//     }    
// }

// scrollerIMG.style.transform=`translateY(${scrollerdivsarr * sliderHeight}px)`


// }

    function Navigation(props){
    const [slideIndex,setSlideIndex]=useState(0);
    const images=document.querySelector(".IMGs");

            const nextSlide=(e)=>{
        
                if(slideIndex < IMAGES.imagesSlider.imgs.length-1){
                    setSlideIndex(slideIndex+1);
                }
                else if( slideIndex ===  IMAGES.imagesSlider.imgs.length-1){
                setSlideIndex(0);   
                }
       
                return images.src=IMAGES.imagesSlider.imgs[slideIndex];
                }
                    const prevSlide=()=>{
                                if(slideIndex > 0){ 
                                    setSlideIndex(slideIndex -1)
                                }
                                else if(slideIndex ===0){
                                    setSlideIndex(IMAGES.imagesSlider.imgs.length-1);
                                }
                                console.log(slideIndex);
                                console.log(IMAGES.imagesSlider.imgs[slideIndex]);
                                return images.src=IMAGES.imagesSlider.imgs[slideIndex];
                                };
                            

            
    return (
<>
        <div className="content">
        <nav>
        <ul>
            <li><b>Home</b></li>/
            <li><b>Lounge chairs</b></li>/
            <li>P22 Armchair and Ottoman</li>
        </ul>
        </nav>
        <h2>Scandinavian <br></br> modernism</h2>
        
<p>Size:w87xd79xh112cm <br></br> Material fiberglass, wood</p>
<h3>45 000 $</h3>
        </div>
        
        <div className="brand">
            <p>Brand:<span>Replica</span></p>
        </div>
        <div className="bar">
            {/* nav icon here*/}
            <img src={menu} alt="" className="menu"/>
        </div>
        <div className="scroller">
        <img src={upArrow} alt="upArrow" className="upArrow" data-arrow="upArrow" onClick={nextSlide}/>
            <img src={downArrow} alt="svgdownArrow" className="downArrow" data-arrow="downArrow" onClick={prevSlide}/>
                <div className="sliderIMG">
                    <div> <img src={IMAGES.imagesSlider.imgs[0]} alt="" className="IMGs"/></div>
                    <div> <img src={IMAGES.imagesSlider.imgs[1]} alt=" " className="IMGs"/></div>
                    <div>  <img src={IMAGES.imagesSlider.imgs[2]} alt=""  className="IMGs"/></div>                
                </div>

            {/* images go here */}
        </div>
        </>
    )
}

export default Navigation;