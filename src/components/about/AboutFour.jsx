import React from "react";

const AboutFour = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div className="image">
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "/img/about/20210802_104155.jpg"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div className="shane_tm_title">
                  <span>About Me</span>
                  <h3>Creative Independent Full-Stack Software Engineer based in Detroit</h3>
                </div>
                <div className="text">
                  <p>
                    Full Stack Software Engineer with experience in building full stack web applications using languages,
                    frameworks, and libraries including React, Python, JavaScript, Flask, Express, PostgreSQL.
                    I've been one throughout the years to wear many hats. While having many job titles and working in different environments
                    I have acquired many valuable skills including 20+ years of customer service, being a part of different teams learning how to work in group environments well,
                    and being able to adapt quickly to any environment I was placed in.
                    I left the path to wearing many hats to pursue a career in an industry I have loved and admired for many years.
                  </p>
                </div>
                <div className="shane_tm_button">
                  <a href="img/resume/resume.jpg" download>
                    Download CV
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default AboutFour;
