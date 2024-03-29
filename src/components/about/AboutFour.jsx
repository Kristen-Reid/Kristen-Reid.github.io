import React from "react";
import PDF from '../../PDF/Kristen Reid Resume 2022.pdf'

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
                  <h3>Creative Independent Full Stack Software Engineer based in Detroit</h3>
                </div>
                <div className="text">
                  <p>
                    Full Stack Software Engineer with experience in building full stack web applications using languages,
                    frameworks, and libraries including React, Python, JavaScript, Flask, Express, PostgreSQL.
                    I've been one throughout the years to wear many hats (customer service, hospitality and other job titles). While having many job titles and working in different environments
                    I have acquired many valuable skills including 20+ years of customer service, being a part of different teams learning how to work in group environments well,
                    and being able to adapt quickly to any environment I was placed in.
                    I left that path to pursue a career in an industry I have loved and admired for many years.
                    After attending App Academy for 1000+ hours of course work (not including studying and working on projects) for 24 weeks in their online/remote program where I learned many
                    languages and frameworks such as Python, JavaScript, React, Express, and Postgresql. 2 of those projects I worked on with a team of Software Engineers
                    where we collaborated in building applications together, and learned how to effectively work as a team remotely to successfully build dynamic smooth functioning web applications.
                  </p>
                </div>
                <div className="shane_tm_button">
                  <a href={PDF} >
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
