import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import About from "../../components/about/AboutFour";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skills";
import Video from "../../components/video/Video";
import Brand from "../../components/Brand";
import Testimonial from "../../components/testimonial/Testimonial";
import News from "../../components/news/News";
import CallToAction from "../../components/calltoactions/CallToAction";
import Footer from "../../components/footer/Footer";

const HomeOne = () => {
  return (
    <div className="home-one">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <div className="shane_tm_section">
        <div className="shane_tm_partners">
          <div className="container">
            <div className="partners_inner">
              <Brand />
            </div>
          </div>
        </div>
      </div>

      <Portfolio />
      {/* End Portfolio Section */}

      {/* <Skills /> */}
      {/* End Skills Section */}

      {/* <Video /> */}
      {/* End Video Section */}

      {/* End shane_tm_partners */}

      {/* <div className="shane_tm_section">
        <div className="shane_tm_testimonials">
          <div className="container">
            <div className="testimonials_inner">
              <div className="left">
              </div>
                <div className="shane_tm_title">
                  <span>Socials</span>
                  <h3>Let's connect!!</h3>
                  <div className="social_connect_container">
                    <div className="social_connect">
                      <a href="https://www.linkedin.com/in/kristen-reid-a4b499202/">
                        <img src="/img/svg/social/linkedIn.svg"/>
                      </a>
                    </div>
                    <div className="social_connect">
                      <a href="https://github.com/Kristen-Reid">
                        <img src="/img/svg/social/github.svg"/>
                      </a>
                    </div>
                    <div className="social_connect">
                      <a href="mailto:kristen.reid.swe@gmail.com">
                        <img src="/img/svg/email.svg" width="50" height="50" />
                      </a>
                    </div>
                  </div>
                </div>

              {/* <div className="right">
                <Testimonial />
              </div> */}
            {/* </div>
          </div>
        </div> */}
      {/* </div> */}
      {/* End  shane_tm_testimonials*/}

      {/* <News /> */}
      {/* End Blog Section */}

      {/* <CallToAction /> */}
      {/* End CallToAction */}

      <Footer />
      {/* End Footer Section */}
    </div>
  );
};

export default HomeOne;
