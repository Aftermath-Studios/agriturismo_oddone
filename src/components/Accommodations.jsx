/* eslint-disable @next/next/no-img-element */
export default function Accommodations() {
  return (
    <section className="accom section" id="stay">
      <div className="container">
        <div className="accom-head reveal">
          <div>
            <span className="eyebrow">Gli alloggi</span>
            <h2 className="section-title">Le nostre <em>unità</em>.</h2>
          </div>
          <div>
            <p className="lede accom-lede">
              Sette unità tra il borgo nuovo e quello antico. Tutte con cucina indipendente,
              biancheria fornita, parcheggio privato e wifi veloce.
            </p>
            <a href="#" className="text-link accom-link">Richiedi disponibilità <span className="arrow">→</span></a>
          </div>
        </div>

        <div className="accom-grid">
          <a href="#" className="accom-row">
            <span className="num">N° 01</span>
            <div className="title with-thumb">
              <div className="accom-collage">
                <img src="/images/faggeta_4.jpeg" alt="La Faggeta — camera con parete in pietra" />
                <img src="/images/faggeta_2.jpeg" alt="La Faggeta — cucina e zona giorno" />
                <img src="/images/faggeta_1.jpeg" alt="La Faggeta — doccia emozionale con cromoterapia" />
                <img src="/images/faggeta_3.jpeg" alt="La Faggeta — bagno moderno" />
              </div>
              <div>
                <h3>La <em>Faggeta</em></h3>
                <small>Premium · 4 ospiti</small>
              </div>
            </div>
            <div className="meta"><strong>2 camere · 1 bagno</strong>Cucina, pietra a vista, doccia emozionale</div>
            <div className="meta"><span className="accom-status"><span className="dot"></span> Disponibile</span></div>
            <div className="price"><strong>€ 140</strong><small>a notte · da</small></div>
            <span className="chev">→</span>
          </a>

          <a href="#" className="accom-row">
            <span className="num">N° 02</span>
            <div className="title with-thumb">
              <div className="accom-collage three">
                <img src="/images/castagno_2.jpeg" alt="Il Castagno — soggiorno con divano e cucina rustica" />
                <img src="/images/castagno_3.jpeg" alt="Il Castagno — camera soppalcata con travi a vista" />
                <img src="/images/castagno_1.jpeg" alt="Il Castagno — angolo cottura con camino" />
              </div>
              <div>
                <h3>Il <em>Castagno</em></h3>
                <small>Premium · 4 ospiti</small>
              </div>
            </div>
            <div className="meta"><strong>2 camere · 1 bagno</strong>Cucina, balcone, letto king-size</div>
            <div className="meta"><span className="accom-status few"><span className="dot"></span> Ultime date</span></div>
            <div className="price"><strong>€ 140</strong><small>a notte · da</small></div>
            <span className="chev">→</span>
          </a>

          <a href="#" className="accom-row">
            <span className="num">N° 03</span>
            <div className="title">
              <h3>Il <em>Tiglio</em></h3>
              <small>Premium · 6 ospiti</small>
            </div>
            <div className="meta"><strong>3 camere · 2 bagni</strong>Cucina grande, soppalco, cromoterapia</div>
            <div className="meta"><span className="accom-status"><span className="dot"></span> Disponibile</span></div>
            <div className="price"><strong>€ 190</strong><small>a notte · da</small></div>
            <span className="chev">→</span>
          </a>

          <a href="#" className="accom-row">
            <span className="num">N° 04</span>
            <div className="title">
              <h3>La <em>Quercia</em></h3>
              <small>Premium · 2 ospiti</small>
            </div>
            <div className="meta"><strong>1 camera · 1 bagno</strong>Mansarda, lucernari, doccia emozionale</div>
            <div className="meta"><span className="accom-status"><span className="dot"></span> Disponibile</span></div>
            <div className="price"><strong>€ 110</strong><small>a notte · da</small></div>
            <span className="chev">→</span>
          </a>

          <a href="#" className="accom-row">
            <span className="num">N° 05</span>
            <div className="title">
              <h3>La <em>Vecchia Stalla</em></h3>
              <small>Classico · 5 ospiti</small>
            </div>
            <div className="meta"><strong>2 camere · 1 bagno</strong>Camino a legna, travi originali</div>
            <div className="meta"><span className="accom-status few"><span className="dot"></span> Ultime date</span></div>
            <div className="price"><strong>€ 160</strong><small>a notte · da</small></div>
            <span className="chev">→</span>
          </a>

          <a href="#" className="accom-row">
            <span className="num">N° 06</span>
            <div className="title">
              <h3>Il <em>Forno</em></h3>
              <small>Classico · 2 ospiti</small>
            </div>
            <div className="meta"><strong>1 camera · 1 bagno</strong>Camino a legna, antico forno del villaggio</div>
            <div className="meta"><span className="accom-status"><span className="dot"></span> Disponibile</span></div>
            <div className="price"><strong>€ 130</strong><small>a notte · da</small></div>
            <span className="chev">→</span>
          </a>

          <div className="accom-row disabled">
            <span className="num">N° 07</span>
            <div className="title">
              <h3>La <em>Cascina del Nonno</em></h3>
              <small>In restauro · riapre estate 2027</small>
            </div>
            <div className="meta"><strong>8 ospiti · 4 camere</strong>Cascina intera, esclusiva</div>
            <div className="meta"><span className="accom-status closed"><span className="dot"></span> In restauro</span></div>
            <div className="price"><strong>—</strong><small>Lista d&apos;attesa</small></div>
            <span className="chev faded">⋯</span>
          </div>
        </div>
      </div>
    </section>
  );
}
