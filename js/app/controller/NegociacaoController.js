class NegociacaoController {

    constructor() {
        $ = document.querySelector.bind(document)
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")
    }

    adiciona(event) {
        event.preventDefault()

    }

}