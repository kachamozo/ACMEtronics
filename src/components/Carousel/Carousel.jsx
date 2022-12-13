import React from 'react';
import './Carousel.css';
import img from '../../Assets/img.jpg';
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';



function Carousel1() {
    return (
        
        <div id="demo" className="carousel slide" data-ride="carousel">

  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
    <li data-target="#demo" data-slide-to="4"></li>
  </ul>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img} />
    </div>
    <div className="carousel-item">
      <img src={img1} />
    </div>
    <div className="carousel-item">
      <img src={img2} />
    </div>
    <div className="carousel-item">
      <img src={img3} />
    </div>
    <div className="carousel-item">
      <img src={img4} />
    </div>
  </div>

  <a className="carousel-control-prev" href="#demo"  data-slide="prev">
    <span className="carousel-control-prev-icon" ></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon" ></span>
  </a>
</div>
        
    );
}





export default Carousel1;