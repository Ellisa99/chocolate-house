const post = () => {
    const inputs = document.querySelectorAll('input'),
        forms = document.querySelectorAll('form'),
        textareas = document.querySelectorAll('textarea');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с Вами свяжемся!',
        failure: 'Ошибка...Сервер временно не доступен',
    };

    let clearForm = (elem) => {
        elem.forEach(input => {
            input.value = '';
        });
    };


    const postData = async(url, data) => {

        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    };



    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            form.parentNode.appendChild(statusMessage);
            let textMessage = document.createElement('div');
            statusMessage.style.padding = '30px';
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);
            const formData = new FormData(form);

            postData('server.php', formData)
                .then(res => {
                    console.log(res);
                    textMessage.textContent = `${message.success}`;
                    forms.forEach(form => form.classList.add('hide'));
                })
                .catch(() => textMessage.textContent = message.failure)
                .finally(() => {
                    clearForm(inputs);
                    clearForm(textareas);
                    setTimeout(() => {
                        statusMessage.remove();
                        forms.forEach(form => form.classList.remove('hide'));

                    }, 3000);
                });


        });

    });
}
export default post;