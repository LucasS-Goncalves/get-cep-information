import { View } from "../view/view.js";
import { MessageView } from "../view/message-view.js";

export class GetCep{

    templateView
    errorMessage

    constructor(){

    this.templateView = new View();
    this.errorMessage = new MessageView();

    }

    findCep(cep){
        
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if(data.erro){
                    this.errorMessage.template();
                    throw Error('This CEP does not exist.');                   
                } else {
                   this.templateView.template(data)
                }
            }).catch(error => console.log(error)); 
    };
};