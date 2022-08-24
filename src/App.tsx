import "./styles.css";

export default function App() {
  return (
   <div className='container'>
       <div className="logo">
           <img src="https://www.tailorbrands.com/wp-content/uploads/2021/01/nike-logo.png" alt="Super Shoes"/>
       </div>
       <div className="carousel">
           <div className="item">
               <div className="image">
                   <img src="https://imgnike-a.akamaihd.net/1300x1300/013635ID.jpg" alt="shoe"/>
               </div>
               <div className="info">
                   <span className="name">Super Shoe 1</span>
                   <span className="oldPrice">U$ 299.00</span>
                   <span className="price">U$ 199.00</span>
               </div>
           </div>
       </div>
   </div>
  );
}
