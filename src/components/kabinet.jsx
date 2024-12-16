import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем хук

import cat from './image/кошка.jpg';
import cat2 from './image/кошка2.jpg';
import cat3 from './image/кошка4.avif';

function Kabinet(props) {
  const navigate = useNavigate(); // Инициализируем хук навигации

  // Состояния для редактирования email и номера телефона
  const [isEditingEmail, setIsEditingEmail] = useState(false); // Флаг для редактирования email
  const [isEditingPhone, setIsEditingPhone] = useState(false); // Флаг для редактирования номера телефона
  const [email, setEmail] = useState(''); // Изначально пустое значение для email
  const [phone, setPhone] = useState(''); // Изначально пустое значение для телефона

  // Восстановление значений из localStorage при загрузке компонента
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPhone = localStorage.getItem('phone');
    
    if (savedEmail) {
      setEmail(savedEmail);
    } else {
      setEmail(props.data.email); // Если нет сохраненного значения, берем из props
    }

    if (savedPhone) {
      setPhone(savedPhone);
    } else {
      setPhone(props.data.phone); // Если нет сохраненного значения, берем из props
    }
  }, [props.data.email, props.data.phone]); // Добавляем зависимости

  // Функция для выхода из аккаунта
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    alert('Вы вышли из личного кабинета.');
    navigate('/'); // Перенаправляем на главную страницу
  };

  // Функция для сохранения изменений
  const saveChanges = async () => {
    try {
      // Отправляем обновленные данные на сервер

      const responseEmail = await fetch("https://pets.сделай.site/api/users/email", {
        method: "PATCH", // Используем PATCH для обновления данных
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`,  // Если требуется токен для авторизации
        },
        body: JSON.stringify({ email }),
      });

      if (responseEmail.ok) {
        localStorage.setItem('email', email); // Сохраняем email в localStorage
      } else {
        alert('Ошибка при обновлении email.');
        return;
      }

      const responsePhone = await fetch("https://pets.сделай.site/api/users/phone", {
        method: "PATCH", // Используем PATCH для обновления данных
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`,  // Если требуется токен для авторизации
        },
        body: JSON.stringify({ phone }),
      });

      if (responsePhone.ok) {
        localStorage.setItem('phone', phone); // Сохраняем phone в localStorage
      } else {
        alert('Ошибка при обновлении телефона.');
        return;
      }

      alert('Изменения сохранены!');
      setIsEditingEmail(false); // Закрываем форму редактирования email
      setIsEditingPhone(false); // Закрываем форму редактирования телефона
    } catch (error) {
      alert('Произошла ошибка при обновлении данных. Попробуйте снова.');
    }
  };

  return (
    <div className="m-5">
      <h1 className="card-title text-center mb-4">Добро пожаловать</h1>

      {/* Контейнер для личных данных */}
      <div className="container" style={{ maxWidth: '1000px', border: '2px solid #ddd', borderRadius: '10px', padding: '30px', backgroundColor: '#ffffff' }}>
        {/* Таблица с личными данными */}
        <table className="table">
          <tbody>
            <tr>
              <td className="text-dark" style={{ width: '300px' }}>Имя:</td>
              <td>{props.data.name}</td>
            </tr>
            <tr>
              <td className="text-dark">Дата регистрации:</td>
              <td>{props.data.registrationDate}</td>
            </tr>
            <tr>
              <td className="text-dark">Электронная почта:</td>
              <td>
                {!isEditingEmail ? (
                  <span>{email}</span>
                ) : (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  // Обновляем состояние email
                    className="form-control"
                  />
                )}
              </td>
              <td>
                {!isEditingEmail ? (
                  <button className="btn btn-warning" onClick={() => setIsEditingEmail(true)}>Изменить</button>
                ) : (
                  <button className="btn btn-success" onClick={saveChanges}>Сохранить</button>
                )}
              </td>
            </tr>
            <tr>
              <td className="text-dark">Номер телефона:</td>
              <td>
                {!isEditingPhone ? (
                  <span>{phone}</span>
                ) : (
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}  // Обновляем состояние phone
                    className="form-control"
                  />
                )}
              </td>
              <td>
                {!isEditingPhone ? (
                  <button className="btn btn-warning" onClick={() => setIsEditingPhone(true)}>Изменить</button>
                ) : (
                  <button className="btn btn-success" onClick={saveChanges}>Сохранить</button>
                )}
              </td>
            </tr>
            <tr>
              <td className="text-dark">Количество объявлений:</td>
              <td>{props.data.countOrder}</td>
            </tr>
            <tr>
              <td className="text-dark">Количество животных:</td>
              <td>{props.data.countPets}</td>
            </tr>
          </tbody>
        </table>

        <hr />

        {/* Кнопка "Выйти" */}
        <div className="text-center mt-3">
          <button className="btn text-white" style={{ backgroundColor: '#8B0000' }} onClick={handleLogout}>Выйти</button>
        </div>
      </div>

      {/* Карточки с объявлениями */}
      <div className="container mt-4">
        <div className="card" data-title="Кошка" data-description="Потерялся кот в Приморском районе">
          <img src={cat} alt="Карточка 1" />
          <h3>Кошка</h3>
          <p>Потерялась</p>
          <button className="open-modal">Редактировать</button>
          <br />
          <button className="open-modal">Удалить</button>
        </div>
        <div className="card" data-title="Кошка" data-description="Потерялась кошка белая пушистая ласковая">
          <img src={cat2} alt="Карточка 2" />
          <h3>Кошка</h3>
          <p>Потерялась</p>
          <button className="open-modal">Редактировать</button>
          <br />
          <button className="open-modal">Удалить</button>
        </div>
        <div className="card" data-title="Кот" data-description="Потерялся кот очень грустный в Неском районе">
          <img src={cat3} alt="Карточка 3" />
          <h3>Кот</h3>
          <p>Потерялся</p>
          <button className="open-modal">Редактировать</button>
          <br />
          <button className="open-modal">Удалить</button>
        </div>
      </div>

      <div className="modal" id="modal">
        <div className="modal-content">
          <span className="close">×</span>
          <h2 id="modal-title" />
          <p id="modal-description" />
        </div>
      </div>
    </div>
  );
}

export default Kabinet;
