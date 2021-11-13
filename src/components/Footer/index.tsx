const Footer = () => {
  return (
    <footer>
      <div style={{ color: "#81898f" }}>info@eco-cabins.com</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <h1>EcoCabins</h1>
      </div>
      <div style={{ color: "#81898f" }}>
        <ul>
          <li>Cookies</li>
          <li>Privacybeleid</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
