const navCheckbox = document.getElementById('navi-toggle');
const navItems = document
	.querySelectorAll('.navigation__item')
	.forEach((item) => {
		item.addEventListener('click', (event) => {
			navCheckbox.checked = false;
		});
	});
