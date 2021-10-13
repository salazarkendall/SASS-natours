const navCheckbox = document.getElementById('navi-toggle');
const navItems = document
	.querySelectorAll('.navigation__item')
	.forEach((item) => {
		item.addEventListener('click', () => {
			navCheckbox.checked = false;
		});
	});
