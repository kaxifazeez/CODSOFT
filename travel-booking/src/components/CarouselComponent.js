import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles

const CarouselComponent = () => {
  return (
    <>
    <div className="crousalWidth carouselBackground">
      <Carousel
        autoPlay={true}
        interval={100}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        stopOnHover={false}
      >
        <div
          className="carousel slide "
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="image1.jpg" className="d-block w-100" alt="crousal 1" />
            </div>
            <div className="carousel-item">
              <img src="image2.jpg" className="d-block w-100" alt="crousal 2" />
            </div>
            <div className="carousel-item">
              <img src="image3.jpg" className="d-block w-100" alt="crousal 3" />
            </div>
            <div className="carousel-item">
              <img src="image4.jpg" className="d-block w-100" alt="crousal 4" />
            </div>
            <div className="carousel-item">
              <img src="image5.jpg" className="d-block w-100" alt="crousal 5" />
            </div>
          </div>
        </div>
      </Carousel>
    
    </div>
      <div className="footer">
        <p>&copy; 2023 SkyFly. All rights reserved.</p>
      </div>
    </>
  );
};

export default CarouselComponent;
