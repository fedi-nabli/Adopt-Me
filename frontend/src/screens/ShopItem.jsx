import Helmet from 'react-helmet'

const ShopItem = () => {
  return (
      <>
      <Helmet>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Item</title>
  {/* Favicon*/}
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
  {/* Bootstrap icons*/}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  {/* Core theme CSS (includes Bootstrap)*/}
  <link
    href="C:\Users\21655\Downloads\waGGy-1.0.0\waGGy-1.0.0\stylesb.css"
    rel="stylesheet"
  />
  <title>Adopt me</title>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="author" content="" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" type="text/css" href="css/vendor.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Chilanka&family=Montserrat:wght@300;400;500&display=swap"
    rel="stylesheet"
  />
  </Helmet>
  <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
    <defs>
      <symbol xmlns="http://www.w3.org/2000/svg" id="link" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 19a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm-5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1ZM7 15a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Z"
        />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="arrow-right"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76Z"
        />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="category"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 5.5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Z"
        />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="calendar"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="plus" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="minus" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="cart" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9l-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5Z"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="check" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="trash" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Zm-3-1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
        />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="star-outline"
        viewBox="0 0 15 15"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 9.804L5.337 11l.413-2.533L4 6.674l2.418-.37L7.5 4l1.082 2.304l2.418.37l-1.75 1.793L9.663 11L7.5 9.804Z"
        />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="star-solid"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z"
        />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="search"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="user" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"
        />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="close" viewBox="0 0 15 15">
        <path
          fill="currentColor"
          d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z"
        />
      </symbol>
    </defs>
  </svg>
  <div className="preloader-wrapper">
    <div className="preloader"></div>
  </div>
  <header>
    <nav className="main-menu d-flex navbar navbar-expand-lg ">
      <div className="d-flex d-lg-none align-items-end mt-3">
        <ul className="d-flex justify-content-end list-unstyled m-0">
          <li>
            <a href="account.html" className="mx-3">
              <iconify-icon icon="healthicons:person" className="fs-4" />
            </a>
          </li>
          <li>
            <button className="btn-view px-4 pt-3">View</button>
          </li>
          <li>
            <a
              href="#"
              className="mx-3"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
            >
              <iconify-icon
                icon="mdi:cart"
                className="fs-4 position-relative"
              />
              <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                03
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mx-3"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasSearch"
              aria-controls="offcanvasSearch"
            >
              <iconify-icon icon="tabler:search" className="fs-4" />
            </a>
          </li>
        </ul>
        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          tabIndex={-1}
          id="offcanvasSearch"
          aria-labelledby="Search"
        >
          <div className="offcanvas-header justify-content-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div className="order-md-last">
              <h4 className="text-primary text-uppercase mb-3">Search</h4>
              <div className="search-bar border rounded-2 border-dark-subtle">
                <form
                  id="search-form"
                  className="text-center d-flex align-items-center"
                  action=""
                  method=""
                >
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    placeholder="Search Here"
                  />
                  <iconify-icon icon="tabler:search" className="fs-4 me-3" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header justify-content-center">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
      </div>
    </nav>
    <div className="container py-2">
      <div className="row py-4 pb-0 pb-sm-4 align-items-center ">
        <div className="col-sm-4 col-lg-3 text-center text-sm-start">
          <div className="main-logo">
            <a href="index.html">
              <img
                src="C:\Users\21655\Downloads\waGGy-1.0.0\waGGy-1.0.0\images\Design_sans_titre__1_-removebg-preview.png"
                alt="logo"
                className="img-fluid small-logo"
              />
            </a>
          </div>
        </div>
        <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
          <div className="search-bar border rounded-2 px-3 border-dark-subtle">
            <form
              id="search-form"
              className="text-center d-flex align-items-center"
              action=""
              method=""
            >
              <input
                type="text"
                className="form-control border-0 bg-transparent"
                placeholder="Search for products"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                />
              </svg>
            </form>
          </div>
        </div>
        <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
          <div className="support-box text-end d-none d-xl-block">
            <span className="fs-6 secondary-font text-muted">Phone</span>
            <h5 className="mb-0">+216 156 545 545 </h5>
          </div>
          <div className="support-box text-end d-none d-xl-block">
            <span className="fs-6 secondary-font text-muted">Email</span>
            <h5 className="mb-0">Adopt-me@gmail.com</h5>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <hr className="m-0" />
    </div>
    <div className="container"></div>
  </header>
  <section className="py-5">
    <div className="container px-4 px-lg-5 my-5">
      <div className="row gx-4 gx-lg-5 align-items-center">
        <div className="col-md-6">
          <img
            className="card-img-top mb-5 mb-md-0"
            src="C:\Users\21655\Downloads\waGGy-1.0.0\waGGy-1.0.0\images\61kFnC+Uo9L-removebg-preview.png"
            alt="..."
          />
        </div>
        <div className="col-md-6">
          <div className="small mb-1">SKU: BST-498</div>
          <h1 className="display-5 fw-bolder">Whiskas Cat Food</h1>
          <div className="fs-5 mb-5">
            <span>$15.00</span>
          </div>
          <p className="lead">
            Here's a short promotional text for selling cat food: "Discover the
            purr-fect meal for your feline friend! Our premium cat food is
            specially crafted to provide the essential nutrients your cat needs
            for a healthy and happy life. Choose from a variety of delicious
            flavors and textures, made with high-quality ingredients. Give your
            cat the nutrition they deserve with our range of cat foods, because
            a healthy cat is a happy cat!"
          </p>
          <div className="d-flex">
            <input
              className="form-control text-center me-3"
              id="inputQuantity"
              type="num"
              defaultValue={1}
              style={{ maxWidth: "3rem" }}
            />
            <button
              className="btn btn-outline-dark flex-shrink-0"
              type="button"
            >
              <i className="bi-cart-fill me-1" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer id="footer" className="my-5">
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-3">
          <div className="footer-menu">
            <img
              src="C:\Users\21655\Downloads\waGGy-1.0.0\waGGy-1.0.0\images\Design_sans_titre__1_-removebg-preview.png"
              alt="logo"
              className="img-fluid small-logo-footer"
            />
            <p className="blog-paragraph fs-6 mt-3">
              Subscribe to our newsletter to get updates about our grand offers.
            </p>
            <div className="social-links">
              <ul className="d-flex list-unstyled gap-2">
                <li className="social">
                  <a href="#">
                    <iconify-icon
                      className="social-icon"
                      icon="ri:facebook-fill"
                    />
                  </a>
                </li>
                <li className="social">
                  <a href="#">
                    <iconify-icon
                      className="social-icon"
                      icon="ri:twitter-fill"
                    />
                  </a>
                </li>
                <li className="social">
                  <a href="#">
                    <iconify-icon
                      className="social-icon"
                      icon="ri:pinterest-fill"
                    />
                  </a>
                </li>
                <li className="social">
                  <a href="#">
                    <iconify-icon
                      className="social-icon"
                      icon="ri:instagram-fill"
                    />
                  </a>
                </li>
                <li className="social">
                  <a href="#">
                    <iconify-icon
                      className="social-icon"
                      icon="ri:youtube-fill"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer-menu">
            <h3>Quick Links</h3>
            <ul className="menu-list list-unstyled">
              <li className="menu-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">
                  About us
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">
                  Contact_us{" "}
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">
                  Shop
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">
                  Spinner
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer-menu">
            <h3>Help Center</h3>
            <ul className="menu-list list-unstyled">
              <li className="menu-item">
                <a href="#" className="nav-link">
                  FAQs
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">
                  Payment
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">
                  Purchase history
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            <h3>Our Newsletter</h3>
            <p className="blog-paragraph fs-6">
              Subscribe to our newsletter to get updates about our grand offers.
            </p>
            <div className="search-bar border rounded-pill border-dark-subtle px-2">
              <form
                className="text-center d-flex align-items-center"
                action=""
                method=""
              >
                <input
                  type="text"
                  className="form-control border-0 bg-transparent"
                  placeholder="Enter your email here"
                />
                <iconify-icon
                  className="send-icon"
                  icon="tabler:location-filled"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
</>
  )
}

export default ShopItem
