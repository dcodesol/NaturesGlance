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
                    src={require("../Assets/2.png")}
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
                  <div>
                    <div className="button button-2">Shop Now</div>
                  </div>

                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <div className="d-flex slider-item">
                <div className="slider-img2">
                  <img
                    className="d-block"
                    src={require("../Assets/3.png")}
                    alt="First slide"
                  />
                </div>
                <Carousel.Caption className="slider-caption2">
                  <p>our latest natural products</p>
                  <h1>NATURAL SOLUTIONS</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin porttitor nisl nec ex consectetur, quis ornare sem
                    molestie. Sed suscipit sollicitudin nulla tempor congue.
                    Integer sed elementum odio.
                  </p>
                  <div>
                    <div className="button button-2">Shop Now</div>
                  </div>

                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex slider-item">
                <div className="slider-img">
                  <img
                    className="d-block"
                    src={require("../Assets/4.png")}
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
                  <div>
                    <div className="button button-2">Shop Now</div>
                  </div>

                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Slider;
