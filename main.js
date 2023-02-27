const form = document.getElementById('form-notas')
let linhas = '';
let contReprovado = 0;
let contAprovado = 0;
let mediaGeral = 0;
const materias = []
const verTable  = document.querySelector('table')
const verFoot = document.querySelector('tfoot')
const corpoDaTabela = document.querySelector('tbody');

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinhasMaisMedia()
    
    verTabela(verFoot,verTable,corpoDaTabela)

    atualizarRodape(contReprovado, contAprovado, mediaGeral)
})

function verTabela(verFoot,verTable,corpoDaTabela){
    verTable.style.display = "table"
    verFoot.style.display = "table-footer-group"
    corpoDaTabela.style.display = "table-row-group";
}

function atualizarRodape(contReprovado, contAprovado, mediaGeral) {
    const rodapeDaTabela = document.querySelector('tfoot tr td');
    rodapeDaTabela.innerHTML = `Sua média geral foi:<span style="color: blue;"> ${(mediaGeral / (contAprovado + contReprovado)).toFixed(1)}</span>. Total de aprovações: <span style="color: #00A991;">${contAprovado}</span>. Total de reprovações: <span style="color:red;">${contReprovado}</span> `;
}

function resetarFormulário(nomeMateria,notaUm,notaDois,notaTres,notaQuatro){
    nomeMateria.value = '';
    notaUm.value = '';
    notaDois.value = '';
    notaTres.value = '';
    notaQuatro.value = '';
}

function adicionarLinhasMaisMedia(){
    const nomeMateria = document.getElementById('nome-materia')
    const notaUm = document.getElementById('nota-um')
    const notaDois = document.getElementById('nota-dois')
    const notaTres = document.getElementById('nota-tres')
    const notaQuatro = document.getElementById('nota-quatro')
    const media = (parseFloat(notaUm.value) + parseFloat(notaDois.value) + parseFloat(notaTres.value) + parseFloat(notaQuatro.value))/4
    if(materias.includes(nomeMateria.value)){
        alert(`teste`)
    }
    else{
    materias.push(nomeMateria.value)
    let linha = '<tr>';
    linha += `<td>${nomeMateria.value}</td>`
    linha += `<td>${notaUm.value}</td>`
    linha += `<td>${notaDois.value}</td>`
    linha += `<td>${notaTres.value}</td>`
    linha += `<td>${notaQuatro.value}</td>`
    linha += `<td>${media.toFixed(1)}</td>`
    linha += `<td>${media >= 7 ? '<span style="color: #00A991;">Aprovado</span>' : '<span style="color:red;">Reprovado</span>'}</td>`;
    linha +=  '</tr>'

    linhas += linha;
    corpoDaTabela.innerHTML = linhas;

    if (media >= 7) {
        contAprovado += 1;
    } else {
        contReprovado += 1;
    }

    mediaGeral += + media; 

}
resetarFormulário(nomeMateria,notaUm,notaDois,notaTres,notaQuatro)
}