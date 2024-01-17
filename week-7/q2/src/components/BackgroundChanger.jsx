import { Children } from "react"
import ColorButton from "./ColorButton"




export default function BackgroundChanger({ setColorState }) {
    
    const colorArray = ["red", "yellow", "black", "purple", "green", "blue", "white"];

    return (
        <div className="container">

            {colorArray.map(someColor => (
                <ColorButton 
                    key={someColor}
                    color = {someColor} 
                    onClick = {() => setColorState(someColor)}  
                />    
            ))}

        </div>
    )
}