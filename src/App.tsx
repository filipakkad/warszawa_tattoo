import { useState } from 'react';

import "./App.css";
import { TwoWeeksEditions, WeekCourseEditions, WeekendCourseEditions } from "./editions/editions";


const A = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { href, onClick } = props;
  if (href && href.startsWith('#')) {
    return <a {...props} href={href} onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      if(onClick) onClick(e);
      document.querySelector(href)?.scrollIntoView({
        behavior: 'smooth'
      });

    }} />
  }
  return <a {...props} onClick={onClick} href={href} />;
}

const HamburgerButton = ({ onClick }: { onClick: () => void}) => {
  return <button onClick={onClick} data-collapse-toggle="navbar-hamburger" type="button" className="flex md:hidden items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
}

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const closeMenu = () => {
    setIsMenuVisible(false);
  }

  return (
    <div>
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJ9GMN8" height="0" width="0"
      style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <script src="assets/vendor/jquery/jquery.min.js"></script>


  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo flex gap-2 items-center">
        <a href="./" className="logo"><img src="assets/img/wt_logo.png" alt="" className="img-fluid" /></a>
        <a href="./" id="logo">Kursy Tatuażu</a>
      </h1>
      <nav className="nav-menu d-lg-block justify-end md:justify-normal">
        <HamburgerButton onClick={() => setIsMenuVisible(true)} />
        <ul className="hidden md:flex">
          <li><A href="#about">Dlaczego my?</A></li>
          <li><A href="#services">Terminy</A></li>
          <li><A href="#application">Jak aplikować?</A></li>
          <li><A href="#weeklyCourse">Programy</A></li>
          <li><A href="#portfolio">Lokalizacja</A></li>
          <li><A href="#contact">Kontakt</A></li>
        </ul>
        {isMenuVisible &&
          <div className='nav-menu fixed top-0 left-0 w-full h-screen bg-black p-3 z-20'>
            <div className='flex justify-end w-full'>
              <HamburgerButton onClick={closeMenu} />
            </div>
            <ul className={`flex md:hidden flex-col text-white`}>
              <li><A onClick={closeMenu} href="#about">Dlaczego my?</A></li>
              <li><A onClick={closeMenu} href="#services">Terminy</A></li>
              <li><A onClick={closeMenu} href="#application">Jak aplikować?</A></li>
              <li><A onClick={closeMenu} href="#agenda">Program</A></li>
              <li><A onClick={closeMenu} href="#portfolio">Lokalizacja</A></li>
              <li><A onClick={closeMenu} href="#contact">Kontakt</A></li>
            </ul>
          </div>
          }
      </nav>
    </div>
  </header>
  <section id="hero" className="counts">
    <div className="hero-container">
      <img src="assets/img/wt_logo.png" alt="" className="img-fluid" />
      <h1>Kursy tatuażu</h1>
      <A href="#about" className="btn-get-started scrollto">Zaczynamy</A>
      <div className="pt-10 flex flex-col gap-2 items-list-main">
        <A className="flex justify-between md:gap-10 items-center md:flex-row flex-col gap-2" href="#weeklyCourse">
          <span className="max-w-[200px] font-bold text-nowrap text-center md:!text-left">Kurs tygodniowy (40H)</span>
          <span className="text-nowrap">3000 zł</span>
        </A>
        <A className="flex justify-between md:gap-10 items-center md:flex-row flex-col gap-2" href="#weekendCourse">
          <span className="max-w-[200px] font-bold text-nowrap text-center md:!text-left">Kurs weekendowy (48H)</span>
          <span className="text-nowrap">4000 zł</span>
        </A>
        <A className="flex justify-between md:gap-10 items-center md:flex-row flex-col gap-2" href="#twoWeeksCourse">
          <span className="max-w-[200px] font-bold text-nowrap text-center md:!text-left">Kurs dwutygodniowy (80H)</span>
          <span className="text-nowrap">6000 zł</span>
        </A>
        <a className="flex justify-between md:gap-10 items-center md:flex-row flex-col gap-2" href="https://www.bhptatuazu.pl">
          <span className="max-w-[200px] font-bold text-nowrap text-center md:!text-left">Kurs BHP Tatuażu (on-line)  ↗</span>
          <span className="text-nowrap">299 zł</span>
        </a>
        <A className="flex justify-between md:gap-10 items-center md:flex-row flex-col gap-2" href="#bhpCourse">
          <span className="max-w-[250px] font-bold text-center md:!text-left">Kurs BHP wraz z inspekcją studia u
          klienta (40H)</span>
          <span className="text-nowrap">2500 zł</span>
        </A>
      </div>
    </div>
  </section>
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>Dlaczego my?</h2>
              <p>Jest kilka firm w Polsce organizujących Kursy Tatuażu. Natomiast tylko profesjonalne Studia Tatuażu są
                w
                stanie przekazać prawdziwą wiedzę praktyczną. Tylko my wiemy, czego oczekują klienci i jak tworzyć
                prawdziwą
                sztukę na skórze. Zajęcia odbywają się w max. 5-6 osobowych
                grupach.
              </p>
              <p>
                <strong>Kurs tatuażu w akademii Warszawa Tattoo, to najlepsza tego typu propozycja w Polsce.</strong>
              </p>
              <p>
                <strong>Tatuowanie na modelach w cenie kursu.</strong>
              </p>
              <br/>
              <hr/>
              <div className="row counters pt-4">
                <div className="col-md-4 col-lg-4 align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box">
                    <div className="icon"><i className="bx bx-calendar"></i></div>
                    <p className="title">
                      <a><span data-toggle="counter-up">100</span> edycji kursu</a>
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
                    <p className="description"><a
                      href="https://www.facebook.com/KursTatuazuWarszawaTattoo/photos/">Zobacz</a>
                    </p>
                  </div>
                </div>
              </div>
              <hr/>
              <p>Zapraszamy na naszę stronę <a href="http://warszawatattoo.pl/">Studio Tatuażu Warszawa
                Tattoo</a> lub <a
                href="https://www.facebook.com/StudioWarszawaTattoo/" className="facebook">FB</a>.</p>
              <br/>
              <div className="videoWrapper">
                <iframe width="728" height="410" src="https://www.youtube.com/embed/UW2UTD84w9o" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>
        {/*<section id="services" className="services">*/}
        {/*  <div className="container">*/}

        {/*    <div className="section-title">*/}
        {/*      <h2>Terminy</h2>*/}
        {/*    </div>*/}
        {/*    <div className="row" id="editions">*/}
        {/*      <Editions />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
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
                    (ołówek, grafika), gdzie można zobaczyć światłocienie i gradienty. Nie przyjmujemy na kursy osób,
                    które
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
                  <li>
                    <i className="ri-check-double-line"></i>
                    Ze względu na zalecenia WHO, na kurs przychodzimy z obciętymi paznokciami ☺ !
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 faq">

                <p><strong>Przydatne:</strong></p>

                <ul className="faq-list">
                  <li>
                    <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq1">Dla kogo jest Kurs
                      Tatuażu? <i
                        className="icofont-simple-up"></i></a>
                    <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Jeżeli masz talent, dobrze rysujesz, skończyłeś Liceum Plastyczne, ASP lub po prostu jesteś
                        zdolnym
                        samoukiem, pomożemy zdobyć Ci zawód.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq2">Dlaczego nie możesz
                      uczestniczyć w
                      kursie tatuażu?<i className="icofont-simple-up"></i></a>
                    <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Jeżeli stawiasz pierwsze kroki w rysunku lub malarstwie Kurs nie jest dla Ciebie. Popracuj
                        jeszcze,
                        poucz się rysunku i jak będziesz już czuł, że umiesz więcej, skontaktuj się z nami. Kurs jest
                        dla
                        osób które ukończyły 18 lat!
                      </p>
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq3" id="price-expand">Jaki
                      jest koszt
                      kursu? <i className="icofont-simple-up"></i></a>
                    <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Nasze kursy to jedyna taka oferta w Polsce. 40, 48 bądź 80 godz. za 3, 4 bądź 6 tyś. zł.
                        Tatuowanie na modelach w cenie.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq4">Czy jest możliwe
                      refinansowanie?
                      <i className="icofont-simple-up"></i></a>
                    <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Posiadamy oficjalny status firmy szkoleniowej pod nr 2.14/00027/2024. Zgłoś się do Twojego
                        doradcy
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
        <section id="weeklyCourse" className="about">
          <div className="container">

            <div className="section-title">
              <h2>Kurs tygodniowy (40H) - 3000 zł</h2>
            </div>
            <div id="services" className="services">
              <div className="row" id="editions">
                <h3>Terminy</h3>
                <WeekCourseEditions/>
                <div className="w-full p-4 flex justify-center">
                  <a href="mailto:akademia@warszawatattoo.pl" className="font-bold underline">Aplikuj:
                    akademia@warszawatattoo.pl</a>
                </div>
              </div>
            </div>
            <div className="list-group">
              <h3>Program</h3>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 1 (8h)</strong></p>
                </div>
                <p className="mb-1">Wykład: maszynki i farby: użycie farb, maszynek, igieł, zabezpieczenie
                  stanowiska pracy,
                  przenoszenie wzorów, skalowanie. Tatuowanie (sztuczna skóra) – proste wzory: napisy, piórka itp –
                  wykładowca tatuator z wieloletnim doświadczeniem</p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 2 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie (sztuczna skóra) – realistyka – wykładowca tatuator z wieloletnim
                  doświadczeniem
                </p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 3 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie (sztuczna skóra) – dotwork, kolorowy dotwork, geometria – wykładowca
                  tatuator z
                  wieloletnim doświadczeniem</p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 4 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie (sztuczna skóra) – tatuaż marzeń – wykładowca tatuator z wieloletnim
                  doświadczeniem</p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 5 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie: tatuaż czarny na prawdziwych modelach – opiekun: tatuator z
                  wieloletnim
                  doświadczeniem</p>
              </a>
            </div>
          </div>
        </section>
        <section id="weekendCourse" className="about">
          <div className="container">

            <div className="section-title">
              <h2>Kurs weekendowy (48H) - 4000 zł</h2>
            </div>
            <div id="services" className="services">
              <div className="row" id="editions">
                <h3>Terminy</h3>
                <WeekendCourseEditions/>
                <div className="w-full p-4 flex justify-center">
                  <a href="mailto:akademia@warszawatattoo.pl" className="font-bold underline">Aplikuj:
                    akademia@warszawatattoo.pl</a>
                </div>
              </div>
            </div>
            <div className="list-group">
              <h3>Program</h3>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 1 (8h)</strong></p>
                </div>
                <p className="mb-1">Wykład: maszynki i farby: użycie farb, maszynek, igieł, zabezpieczenie
                  stanowiska pracy,
                  przenoszenie wzorów, skalowanie. Tatuowanie (sztuczna skóra) – proste wzory: napisy, piórka itp –
                  wykładowca tatuator z wieloletnim doświadczeniem</p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 2 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie (sztuczna skóra) – realistyka – wykładowca tatuator z wieloletnim
                  doświadczeniem
                </p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 3 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie (sztuczna skóra) – kolory, water colour – wykładowca tatuator z
                  wieloletnim
                  doświadczeniem</p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 4 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie (sztuczna skóra) – dotwork, kolorowy dotwork, geometria – wykładowca
                  tatuator z
                  wieloletnim doświadczeniem</p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 5 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie (sztuczna skóra) – tatuaż marzeń – wykładowca tatuator z wieloletnim
                  doświadczeniem</p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 6 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie: tatuaż czarny na prawdziwych modelach – opiekun: tatuator z
                  wieloletnim
                  doświadczeniem</p>
              </a>
            </div>
          </div>
        </section>
        <section id="twoWeeksCourse" className="about">
          <div className="container">

            <div className="section-title">
              <h2>Kurs dwutygodniowy (80H) - 6000 zł</h2>
            </div>
            <div id="services" className="services">
              <div className="row" id="editions">
                <h3>Terminy</h3>
                <TwoWeeksEditions/>
                <div className="w-full p-4 flex justify-center">
                  <a href="mailto:akademia@warszawatattoo.pl" className="font-bold underline">Aplikuj:
                    akademia@warszawatattoo.pl</a>
                </div>
              </div>
            </div>
            <div className="list-group">
              <h3>Program</h3>
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
                <p className="mb-1">Wykład: maszynki i farby: użycie farb, maszynek, igieł, zabezpieczenie
                  stanowiska pracy,
                  przenoszenie wzorów, skalowanie. Tatuowanie (sztuczna skóra) – proste wzory: napisy, piórka itp –
                  wykładowca tatuator z wieloletnim doświadczeniem</p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 4 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie (sztuczna skóra) – realistyka – wykładowca tatuator z wieloletnim
                  doświadczeniem
                </p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 5 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie (sztuczna skóra) – kolory, water colour – wykładowca tatuator z
                  wieloletnim
                  doświadczeniem</p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 6 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie (sztuczna skóra) – dotwork, kolorowy dotwork, geometria – wykładowca
                  tatuator z
                  wieloletnim doświadczeniem</p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 7 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie (sztuczna skóra) – tatuaż marzeń – wykładowca tatuator z wieloletnim
                  doświadczeniem</p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 8 (8h)</strong></p>
                </div>
                <p className="mb-1">Wykład: higiena, dezynfekcja, sterylizacja, bhp w studiu tatuażu, zagadnienia
                  prawne,
                  budowanie własnej marki jako artysty, kultura obsługi klienta – wykładowca właściciel Studia
                  Tatuażu
                  Warszawa Tattoo</p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 9 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie: tatuaż czarny na prawdziwych modelach – opiekun: tatuator z
                  wieloletnim
                  doświadczeniem</p>
              </a>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1"><strong>Dzień 10 (8h)</strong></p>
                </div>
                <p className="mb-1">Tatuowanie: tatuaż czarny na prawdziwych modelach – opiekun: tatuator z
                  wieloletnim
                  doświadczeniem</p>
              </a>
            </div>
          </div>
        </section>
        <section id="bhpCourse" className="about">
          <div className="container">

            <div className="section-title">
              <h2>Kurs BHP</h2>
            </div>
            <div className="flex gap-4 md:flex-row flex-col">
              <div
                className="border rounded p-4 w-full flex flex-col items-center gap-3 hover:bg-gray-200/20 justify-between">
                <div className="flex flex-col justify-between items-center">
                  <div
                    className="text-[13px] tracking-[1px] font-bold px-3 py-1 m-0 text-green-800 bg-green-200 rounded-[50px] w-fit h-min text-nowrap">299
                    zł
                  </div>
                  <h3>Kurs BHP Tatuażu (on-line)</h3>
                </div>
                <p className="font-light">
                  Higiena, dezynfekcja, sterylizacja, przepisy, Sanepid, BDP, niebezpieczne odpady medyczne, ubrania
                  robocze, procedury
                </p>
                <a className="font-bold w-full" href="https://www.bhptatuazu.pl">Przejdź na www.bhptatuazu.pl ↗</a>
              </div>
              <div
                className="border rounded p-4 w-full flex flex-col items-center gap-3 hover:bg-gray-200/20 justify-between">
                <div className="flex flex-col justify-between items-center">
                  <div
                    className="text-[13px] tracking-[1px] font-bold px-3 py-1 m-0 text-green-800 bg-green-200 rounded-[50px] w-fit h-min text-nowrap">2500
                    zł
                  </div>
                  <h3>Kurs BHP Tatuażu wraz z inspekcją studia u klienta</h3>
                </div>
                <p className="font-light">
                  Szkolenie dla wszystkich pracowników studia (maks. 5 osób) wraz z inspekcją pomieszczeń studia pod
                  kątem kontroli Sanepidu. Dojazd do klienta, koszt wg ilości km.
                </p>
                <div className="flex flex-col w-full">
                  <strong>Zadzwoń: 22 893 33 33</strong>
                  <strong>Napisz: <a href="mailto:bhp@warszawatattoo.pl">bhp@warszawatattoo.pl</a></strong>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Lokalizacja</h2>
              <p>Wszystkie kursy będą odbywać się w Studiu Tatuażu Warszawa Tattoo ul. Długa 16 (Starówka) w
                    Warszawie</p>
                </div>

                <div>
                  <iframe style={{ border: '0', width: '100%', height: '270px' }}
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19541.183432110065!2d20.989691398716314!3d52.24977825805084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd2449a71031%3A0x6ea04e6e2ab28191!2sStudio%20Tatua%C5%BCu%20Warszawa%20Tattoo!5e0!3m2!1spl!2spl!4v1609607786554!5m2!1spl!2spl"
                          frameBorder="0" allowFullScreen></iframe>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="row portfolio-container">

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src="assets/img/portfolio/zdjecie_1.webp" className="img-fluid" alt=""/>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="assets/img/portfolio/zdjecie_2.webp" className="img-fluid" alt=""/>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src="assets/img/portfolio/zdjecie_3.webp" className="img-fluid" alt=""/>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src="assets/img/portfolio/zdjecie_4.webp" className="img-fluid" alt=""/>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="assets/img/portfolio/zdjecie_5.webp" className="img-fluid" alt=""/>
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
                    <div className="info flex justify-evenly md:items-center md:flex-row flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <i className="icofont-google-map"></i>
                        <div className="flex flex-col">
                          <h4>Lokalizacja:</h4>
                          <p>Długa 16 (Starówka)</p>
                          <p>00-238 Warszawa</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <i className="icofont-envelope"></i>
                        <div className="flex flex-col">
                          <h4>Email:</h4>
                          <p><a href="mailto:akademia@warszawatattoo.pl">akademia@warszawatattoo.pl</a></p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <i className="icofont-phone"></i>
                        <div className="flex flex-col">
                          <h4>Telefon:</h4>
                          <p>22 893 33 33</p>
                        </div>
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
              <br/><a>FA</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://www.facebook.com/KursTatuazuWarszawaTattoo" className="facebook"><i
              className="bx bxl-facebook"></i></a>
          </div>
        </div>
      </footer>
      <A href="#hero" className="back-to-top"><i className="ri-arrow-up-line"></i></A>
    </div>
  )
}

export default App
