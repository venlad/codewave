import React , {useState,useEffect}from "react";
import btnPlay from "../../images/btn-play.svg"

import "../cursor/cursor.css"
const Cursor = props => {
    const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
       addEventListeners();
       return () => removeEventListeners();
   }, []);

   const addEventListeners = () => {
       document.addEventListener("mousemove", onMouseMove);
   };

   const removeEventListeners = () => {
       document.removeEventListener("mousemove", onMouseMove);
   };

   const onMouseMove = (e) => {
       setPosition({x: e.clientX, y: e.clientY});
   };                                         
    return(
        <div id="cursor" 
        className="cursor is-view is-big" style={{
        left: `${position.x}px`,
        top: `${position.y}px`
        }}>
        <div class="cursor__label">
            Scroll
        </div>
        <img data-src={btnPlay} class="cursor__play"/>
        <div class="cursor__bg"></div>
        </div>
    )
}

export default Cursor;