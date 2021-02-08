const tabs = (tabs, contents) => {
    const btns = document.querySelectorAll(tabs),
        wrapper = document.querySelectorAll(contents);

    function hideContent() {
        wrapper.forEach(item => {
            item.style.display = 'none';
        });
        btns.forEach(btn => {
            btn.classList.remove('active');
        });

    }

    function showContent(i = 0) {
        wrapper[i].style.display = 'block';
        btns[i].classList.add('active');
    }
    hideContent();
    showContent();


    btns.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            if (e.target) {
                hideContent();
                showContent(i);
            }
        });
    });

}
export default tabs;