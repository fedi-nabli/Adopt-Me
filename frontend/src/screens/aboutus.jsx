// import React from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Waggy - Free eCommerce Pet Shop HTML Website Template</title>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="css/vendor.css" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Chilanka&family=Montserrat:wght@300;400;500&display=swap"
          rel="stylesheet" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <style>{`
          body {
            background-image: url(images/Sans\\ titre.jpg);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          .content-container {
            background: rgba(172, 157, 157, 0.8);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
          }
          .about-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin: 20px 0;
          }
          .about-text {
            margin: 20px 0;
            font-size: 30px;
          }
          .team-section {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            margin: 20px 0;
          }
          .team-member {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .team-member img {
            border-radius: 50%;
            width: 80px;
            height: 80px;
            margin-bottom: 10px;
          }
          .spacer {
            margin: 20px 0;
          }
        `}</style>
      </Helmet>

      <div className="about-section">
        <div className="about-text">
          <h1>About us!</h1>
        </div>
        <div className="about-text">
          <p>Welcome to our pet shop!<br /> We are dedicated to providing the best products <br />and services for your beloved pets.
            Our mission is to make sure <br />your pets are happy and healthy.</p>
        </div>
      </div>

      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </div>
  );
};

export default AboutUs;