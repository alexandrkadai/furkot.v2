import { Fragment } from 'react';
import './offer-card.styles.scss';

const OfferCard = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default OfferCard;
