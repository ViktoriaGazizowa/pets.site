import лого from './image/лого.jpg';
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [user, setUser] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Функция для проверки активного пути
  const isActive = (path) => location.pathname === path;

  // Обработчик изменения полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  // Обработчик входа
  const auth = (e) => {
    e.preventDefault();
    const form = document.getElementById('loginForm');
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(user);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://pets.сделай.site/api/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.data) {
          localStorage.setItem('token', result.data.token);
          alert('Вход успешен! Перенаправление на личный кабинет.');
          navigate('/LiKabinet');

          // Закрыть модальное окно
          const modal = document.getElementById('exampleModal1');
          const modalBackdrop = document.querySelector('.modal-backdrop');
          if (modal) modal.classList.remove('show');
          if (modalBackdrop) modalBackdrop.remove();
          document.body.classList.remove('modal-open');
          document.body.style.overflow = "auto";
          document.body.style.paddingRight = "";
        } else {
          setErrorMessage('Неправильный адрес электронной почты или пароль');
          document.getElementById('error').style.display = 'block';
        }
      })
      .catch((error) => {
        setErrorMessage('Произошла ошибка, попробуйте снова');
        document.getElementById('error').style.display = 'block';
      });
  };

  // Обработчик поиска
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={лого} className="w-25 rounded-3" alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${isActive('/') ? 'disabled' : ''}`} aria-current="page">Главная</Link>
              </li>
              <li className="nav-item">
                <Link to="/LiKabinet" className={`nav-link ${isActive('/LiKabinet') ? 'disabled' : ''}`} aria-current="page">Личный кабинет</Link>
              </li>
              <li className="nav-item">
                <Link to="/registration" className={`nav-link ${isActive('/Registration') ? 'disabled' : ''}`} aria-current="page">Регистрация</Link>
              </li>
              <li className="nav-item">
                <Link to="/Search" className={`nav-link ${isActive('/Search') ? 'disabled' : ''}`} aria-current="page">Поиск по объявлениям</Link>
              </li>
              <li className="nav-item">
                <Link to="/Add_pet2" className={`nav-link ${isActive('/Add_pet2') ? 'disabled' : ''}`} aria-current="page">Добавить объявление</Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearch}>
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Поиск" 
                aria-label="Search" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
              />
              <button className="btn btn-primary me-4" type="submit">Поиск</button> {/* Увеличен отступ между кнопками */}
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">Вход</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Модальное окно Вход */}
      <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Вход</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body text-start">
              <form id="loginForm" onSubmit={auth} noValidate>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={user.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={handleChange} required />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Запомнить меня</label>
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
              </form>
              <p id="error" className="text-danger text-center" style={{ display: errorMessage ? 'block' : 'none' }}>{errorMessage}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
