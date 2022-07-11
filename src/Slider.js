import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./slider.css";

function Slider() {
  return (
    <>
      <div className="bg-slider">
        <div>
          <Carousel>
            <Carousel.Item>
              <div className="d-flex slider-item">
                <div className="slider-img">
                  <img
                    className="d-block"
                    src={require("./Assets/2.png")}
                    alt="First slide"
                  />
                </div>
                <Carousel.Caption className="slider-caption">
                  <p>our latest natural products</p>
                  <h1>NATURAL SOLUTIONS</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin porttitor nisl nec ex consectetur, quis ornare sem
                    molestie. Sed suscipit sollicitudin nulla tempor congue.
                    Integer sed elementum odio.
                  </p>
                  <div className="d-flex">
                    <div>
                      <div className="button button-2">Angle bg</div>
                    </div>
                    <div ><a href="#">see more products</a></div>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            {/* <Carousel.Item interval={500}>
              <img
                className="d-block"
                src={require('./Assets/3.png')}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={require('./Assets/4.png')}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item> */}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Slider;
