import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import weather_forecast from "../../assets/weather-forecast.png";
import age_calculator from "../../assets/age-calculator.png";
import food from "../../assets/food.jpeg";
import t_comm from "../../assets/tshirt.jpeg";
import tic_tac from "../../assets/tic-tac.jpeg";
import movie_app from "../../assets/movie.jpeg";
import "swiper/css";
import "./style.css";
import Card from "./cards";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  let projects = [
    {
      title: "Weather Forecast",
      content:
        "Providing precise and reliable weather forecasts based on your location to help you prepare for any condition, anytime.",
      link: "https://pshiraskar23.github.io/weather_forecast.github.io/",
      img: weather_forecast,
    },
    {
      title: "Age Calculator",
      content:
        "Calculate your age in years, months and days with our precise age calculator. Simply enter your birth date to discover detailed insights about your age.",
      link: "https://pshiraskar23.github.io/age_calculator.github.io/",
      img: age_calculator,
    },
    {
      title: "Delicious Feast ",
      content:
        "Experience delicious meals and great service at our restaurant. Enjoy a variety of dishes made with fresh ingredients in a warm and welcoming atmosphere.",
      link: "",
      img: food,
    },
    {
      title: "T Commerece",
      content:
        "Explore seamless shopping with our T-commerce platform, offering a wide range of products at your fingertips. Enjoy a convenient, secure, and user-friendly experience for all your online shopping needs.",
      link: "",
      img: t_comm,
    },
    {
      title: "Tic Tac Toe",
      content:
        "Enjoy classic Tic Tac Toe with our fun and interactive game. Play against the computer or a friend, and challenge your strategic skills in this timeless game.",
      link: "",
      img: tic_tac,
    },
    {
      title: "Movie App",
      content:
        "Discover and stream your favorite movies with our user-friendly movie app. Enjoy a vast library of films, personalized recommendations, and seamless viewing on any device.",
      link: "",
      img: movie_app,
    },
  ];
  return (
    <div>
      <Swiper
        className="carousal"
        // className="mySwiper"
        spaceBetween={60}
        // slidesPerView={2}
        // navigation={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}

        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project) => {
          return (
            <SwiperSlide key={project.title}>
              <Card
                title={project.title}
                content={project.content}
                link={project.link}
                img={project.img}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
