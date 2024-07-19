import { Router } from "express";
import { InserirDado,MostrarDado,buscarPais,buscarId,excluirEstatistica } from "../controller/estatistica.controller.js";

const router = Router();

router.post('/estatistica/inserir',(req,res)=>{
    const {pais,fome_indice,desigualdade_social,escolaridade_indice} = req.body
    const novaEstatistica = InserirDado(pais,fome_indice,desigualdade_social,escolaridade_indice)
    res.send({novaEstatistica})
})

router.get("/estatistica", (req,res)=>{
    const listar = MostrarDado()
    res.send({listar})
})

router.get("/estatistica/pais/:pais",(req,res)=>{
    const pais = req.params.pais
    res.send(buscarPais(pais))
})

router.get("/estatistica/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const dado = buscarId(id)
    if(!dado){
        return res.status(404).send("Estatistica não encontrada")
    }
    res.send(dado)
})

router.delete("/estatistica/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const dado = excluirEstatistica(id)
    if(!dado){
        return res.status(404).send("Estatistica não encontrada")
    }
    res.send(dado)
})

export{router}