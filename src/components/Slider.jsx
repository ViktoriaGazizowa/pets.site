import React, { useState, useEffect } from 'react';
import SliderItem  from '../components/SliderItem';

// Компонент для отображения прелоадера
const Preloader = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Загрузка...</span>
    </div>
  </div>
);

function Slide({ data, isActive }) {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <img 
        src={`https://pets.xn--80ahdri7a.site/${data.image}`} 
        className="d-block w-100" 
        alt={data.title}
        style={{
          height: '400px', // Фиксированная высота
          objectFit: 'contain', // Убедимся, что изображение полностью видно, без обрезки
          borderRadius: '10px', 
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-dark">{data.title}</h5>
        <p className="text-dark">{data.description}</p>
      </div>
    </div>
  );
}

function Slider() {
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSliderData();
  }, []);

  const fetchSliderData = async () => {
    try {
      const response = await fetch('https://pets.сделай.site/api/pets/slider'); // Замените URL на реальный
      const data = await response.json();
      setSliderData(data.data.pets || []); // Убедитесь, что структура данных совпадает
      setLoading(false);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      setLoading(false);
    }
  };

  const slides = sliderData.map((slide, index) => (
    <Slide key={index} data={slide} isActive={index === 0} />
  ));

  const indicators = sliderData.map((_, index) => (
    <button
      key={index}
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={index}
      className={index === 0 ? 'active' : ''}
      aria-current={index === 0 ? 'true' : 'false'}
      aria-label={`Slide ${index + 1}`}
    />
  ));

  return (
    <div>
      <h2 className="text-center text-white bg-primary m-2 p-2 rounded">Найденные животные</h2>
     
      {loading ? (  // Показываем прелоадер, пока данные загружаются
        <Preloader />
      ) : (
        <div
          id="carouselExampleIndicators"
          className="carousel slide m-auto w-75 p-2 bg-light rounded"
          data-bs-ride="carousel"
          style={{ borderRadius: '15px' }}
        >
          <div className="carousel-indicators">{indicators}</div>
          <div className="carousel-inner">{slides}</div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="tr  e" />
            <span className="visually-hidden">Предыдущий</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Следующий</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Slider;
