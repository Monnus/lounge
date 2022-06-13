import FirstContents from "./chairDisplay";
import "../componants.css/Layout.css";
import Navigation from "./navDisplay";
import { svgICons } from "../index";
function CreateLayouts(){
    return (
  <>
        <div id="chairDisplay">
 
        <FirstContents/>
        </div>
        <div id="navContent">

        <Navigation icons={svgICons}/>
        </div>
        
        </>

    )
}
export default CreateLayouts;