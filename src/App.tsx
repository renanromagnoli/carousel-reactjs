import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
    
    const [data, setData] = useState([])
    const carousel = useRef(null)
    
    useEffect(() => {
        fetch('/public/static/shoes.json')
            .then((response) => response.json())
            .then(setData)
    }, [])
    
    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    
    if(!data || !data.length) return null
    
  return (
   <div className='container'>
       <div className="logo">
           <img src="https://www.tailorbrands.com/wp-content/uploads/2021/01/nike-logo.png" alt="Super Shoes"/>
       </div>
       <div className="carousel" ref={carousel}>
           {data.map((item) => {
               return (
                <div className="item" key={item.id}>
                    <div className="image">
                        <img src="https://imgnike-a.akamaihd.net/1300x1300/013635ID.jpg" alt="shoe"/>
                    </div>
                    <div className="info">
                        <span className="name">{item.name}</span>
                        <span className="oldPrice">{item.oldPrice}</span>
                        <span className="price">{item.price}</span>
                    </div>
                </div>
               )
           })}
       </div>
       <div className="buttons">
           <button onClick={handleLeftClick}>Left</button>
           <button onClick={handleRightClick}>Right</button>
       </div>
   </div>
  );
}
