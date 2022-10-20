import './footer.style.scss';

const Footer = () => {
  return (
    <footer>
      <div id="footer-wrap">
        <div id="map">
          <iframe
            className="iframe"
            title="map"
            id="real-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.286754760788!2d20.989348215338598!3d52.23817496482973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd44c7b4aa25%3A0x3391b7a333a03ace!2sCafe%20Furkot!5e0!3m2!1sru!2spl!4v1608044992037!5m2!1sru!2spl"
            frameBorder={0}
            allowFullScreen={''}
            aria-hidden={false}
            tabIndex={0}></iframe>
        </div>
        <div id="contacts">
          <span id="contacs-addres">chlodna 2/18, Warszawa</span>
          <div id="contacs-design">
            <br />
            <span id="contacs-number">
              <a href="tel:22 45 123 345">22 45 123 345</a>
            </span>{' '}
            <br />
            <span id="contacs-number">
              <a href="tel:22 45 123 345">22 45 123 345</a>
            </span>
          </div>
          <div id="contacs-hours-wrap">
            <span className="contacs-hours">pn-pt : 9-22</span>
            <span className="contacs-hours">sb-nd : 10-22</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
