import './delivery-section.style.scss';

const DeliverySection = () => {
  return (
    <section id="delivery">
      <div id="delivery-wrap">
        <div className="delivery-card" id="delivery-card-1">
          <div id="red-line-delivery">
            <h2>
              zyczesz <b className="event__letter">dostawe</b>
            </h2>
          </div>
          <p>
            <b className="event__letter">Dostawa</b> mozliwa w nie wielkiej odleglosci od lokalu
            <br />
            pracujemy nad spolpraca z firmami: uber eats bolt oraz pyszne.pl
            <br />
          </p>
        </div>

        <div className="delivery-card" id="delivery-card-2"></div>
      </div>
    </section>
  );
};

export default DeliverySection;
