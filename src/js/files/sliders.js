/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Scrollbar, Pagination } from 'swiper/modules';
// Autoplay
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.swiper-cases') && window.innerWidth > 480) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.swiper-cases', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			// Autoplay
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 16,
			//autoHeight: true,
			speed: 1400,

			// Скорость прокрутки
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			// effect: 'fade',
			effect: 'slide', // Можно использовать fade, cube и другие эффекты
			transitionTimingFunction: 'ease-in-out',
			// autoplay: {
			// 	delay: -100,      // Минимальная задержка
			// 	disableOnInteraction: false, // Не останавливать при взаимодействии
			// },

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-cases .navigation__button--prev',
				nextEl: '.swiper-cases .navigation__button--next',
			},
			// Брейкпоінти
			breakpoints: {
				480: {
					slidesPerView: 1.2,

				},
				650: {
					slidesPerView: 2.1,
				},
				992: {
					// slidesPerView: 2.5,
					slidesPerView: 3,
				},
				// 1268: {
				// },
			},
			// Події
			on: {

			}
		});
	}
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.swiper-solutions')) {
		new Swiper('.swiper-solutions', {
			modules: [Navigation, Scrollbar, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1.25,
			// spaceBetween: 16,
			autoHeight: true,
			speed: 1400,

			// Скорость прокрутки
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			// effect: 'fade',
			effect: 'slide', // Можно использовать fade, cube и другие эффекты
			transitionTimingFunction: 'ease-in-out',
			// autoplay: {
			// 	delay: 4000,      // Минимальная задержка
			// 	disableOnInteraction: false, // Не останавливать при взаимодействии
			// },

			pagination: {
				el: '.swiper-solutions .navigation__pagination',
				type: 'fraction', // Используем нумерацию вместо буллетов
				renderFraction: function (currentClass, totalClass) {
					return '<span class="' + currentClass + '"></span>' +
						' / ' +
						'<span class="' + totalClass + '"></span>';
				}
			},
			// Скроллбар
			scrollbar: {
				el: '.swiper-solutions .navigation__scrollbar',
				draggable: true,
			},

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-solutions .navigation__button--prev',
				nextEl: '.swiper-solutions .navigation__button--next',
			},
			breakpoints: {
				550: {
					slidesPerView: 2.2,
				},
				768: {
					slidesPerView: 2.8,
				},
				992: {
					slidesPerView: 4,
				},
				1268: {
					slidesPerView: 4.6,
				},
			},
			on: {
			}
		});
	}
	// if (document.querySelector('.swiper-partners')) { // Вказуємо склас потрібного слайдера
	// 	// Створюємо слайдер
	// 	new Swiper('.swiper-partners', { // Вказуємо склас потрібного слайдера
	// 		// Підключаємо модулі слайдера
	// 		// для конкретного випадку
	// 		modules: [Autoplay],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1.7,
	// 		spaceBetween: 16,
	// 		//autoHeight: true,
	// 		speed: 1400,

	// 		// Скорость прокрутки
	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		// Ефекти
	// 		// effect: 'fade',
	// 		effect: 'slide', // Можно использовать fade, cube и другие эффекты
	// 		transitionTimingFunction: 'ease-in-out',
	// 		autoplay: {
	// 			delay: -100,      // Минимальная задержка
	// 			disableOnInteraction: false, // Не останавливать при взаимодействии
	// 		},

	// 		// Пагінація
	// 		/*
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		*/

	// 		// Скроллбар
	// 		/*
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			draggable: true,
	// 		},
	// 		*/

	// 		// Кнопки "вліво/вправо"
	// 		// navigation: {
	// 		// 	prevEl: '.swiper-button-prev',
	// 		// 	nextEl: '.swiper-button-next',
	// 		// },
	// 		// Брейкпоінти
	// 		breakpoints: {
	// 			550: {
	// 				slidesPerView: 2.4,
	// 			},
	// 			750: {
	// 				slidesPerView: 3.2,
	// 			},
	// 			992: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 5,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }

}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});