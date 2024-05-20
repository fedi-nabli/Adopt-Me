// import React from 'react';
import { Helmet } from 'react-helmet';

const postpage = () => {
  const previewSelectedImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        document.getElementById('previewImage').src = e.target.result;
      };
    }
  };

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
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" type="text/css" href="css/vendor.css" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link rel="stylesheet" type="text/css" href="socialmedia.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Chilanka&family=Montserrat:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
     
      <style>{`
        .post-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin: 40px 0;
        }
        .post-content {
          flex: 1;
          background: #fff;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        .post-form {
          display: flex;
          flex-direction: column;
        }
        .post-form input[type="text"],
        .post-form textarea,
        .post-form input[type="file"],
        .post-form input[type="submit"] {
          margin: 10
margin: 10px 0;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .post-form label {
          margin: 10px 0 5px;
        }
        .image-container {
          flex: 0 0 45%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image-container img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }
      `}</style> </Helmet>
      <div className="container mt-4 mb-5">
        <div className="post-section">
          <div className="post-content">
            <h1>Publish your post!</h1>
            <form className="post-form">
              <label htmlFor="image">Image:</label>
              <input type="file" id="imageInput" onChange={previewSelectedImage} />
              <br />
              <img id="previewImage" alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
              <label htmlFor="type">Type of pet:</label>
              <input type="text" name="type" id="type" />
              <br />
              <label htmlFor="description">Description:</label>
              <textarea name="description" id="description">
                Describe your pet here...
              </textarea>
              <br />
              <input type="submit" id="submit" value="Submit" />
            </form>
          </div>
          <div className="image-container">
            <img src="https://www.pngall.com/wp-content/uploads/10/Pet-Transparent.png" alt="Dog and Cat" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default postpage;