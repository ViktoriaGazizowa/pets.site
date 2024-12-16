
import кошка3 from "./image/кошка.jpg"
import коза2 from "./image/коза2.png"


function First3() {
    return (  <div>
  <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
  <div className="d-flex flex-row flex-wrap justify-content-center">
    <div className="card border m-2 p-3" style={{minWidth: 200, width: '30%', height: 'auto'}}>
      <img src={кошка3} className="card-img-top w-75 mx-auto" alt="рисунок животного" />
      <div className="card-body">
        <p className="text-primary">id:</p>
        <p>14</p>
        <p className="text-primary">Вид животного:</p>
        <p>Кошка</p>
        <p className="text-primary">Описание:</p>
        <p>Потерялась кошка, пушистая, черно-белая. Любит играть, ласковая.</p>
        <p className="text-primary">Номер чипа:</p>
        <p>ca-001-spb</p>
        <p className="text-primary">Район:</p>
        <p>Василиостровский</p>
        <p className="text-primary">Дата:</p>
        <p>24-03-2020</p>
      </div>
  </div>

  <div className="d-flex flex-row flex-wrap justify-content-center">
    <div className="card border m-2 p-3" style={{minWidth: 200, width: '70%', height: 'auto'}}>
      <img src={коза2} className="card-img-top w-75 mx-auto" alt="рисунок животного" />
      <div className="card-body">
        <p className="text-primary">id:</p>
        <p>14</p>
        <p className="text-primary">Вид животного:</p>
        <p>Кошка</p>
        <p className="text-primary">Описание:</p>
        <p>Потерялась кошка, пушистая, черно-белая. Любит играть, ласковая.</p>
        <p className="text-primary">Номер чипа:</p>
        <p>ca-001-spb</p>
        <p className="text-primary">Район:</p>
        <p>Василиостровский</p>
        <p className="text-primary">Дата:</p>
        <p>24-03-2020</p>
      </div>
      </div>
  </div>
  </div>
</div>

);
}

export default First3;