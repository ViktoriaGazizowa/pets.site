import pop2 from "./image/pop.png"
import мышь3 from "./image/мышь3.jpg"
import рыбка from "./image/рыбка.avif"
import кошка4 from "./image/кошка4.avif"


function First2() {
    return ( <center>
  <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={4} aria-label="Slide 5" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={pop2} className="d-block  qwe" />
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-black">Найден попугай</h5>
          <p className="text-black"> Потерялся в центре города</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={кошка4} className="d-block qwe" />
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-black">Найдена кошка</h5>
          <p className="text-black"> Потерялся в центре города</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={мышь3} className="d-block qwe" />
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-black">Найдена мышь</h5>
          <p className="text-black"> Потерялся в центре города</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={рыбка} className="d-block qwe" />
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-black">Найдена рыбка</h5>
          <p className="text-black"> Потерялся в центре города</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Предыдущий</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Следующий</span>
    </button>
  </div></center>
);
}

export default First2;