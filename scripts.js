// Получаем ссылки на элементы интерфейса
const themeToggleBtn = document.getElementById('theme-toggle');
const popupOverlay = document.getElementById('popupOverlay');
const popupBtn = document.getElementById('popupBtn');
const closeBtn = document.getElementById('closeBtn');

// Функция для отображения текущей даты и времени
function displayDateTime() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const dateTimeElement = document.getElementById('currentDateTime');
    if (dateTimeElement) {
        dateTimeElement.textContent = date.toLocaleDateString('en-US', options);
    }
}
setInterval(displayDateTime, 1000);

// Функция для переключения темы
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
}
function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', ''); 
    } else {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }
}
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}

// Изменение фона страницы по клику
const changeBgBtn = document.getElementById('change-bg-btn');
if (changeBgBtn) {
    changeBgBtn.addEventListener('click', function() {
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F033FF', '#33FFF0'];
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
}


// Всплывающее окно
if (popupBtn && closeBtn && popupOverlay) {
    popupBtn.addEventListener('click', () => popupOverlay.style.display = 'flex');
    closeBtn.addEventListener('click', () => popupOverlay.style.display = 'none');
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) popupOverlay.style.display = 'none';
    });
}
function closePopup() {
    popupOverlay.style.display = 'none';
}
// Валидация и подтверждение
const subscribeForm = document.querySelector('.popup-form form');
subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    if (emailInput.checkValidity()) {
        alert("Спасибо за подписку!");
        setTimeout(closePopup, 2000); // Закрыть через 2 секунды
    } else {
        emailInput.reportValidity(); // Показывает встроенное сообщение об ошибке
    }
});
// Аккордеон (раскрывающиеся ответы)
const accHeaders = document.querySelectorAll('.accordion-section h3');
accHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
}); 
// Модальное окно для карточек городов
const modal = document.getElementById('cityModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

// Информация о городах
const cityData = {
    paris: {
        title: 'Paris, France',
        description: 'Paris is the capital city of France, known for its art, fashion, and culture. Famous landmarks include the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.'
    },
    tokyo: {
        title: 'Tokyo, Japan',
        description: 'Tokyo is a bustling city that seamlessly blends tradition and modernity. It is known for its historical temples, technology, and delicious cuisine.'
    },
    bali: {
        title: 'Bali, Indonesia',
        description: 'Bali is a tropical paradise with stunning beaches, lush landscapes, and a vibrant cultural scene. It is a popular destination for relaxation and adventure.'
    },
    milan: {
        title: 'Milan, Italy',
        description: 'Milan is a global fashion and design capital, known for its impressive architecture, historic sites, and world-class shopping experiences.'
    }
};

// Функция для открытия модального окна
function openModal(cityKey) {
    const cityInfo = cityData[cityKey];
    if (cityInfo) {
        modalTitle.textContent = cityInfo.title;
        modalDescription.textContent = cityInfo.description;
        modal.style.display = 'flex';
    }
}

// Закрытие модального окна
closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// Добавление обработчиков событий на кнопки "Learn More"
const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const cityKey = button.getAttribute('data-city');
        openModal(cityKey);
    });
});

// Открытие всплывающего окна
if (popupBtn) {
    popupBtn.addEventListener('click', () => popupOverlay.style.display = 'flex');
}

// Закрытие всплывающего окна
if (closeBtn && popupOverlay) {
    closeBtn.addEventListener('click', () => popupOverlay.style.display = 'none');
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) popupOverlay.style.display = 'none';
    });
}

// Обработка подписки
subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Предотвратить отправку формы
    const email = emailInput.value.trim(); // Получаем значение электронной почты

    if (email) {
        localStorage.setItem('subscribedEmail', email); // Сохраняем в локальном хранилище
        alert("Спасибо за подписку на нашу рассылку!");
        emailInput.value = ''; // Очищаем поле ввода
        popupOverlay.style.display = 'none'; // Закрываем всплывающее окно
    } else {
        alert("Пожалуйста, введите адрес электронной почты.");
    }
});
 // Открытие всплывающего окна
 if (popupBtn) {
    popupBtn.addEventListener('click', () => {
        popupOverlay.style.display = 'flex';
    });
}

// Закрытие всплывающего окна
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
    });
}

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});

// Обработка формы подписки
subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    const emailInput = this.querySelector('input[type="email"]');

    if (emailInput.checkValidity()) {
        alert("Спасибо за подписку на нашу рассылку!");
        emailInput.value = ''; // Очистить поле ввода
        popupOverlay.style.display = 'none'; // Закрыть всплывающее окно
    } else {
        emailInput.reportValidity(); // Показывает встроенное сообщение об ошибке
    }
});
// Обработка формы подписки
subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    const emailInput = this.querySelector('input[type="email"]');

    if (emailInput.checkValidity()) {
        // Сохраняем email в localStorage
        localStorage.setItem('subscribedEmail', emailInput.value);
        
        alert("Спасибо за подписку на нашу рассылку!");
        emailInput.value = ''; // Очистить поле ввода
        popupOverlay.style.display = 'none'; // Закрыть всплывающее окно
    } else {
        emailInput.reportValidity(); // Показывает встроенное сообщение об ошибке
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Проверка на наличие сохранённого email при загрузке страницы
    const savedEmail = localStorage.getItem('subscribedEmail');
    if (savedEmail) {
        alert(`Вы уже подписаны с адресом: ${savedEmail}`);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const popupBtn = document.getElementById('popupBtn');
    const closeBtn = document.getElementById('closeBtn');
    const popupOverlay = document.getElementById('popupOverlay');
    const subscribeForm = document.getElementById('subscribeForm');

    // Открытие всплывающего окна
    if (popupBtn) {
        popupBtn.addEventListener('click', () => {
            popupOverlay.style.display = 'flex';
        });
    }

    // Закрытие всплывающего окна
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            popupOverlay.style.display = 'none';
        });
    }

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });

    // Обработка формы подписки
    subscribeForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Предотвращаем перезагрузку страницы
        const emailInput = this.querySelector('input[type="email"]');

        if (emailInput.checkValidity()) {
            // Сохраняем email в localStorage
            localStorage.setItem('subscribedEmail', emailInput.value);
            
            alert("Спасибо за подписку на нашу рассылку!");
            emailInput.value = ''; // Очистить поле ввода
            popupOverlay.style.display = 'none'; // Закрыть всплывающее окно
        } else {
            emailInput.reportValidity(); // Показывает встроенное сообщение об ошибке
        }
    });

    // Проверка на наличие сохранённого email при загрузке страницы
    const savedEmail = localStorage.getItem('subscribedEmail');
    if (savedEmail) {
        alert(`Вы уже подписаны с адресом: ${savedEmail}`);
    }
});
