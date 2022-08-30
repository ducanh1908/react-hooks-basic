import React, { useState } from 'react';
import './color-box.scss'
ColorBox.propTypes = {
    
};
function getRamdomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue']
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    const [color, setColor] = useState(()=>{
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        console.log(initColor);
        return initColor;
    });
    function handdleBoxClick() {
        const newColor =  getRamdomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor)
    }
    return (
        <div className='color-box' 
        style={{backgroundColor: color}}
        onClick={handdleBoxClick}
        >
           
        </div>
    );
}

export default ColorBox;