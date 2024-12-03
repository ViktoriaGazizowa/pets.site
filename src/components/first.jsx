
function First () {
    return (<div>
  {/* Кнопка для открытия модального окна */}
  <center><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal">
      Войти в личный кабинет
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
          <button type="button" className="btn btn-primary">Войти</button>
        </div>
      </div>
    </div>
  </div>
</div>
);
}

export default First;