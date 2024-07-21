import React, { useState, useEffect, useCallback } from 'react';

import './aviacompany.css';

import login_reg_add from './source/images/login/reg-add.svg';
import login_reg_arrow from './source/images/login/reg-arrow.svg';
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


const CarrierAviacompany = () => {
    const [formData, setFormData] = useState({
      type: '',
      name: '',
      bin: '',
      address: ''
    });
  
    const [isFormValid, setIsFormValid] = useState(false);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    useEffect(() => {
      const { type, name, bin, address } = formData;
      setIsFormValid(type && name && bin && address);
    }, [formData]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <div>
        <header className="header">
          <div className="header__top"></div>
          <div className="header__back visually-hidden">
            <a href="carrier.html" className="header__back-button">
              <img src={login_reg_back} className="header__back-button-img" alt="Back" />
              <div className="header__back-button-text">Назад</div>
            </a>
          </div>
          <div className="header__container visually-hidden">
            <div className="header__container-title">Регистрация авиакомпании</div>
          </div>
        </header>
        <main className="main">
          <form onSubmit={handleSubmit} className="main__form">
            <div className="main__form-holder">
              <div className="main__form-holder-item">
                <label className="main__form-label" htmlFor="type">Вид предприятия</label>
                <select
                  className="main__form-select"
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Выберите вид предприятия</option>
                  <option value="IP">ИП</option>
                  <option value="TOO">Тоо</option>
                </select>
              </div>
              <div className="main__form-holder-item">
                <label className="main__form-label" htmlFor="name">Название компании</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="main__form-input"
                  placeholder="Введите название"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="main__form-holder-item">
                <label className="main__form-label" htmlFor="bin">БИН</label>
                <input
                  type="text"
                  id="bin"
                  name="bin"
                  className="main__form-input"
                  placeholder="Введите БИН"
                  value={formData.bin}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="main__form-holder-item">
                <label className="main__form-label" htmlFor="address">Адрес</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="main__form-input"
                  placeholder="Введите адрес"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <input
              type="submit"
              value="Далее"
              className="main__form-submit"
              disabled={!isFormValid}
              style={{ opacity: isFormValid ? 1 : 0.5 }}
            />
          </form>
        </main>
      </div>
    );
  };
  
  export default CarrierAviacompany;