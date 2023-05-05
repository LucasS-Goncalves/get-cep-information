export class MessageView{

    spanError

    constructor(){
        this.spanError = document.getElementById('error_message');
    }

    template(model){
        this.spanError.innerHTML = `<p class="text-danger">${model}</p>`
    }

    cleanTemplate(){
        this.spanError.innerHTML = '';
    }
}