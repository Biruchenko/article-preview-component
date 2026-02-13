const shareBtn = document.querySelector('.share__btn');
const shareBtnClose = document.querySelector('.share__btn--active');
const shareBody = document.querySelector('.share__body');

if (shareBtn && shareBody) {
	shareBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		shareBody.classList.toggle('active');
	});
}

if (shareBtnClose && shareBody) {
	shareBtnClose.addEventListener('click', (e) => {
		e.stopPropagation();
		shareBody.classList.remove('active');
	});
}

// Close when clicking outside the share area
document.addEventListener('click', (e) => {
	if (!shareBody) return;
	const isActive = shareBody.classList.contains('active');
	if (!isActive) return;
	const clickInside = e.target.closest && e.target.closest('.share');
	if (!clickInside) shareBody.classList.remove('active');
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
	if (!shareBody) return;
	if (e.key === 'Escape' && shareBody.classList.contains('active')) {
		shareBody.classList.remove('active');
	}
});
