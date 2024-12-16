import React, { useState } from 'react'; 
import AnimalCard from "../components/animalcard";  
import кошка3 from "./image/кошка3.png"; 
import коза2 from "./image/коза2.png"; 
import pop from './image/pop.png'; 
import кошка4 from './image/кошка4.avif'; 
import homyak from './image/homyak.JPG';

const animals = [
  {
    image: кошка3,
    kind: 'Кошка',
    description: 'Потерялась пушистая кошка. Очень ласковая, серая.',
    mark: 'ca-001-spb',
    district: 'Василеостровский',
    date: '24-03-2020',
  },
  {
    image: коза2,
    kind: 'Коза',
    description: "Коза, была утеряна в Красногвардейском районе",
    mark: 'go-011-spb',
    district: 'Центральный',
    date: '14-03-2022',
  },
  {
    image: pop,
    kind: 'Попугай',
    description: "Попугай, зеленый, потерян в центральной части города.",
    mark: 'go-012-spb',
    district: 'Приморский',
    date: '12-08-2022',
  },
  {
    image: кошка4,
    kind: 'Кошка',
    description: "Молодая кошка, была найдена на окраине города, в районе деревни.",
    mark: 'go-141-spb',
    district: 'Приморский',
    date: '14-01-2023',
  },
  {
    image: homyak,
    kind: 'Хомяк',
    description: 'Хомяк на дереве.',
    mark: 'go-211-spb',
    district: 'Центральный',
    date: '11-12-2022',
  }
];

// Константы для пагинации
const ITEMS_PER_PAGE = 2;

const AnimalCardsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // для поиска по названию
  const [searchDistrict, setSearchDistrict] = useState(''); // для поиска по району
  const [filteredAnimals, setFilteredAnimals] = useState(animals); // состояние для отфильтрованных животных

  // Функция для поиска
  const handleSearch = () => {
    const filtered = animals.filter((animal) => {
      const isKindMatch = animal.kind.toLowerCase().includes(searchQuery.toLowerCase());
      const isDistrictMatch = animal.district.toLowerCase().includes(searchDistrict.toLowerCase());
      return isKindMatch && isDistrictMatch;
    });
    setFilteredAnimals(filtered); // обновляем список отфильтрованных животных
    setCurrentPage(1); // сбрасываем страницу на 1
  };

  // Вычисляем количество страниц для пагинации
  const totalPages = Math.ceil(filteredAnimals.length / ITEMS_PER_PAGE);

  // Получаем текущие элементы для отображения
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAnimals = filteredAnimals.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Обработчик для изменения страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Заголовок "Поиск по объявлениям" */}
      <h2 className="text-center font-weight-bold mb-4" style={{ fontSize: '2rem' }}>
        Поиск по объявлениям
      </h2>

      {/* Контейнер для поиска с выравниванием полей в одну строку */}
      <div className="search-container d-flex justify-content-center mb-4">
        <div className="search-box d-flex justify-content-between w-75">
          <input
            type="text"
            placeholder="Поиск по животному"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input form-control mb-3"
            style={{
              border: 'none', // Убираем рамку
              boxShadow: 'none', // Убираем тень
              backgroundColor: '#f9f9f9', // Светлый фон для удобства
              padding: '10px', // Добавляем внутренние отступы для лучшего восприятия
              fontSize: '1rem', // Устанавливаем нормальный размер шрифта
              marginRight: '10px', // Расстояние между полями
            }}
          />
          <input
            type="text"
            placeholder="Поиск по району"
            value={searchDistrict}
            onChange={(e) => setSearchDistrict(e.target.value)}
            className="search-input form-control mb-3"
            style={{
              border: 'none', // Убираем рамку
              boxShadow: 'none', // Убираем тень
              backgroundColor: '#f9f9f9', // Светлый фон для удобства
              padding: '10px', // Добавляем внутренние отступы для лучшего восприятия
              fontSize: '1rem', // Устанавливаем нормальный размер шрифта
            }}
          />
          <button onClick={handleSearch} className="btn btn-primary mb-3">
            Найти
          </button>
        </div>
      </div>

      {/* Вывод карточек животных */}
      <div className="d-flex flex-row flex-wrap justify-content-center" id="animalCards">
        {currentAnimals.length > 0 ? (
          currentAnimals.map((animal, index) => (
            <AnimalCard key={index} data={animal} />
          ))
        ) : (
          <p>Нет животных, соответствующих вашему запросу.</p>
        )}
      </div>

      {/* Пагинация */}
      {filteredAnimals.length > 0 && (
        <div className="pagination d-flex justify-content-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
              className="pagination-button"
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimalCardsContainer;
