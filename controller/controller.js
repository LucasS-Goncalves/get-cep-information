import { GetCep } from "../app/helpers/getCep.js";

export class Controller {

    cepInput
    getCep

    constructor(){
        
        this.cepInput = document.getElementById('cep');
        this.getCep = new GetCep();
    }

    showsCepInfo(){
       this.getCep.findCep(this.cepInput.value);
       this.cepInput.value = '';

    }
}