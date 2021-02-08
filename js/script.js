import tabs from './modules/tabs';
import scrolling from './modules/scrolling';
import post from './modules/post';
import mask from './modules/mask';
import calc from './modules/calculate';
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    try { tabs('.tab', '.click-menu') } catch (e) {};
    try { scrolling() } catch (e) {};
    try { post() } catch (e) {};
    try { mask('[name="phone"]') } catch (e) {};
    try { calc('.vybor', '.summ', '.fa-plus', '.zakaz') } catch (e) {};
});