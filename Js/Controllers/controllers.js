class Controller {
    constructor(){
        this.listas = {
            pending: [],
            inProgress: [],
            success: []
        };
    }

    getListas(){
        return this.listas;
    }
}