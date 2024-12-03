function Add_pet () {
    return (  <div>
  {/* Кнопка для открытия модального окна */}
  <center><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal">
      Зарегистрироваться
    </button> </center>
  {/* Модальное окно */}
  <div className="modal fade" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="loginModalLabel">Вход в личный кабинет</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Закрыть">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form id="loginForm">
            <div className="form-group">
              <label htmlFor="username">Номер</label>
              <input type="text" className="form-control" id="username" placeholder="Введите номер" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input type="password" className="form-control" id="password" placeholder="Введите пароль" required />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Запомнить меня</label>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
          <button type="button" className="btn btn-primary" onclick="login()">Войти</button>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <h1>Добавить объявление о животном</h1>
    <form id="add-listing-form">
      <div className="form-group">
        <label htmlFor="animal-name">Имя животного:</label>
        <input type="text" id="animal-name" name="animal-name" required />
      </div>
      <div className="form-group">
        <label htmlFor="chip-number">Номер чипа:</label>
        <input type="text" id="chip-number" name="chip-number" required />
      </div>
      <div className="form-group">
        <label htmlFor="region">Район:</label>
        <input type="text" id="region" name="region" required />
      </div>
      <div className="form-group">
        <label htmlFor="date">Дата:</label>
        <input type="date" id="date" name="date" required />
      </div>
      <div className="form-group">
        <label htmlFor="animal-type">Вид животного:</label>
        <select id="animal-type" name="animal-type" required>
          <option value>Выберите вид</option>
          <option value="собака">Собака</option>
          <option value="кошка">Кошка</option>
          <option value="птица">Птица</option>
          <option value="грызун">Грызун</option>
          <option value="рептилия">Рептилия</option>
          <option value="другое">Другое</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="animal-photo">Фото животного:</label>
        <input type="file" id="animal-photo" name="animal-photo" accept="image/*" required />
      </div>
      <div className="form-group">
        <label htmlFor="description">Описание:</label>
        <textarea id="description" name="description" rows={4} required defaultValue={""} />
      </div>
      <button type="submit">Добавить объявление</button>
    </form>
  </div>
</div>
);
}

export default Add_pet ;