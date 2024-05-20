import Helmet from 'react-helmet'

const Login = () => {
  return (
    <>
    <Helmet>
  <title>Login</title>
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
                  <h3 className="mb-4"> Login</h3>
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
                  <label className="label" htmlFor="name">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
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
                    placeholder="Password"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary rounded submit px-3"
                  >
                    Login
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
                i have an account{" "}
                <a data-toggle="tab" href="#signup">
                  Sign Up
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

export default Login
