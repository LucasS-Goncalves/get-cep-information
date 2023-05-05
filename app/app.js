import { Controller } from "./controller/controller.js";

const getInfoButton = document.getElementById('getInfo_button');
const controller = new Controller();
getInfoButton.addEventListener('click', (e) => {
    
    e.preventDefault();
    controller.showsCepInfo();
});

