import './menu-card.style.scss';

const MenuCard = () => {
  return (
    <div className="menucard-container">
      <span className="menucard-title">Przystawki</span>
      <ul className="menucard-list">
        <li className="menucard-list__item">
          <span className="dish-name"></span>
          <span className="dish-price"></span>
          <p className="dish-about"></p>
        </li>
      </ul>
    </div>
  );
};

export default MenuCard;
