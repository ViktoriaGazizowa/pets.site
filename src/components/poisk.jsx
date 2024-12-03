import React, { useState } from 'react';

function Poisk() {
const ads = [
      { id: 77, type: "Собака", description: "Собака рыжая, была утеряна в Красногвардейском районе", chipNumber: "ca-001-spb", region: "Красногвардейский", date: "12-10-2024", image: "image/собака3.webp" },
      { id: 14, type: "Кошка", description: "Потерялась кошка, пушистая, серая. Любит играть, ласковая.", chipNumber: "ca-001-spb", region: "Василеостровский", date: "24-03-2020", image: "image/кошка4.avif" },
      { id: 88, type: "Попугай", description: "Попугай, зеленый, потерян в центральной части города.", chipNumber: "po-004-spb", region: "Центральный", date: "28-10-2024", image: "image/попугай.png" },
      { id: 99, type: "", description: "Грустный хомяк потерялся", chipNumber: "sv-101-spb", region: "Калининский", date: "10-11-2024", image: "image/homyak.jpg" },
  ];

  let currentPage = 1;
  const itemsPerPage = 2;

  function displayAds(filteredAds) {
      const adsContainer = document.getElementById('adsContainer');
      adsContainer.innerHTML = '';

      if (filteredAds.length === 0) {
          adsContainer.innerHTML = '<p>Объявлений не найдено.</p>';
          return;
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const adsToDisplay = filteredAds.slice(startIndex, endIndex);

      adsToDisplay.forEach(ad => {
          const adElement = document.createElement('div');
          adElement.className = 'col-md-6 mb-4 pet-card';
          adElement.innerHTML = `
              <div class="card-body">
                  <img src="${ad.image}" class="w-75" alt="${ad.type}">
                  <p class="text-primary mt-3">id: ${ad.id}</p>
                  <p><strong>Вид животного:</strong> ${ad.type}</p>
                  <p><strong>Описание:</strong> ${ad.description}</p>
                  <p><strong>Номер чипа:</strong> ${ad.chipNumber}</p>
                  <p><strong>Район:</strong> ${ad.region}</p>
                  <p><strong>Дата:</strong> ${ad.date}</p>
              </div>
          `;
          adsContainer.appendChild(adElement);
      });

      updatePagination(filteredAds.length);
  }

  function updatePagination(totalAds) {
      const pagination = document.getElementById('pagination');
      pagination.innerHTML = '';

      const totalPages = Math.ceil(totalAds / itemsPerPage);

      const prevButton = document.createElement('li');
      prevButton.className = 'page-item';
      prevButton.innerHTML = `<a class="page-link" href="#" onclick="changePage(currentPage - 1)">Предыдущая</a>`;
      pagination.appendChild(prevButton);

      for (let i = 1; i <= totalPages; i++) {
          const pageButton = document.createElement('li');
          pageButton.className = 'page-item';
          pageButton.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
          pagination.appendChild(pageButton);
      }

      const nextButton = document.createElement('li');
      nextButton.className = 'page-item';
      nextButton.innerHTML = `<a class="page-link" href="#" onclick="changePage(currentPage + 1)">Следующая</a>`;
      pagination.appendChild(nextButton);
  }

  function changePage(pageNumber) {
      const filteredAds = getFilteredAds();
      const totalPages = Math.ceil(filteredAds.length / itemsPerPage);
      if (pageNumber < 1) pageNumber = 1;
      if (pageNumber > totalPages) pageNumber = totalPages;
      currentPage = pageNumber;
      displayAds(filteredAds);
  }

  function getFilteredAds() {
      const region = document.getElementById('regionInput').value.trim().toLowerCase();
      const animalType = document.getElementById('animalTypeInput').value.trim().toLowerCase();
      return ads.filter(ad => {
          const matchesRegion = region ? ad.region.toLowerCase().includes(region) : true;
          const matchesType = animalType ? ad.type.toLowerCase().includes(animalType) : true;
          return matchesRegion && matchesType;
      });
  }

  displayAds(ads);

  function searchAds() {
      const filteredAds = getFilteredAds();
      currentPage = 1;
      displayAds(filteredAds);
  }
    return ( <main style={{minHeight: '70vh'}}>
  <h2 className="text-center text-white bg-primary m-2">Поиск по объявлениям</h2>
  <div className="search-box">
    <h3>Поиск</h3>
    <input type="text" id="regionInput" placeholder="Район" />
    <input type="text" id="animalTypeInput" placeholder="Вид животного" />
    <button onclick="searchAds()">Найти</button>
  </div>
  <div className="container">
    <div id="adsContainer" className="card-deck">
    </div>
  </div>
  <nav aria-label="Page navigation example">
    <ul className="pagination" id="pagination">
    </ul>
  </nav>
</main>
 );
}

export default Poisk;