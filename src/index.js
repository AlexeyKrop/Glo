"use strict";
import countTimer from "./modules/countTimer";
import scrolling from "./modules/scrolling";
import toggleMenu from "./modules/toggleMenu";
import togglePopup from "./modules/togglePopup";
import tabs from "./modules/tabs";
import calc from "./modules/calc";
import porfolioSlider from "./modules/porfolioSlider";
import changePhoto from "./modules/changePhoto";
import validation from "./modules/validation";
import checkData from "./modules/checkData";
import sendForm from "./modules/sendForm";
import carousel from "./modules/sliderCarousel";

// счетчик акции

let idInterval = setInterval(countTimer, 1000, "12 april 2021");

// прокуртка

scrolling();

// меню

toggleMenu();

// popup

togglePopup();

// табы

tabs();

// слайдер

porfolioSlider();

// функция смена фотографий

changePhoto();

// функция перебора кнопок

// функция валидации

validation();

// функция коррекции введенных данных

checkData();

// калькулятор

calc(100);

// слайдер карусель

carousel.init();

// отправка формы на сервер

sendForm();
