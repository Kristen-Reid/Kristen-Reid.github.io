import React from "react";

const Footer = () => {
  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_copyright">
          <div className="container">
            <div className="inner">
              <p>
                &copy; {new Date().getFullYear()} {" "}
                <a
                  href="https://themeforest.net/user/ib-themes"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kristen Reid
                </a>

              </p>
            </div>
            {/* End inner */}
          </div>
        </div>
        {/* End shane_tm_copyright */}
      </div>
    </>
  );
};

export default Footer;
