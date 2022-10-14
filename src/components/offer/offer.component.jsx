import './offer.style.scss';
const Offer = () => {
  return (
    <section className="offer">
      <h2 className="offer-title">
        serdecznie <br />
        <span> zapraszamy na</span>
      </h2>
      <div className="offer-design"></div>
      <div className="offer-wrap">
        <div className="offer-card">
          <span className="offer-card__title">sniadania</span>
          <span className="offer-card__subtitle">od 15 zl</span>
          <img src={require('../../asset/img/menu.jpg')} alt="menucard" />
          <p>
            pyszne sniadania ot 15zl
            <br />
            kawa herbata sok kakao <br />
            w cene 1zl <br />
            do kazdego zestawu
          </p>
        </div>

        <div className="offer-card">
          <span className="offer-card__title">lunch</span>
          <span className="offer-card__subtitle">zestaw 25 zl</span>
          <img src={require('../../asset/img/menu.jpg')} alt="menucard" />
          <p>
            pyszne luncze w 25zl zestaw
            <br />
            zupa 8zl
            <br />
            drugie danie 20zl
            <br />
            do kazdego zetawu kompot
          </p>
        </div>

        <div className="offer-card">
          <span className="offer-card__title">kolacja</span>
          <span className="offer-card__subtitle">dania z karty</span>
          <img src={require('../../asset/img/menu.jpg')} alt="menucard" />
          <p>
            Golonka, kaczka, schabowy <br />
            a moze salatka albo przystawka
            <br />
            w naszej restauracji
            <br />
            dopasujesz sobie co chcesz
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
