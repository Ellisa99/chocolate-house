const mask = (selector) => {
    let inputs = document.querySelector(selector);


    let setCursorPosition = (pos, elem) => {
        elem.focus();

        if (elem.setSelectionRange) { // если начало и конец одинаковые, то мы поставили курсор в определенную позицию
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) { // для старого браузера
            let range = elem.createTextRange();

            range.collapse(true); //объединит первую позицию с последней
            range.moveEnd('character', pos); //конкретно где конечная точка
            range.moveStart('character', pos); //конкретно где начальная точка
            range.select();
        }
    };

    function createMask(event) {
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');


        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a) {

            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {

            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }



        if (event.type === 'input') {
            // console.log(this.value[1]);
            if (this.value[0] !== '+' || this.value[1] !== '7') {
                // console.log(this.value[1]);
                this.value = '';
                this.value = '';
            }


        }

    }
    inputs.addEventListener('input', createMask);
    inputs.addEventListener('focus', createMask);
    inputs.addEventListener('blur', createMask);

};
export default mask;