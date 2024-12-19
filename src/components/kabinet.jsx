import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем хук

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
                <div className="d-flex justify-content-between">
                  {!isEditingEmail ? (
                    <button className="btn btn-primary" onClick={() => setIsEditingEmail(true)}>Изменить</button> // Синий цвет
                  ) : (
                    <button className="btn btn-success" onClick={saveChanges}>Сохранить</button>
                  )}
                </div>
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
                <div className="d-flex justify-content-between">
                  {!isEditingPhone ? (
                    <button className="btn btn-primary" onClick={() => setIsEditingPhone(true)}>Изменить</button> // Синий цвет
                  ) : (
                    <button className="btn btn-success" onClick={saveChanges}>Сохранить</button>
                  )}
                </div>
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
    </div>
  );
}

export default Kabinet;
