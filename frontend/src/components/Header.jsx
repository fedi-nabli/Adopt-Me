

const Header = () => {
  return (
    <div>
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
    </div>
  )
}

export default Header
