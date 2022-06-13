import {IMAGES} from "../index.js"
import React from "react"
import plus from "../svgIcons/plus-svgrepo-com.svg"


class FirstContents extends React.Component{
  constructor(props){
 super(props);
 this.state={
   number:1,
   1:IMAGES.arm1Chair,
   2:IMAGES.arm2Chair,
   3:IMAGES.arm3Chair,
   4:IMAGES.arm4Chair,
   5:IMAGES.arm5Chair
 }
 this.changeImage=this.changeImage.bind(this);

  }


  changeImage(e){
  this.setState({"number": +e.target.getAttribute("data-color")})
  }


  render() {
   
    return(
    <>
<div className='increase'><img  src={plus} alt=""/></div>
<div className="decrease"><img  src={plus} alt=""/></div>

    <div className="smallYellowBox">P22 Armchair <br></br> and Ottoman</div>
    <span style={{position:"absolute",float:"right",margin:"15px 20px 1000px 0",right:"0px",top:"15px"}}>Code:NCH-268</span>
    <div style={{backgroundImage:`url(${this.state[this.state.number]})`,backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"500px",margin:"200px 0 0 0"}}>
      
    </div>
          <br></br>
    <div id="colors" ><span>colors availiable:</span>
    <div className="orange" data-color="1" onClick={this.changeImage}></div> 
    <button className="gray" data-color="2" onClick={this.changeImage}></button>
    <div className="RoyleBlue" data-color="3" onClick={this.changeImage}></div>
    <div className="otherGray" data-color="4" onClick={this.changeImage}></div>
    <div className="oceanBlue" data-color="5" onClick={this.changeImage}></div>
    </div>
      </>
    )
}
}

export default FirstContents;