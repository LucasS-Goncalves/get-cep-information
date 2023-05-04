export class MessageView{

    spanError

    constructor(){
        this.spanError = document.getElementById('error_message');
    }

    template(){
        this.spanError.innerHTML = `<p class="text-danger">This CEP does not exist</p>`
    }
}