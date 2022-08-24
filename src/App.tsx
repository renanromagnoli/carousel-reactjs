import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
    
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('/public/static/shoes.json')
            .then((response) => response.json())
            .then(setData)
    }, [])
    
    if(!data || !data.length) return null
    
  return (
   <div className='container'>
       <div className="logo">
           <img src="https://www.tailorbrands.com/wp-content/uploads/2021/01/nike-logo.png" alt="Super Shoes"/>
       </div>
       <div className="carousel">
           {data.map((item) => {
               return (
                <div className="item" key={item.id}>
                    <div className="image">
                        <img src="https://imgnike-a.akamaihd.net/1300x1300/013635ID.jpg" alt="shoe"/>
                    </div>
                    <div className="info">
                        <span className="name">{item.name}</span>
                        <span className="oldPrice">item.oldPrice</span>
                        <span className="price">item.price</span>
                    </div>
                </div>
               )
           })}
       </div>
   </div>
  );
}
