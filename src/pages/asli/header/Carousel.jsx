import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="carouselIndiBtn active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            className="carouselIndiBtn"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={"./assets/image/slider/mark2.jpeg"}
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={"./assets/image/slider/sa.jpg"}
              className="d-block w-100 "
              alt="..."
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <i
            className="fa-sharp fas fa-chevron-left fa-2xl red"
            aria-hidden="true"
          ></i>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <i
            className="fa-sharp fas fa-chevron-right fa-2xl red"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
