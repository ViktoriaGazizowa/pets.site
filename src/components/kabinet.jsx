import cat from './image/кошка.jpg';
import cat2 from './image/кошка2.jpg';
import cat3 from './image/кошка4.avif';

function Kabinet () {
    return (  <div>
  <div className="container">
    <h2>Личный кабинет</h2>
    <div id="userInfo">
      <p><strong>Имя:</strong> <span id="userName">Иван Иванов</span></p>
      <p><strong>Телефон:</strong> <span id="userPhone">+7 (999) 123-45-67</span></p>
      <p><strong>Email:</strong> <span id="userEmail">ivan@example.com</span></p>
      <p><strong>Пароль:</strong> <span id="userPassword">********</span></p>
      <p><strong>Время регистрации:</strong> <span id="registrationTime">01.01.2023 12:00</span></p>
    </div>
    <h4>Редактировать данные</h4>
    <div className="mb-3">
      <label htmlFor="editPhone" className="form-label">Новый телефон</label>
      <input type="tel" className="form-control" id="editPhone" placeholder="+7 (999) 123-45-67" />
    </div>
    <div className="mb-3">
      <label htmlFor="editEmail" className="form-label">Новый Email</label>
      <input type="email" className="form-control" id="editEmail" placeholder="ivan@example.com" />
    </div>
    <button className="btn btn-primary" onclick="updateUserInfo()">Сохранить изменения</button>
    <hr />
    <button className="btn btn-danger" onclick="logout()">Выйти</button>
  </div>
  <div className="container">
    <div className="card" data-title="Кошка" data-description="Потерялся кот в Приморском районе">
      <img src={cat} alt="Карточка 1" />
      <h3>Кошка</h3>
      <p>Потерялась</p>
      <button className="open-modal">Посмотреть</button>
      <br />
      <button className="open-modal">Удалить</button>
    </div>
    <div className="card" data-title="Кошка" data-description="Потерялась кошка белая пушистая ласковая">
      <img src={cat2} alt="Карточка 2" />
      <h3>Кошка</h3>
      <p>Потерялась</p>
      <button className="open-modal">Посмотреть</button>
      <br />
      <button className="open-modal">Удалить</button>
    </div>
    <div className="card" data-title="Кот" data-description="Потерялся кот очень грустный в Неском районе">
      <img src={cat3} alt="Карточка 3" />
      <h3>Кот</h3>
      <p>Потерялся</p>
      <button className="open-modal">Посмотреть</button>
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