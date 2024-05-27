import { backgroundimg } from "../utils/constants"
import Gptmoviesuggestion from "./Gptmoviesuggestion"
import Gptsearchbar from "./Gptsearchbar"
 
const GPTSearch = () => {
    return (
        <>
        <div className="fixed -z-10  ">
        <img className="h-screen w-screen object-cover brightness-90 contrast-110 saturate-150 transition-transform duration-1000 ease-in-out transform hover:scale-105 hover:rotate-3 filter blur-sm hover:blur-none"src={backgroundimg} 
        alt="Background Image"
         />
        </div>
            
            <div className=" ">
           
            <div className="">
            <Gptsearchbar />
            <Gptmoviesuggestion/>
            </div>
            
        </div>
        </>
        
    )
}
export default GPTSearch