import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partnerList = ["python", "javascript", "react", "redux" ,"flask", "express", "nodejs", "postgresql", "sqlalchemy3", "sequelize", "aws", "html5", "css3", "heroku", "git"];

export default function BrandAnimation() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        {partnerList.map((val, i) => (
          <li className="item" key={i}>
            <img src={`img/partners/${val}.png`} alt="partners brand" />
          </li>
        ))}
        {/* End single parter image */}
      </Slider>
    </ul>
  );
}
