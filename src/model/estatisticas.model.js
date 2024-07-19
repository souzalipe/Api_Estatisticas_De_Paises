let id_auto = 1

export class Estatistica {
    constructor(pais,fome_indice,desigualdade_social,escolaridade_indice){
        this.id = id_auto++;
        this.pais = pais;
        this.fome_indice = fome_indice;
        this.desigualdade_social = desigualdade_social;
        this.escolaridade_indice = escolaridade_indice;
    }
}