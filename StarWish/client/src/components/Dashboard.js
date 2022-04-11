import { SearchForm } from "./SearchForm";
import { Carousel, Button } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <>
      <SearchForm />
        <Carousel>
          <Carousel.Item className="dashboard-ad">
            <img
              src={require("../imgs/tech-ad.jpg")}
              className="d-block w-100"
              alt="First slide"
            />
            <Carousel.Caption className="ad-text">
              <h3>Your one-stop shop for great deals</h3>
              <p>
                Save on watches, phones, cameras, and more. Plus, free shipping.
              </p>
              <Button variant="outline-dark">
                Check them out<i class="bi bi-arrow-right"></i>
              </Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item interval={3000}>
          <img
            src={require("../imgs/personalize-ad.jpg")}
            className="d-block w-100"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Personalize a gift every coffee enthusiast would love</h3>
            <p>
              Let the customization begin<i class="bi bi-arrow-right"></i>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src={require("../imgs/discount-ad.jpg")}
            className="d-block w-100"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Extra 15% off top Robot Vacuums, direct from the brand</h3>
            <p>Save even more for a limited time. Plus, free shipping.<i class="bi bi-arrow-right"></i></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src={require("../imgs/autoparts-ad.jpg")}
            className="d-block w-100"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>The right parts at the right prices</h3>
            <p>Everything you need for your vehicle.<i class="bi bi-arrow-right"></i></p>
          </Carousel.Caption>
        </Carousel.Item> */}
        </Carousel>
    </>
  );
};
