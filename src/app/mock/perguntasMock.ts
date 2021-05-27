import { Component, OnInit } from '@angular/core'
import { PerguntasCategoria } from '../entidades/PerguntasCategoria'

export class PlaylistsMock {
    perguntas: PerguntasCategoria[]

    constructor() {
        this.perguntas = []
        
        this.perguntas[0] = {categoria: "Tatuador", label:"Informações sobre a tatuagem desejada", perguntas: ["Qual o estilo?", "Qual o tamanho?"]}
        this.perguntas[1] = {categoria: "Babá", label: "Informações sobre a criança que necessita de cuidados", perguntas: ["Qual a idade da criança?", "Qual o sexo da criança?"]}
        this.perguntas[2] = {categoria: "Palhaço", label:"Informações sobre o evento ou ocasição na qual o Palhaço se apresentará", perguntas: ["Qual o público alvo? Ex:infantil, adulto", "Qual o tipo de ocasião? Ex: Evento aberto ao público, Evento em família"]}
    }
}