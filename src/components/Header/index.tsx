const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <a href="/" className="home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </a>
          <a href="/">
            <h1>EcoCabins</h1>
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/model">Modellen</a>
            </li>
            <li>
              <a href="/purchase">Kopen</a>
            </li>
            <li>
              <a href="/hire">Huren</a>
            </li>
            <li>
              <a href="/news">Nieuws</a>
            </li>
            <li>
              <a href="#c" className="contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a href="#m" className="ham-menu">
          <img
            src="https://img.icons8.com/ios/50/000000/menu-squared-2--v1.png"
            alt="menu"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
