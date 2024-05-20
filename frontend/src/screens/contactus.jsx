// import React from 'react';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Waggy - Free eCommerce Pet Shop HTML Website Template</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Chilanka&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Helmet>
      <style>{`
        .contact-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin: 40px 0;
          position: relative;
        }

        .contact-form {
          flex: 1;
          max-width: 60%;
          background: #fff;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          margin-left: 20px;
          position: relative;
          z-index: 1;
        }

        .contact-form h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        .contact-form input[type="text"],
        .contact-form textarea,
        .contact-form input[type="radio"],
        .contact-form input[type="submit"] {
          margin: 10px 0;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          width: 100%;
        }

        .contact-form label {
          display: block;
          margin: 10px 0 5px;
        }

        .contact-form textarea {
          height: 100px;
        }

        .image-container {
          position: absolute;
          bottom: 0;
          right: 0;
          margin-right: 20px;
        }

        .image-container img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }
      `}</style>
      <div className="container mt-4 mb-5">
        <div className="contact-section">
          <div className="contact-form">
            <h1>Contact us!</h1>
            <form>
              <label htmlFor="firstname">First name:</label>
              <input type="text" name="firstname" id="firstname" /><br />

              <label htmlFor="lastname">Last name:</label>
              <input type="text" name="lastname" id="lastname" /><br />

              <label htmlFor="email">Email address:</label>
              <input type="text" name="email" id="email" /><br />

              <label htmlFor="number">Phone number:</label>
              <input type="text" name="number" id="number" /><br />

              <label>Did you post on our site precedently?</label>
              <input type="radio" name="answer" id="answer_yes" /> Yes
              <input type="radio" name="answer" id="answer_no" /> No<br />

              <label htmlFor="type">How may we help you?</label>
              <textarea name="type" id="type">Give us details...</textarea><br />

              <input type="submit" id="submit" value="Submit" />
            </form>
          </div>
          <div className="image-container">
            <img src="images/image-removebg-preview(1).png" alt="Pet" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;