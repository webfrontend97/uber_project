window.addEventListener('DOMContentLoaded', () => {

    //Open menu media <= 767px

    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuItem = document.querySelectorAll('.menu_item');

    function openAndCloseMenu() {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            });
        });
    }

    //Modal

    const modal = document.querySelector('.modal');
    const btn = document.querySelectorAll('.btn');
    const form = document.querySelector('form');
    const bg = document.querySelector('.bg');
    const closeBtn = document.querySelector('.modal_close');

    function openModal() {
        btn.forEach(item => {
            item.addEventListener('click', () => {
                modal.classList.toggle('show');
                bg.classList.toggle('show');
                // document.body.style.overflow = 'hidden';
            });
        });
    }

    function closeModal() {
        closeBtn.addEventListener('click', () => {
            modal.classList.toggle('show');
            bg.classList.toggle('show');
            // document.body.style.overflow = '';
        });
    }

    //Post request

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            postData('http://localhost:3000/requests', json);
        });
    }

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };

    openAndCloseMenu();
    openModal();
    closeModal();
    bindPostData(form);
});
