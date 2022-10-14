import { Fragment } from 'react';
import './naming.style.scss';

const Naming = () => {
  return (
    <Fragment>
      <div className="front-wrapper">
        <h1 className="front-text">
          reustaracja <br />
          <span className="text-second"> polskich smakow</span>
        </h1>
      </div>

      <div className="photo-wraper">
        <div className="design-dekstop"></div>
        <div className="design-mobile"></div>
        <div className="card-wraper">
          <span className="card-text">schab</span>
          <img src={require('../../asset/img/1schab.png')} alt="" className="photo-food" />
        </div>

        <div className="card-wraper">
          <span className="card-text">pierogi</span>
          <img src={require('../../asset/img/2peirogi.png')} alt="" className="photo-food" />
        </div>

        <div className="card-wraper">
          <span className="card-text">placki</span>
          <img src={require('../../asset/img/3placki.png')} alt="" className="photo-food" />
        </div>

        <div className="card-wraper">
          <span className="card-text">tarta</span>
          <img src={require('../../asset/img/4tarta.png')} alt="" className="photo-food" />
        </div>
      </div>
    </Fragment>
  );
};

export default Naming;
