import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    if (email === 'user@com' && password === 'admin') {
      navigate('/LiKabinet'); // Перенаправляем на страницу личного кабинета
    } else {
      alert('Неверный email или пароль'); // Можно добавить уведомление об ошибке
    }
  };

  return (
    <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ color: 'black' }}>Вход</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body text-start">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: 'black' }}>Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'black' }}>Пароль</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="exampleInputPassword1" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1" style={{ color: 'black' }}>Запомнить меня</label>
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
  );
};

export default LoginModal;