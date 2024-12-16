import собака3 from './image/собака3.webp';
import кошка4 from './image/кошка4.avif';
import pop from './image/pop.png';
import homyak from './image/homyak.JPG';

import React, { useState } from 'react';

const ads = [
    { id: 77, type: "Собака", description: "Собака рыжая, была утеряна в Красногвардейском районе", chipNumber: "ca-001-spb", region: "Красногвардейский", date: "12-10-2024", image: собака3 },
    { id: 14, type: "Кошка", description: "Потерялась кошка, пушистая, серая. Любит играть, ласковая.", chipNumber: "ca-001-spb", region: "Василеостровский", date: "24-03-2020", image: кошка4 },
    { id: 88, type: "Попугай", description: "Попугай, зеленый, потерян в центральной части города.", chipNumber: "po-004-spb", region: "Центральный", date: "28-10-2024", image: pop },
    { id: 99, type: "Свинья", description: "Молодая свинья, была найдена на окраине города, в районе деревни.", chipNumber: "sv-101-spb", region: "Калининский", date: "10-11-2024", image: homyak },
];

function Poisk() {
    const [region, setRegion] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredAds, setFilteredAds] = useState(ads);

    const itemsPerPage = 2;

    const getFilteredAds = () => {
        const lowerCaseRegion = region.trim().toLowerCase();
        const lowerCaseType = animalType.trim().toLowerCase();

        return ads.filter(ad => {
            const matchesRegion = lowerCaseRegion ? ad.region.toLowerCase().includes(lowerCaseRegion) : true;
            const matchesType = lowerCaseType ? ad.type.toLowerCase().includes(lowerCaseType) : true;
            return matchesRegion && matchesType;
        });
    };

    const searchAds = (event) => {
        event.preventDefault();
        const filtered = getFilteredAds();
        setFilteredAds(filtered);
        setCurrentPage(1);
    };

    const displayAds = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const adsToDisplay = filteredAds.slice(startIndex, startIndex + itemsPerPage);

        return adsToDisplay.map(ad => (
            <div className="col-md-6 mb-4 pet-card" key={ad.id}>
                <div className="card-body">
                    <img src={ad.image} className="w-75" alt={ad.type} />
                    <p className="text-primary mt-3">id: {ad.id}</p>
                    <p><strong>Вид животного:</strong> {ad.type}</p>
                    <p><strong>Описание:</strong> {ad.description}</p>
                    <p><strong>Номер чипа:</strong> {ad.chipNumber}</p>
                    <p><strong>Район:</strong> {ad.region}</p>
                    <p><strong>Дата:</strong> {ad.date}</p>
                </div>
            </div>
        ));
    };

    const updatePagination = () => {
        const totalPages = Math.ceil(filteredAds.length / itemsPerPage);
        const paginationItems = [];

        for (let i = 1; i <= totalPages; i++) {
            paginationItems.push(
                <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
                    <a className="page-link" href="#" onClick={() => setCurrentPage(i)}>{i}</a>
                </li>
            );
        }

        return paginationItems;
    };

    return (
        <div>
            {/* Заголовок "Поиск по объявлениям" */}
            <h2 className="text-center text-white bg-primary m-2 font-weight-bold" style={{ fontSize: '2rem' }}>
                Поиск по объявлениям
            </h2>

            <div className="search-box">
                <h3>Поиск</h3>
                <form id="searchForm" onSubmit={searchAds} className="needs-validation">
                    {/* Поисковые строки без рамки */}
                    <input
                        type="text"
                        id="regionInput"
                        placeholder="Район"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="form-control mb-2"
                        style={{
                            width: '300px',
                            fontSize: '1rem',
                            border: 'none', // Убираем рамку
                            boxShadow: 'none', // Убираем тень
                            backgroundColor: '#f1f1f1', // Светлый фон для удобства
                            padding: '10px', // Увеличим внутренние отступы для удобства
                        }}
                    />
                    <input
                        type="text"
                        id="animalTypeInput"
                        placeholder="Вид животного"
                        value={animalType}
                        onChange={(e) => setAnimalType(e.target.value)}
                        className="form-control mb-2"
                        style={{
                            width: '300px',
                            fontSize: '1rem',
                            border: 'none', // Убираем рамку
                            boxShadow: 'none', // Убираем тень
                            backgroundColor: '#f1f1f1', // Светлый фон для удобства
                            padding: '10px', // Увеличим внутренние отступы для удобства
                        }}
                    />
                    <button type="submit" className="btn btn-primary">Найти</button>
                </form>
            </div>

            {/* Добавляем заголовок над таблицей с результатами */}
            <h3 className="text-center my-4">Результаты поиска</h3>

            <div className="container">
                <div className="card-deck">
                    {displayAds()}
                </div>
            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination" id="pagination">
                    {updatePagination()}
                </ul>
            </nav>
        </div>
    );
}

export default Poisk;
