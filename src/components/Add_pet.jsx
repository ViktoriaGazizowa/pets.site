import React, { useState } from 'react';

function Add_pet () {
  const [register, setRegister] = useState(false); // состояние для выбора регистрации
  const [showPasswordFields, setShowPasswordFields] = useState(false); // скрытие/показ пароля

  // Функция для обработки выбора регистрации
  const handleRegisterChange = (e) => {
    setRegister(e.target.checked);
    if (!e.target.checked) {
      setShowPasswordFields(false);
    }
  };

  return (
    <div>
      <center><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registrationModal">Зарегистрироваться</button></center>

      <div className="container">
        <h1>Добавить объявление о животном</h1>
        <form id="add-listing-form">
          {/* Имя пользователя */}
          <div className="form-group">
            <label htmlFor="name">Имя пользователя:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              pattern="^[а-яА-ЯёЁ\s-]+$"
              title="Имя может содержать только кириллицу, пробелы и дефисы."
            />
          </div>

          {/* Телефон */}
          <div className="form-group">
            <label htmlFor="phone">Телефон:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              pattern="^\+?\d+$"
              title="Телефон должен содержать только цифры и может начинаться с +."
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          {/* Регистрация */}
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="register"
                onChange={handleRegisterChange}
              />
              Регистрация
            </label>
          </div>

          {/* Поля для пароля и его подтверждения */}
          {register && (
            <div>
              <div className="form-group">
                <label htmlFor="password">Пароль:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  minLength="7"
                  pattern=".*[a-z].*"
                  pattern=".*[A-Z].*"
                  pattern=".*\d.*"
                  title="Пароль должен содержать не менее 7 символов, включая хотя бы одну цифру, одну строчную и одну заглавную букву."
                />
              </div>

              <div className="form-group">
                <label htmlFor="password_confirmation">Подтверждение пароля:</label>
                <input
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  required
                />
              </div>
            </div>
          )}

          {/* Фото животного */}
          <div className="form-group">
            <label htmlFor="photo1">Фото животного:</label>
            <input
              type="file"
              id="photo1"
              name="photo1"
              accept="image/*"
              required
            />
          </div>

          {/* Дополнительные фото */}
          <div className="form-group">
            <label htmlFor="photo2">Дополнительное фото (необязательно):</label>
            <input
              type="file"
              id="photo2"
              name="photo2"
              accept="image/*"
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo3">Дополнительное фото (необязательно):</label>
            <input
              type="file"
              id="photo3"
              name="photo3"
              accept="image/*"
            />
          </div>

          {/* Клеймо */}
          <div className="form-group">
            <label htmlFor="mark">Клеймо (необязательно):</label>
            <input
              type="text"
              id="mark"
              name="mark"
            />
          </div>

          {/* Описание */}
          <div className="form-group">
            <label htmlFor="description">Описание:</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
            />
          </div>

          {/* Подтверждение согласия на обработку персональных данных */}
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="confirm"
                required
              />
              Я согласен на обработку персональных данных
            </label>
          </div>

          {/* Кнопка отправки */}
          <button type="submit">Добавить объявление</button>
        </form>
      </div>
    </div>
  );
}

export default Add_pet;
