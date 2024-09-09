function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("buscaLivro").value;

    if(campoPesquisa == ""){
        section.innerHTML = `<p> Pesquisa vazia não retorna valor, por favor digite algo. </p>`
        return
    }
campoPesquisa = campoPesquisa.toLowerCase();

let resultados = "";
let titulo = "";
let escritor = "";
let resenha = "";

for (let dado of dados){
    titulo = dado.Titulo.toLowerCase();
    escritor = dado.Escritor.toLowerCase();
    resenha = dado.resenha.toLowerCase();

    if(titulo.includes(campoPesquisa) || escritor.includes(campoPesquisa) || resenha.includes(campoPesquisa) ){
    
        resultados += `
        <div class="item-resultado">
            <div class="Img">
                <img src=${dado.Imagem} alt= ${dado.Titulo}  width="100px">
            </div>
            <div class="resenha">
                <h2>${dado.Titulo} -  ${dado.Escritor}</h2>
                <p class="descricao-meta">${dado.resenha}</p>
            </div>
        </div>
    `;
    }

    if(!resultados){
        resultados = `<p> Nada foi encontrado. </p>`
    }
}

section.innerHTML = resultados;
}

