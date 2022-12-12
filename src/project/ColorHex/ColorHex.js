import React, {useState} from "react";
import c from "./ColorHex.module.css"


let ColorHex = () => {
    let [color, setColor] = useState('#ffffff')

    let randomColor = () => {
        let string_color = [];
        let array_letter = ['a', 'b', 'c', 'd', 'e', 'f'];

        for (let i = 0; i < 6; i++) {
            if(Math.floor(Math.random() < .6)) {
                let number = Math.floor(Math.random() * 10);
                string_color.push(number)
            }
            else {
                let index_letter = Math.floor(Math.random() * 6);
                string_color.push(array_letter[index_letter]);
            }
        }
        console.log(string_color);
       return '#' + string_color.join('');
    }

    return (
        <div className={c.wrapper} style={{'background': `${color}`}}>
            <div className={c.box}>
                <p>hex color: </p>
                <button onClick={()=> {
                    setColor(randomColor())
                }}>click me</button>
            </div>
        </div>
    )
}

export default ColorHex;
