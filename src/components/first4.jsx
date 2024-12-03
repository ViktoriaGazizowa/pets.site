function Footer() {
    return (       <div>
  <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
  <center>
    <form className="w-50 m-auto p-3" style={{minWidth: 300}}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" />
        <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
      </div>
      <button type="submit" className="btn btn-primary">Подписаться</button>
    </form></center>
</div>
);
}

export default Footer;