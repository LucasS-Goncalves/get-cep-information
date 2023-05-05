import { View } from "../view/view.js";
import { MessageView } from "../view/message-view.js";

export class GetCep{

    cepInput
    templateView
    errorMessage

    constructor(){
    this.cepInput = document.getElementById('cep')
    this.templateView = new View();
    this.errorMessage = new MessageView();

    }

    findCep(cep){
        
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if(data.erro){
                    throw Error('This CEP does not exist.');               
                } else {
                    this.errorMessage.cleanTemplate();
                    this.templateView.template(data);
                    this.cepInput.value = '';
                                   
                }
            }).catch(error => {
                console.log(error);
                this.errorMessage.cleanTemplate();
                this.errorMessage.template('This CEP is either not valid or it does not exist')
            }); 
    };
};