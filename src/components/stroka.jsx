function Stroka() {
    return (
       <div className="container mt-5">
  <h1>Поиск животных</h1>
  <div className="row">
    <div className="form-group">
        <label htmlFor="district">Район</label>
        <input type="text" className="form-control" id="district" placeholder="Введите район" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Название</label>
        <input type="text" className="form-control" id="name" placeholder="Введите название" />
      </div>
      <button type="button" className="btn btn-primary">Найти</button>
    </div>
  </div>


      );
}

export default Stroka;