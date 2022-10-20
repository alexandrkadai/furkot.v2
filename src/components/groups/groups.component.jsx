import './groups.style.scss';

const Groups = () => {
  return (
    <section id="event">
      <div id="event-wrap">
        <div className="event-card" id="event-card-1"></div>

        <div className="event-card" id="event-card-2">
          <div id="red-line-event">
            <h2>
              planujesz <b className="event__letter">impreze</b>
            </h2>
          </div>
          <p>
            <b className="event__letter">Wesele</b>, wigilia, krzestiny, urodziny w kazdej impreze
            dla spotkanie wielkich grup mozemy ustalic specjalne meni. o szczeguly mozesz zapytac
            pod telefon <br />
            22 483 345 678
          </p>
        </div>
      </div>
    </section>
  );
};

export default Groups;
