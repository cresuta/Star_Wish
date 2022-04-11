import React from "react";
import { Carousel, Button } from "react-bootstrap";

export const CarouselAds = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item className="dashboard-ad1" interval={5000}>
          <img
            src={require("../imgs/tech-ad.jpg")}
            className="d-block w-100"
            alt="First slide"
          />
          <Carousel.Caption className="ad-text">
            <h3 className="ad-text-heading">
              Your one-stop shop for great deals
            </h3>
            <p className="ad-text-content">
              Save on watches, phones, cameras, and more. Plus, free shipping.
            </p>
            <Button variant="dark">
              Check them out<i class="bi bi-arrow-right"></i>
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="dashboard-ad2" interval={5000}>
          <img
            src={require("../imgs/personalize-ad.jpg")}
            className="d-block w-100"
            alt="Second slide"
          />
          <Carousel.Caption className="ad-text2">
            <h3 className="ad-text-heading">
              Personalize a gift every coffee enthusiast would love
            </h3>
            <p className="ad-text-content">Let the customization begin</p>
            <Button variant="dark">
              Say thanks<i class="bi bi-arrow-right"></i>
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="dashboard-ad3" interval={5000}>
          <img
            src={require("../imgs/discount-ad.jpg")}
            className="d-block w-100"
            alt="Third slide"
          />
          <Carousel.Caption className="ad-text3">
            <h3 className="ad-text-heading">
              Extra 15% off top Robot Vacuums, direct from the brand
            </h3>
            <p className="ad-text-content">
              Save even more for a limited time. Plus, free shipping.
            </p>
            <Button variant="dark">
              Get the coupon<i class="bi bi-arrow-right"></i>
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="dashboard-ad4" interval={5000}>
          <img
            src={require("../imgs/autoparts-ad.jpg")}
            className="d-block w-100"
            alt="Third slide"
          />
          <Carousel.Caption className="ad-text4">
            <h3 className="ad-text-heading">
              The right parts at the right prices
            </h3>
            <p className="ad-text-content">
              Everything you need for your vehicle.
            </p>
            <Button variant="dark">
              Lets ride!<i class="bi bi-arrow-right"></i>
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
