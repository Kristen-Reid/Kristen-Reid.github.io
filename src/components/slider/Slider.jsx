import React from "react";

const Slider = () => {
  return (
    <>
      <div className="shane_tm_hero" id="home" data-style="one">
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/img/about/20221025_211642.jpg"
              })`,
            }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>Kristen</span> Reid<span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                Full-Stack Software Engineer
                <span className="overlay_effect"></span>
              </span>
              <div className="social_connect_container">
                <div className="social_connect">
                      <a href="https://www.linkedin.com/in/kristen-reid-a4b499202/">
                        <img src="/img/svg/social/linkedIn.svg" width="30" height="30"/>
                      </a>
                    </div>
                    <div className="social_connect">
                      <a href="https://github.com/Kristen-Reid">
                        <img src="/img/svg/social/github.svg" width="30" height="30"/>
                      </a>
                    </div>
                    <div className="social_connect">
                      <a href="https://angel.co/u/kristen-reid-5">
                    <img src="/img/svg/social/angellist 2.svg" width="30" height="30" />
                      </a>
                    </div>
                    <div className="social_connect">
                      <a href="mailto:kristen.reid.swe@gmail.com">
                    <img src="/img/svg/email.svg" width="30" height="30" />
                    {/* :&nbsp; kristen.reid.swe@gmail.com */}
                      </a>
                    </div>
                  </div>
            </div>
            {/* End designation */}

          </div>
          {/* End content */}

          <div className="shane_tm_down loaded">
            <div className="line_wrapper">
              <div className="line"></div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>
    </>
  );
};

export default Slider;
