import React from "react";
import "./style.scss";
import mobileImg from "../../assets/images/illustration-phones.svg"
import illustrationImgDesktop from "../../assets/images/illustration-laptop-desktop.svg"
import illustrationImgMobile from "../../assets/images/illustration-laptop-mobile.svg"

export const Infrastructure = () => {
  return (
    <>
      <section className="infrastructure-wrapper">
        <div className="infrastructure-wrapper__content">
          <img src={mobileImg} alt="mobile image" />
          <div className="infrastructure-wrapper__content__text">
            <h1>State of the Art Infrastructure</h1>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </section>
      <section className="tooling-wrapper">
        <div className="tooling-wrapper__content">
          
          <div className="tooling-wrapper__content__text" >
            <div>
            <h1>Free, open, simple</h1>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration, third-party
              commenting tools, and works seamlessly with Google Analytics. The
              architecture is clean and is relatively easy to learn.
            </p>
            </div>
            <div>
            <h1>Powerful tooling</h1>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
            </div>
          </div>
          <picture>
            <source srcSet={illustrationImgDesktop} type="image/webp" alt="mobile image" media='( min-width: 768px)' />
            <img src={illustrationImgMobile} alt="mobile image" />
          </picture>
        </div>
      </section>
    </>
  );
};
