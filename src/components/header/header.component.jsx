import './header.styles.scss';

const Header = () => {
  return (
    <div>
      <div className="icon-menu__container">
        <span className="icon-menu"></span>
      </div>
      <header className="head">
        <img className="logo" src={require('../../asset/img/logo.png')} alt="logo" />
        <nav className="navig">
          <ul className="navig-main">
            <li>
              <a href="blank">menu</a>
            </li>
            <li>
              <a href="blank">oferta</a>
            </li>
            <li>
              <a href="blank">dla grup</a>
            </li>
            <li>
              <a href="blank">dostawa</a>
            </li>
            <li>
              <a href="blank">kontakt</a>
            </li>
          </ul>
          <div>
            <span className="navi-separator"></span>
          </div>
          <ul className="soc-wrapper">
            <li>facebook</li>
            <li>instagram</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
