// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


function borderRadiusFunction() {
	const galleryItems = document.querySelectorAll('.solution-item');
	if (!galleryItems.length) return;

	const resetCorners = () => {
		galleryItems.forEach(item => {
			item.style.borderRadius = '0';
		});
	};

	const applyCorners = () => {
		resetCorners();

		const totalItems = galleryItems.length;
		// Определяем количество колонок в зависимости от ширины экрана
		const columns = window.innerWidth > 992 ? 3 : window.innerWidth > 700 ? 2 : 1;


		const rows = Math.ceil(totalItems / columns);
		const borderRadius = '12px'
		galleryItems.forEach((item, index) => {
			const currentRow = Math.floor(index / columns) + 1;
			const currentCol = (index % columns) + 1;

			// console.log(currentRow, currentCol)


			// Первый элемент (верхний левый)
			if (index === 0) {
				item.style.borderTopLeftRadius = borderRadius;
			}

			// Последний элемент в первом ряду (верхний правый)
			if (currentRow === 1 && currentCol === columns) {
				item.style.borderTopRightRadius = borderRadius;
			}

			// Первый элемент в последнем ряду (нижний левый)
			if (currentRow === rows && currentCol === 1) {
				item.style.borderBottomLeftRadius = borderRadius;
			}
			// Последний элемент в последнем ряду (нижний правый)
			if (currentRow === rows && currentCol === columns) {
				item.style.borderBottomRightRadius = borderRadius;
			}
		});
	};

	// Применяем углы при загрузке
	applyCorners();

	// Добавляем обработчик изменения размера окна
	let resizeTimeout;
	window.addEventListener('resize', () => {
		// Используем debounce для оптимизации
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(applyCorners, 100);
	});
}
window.onload = () => {
	borderRadiusFunction()
}
