 //Повторение кода!!!
 const calc = (area, displ, trigger, zakaz) => {
     const tovar = document.querySelectorAll(area),
         summa = document.querySelector(displ),
         event = ['mouseover', 'mouseout'],
         plus = document.querySelectorAll(trigger),
         korzina = document.querySelector(zakaz),
         chocolate = {
             tr1: 'Трюфель из темного шоколада с орехами',
             tr2: 'Трюфель из белого шоколада с орехами',
             tr3: 'Трюфель из молочного шоколада с карамелью',
             tr4: 'Трюфель из темного шоколада с малиной',
             ch1: 'Карамельно-банановый десерт',
             ch2: 'Печенье с ванильным кремом',
             ch3: 'Черно-белое сердце',
             ch4: 'Плитка шоколада с золотыми фисташками',
         };

     let perem = 0,
         numbofZaktr1 = 0,
         numbofZaktr2 = 0,
         numbofZaktr3 = 0,
         numbofZaktr4 = 0,
         numbofZakch1 = 0,
         numbofZakch2 = 0,
         numbofZakch3 = 0,
         numbofZakch4 = 0;

     event.forEach(ev => {
         tovar.forEach(item => {
             if (ev === 'mouseover') {
                 item.addEventListener(ev, function() {
                     plus.forEach(el => el.classList.remove('hide'));
                 });
             } else {
                 item.addEventListener(ev, function() {
                     plus.forEach(el => el.classList.add('hide'));
                 });
             }
         });
     });
     let container = document.createElement('div');
     korzina.firstElementChild.insertAdjacentElement('afterend', container);
     container.innerHTML = `<div class = 'truff1 hide tr1' > <div class = 'truff1_1'></div>  <span data-price='90' data-numb='tr1' class='minus truff1'>-</span>  <span class='numtr1'></span> <span data-price='90' data-numb='tr1' class="plus truff1">+</span></div>
   
    <div class = 'truff2 hide tr2 ' > <div class = 'truff2_2'></div> <span data-price='90' data-numb='tr2' class='minus truff2'>-</span><span class='numtr2'></span> <span data-price='90' data-numb='tr2' class="plus truff2">+</span></div>

    <div class = 'truff3 hide tr3' > <div class = 'truff3_3'></div> <span data-price='90' data-numb='tr3' class='minus truff3'>-</span> <span class='numtr3'></span><span data-price='90' data-numb='tr3' class="plus truff3">+</span></div>

    <div class = 'truff4 hide tr4' > <div class = 'truff4_4'></div> <span data-price='90' data-numb='tr4' class='minus truff4'>-</span> <span class='numtr4'></span><span data-price='90' data-numb='tr4' class="plus truff4">+</span></div>

    <div class = 'chocc1 hide ch1'><div class = 'chocc1_1'></div> <span data-price='90' data-numb='ch1' class='minus chocc1'>-</span> <span class='numch1'></span><span data-price='90' data-numb='ch1' class='plus chocc1'>+</span></div>

   <div class = 'chocc2 hide ch2' ><div class = 'chocc2_2'></div> <span data-price='90' data-numb='ch2' class='minus chocc2'>-</span> <span class='numch2'></span><span data-price='90' data-numb='ch2' class='plus chocc2'>+</span></div>

   <div class = 'chocc3 hide ch3'><div class = 'chocc3_3'></div> <span data-price='90' data-numb='ch3' class='minus chocc3'>-</span> <span class='numch3'></span><span data-price='90' data-numb='ch3' class='plus chocc3'>+</span></div>

   <div class = 'chocc4 hide ch4'><div class = 'chocc4_4'></div> <span data-price='90' data-numb='ch4' class='minus chocc4'>-</span> <span class='numch4'></span><span data-price='90' data-numb='ch4' class='plus chocc4'>+</span></div>`;

     function createZakaz(target, n) {
         const checktr1 = 'tr1',
             checktr2 = 'tr2',
             checktr3 = 'tr3',
             checktr4 = 'tr4',
             checkch1 = 'ch1',
             checkch2 = 'ch2',
             checkch3 = 'ch3',
             checkch4 = 'ch4';

         switch (target.getAttribute('data-numb')) {
             case 'tr1':
                 numbofZaktr1 += n;
                 perem += n * (+target.getAttribute('data-price'));
                 summa.textContent = `Сумма: ${perem}`;
                 container.querySelector('.truff1_1').innerHTML = `<p data-price = '90' >${numbofZaktr1} x ${chocolate['tr1']} <span data-del = 'deletetr1' class = 'delete'>x</span></p>`;
                 container.querySelector('.numtr1').innerHTML = `${ numbofZaktr1}`;
                 document.querySelector('.truff1').classList.remove('hide');
                 break;
             case 'tr2':
                 numbofZaktr2 += n;
                 perem += n * (+target.getAttribute('data-price'));
                 summa.textContent = `Сумма: ${perem}`;
                 container.querySelector('.truff2_2').innerHTML = `<p data-price = '90'>${numbofZaktr2} x ${chocolate['tr2']} <span data-del = 'deletetr2' class = 'delete'>x</span></p>`;
                 container.querySelector('.numtr2').innerHTML = `${ numbofZaktr2}`;
                 document.querySelector('.truff2').classList.remove('hide');
                 break;
             case 'tr3':
                 numbofZaktr3 += n;
                 perem += n * (+target.getAttribute('data-price'));
                 summa.textContent = `Сумма: ${perem}`;
                 container.querySelector('.truff3_3').innerHTML = `<p data-price = '90'>${numbofZaktr3} x ${chocolate['tr3']} <span data-del = 'deletetr3' class = 'delete'>x</span> </p>`;
                 container.querySelector('.numtr3').innerHTML = `${ numbofZaktr3}`;
                 document.querySelector('.truff3').classList.remove('hide');
                 break;
             case 'tr4':
                 numbofZaktr4 += n;
                 perem += n * (+target.getAttribute('data-price'));
                 summa.textContent = `Сумма: ${perem}`;
                 container.querySelector('.truff4_4').innerHTML = `<p data-price = '90'>${numbofZaktr4} x ${chocolate['tr4']} <span data-del = 'deletetr4' class = 'delete'>x</span></p>`;
                 container.querySelector('.numtr4').innerHTML = `${ numbofZaktr4}`;
                 document.querySelector('.truff4').classList.remove('hide');
                 break;
             case 'ch1':
                 numbofZakch1 += n;
                 perem += n * (+target.getAttribute('data-price'));
                 summa.textContent = `Сумма: ${perem}`;
                 container.querySelector('.chocc1_1').innerHTML = `<p data-price = '90'>${numbofZakch1} x ${chocolate['ch1']} <span data-del = 'deletech1' class = 'delete'>x</span></p>`;
                 container.querySelector('.numch1').innerHTML = `${ numbofZakch1}`;
                 document.querySelector('.chocc1').classList.remove('hide');
                 break;
             case 'ch2':
                 numbofZakch2 += n;
                 perem += n * (+target.getAttribute('data-price'));
                 summa.textContent = `Сумма: ${perem}`;
                 container.querySelector('.chocc2_2').innerHTML = `<p data-price = '90'>${numbofZakch2} x ${chocolate['ch2']} <span data-del = 'deletech2' class = 'delete'>x</span></p>`;
                 container.querySelector('.numch2').innerHTML = `${ numbofZakch2}`;
                 document.querySelector('.chocc2').classList.remove('hide');
                 break;
             case 'ch3':
                 numbofZakch3 += n;
                 perem += n * (+target.getAttribute('data-price'));
                 summa.textContent = `Сумма: ${perem}`;
                 container.querySelector('.chocc3_3').innerHTML = `<p data-price = '90'>${numbofZakch3} x ${chocolate['ch3']} <span data-del = 'deletech3' class = 'delete'>x</span> </p>`;
                 container.querySelector('.numch3').innerHTML = `${ numbofZakch3}`;
                 document.querySelector('.chocc3').classList.remove('hide');
                 break;
             case 'ch4':
                 numbofZakch4 += n;
                 perem += n * (+target.getAttribute('data-price'));
                 summa.textContent = `Сумма: ${perem}`;
                 container.querySelector('.chocc4_4').innerHTML = `<p data-price = '90'>${numbofZakch4} x ${chocolate['ch4']} <span data-del = 'deletech4' class = 'delete'>x</span></p>`;
                 container.querySelector('.numch4').innerHTML = `${ numbofZakch4}`;
                 document.querySelector('.chocc4').classList.remove('hide');
                 break;
         }
         switch (target.getAttribute('data-del')) {
             case 'deletetr1':
                 document.querySelector('.truff1').classList.add('hide');
                 perem -= numbofZaktr1 * target.parentNode.getAttribute('data-price');
                 summa.textContent = `Сумма: ${perem}`;
                 numbofZaktr1 = 0;
                 break;
             case 'deletetr2':
                 document.querySelector('.truff2').classList.add('hide');
                 perem -= numbofZaktr2 * target.parentNode.getAttribute('data-price');
                 summa.textContent = `Сумма: ${perem}`;
                 numbofZaktr2 = 0;
                 break;
             case 'deletetr3':
                 document.querySelector('.truff3').classList.add('hide');
                 perem -= numbofZaktr3 * target.parentNode.getAttribute('data-price');
                 summa.textContent = `Сумма: ${perem}`;
                 numbofZaktr3 = 0;
                 break;
             case 'deletetr4':
                 document.querySelector('.truff4').classList.add('hide');
                 perem -= numbofZaktr4 * target.parentNode.getAttribute('data-price');
                 summa.textContent = `Сумма: ${perem}`;
                 numbofZaktr4 = 0;
                 break;
             case 'deletech1':
                 document.querySelector('.chocc1').classList.add('hide');
                 perem -= numbofZakch1 * target.parentNode.getAttribute('data-price');
                 summa.textContent = `Сумма: ${perem}`;
                 numbofZakch1 = 0;
                 break;
             case 'deletech2':
                 document.querySelector('.chocc2').classList.add('hide');
                 perem -= numbofZakch2 * target.parentNode.getAttribute('data-price');
                 summa.textContent = `Сумма: ${perem}`;
                 numbofZakch2 = 0;
                 break;
             case 'deletech3':
                 document.querySelector('.chocc3').classList.add('hide');
                 perem -= numbofZakch3 * target.parentNode.getAttribute('data-price');
                 summa.textContent = `Сумма: ${perem}`;
                 numbofZakch3 = 0;
                 break;
             case 'deletech4':
                 document.querySelector('.chocc4').classList.add('hide');
                 perem -= numbofZakch4 * target.parentNode.getAttribute('data-price');
                 summa.textContent = `Сумма: ${perem}`;
                 numbofZakch4 = 0;
                 break;
             case 'clearZak':
                 document.querySelector('.chocc4').classList.add('hide');
                 document.querySelector('.chocc3').classList.add('hide');
                 document.querySelector('.chocc2').classList.add('hide');
                 document.querySelector('.chocc1').classList.add('hide');
                 document.querySelector('.truff1').classList.add('hide');
                 document.querySelector('.truff2').classList.add('hide');
                 document.querySelector('.truff3').classList.add('hide');
                 document.querySelector('.truff4').classList.add('hide');
                 perem = 0;
                 summa.textContent = `Сумма: `;
                 numbofZakch4 = 0;
                 numbofZakch3 = 0;
                 numbofZakch2 = 0;
                 numbofZakch1 = 0;
                 numbofZaktr4 = 0;
                 numbofZaktr3 = 0;
                 numbofZaktr2 = 0;
                 numbofZaktr1 = 0;
                 break;
         }

         if (perem > 0) {
             document.querySelector('.fa-shopping-cart').classList.remove('hide');
         } else {
             document.querySelector('.fa-shopping-cart').classList.add('hide');
         }

         function controlSum(n, letter) {
             if (n < 1) {
                 document.querySelector(`.${letter}`).classList.add('hide');
             }
         }
         controlSum(numbofZaktr1, checktr1);
         controlSum(numbofZaktr2, checktr2);
         controlSum(numbofZaktr3, checktr3);
         controlSum(numbofZaktr4, checktr4);
         controlSum(numbofZakch1, checkch1);
         controlSum(numbofZakch2, checkch2);
         controlSum(numbofZakch3, checkch3);
         controlSum(numbofZakch4, checkch4);
     }

     // по клику на меню +/- уменьшается количество и итоговая сумма или удаляется полностью элемент
     document.querySelector('.menu-vybor').addEventListener('click', (e) => {
         let target = e.target;
         if (target.classList.contains('plus')) {
             createZakaz(target, 1);
         } else if (target.classList.contains('minus')) {
             createZakaz(target, -1);
         } else if (target.classList.contains('delete')) {
             createZakaz(target, 1);
         } else if (target.classList.contains('send')) {
             if (perem > 0) {
                 document.querySelector('.modal_window').style.display = 'flex';
                 document.addEventListener('click', (e) => {
                     let target = e.target;
                     if (target.classList.contains('close') || target.classList.contains('modal_window')) {
                         document.querySelector('.modal_window').style.display = 'none';
                     }
                 });
                 setTimeout(() => {
                     document.querySelector('.modal_window').style.display = 'none';
                     createZakaz(target, 1);

                 }, 3000);
             }
         }
     });
 }
 export default calc;