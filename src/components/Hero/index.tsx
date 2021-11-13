const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="container">
        <aside className="info">
          <h1>Duurzame tiny huisjes</h1>
          <p>
            Een ecologisch tiny huisje is zoveel mogelijk opgebowd uit duurzame
            natuurlijke materialen
          </p>
        </aside>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 172 172"
            style={{ fill: "#000000" }}
          >
            <g transform="">
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <path d="" fill="none"></path>
                <g fill="#ffffff">
                  <path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,37.9948 30.8052,68.8 68.8,68.8c37.9948,0 68.8,-30.8052 68.8,-68.8c0,-37.9948 -30.8052,-68.8 -68.8,-68.8zM116.4096,88.3048l-43.6192,25.1808c-2.19587,1.26707 -3.9904,0.22933 -3.9904,-2.3048v-50.36733c0,-2.53413 1.79453,-3.57187 3.9904,-2.3048l43.6192,25.1808c2.19587,1.2728 2.19587,3.34827 0,4.61533z"></path>
                </g>
              </g>
            </g>
          </svg>
          <span>Bekijk de film</span>
        </div>
        <div></div>
      </div>
      <aside className="social">
        <h3>Instagram</h3>
        <h3>Facebook</h3>
        <h3>Linkedin</h3>
      </aside>
    </section>
  );
};

export default Hero;
