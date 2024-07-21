import React, { useState, useEffect, useCallback } from 'react';

import './carrier.css';

import login_reg_add from './source/images/login/reg-add.svg';
import login_reg_point from './source/images/login/reg-point.svg';
import login_reg_back from './source/images/login/reg-back.svg';
import login_reg_broken from './source/images/login/reg-broker.svg';
import login_reg_camera from './source/images/login/reg-camera.svg';
import login_reg_carrier from './source/images/login/reg-carrier.svg';
import login_reg_carrierAvia from './source/images/login/reg-carrierAvia.svg';
import login_reg_carrierCar from './source/images/login/reg-carrierCar.svg';
import login_reg_cornora from './source/images/login/reg-cornora.svg';
import login_reg_imageWHO from './source/images/login/reg-imageWHO.svg';
import login_reg_owner from './source/images/login/reg-owner.svg';
import login_reg_plus from './source/images/login/reg-plus.svg';
import login_reg_track from './source/images/login/reg-track.png';
import login_reg_upload from './source/images/login/reg-upload.svg';


const Carrier = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formAction, setFormAction] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleOptionChange = useCallback((event) => {
    const value = event.target.value;
    setSelectedOption(value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    switch (selectedOption) {
      case 'car':
        setFormAction('carrier-infoCar.html');
        break;
      case 'aviacompany':
        setFormAction('carrier-aviacompany.html');
        break;
      default:
        setFormAction('');
        break;
    }
    setIsFormValid(!!selectedOption);
  }, [selectedOption]);

  return (
    <div>
      <header className="header">
        <div className="header__top"></div>
        <div className="header__back">
          <a href="carrier.html" className="header__back-button">
            <img src={login_reg_back} className="header__back-button-img" alt="Back" />
            <div className="header__back-button-text">Назад</div>
          </a>
        </div>
        <div className="header__container">
          <div className="header__container-title">Регистрация перевозчика</div>
        </div>
      </header>
      <main className="main">
        <form action={formAction} onSubmit={handleSubmit} className="main__form">
          <div className="main__holder">
            <input
              type="radio"
              name="type"
              id="option1"
              value="car"
              required
              onChange={handleOptionChange}
            />
            <label htmlFor="option1" className="main__form-item">
              <img src={login_reg_carrierCar} className="main__form-item-img" alt="car" />
              <div className="main__form-item-title">Автомобиль</div>
            </label>

            <input
              type="radio"
              name="type"
              id="option2"
              value="aviacompany"
              required
              onChange={handleOptionChange}
            />
            <label htmlFor="option2" className="main__form-item">
              <img src={login_reg_carrierAvia} className="main__form-item-img" alt="aviacompany" />
              <div className="main__form-item-title">Авиакомпания</div>
            </label>
          </div>
          <button
            type="submit"
            className="main__form-submit"
            disabled={!isFormValid}
            style={{ opacity: isFormValid ? 1 : 0.5 }}
          >
            Далее
          </button>
        </form>
      </main>
    </div>
  );
};

export default Carrier;
