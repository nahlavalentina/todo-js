class Model {
    constructor(){
        this.titulo = '',
        this.descricao = '',
        this.status = '',
        this.data = '',
        this.id = ''
    }

//Getters
    getTitulo(){
        return this.titulo;
    }

    getDescricao(){
        return this.descricao;
    }

    getStatus(){
        return this.status;
    }

    getData(){
        return this.data;
    }

    getId(){
        return this.id;
    }

//Setters
    setTitulo(novoTitulo){
        this.titulo = novoTitulo;
    }

    setDescricao(novaDescricao){
        this.descricao = novaDescricao;
    }


    setStatus(novoStatus){
        this.status = novoStatus;
    }

    setData(novaData){
        this.data = novaData;
    }
}