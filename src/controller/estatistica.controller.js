import { Estatistica } from "../model/estatisticas.model.js";

let listaDeEstatistica = [
new Estatistica (  'Brasil',  '15,5%',  '26%',  '36%' ),
new Estatistica (  'Argentina',  '10%',  '35%',  '40%' ),
new Estatistica (  'Índia',  '14%',  '33%',  '30%' ),
new Estatistica (  'Nigéria',  '20%',  '43%',  '25%' ),
];

export const InserirDado = (pais,fome_indice,desigualdade_social,escolaridade_indice) =>{
    let dado = new Estatistica (pais,fome_indice,desigualdade_social,escolaridade_indice);
    listaDeEstatistica.push(dado)
    return dado
};

export const MostrarDado = () =>{
    return listaDeEstatistica;
};

export const buscarPais = (nome)=>{
    return listaDeEstatistica.filter(({pais})=> pais == nome)
}

export const buscarId = (id)=>{
    return listaDeEstatistica.find(busca=>busca.id == id)
}

export const excluirEstatistica = (id)=>{
    const index = listaDeEstatistica.findIndex(procurar=>procurar.id == id)

    if(index == -1) return null;
    const estatisticaExcluida = listaDeEstatistica.splice(index,1)
    return estatisticaExcluida[0]
}