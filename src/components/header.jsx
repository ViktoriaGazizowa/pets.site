import лого from './image/лого.jpg';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {

  const isActive = (path) => location.pathname === path; 
const location = useLocation();
    return (  
<header>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <Link to="/" className="navbar-brand">
            <img src={лого} className="w-25 rounded-3" alt="logo" />
          </Link>      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link
                  to="/"
                  className={`nav-link ${isActive('/') ? 'disabled' : ''}`} aria-current="page">
                  Главная
                </Link>          </li>
          <li className="nav-item">
          <Link
                  to="/LiKabinet"
                  className={`nav-link ${isActive('/LiKabinet') ? 'disabled' : ''}`} aria-current="page">
                  Личный кабинет
                </Link>        
          </li>
         
          <li className="nav-item">
          <Link
                  to="/Search"
                  className={`nav-link ${isActive('/Search') ? 'disabled' : ''}`} aria-current="page">
                  Поиск по объявлениям
                </Link> 
          </li>
          <li className="nav-item">
          <Link
                  to="/Add_pet2"
                  className={`nav-link ${isActive('/Add_pet2') ? 'disabled' : ''}`} aria-current="page">
                  Добавить объявление
                </Link>   
          </li>
        </ul>
        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Регистрация
        </button>
        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
          Вход
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel" style={{color: 'black'}}>Регистрация</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body text-start">
                <form>
                  <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label" style={{color: 'black'}}>ФИО</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Введите ваше имя" required pattern="^[А-Яа-яЁё]+([ -][А-Яа-яЁё]+)*$" title="ФИО должно содержать только кириллицу, пробелы и тире." oninput="validateFio()" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phoneInput" className="form-label" style={{color: 'black'}}>Телефон</label>
                    <input type="tel" className="form-control" id="phoneInput" placeholder="Введите ваш номер телефона" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label" style={{color: 'black'}}>Email</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="Введите ваш email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label" style={{color: 'black'}}>Пароль</label>
                    <input type="password" className="form-control" id="passwordInput" placeholder="Введите пароль" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="passwordConfirmInput" className="form-label" style={{color: 'black'}}>Подтверждение пароля</label>
                    <input type="password" className="form-control" id="passwordConfirmInput" placeholder="Повторите пароль" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="dataAgreementCheck" required />
                    <label className="form-check-label" htmlFor="dataAgreementCheck" style={{color: 'black'}}>Я соглашаюсь на обработку данных</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel" style={{color: 'black'}}>Вход</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body text-start">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{color: 'black'}}>Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={{color: 'black'}}>Пароль</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1" style={{color: 'black'}}>Запомнить меня</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Войти</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
              </div>
            </div>
          </div>
        </div>
        <form className="d-flex">
          <input className="form-control me-2" type="search" list="pets" placeholder="Поиск" aria-label="Search" />
          <button className="btn btn-primary" onclick>Поиск</button>
          <datalist id="pets">
            <option value="Кошка">
            </option><option value="Собака">
            </option><option value="Корова">
            </option><option value="Крокодил">
            </option><option value="Сова">
            </option></datalist>
        </form>
      </div>
    </div> 
  </nav>

</header>


    );
}

export default Header;