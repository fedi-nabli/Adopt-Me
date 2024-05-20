import Helmet from 'react-helmet'

const Register = () => {
  return (
    <>
    <Helmet>
  <title>Signin</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="stylesheet" href="css/style_register.css" />
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    rel="stylesheet"
  />
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
  </Helmet>
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
    <div className="container"> </div>
  </header>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center"></div>
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-10">
          <div className="wrap d-md-flex">
            <div
              className="img"
              style={{
                backgroundImage:
                  'url("images/Default_hands_holding_an_adopted_cute_dog_beige_light_blue_0-removebg-preview.png")'
              }}
            ></div>
            <div className="login-wrap p-4 p-md-5">
              <div className="d-flex">
                <div className="w-100">
                  <h3 className="mb-4"> Sign in</h3>
                </div>
                <div className="w-100">
                  <p className="social-media d-flex justify-content-end">
                    <a
                      href="#"
                      className="social-icon d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook" />
                    </a>
                    <a
                      href="#"
                      className="social-icon d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter" />
                    </a>
                  </p>
                </div>
              </div>
              <form action="#" className="signin-form">
                <div className="form-group mb-3">
                  <label className="label" htmlFor="profile-image">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="profile-image"
                    accept="image/*"
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    required=""
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="confirm-password">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirm-password"
                    placeholder="Confirm Password"
                    required=""
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="birthday">
                    Birthday
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthday"
                    required=""
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="phone-number">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone-number"
                    placeholder="Phone number"
                    required=""
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Address"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary rounded submit px-3"
                  >
                    Signin
                  </button>
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-50 text-left">
                    <label className="checkbox-wrap checkbox-primary mb-0">
                      Remember Me
                      <input type="checkbox" defaultChecked="" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </form>
              <p className="text-center">
                Already have an account?{" "}
                <a data-toggle="tab" href="#signup">
                  Login
                </a>
              </p>
            </div>
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
</>

  )
}

export default Register
