import { Editions } from './editions/editions';

const A = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { href } = props;
  if (href && href.startsWith('#')) {
    return <a {...props} href={href} onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      document.querySelector(href)?.scrollIntoView({
        behavior: 'smooth'
      });
    }} />
  }
  return <a {...props} href={href} />;
}

function App() {
  return (
    <>
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJ9GMN8" height="0" width="0"
      style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>

  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo">
        <a href="./" className="logo"><img src="assets/img/wt_logo.png" alt="" className="img-fluid" /></a>
        <a href="./" id="logo">Kursy Tatuażu</a>
      </h1>
      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li><A href="#about">Dlaczego my?</A></li>
          <li><A href="#services">Terminy</A></li>
          <li><A href="#application">Jak aplikować?</A></li>
          <li><A href="#agenda">Program</A></li>
          <li><A href="#portfolio">Lokalizacja</A></li>
          <li><A href="#contact">Kontakt</A></li>
        </ul>
      </nav>
    </div>
  </header>
  <section id="hero" className="counts">
    <div className="hero-container">
      <img src="assets/img/wt_logo.png" alt="" className="img-fluid" />
      <h1>Kursy tatuażu</h1>
      <a href="#about" className="btn-get-started scrollto">Zaczynamy</a>
    </div>
  </section>
  <main id="main">
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>Dlaczego my?</h2>
          <p>Jest kilka firm w Polsce organizujących Kursy Tatuażu. Natomiast tylko profesjonalne Studia Tatuażu są w
            stanie przekazać prawdziwą wiedzę praktyczną. Tylko my wiemy, czego oczekują klienci i jak tworzyć prawdziwą
            sztukę na skórze. Zajęcia odbywają przez dwa tygodnie od poniedziałku do piątku w max. 5-6 osobowych
            grupach.
          </p>
          <p>
            <strong>Kurs tatuażu w akademii Warszawa Tattoo, to najlepsza tego typu propozycja w Polsce. 80 godzin
              zegarowych kursu za 5000 zł, tatuowanie na modelach w cenie.</strong>
          </p>
          <br />
          <hr />
          <div className="row counters">
            <div className="col-md-4 col-lg-4 align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-calendar"></i></div>
                <p className="title">
                  <a><span data-toggle="counter-up">99</span> edycji kursu</a>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-user"></i></div>
                <p className="title">
                  <a><span data-toggle="counter-up">600</span> wykształconych tatuatorów</a>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon"><i className="bx bxs-photo-album"></i></div>
                <p className="title">
                  <a><span data-toggle="counter-up">5000</span> zdjęć dokumentujących</a>
                </p>
                <p className="description"><a href="https://www.facebook.com/KursTatuazuWarszawaTattoo/photos/">Zobacz</a>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <p>Zapraszamy na naszę stronę <a href="http://warszawatattoo.pl/">Studio Tatuażu Warszawa Tattoo</a> lub <a
              href="https://www.facebook.com/StudioWarszawaTattoo/" className="facebook">FB</a>.</p>
          <br />
          <div className="videoWrapper">
            <iframe width="728" height="410" src="https://www.youtube.com/embed/UW2UTD84w9o" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Terminy</h2>
        </div>
        <div className="row" id="editions">
          <Editions />
        </div>
      </div>
    </section>
    <section id="application" className="about">
      <div className="container">

        <div className="section-title">
          <h2>Jak aplikować?</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              <strong>Aby dostać się na kurs należy:</strong>
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i>Wysłać portfolio na adres: <a
                  href="mailto:akademia@warszawatattoo.pl">akademia@warszawatattoo.pl</a> – kilka prac
                (ołówek, grafika), gdzie można zobaczyć światłocienie i gradienty. Nie przyjmujemy na kursy osób, które
                nie umieją rysować.
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                Wypełnić otrzymaną “Kartę Zgłoszeniową” i zeskanowaną odesłać.
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                Wpłacić zadatek 2000zł na podane konto. Tylko wpłata zadatku gwarantuje miejsce na kursie.
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                10 dni roboczych przed kursem dopłacić różnicę.
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                Zgłosić się w dniu rozpoczęcia kursu o godz. 9.00 z dobrym humorem i otwartą głową!
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 faq">

            <p><strong>Przydatne:</strong></p>

            <ul className="faq-list">
              <li>
                <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq1">Dla kogo jest Kurs Tatuażu? <i
                    className="icofont-simple-up"></i></a>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Jeżeli masz talent, dobrze rysujesz, skończyłeś Liceum Plastyczne, ASP lub po prostu jesteś zdolnym
                    samoukiem, pomożemy zdobyć Ci zawód.
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq2">Dlaczego nie możesz uczestniczyć w
                  kursie tatuażu?<i className="icofont-simple-up"></i></a>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Jeżeli stawiasz pierwsze kroki w rysunku lub malarstwie Kurs nie jest dla Ciebie. Popracuj jeszcze,
                    poucz się rysunku i jak będziesz już czuł, że umiesz więcej, skontaktuj się z nami. Kurs jest dla
                    osób które ukończyły 18 lat!
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq3" id="price-expand">Jaki jest koszt
                  kursu? <i className="icofont-simple-up"></i></a>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Nasz Kurs to jedyna taka propozycja w Polsce. 5000 zł za 80 godzin Kursu.
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq4">Czy jest możliwe refinansowanie?
                  <i className="icofont-simple-up"></i></a>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Posiadamy oficjalny status firmy szkoleniowej pod nr 2.14/00014/2017. Zgłoś się do Twojego doradcy
                    zawodowego w Powiatowym Urzędzie Pracy, a dowiesz się w jakiej kwocie możesz otrzymać
                    dofinansowanie.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
    <section id="agenda" className="agenda">
      <div className="container">
        <div className="section-title">
          <h2>Program</h2>
        </div>

        <div className="list-group">
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1"><strong>Dzień 1 (8h)</strong></p>
            </div>
            <p className="mb-1">Rysunek: projektowanie tatuaży różnymi technikami – wykładowca ASP</p>
          </a>
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1"><strong>Dzień 2 (8h)</strong></p>
            </div>
            <p className="mb-1">Rysunek: projektowanie tatuaży różnymi technikami – wykładowca ASP</p>
          </a>
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1"><strong>Dzień 3 (8h)</strong></p>
            </div>
            <p className="mb-1">Wykład: maszynki i farby: użycie farb, maszynek, igieł, zabezpieczenie stanowiska pracy,
              przenoszenie wzorów, skalowanie. Tatuowanie (sztuczna skóra) – proste wzory: napisy, piórka itp –
              wykładowca tatuator z wieloletnim doświadczeniem</p>
          </a>
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1"><strong>Dzień 4 (8h)</strong></p>
            </div>
            <p className="mb-1">Tatuowanie (sztuczna skóra) – realistyka – wykładowca tatuator z wieloletnim doświadczeniem
            </p>
          </a>
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1"><strong>Dzień 5 (8h)</strong></p>
            </div>
            <p className="mb-1">Tatuowanie (sztuczna skóra) – kolory, water colour – wykładowca tatuator z wieloletnim
              doświadczeniem</p>
          </a>
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1"><strong>Dzień 6 (8h)</strong></p>
            </div>
            <p className="mb-1">Tatuowanie (sztuczna skóra) – dotwork, kolorowy dotwork, geometria – wykładowca tatuator z
              wieloletnim doświadczeniem</p>
          </a>
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1"><strong>Dzień 7 (8h)</strong></p>
            </div>
            <p className="mb-1">Tatuowanie (sztuczna skóra) – tatuaż marzeń – wykładowca tatuator z wieloletnim
              doświadczeniem</p>
            <p>Spotkanie z dystrybutorem sprzętu Arstattoo.</p>
          </a>
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1"><strong>Dzień 8 (8h)</strong></p>
            </div>
            <p className="mb-1">Wykład: higiena, dezynfekcja, sterylizacja, bhp w studiu tatuażu, zagadnienia prawne,
              budowanie własnej marki jako artysty, kultura obsługi klienta – wykładowca właściciel Studia Tatuażu
              Warszawa Tattoo</p>
          </a>
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1"><strong>Dzień 9 (8h)</strong></p>
            </div>
            <p className="mb-1">Tatuowanie: tatuaż czarny na prawdziwych modelach – opiekun: tatuator z wieloletnim
              doświadczeniem</p>
          </a>
          <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1"><strong>Dzień 10 (8h)</strong></p>
            </div>
            <p className="mb-1">Tatuowanie: tatuaż czarny na prawdziwych modelach – opiekun: tatuator z wieloletnim
              doświadczeniem</p>
          </a>
        </div>
        <br />
        <div className="col-md-12 col-lg-12 align-items-stretch mb-5 mb-lg-0" style={{ textAlign: 'center'}}>
          <span className="custom-important">Zapewniamy wszystkie materiały i narzędzia oraz dobrą kawę !!!</span>
        </div>
      </div>
    </section>
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Lokalizacja</h2>
          <p>Wszystkie kursy będą odbywać się w Studiu Tatuażu Warszawa Tattoo ul. Długa 16 (Starówka) w Warszawie</p>
        </div>

        <div>
          <iframe style={{ border: '0', width: '100%', height: '270px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19541.183432110065!2d20.989691398716314!3d52.24977825805084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd2449a71031%3A0x6ea04e6e2ab28191!2sStudio%20Tatua%C5%BCu%20Warszawa%20Tattoo!5e0!3m2!1spl!2spl!4v1609607786554!5m2!1spl!2spl"
            frameBorder="0" allowFullScreen></iframe>
        </div>
        <br />
        <hr />
        <br />
        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/zdjecie_1.jpg" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/zdjecie_2.jpg" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/portfolio/zdjecie_3.jpg" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/portfolio/zdjecie_4.jpg" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/portfolio/zdjecie_5.jpg" className="img-fluid" alt="" />
          </div>
        </div>

      </div>
    </section>
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Kontakt</h2>
        </div>

        <div className="row mt-5">

          <div className="col-lg-12">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Lokalizacja:</h4>
                <p>Długa 16 (Starówka)</p>
                <p>00-238 Warszawa</p>
              </div>


              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p><a href="mailto:akademia@warszawatattoo.pl">akademia@warszawatattoo.pl</a></p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Telefon:</h4>
                <p>22 893 33 33</p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  </main>
  <footer id="footer">
    <div className="container d-md-flex py-4">

      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          © Copyright <strong><span>Warszawa Tattoo</span></strong>
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          <br /><a>FA</a>
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="https://www.facebook.com/KursTatuazuWarszawaTattoo" className="facebook"><i
            className="bx bxl-facebook"></i></a>
      </div>
    </div>
  </footer><a href="#" className="back-to-top"><i className="ri-arrow-up-line"></i></a>
    </>
  )
}

export default App
