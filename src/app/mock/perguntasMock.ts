import { Component, OnInit } from '@angular/core'
import { PerguntasCategoria } from '../entidades/PerguntasCategoria'

export class PerguntasMock {
    perguntas: PerguntasCategoria[]

    constructor() {
        this.perguntas = []
        
        this.perguntas[0] = {categoria: "Tatuador", label:"Informações sobre a tatuagem desejada", perguntas: ["Qual o estilo?", "Qual o tamanho?"]}
        this.perguntas[1] = {categoria: "Maquiador", label:"Informações sobre a Maquiagem desejada", perguntas: ["Qual o evento na qual a maquiagem será necessária? Ex: Casamento, Formatura", "Qual a idade da pessoa a ser maquiada?"]}
        this.perguntas[2] = {categoria: "Babá", label: "Informações sobre a criança que necessita de cuidados", perguntas: ["Qual a idade da criança?", "Qual o sexo da criança?"]}
        this.perguntas[3] = {categoria: "Faxineira", label:"Informações sobre a Faxina desejada", perguntas: ["Qual o dia, turno e horário da faxina?", "Quantos cômodos necessiam de faxina?"]}
        this.perguntas[4] = {categoria: "Desenvolvedor Mobile", label:"Informações sobre o aplicativo mobile necessário", perguntas: ["Qual o Sistema Operacional deverá ser utilizado o aplicativo?", "Qual a Linguagem de programação desejada?"]}
        this.perguntas[5] = {categoria: "Desenvolvedor Web", label:"Informações sobre a aplicação Web necessária", perguntas: ["Quais Frameworks devem ser utilizado na aplicação?", "Qual Banco de dados deve ser utilizado?"]}
        this.perguntas[6] = {categoria: "Advogada", label:"Informações sobre a ocasição na qual a Advogada será requisiada", perguntas: ["Qual sua ocorrência juridica?", "?"]}
        this.perguntas[7] = {categoria: "Professora de Direito", label:"Informações sobre a aula de direito desejada", perguntas: ["Qual o dia, turno e horário da aula ?", "Tipo de aula? Ex: Particular, Pública"]}
        this.perguntas[8] = {categoria: "Cozinheira", label:"Informações sobre o evento na qual a Cozinheira será requisiada", perguntas: ["Qual o tipo de comida deverá ser servida no evento? Ex: Caseira, Gourmet", "Quantas pessoas deverão ser servidas?"]}
        this.perguntas[9] = {categoria: "Confeiteira", label:"Informações sobre a sobremesa desejada", perguntas: ["Qual o tipo da sobremesa? Ex: Bolo, Pudim, Brigadeiro", "Quantas unidades serão necessárias?"]}
        this.perguntas[10] = {categoria: "Encanador", label:"Informações sobre o local do serviço necessário", perguntas: ["Qual local precisa de reparo?", "Existe algum vazamento no local?"]}
        this.perguntas[11] = {categoria: "Mecânico", label:"Informações sobre o veículo que necessita de reparo", perguntas: ["Qual o veículo com problema? Ex: Moto, Carro", "Qual o modelo do veículo?"]}
        this.perguntas[12] = {categoria: "Arquiteto", label:"Informações sobre o local que será reformado", perguntas: ["Qual o cômodo da casa receberá a reforma? Ex: Sala, Quarto, Cozinha", "Qual o tamanho da área do cômodo?"]}
        this.perguntas[13] = {categoria: "Engenheiro Civil", label:"Informações sobre a obra que será construída", perguntas: ["Qual o tipo de obra? Ex: Prédio, Casa", "Qual o orçamento da obra?"]}
        this.perguntas[14] = {categoria: "Palhaço", label:"Informações sobre o evento ou ocasição na qual o Palhaço se apresentará", perguntas: ["Qual a faixa etária das crianças presentes?", "Qual o tipo de ocasião? Ex: Aniversário Infantil, Evento familiar"]}
        this.perguntas[15] = {categoria: "Comediante", label:"Informações sobre o evento ou ocasição na qual o Comediante se apresentará", perguntas: ["Qual o público alvo? Ex:infantil, adulto", "Qual o tipo de ocasião? Ex: Evento aberto ao público, Evento privado"]}
        this.perguntas[16] = {categoria: "Corretor de Imóveis", label:"Informações sobre o ímovel", perguntas: ["Qual o ímovel disponível?", "Quais as formas de pagamento?"]}
        this.perguntas[17] = {categoria: "Professor de Tênis", label:"Informações sobre a aula de tênis desejada", perguntas: ["Qual o dia, turno e horário da aula ?", "Qual a duração da aula?"]}
    }
}