export class View {

    divView;
    
    constructor(){
        this.divView = document.getElementById('information');
    }

    template(data){
        this.divView.innerHTML += 
        `<div class="alert alert-primary alert-dismissible fade show m-3">
            <h4 class="alert-heading display-4 fs-3">Location Info</h4>
            <button class="btn-close btn-close-outline" data-bs-dismiss="alert"></button>
            <ul>
                <li><strong>CEP</strong>: ${data.cep}</li>
                <li><strong>UF</strong>: ${data.uf}</li>
                <li><strong>DDD</strong>: ${data.ddd}</li>
                <li><strong>Localidade</strong>: ${data.localidade}</li>
                <li><strong>Bairro</strong>: ${data.bairro}</li>
                <li><strong>Logradouro</strong>: ${data.logradouro}</li>
                <li><strong>Ibge</strong>: ${data.ibge}</li>
                <li><strong>Siafi</strong>: ${data.siafi}</li>
            </ul>
        </div>`
    }
}