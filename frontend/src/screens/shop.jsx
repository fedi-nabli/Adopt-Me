import { Helmet } from "react-helmet"

const shop = () => {
  return (
    <>
  <Helmet>
  <title>Pet Shop</title>
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
  <link rel="stylesheet" type="text/css" href="style.css" />
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
  <div
    className="offcanvas offcanvas-end"
    data-bs-scroll="true"
    tabIndex={-1}
    id="offcanvasCart"
    aria-labelledby="My Cart"
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
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-circle pt-2">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Grey Hoodie</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Dog Food</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Soft Toy</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="fw-bold">Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>
        <button className="w-100 btn btn-primary btn-lg" type="submit">
          Continue to checkout
        </button>
      </div>
    </div>
  </div>
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
  <header>
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
  <section id="banner" style={{ background: "#F9F3EC" }}>
    <div className="container">
      <div className="swiper main-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide py-5">
            <div className="row banner-content align-items-center">
              <div className="img-wrapper col-md-5">
                <img
                  src="C:\Users\21655\Downloads\waGGy-1.0.0\waGGy-1.0.0\images\Default_shopping_cart_filled_with_owls_and_toys_beige_light_b_0-removebg-preview.png"
                  className="img-fluid"
                />
              </div>
              <div className="content-wrapper col-md-7 p-5 mb-5">
                <h2 className="banner-title display-1 fw-normal">
                  Best destination for{" "}
                  <span className="text-primary">your pets</span>
                </h2>
                <a
                  href="#"
                  className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                >
                  shop now
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="mb-1"
                  >
                    <use xlinkHref="#arrow-right" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide py-5">
            <div className="row banner-content align-items-center">
              <div className="img-wrapper col-md-5">
                <img src="images//banner-img3.png" className="img-fluid" />
              </div>
              <div className="content-wrapper col-md-7 p-5 mb-5">
                <h2 className="banner-title display-1 fw-normal">
                  Best destination for{" "}
                  <span className="text-primary">your pets</span>
                </h2>
                <a
                  href="#"
                  className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                >
                  shop now
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="mb-1"
                  >
                    <use xlinkHref="#arrow-right" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide py-5">
            <div className="row banner-content align-items-center">
              <div className="img-wrapper col-md-5">
                <img src="images/banner-img4.png" className="img-fluid" />
              </div>
              <div className="content-wrapper col-md-7 p-5 mb-5">
                <h2 className="banner-title display-1 fw-normal">
                  Best destination for{" "}
                  <span className="text-primary">your pets</span>
                </h2>
                <a
                  href="#"
                  className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                >
                  shop now
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="mb-1"
                  >
                    <use xlinkHref="#arrow-right" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination mb-5" />
      </div>
    </div>
  </section>
  <section id="clothing" className="my-5 overflow-hidden">
    <div className="container pb-5">
      <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
        <h2 className="display-3 fw-normal">Pet Shop</h2>
        <div>
          <a
            href="#"
            className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
          >
            shop now
            <svg width={24} height={24} viewBox="0 0 24 24" className="mb-1">
              <use xlinkHref="#arrow-right" />
            </svg>
          </a>
        </div>
      </div>
      <div className="products-carousel swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
              New
            </div>
            <div className="card position-relative">
              <a href="single-product.html">
                <img
                  src="images/item1.jpg"
                  className="img-fluid rounded-4"
                  alt="image"
                />
              </a>
              <div className="card-body p-0">
                <a href="single-product.html">
                  <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                </a>
                <div className="card-text">
                  <h3 className="secondary-font text-primary">$18.00</h3>
                  <div className="d-flex flex-wrap mt-3">
                    <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                      <h5 className="text-uppercase m-0">Add to Cart</h5>
                    </a>
                    <button className="btn-view px-4 pt-3">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">

        New

      </div> */}
            <div className="card position-relative">
              <a href="single-product.html">
                <img
                  src="images/item2.jpg"
                  className="img-fluid rounded-4"
                  alt="image"
                />
              </a>
              <div className="card-body p-0">
                <a href="single-product.html">
                  <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                </a>
                <div className="card-text">
                  <h3 className="secondary-font text-primary">$18.00</h3>
                  <div className="d-flex flex-wrap mt-3">
                    <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                      <h5 className="text-uppercase m-0">Add to Cart</h5>
                    </a>
                    <button className="btn-view px-4 pt-3">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card position-relative">
              <a href="single-product.html">
                <img
                  src="images/item3.jpg"
                  className="img-fluid rounded-4"
                  alt="image"
                />
              </a>
              <div className="card-body p-0">
                <a href="single-product.html">
                  <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                </a>
                <div className="card-text">
                  <h3 className="secondary-font text-primary">$18.00</h3>
                  <div className="d-flex flex-wrap mt-3">
                    <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                      <h5 className="text-uppercase m-0">Add to Cart</h5>
                    </a>
                    <button className="btn-view px-4 pt-3">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">

        New

      </div> */}
            <div className="card position-relative">
              <a href="single-product.html">
                <img
                  src="images/item4.jpg"
                  className="img-fluid rounded-4"
                  alt="image"
                />
              </a>
              <div className="card-body p-0">
                <a href="single-product.html">
                  <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                </a>
                <div className="card-text">
                  <h3 className="secondary-font text-primary">$18.00</h3>
                  <div className="d-flex flex-wrap mt-3">
                    <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                      <h5 className="text-uppercase m-0">Add to Cart</h5>
                    </a>
                    <button className="btn-view px-4 pt-3">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">

        New

      </div> */}
            <div className="card position-relative">
              <a href="single-product.html">
                <img
                  src="images/item7.jpg"
                  className="img-fluid rounded-4"
                  alt="image"
                />
              </a>
              <div className="card-body p-0">
                <a href="single-product.html">
                  <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                </a>
                <div className="card-text">
                  <h3 className="secondary-font text-primary">$18.00</h3>
                  <div className="d-flex flex-wrap mt-3">
                    <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                      <h5 className="text-uppercase m-0">Add to Cart</h5>
                    </a>
                    <button className="btn-view px-4 pt-3">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">

        New

      </div> */}
            <div className="card position-relative">
              <a href="single-product.html">
                <img
                  src="images/item8.jpg"
                  className="img-fluid rounded-4"
                  alt="image"
                />
              </a>
              <div className="card-body p-0">
                <a href="single-product.html">
                  <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                </a>
                <div className="card-text">
                  <h3 className="secondary-font text-primary">$18.00</h3>
                  <div className="d-flex flex-wrap mt-3">
                    <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                      <h5 className="text-uppercase m-0">Add to Cart</h5>
                    </a>
                    <button className="btn-view px-4 pt-3">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / products-carousel */}
    </div>
  </section>
  <section id="foodies" className="my-5">
    <div className="container my-5 py-5">
      <div className="section-header d-md-flex justify-content-between align-items-center">
        <div className="mb-4 mb-md-0"></div>
        <div>
          <a
            href="#"
            className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
          >
            shop now
            <svg width={24} height={24} viewBox="0 0 24 24" className="mb-1">
              <use xlinkHref="#arrow-right" />
            </svg>
          </a>
        </div>
      </div>
      <div className="isotope-container row">
        <div className="item cat col-md-4 col-lg-3 my-4">
          {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">

      New

    </div> */}
          <div className="card position-relative">
            <a href="single-product.html">
              <img
                src="images/item9.jpg"
                className="img-fluid rounded-4"
                alt="image"
              />
            </a>
            <div className="card-body p-0">
              <a href="single-product.html">
                <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
              </a>
              <div className="card-text">
                <h3 className="secondary-font text-primary">$18.00</h3>
                <div className="d-flex flex-wrap mt-3">
                  <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                  </a>
                  <button className="btn-view px-4 pt-3">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item dog col-md-4 col-lg-3 my-4">
          <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
            New
          </div>
          <div className="card position-relative">
            <a href="single-product.html">
              <img
                src="images/item10.jpg"
                className="img-fluid rounded-4"
                alt="image"
              />
            </a>
            <div className="card-body p-0">
              <a href="single-product.html">
                <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
              </a>
              <div className="card-text">
                <h3 className="secondary-font text-primary">$18.00</h3>
                <div className="d-flex flex-wrap mt-3">
                  <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                  </a>
                  <button className="btn-view px-4 pt-3">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item dog col-md-4 col-lg-3 my-4">
          {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">

      New

    </div> */}
          <div className="card position-relative">
            <a href="single-product.html">
              <img
                src="images/item11.jpg"
                className="img-fluid rounded-4"
                alt="image"
              />
            </a>
            <div className="card-body p-0">
              <a href="single-product.html">
                <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
              </a>
              <div className="card-text">
                <h3 className="secondary-font text-primary">$18.00</h3>
                <div className="d-flex flex-wrap mt-3">
                  <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                  </a>
                  <button className="btn-view px-4 pt-3">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item cat col-md-4 col-lg-3 my-4">
          <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
            Sold
          </div>
          <div className="card position-relative">
            <a href="single-product.html">
              <img
                src="images/item12.jpg"
                className="img-fluid rounded-4"
                alt="image"
              />
            </a>
            <div className="card-body p-0">
              <a href="single-product.html">
                <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
              </a>
              <div className="card-text">
                <h3 className="secondary-font text-primary">$18.00</h3>
                <div className="d-flex flex-wrap mt-3">
                  <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                  </a>
                  <button className="btn-view px-4 pt-3">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item bird col-md-4 col-lg-3 my-4">
          {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">

      New

    </div> */}
          <div className="card position-relative">
            <a href="single-product.html">
              <img
                src="images/item13.jpg"
                className="img-fluid rounded-4"
                alt="image"
              />
            </a>
            <div className="card-body p-0">
              <a href="single-product.html">
                <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
              </a>
              <div className="card-text">
                <h3 className="secondary-font text-primary">$18.00</h3>
                <div className="d-flex flex-wrap mt-3">
                  <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                  </a>
                  <button className="btn-view px-4 pt-3">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item bird col-md-4 col-lg-3 my-4">
          {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">

      New

    </div> */}
          <div className="card position-relative">
            <a href="single-product.html">
              <img
                src="images/item14.jpg"
                className="img-fluid rounded-4"
                alt="image"
              />
            </a>
            <div className="card-body p-0">
              <a href="single-product.html">
                <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
              </a>
              <div className="card-text">
                <h3 className="secondary-font text-primary">$18.00</h3>
                <div className="d-flex flex-wrap mt-3">
                  <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                  </a>
                  <button className="btn-view px-4 pt-3">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item dog col-md-4 col-lg-3 my-4">
          <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
            Sale
          </div>
          <div className="card position-relative">
            <a href="single-product.html">
              <img
                src="images/item15.jpg"
                className="img-fluid rounded-4"
                alt="image"
              />
            </a>
            <div className="card-body p-0">
              <a href="single-product.html">
                <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
              </a>
              <div className="card-text">
                <h3 className="secondary-font text-primary">$18.00</h3>
                <div className="d-flex flex-wrap mt-3">
                  <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                  </a>
                  <button className="btn-view px-4 pt-3">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item cat col-md-4 col-lg-3 my-4">
          {/* <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">

      New

    </div> */}
          <div className="card position-relative">
            <a href="single-product.html">
              <img
                src="images/item16.jpg"
                className="img-fluid rounded-4"
                alt="image"
              />
            </a>
            <div className="card-body p-0">
              <a href="single-product.html">
                <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
              </a>
              <div className="card-text">
                <h3 className="secondary-font text-primary">$18.00</h3>
                <div className="d-flex flex-wrap mt-3">
                  <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                    <h5 className="text-uppercase m-0">Add to Cart</h5>
                  </a>
                  <button className="btn-view px-4 pt-3">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="banner-2" className="my-3" style={{ background: "#F9F3EC" }}>
    <div className="container">
      <div className="row flex-row-reverse banner-content align-items-center">
        <div className="img-wrapper col-12 col-md-6">
          <img
            src="C:\Users\21655\Downloads\waGGy-1.0.0\waGGy-1.0.0\images\Default_hands_holding_an_adopted_cute_cat_beige_light_blue_0-removebg-preview.png"
            className="img-fluid"
          />
        </div>
        <div className="content-wrapper col-12 offset-md-1 col-md-5 p-5">
          <h2 className="banner-title display-1 fw-normal">I am CUTE !!!</h2>
          <a
            href="#"
            className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
          >
            shop now
            <svg width={24} height={24} viewBox="0 0 24 24" className="mb-1">
              <use xlinkHref="#arrow-right" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section id="testimonial">
    <div className="container my-5 py-5">
      <div className="row">
        <div className="offset-md-1 col-md-10">
          <div className="swiper testimonial-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row ">
                  <div className="col-2">
                    <iconify-icon
                      icon="ri:double-quotes-l"
                      className="quote-icon text-primary"
                    />
                  </div>
                  <div className="col-md-10 mt-md-5 p-5 pt-0 pt-md-5">
                    <p className="testimonial-content fs-2">
                      “Our perfect companions never have fewer than four feet.”
                    </p>
                    <p className="text-black">- Colette</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row ">
                  <div className="col-2">
                    <iconify-icon
                      icon="ri:double-quotes-l"
                      className="quote-icon text-primary"
                    />
                  </div>
                  <div className="col-md-10 mt-md-5 p-5 pt-0 pt-md-5">
                    <p className="testimonial-content fs-2">
                      {"The purity of a person's heart can be quickly measured by how they regard animals."}
                    </p>
                    <p className="text-black">- Theophile Gautier</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row ">
                  <div className="col-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default shop
