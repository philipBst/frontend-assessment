//images
import wood from "../../images/IMG.png";
import house from "../../images/C0283T01.png";

const Main = () => {
  return (
    <main>
      <section className="section__more">
        <div className="overlay"></div>
        <div className="container">
          <div className="more">
            <h1>Duurzame materialen</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              facilis laborum beatae. Voluptatem ipsum illo explicabo, omnis eum
              impedit tempora iusto. Iste, saepe? Suscipit dolores qui, nobis
              sunt commodi neque accusamus sed odio? Dignissimos quos ea
              accusamus aspernatur nostrum temporibus minus nemo! Quos, soluta
              nisi labore ipsa odio, suscipit saepe asperiores reiciendis,
              exercitationem rem aliquid. Neque repudiandae eligendi iste
              quaerat.
            </p>
            <a href="#less-meer">Less meer</a>
          </div>
          <img src={wood} alt="img-wood" />
        </div>
      </section>
      <section className="inn">
        <div className="container baseline">
          <div className="innovate">
            <h1>Innovatie</h1>
            <p className="inn">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              odio pariatur vitae distinctio, praesentium cum excepturi atque!
              Repellendus quam facilis quibusdam eius animi quia. Est,
              dignissimos sit impedit officia repellat hic, ipsam facere
              eligendi delectus ut saepe eum ipsum! Blanditiis!
            </p>
          </div>
          <p className="inn">
            Natus, quas? Unde magni quaerat ad sunt incidunt sed id sequi culpa
            voluptatibus ab modi ea necessitatibus minima, sint, dignissimos
            fugiat in quis neque. Perferendis omnis ab, id laboriosam quis
            tempore a modi esse maxime sit, quisquam inventore facilis doloribus
            blanditiis! Animi!
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <img src={house} alt="" />
          <div className="more__info">
            <div className="info">
              <h1>Hout</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem ad eos nisi.
              </p>
            </div>
            <div className="info">
              <h1>Afwerking</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                aliquam ipsum maiores?
              </p>
            </div>
            <div className="info">
              <h1>Stalen onderstel</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                necessitatibus error adipisci?
              </p>
            </div>
          </div>
          <div className="more__info">
            <div className="info">
              <h1>Glaswol isolatie</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
                repellat.
              </p>
            </div>
            <div className="info">
              <h1>Triple glas</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda, quaerat.
              </p>
            </div>
            <div className="info">
              <h1>Infrarood vloer</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                eveniet?
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
