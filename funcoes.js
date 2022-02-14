
//-----------------------------------------------------------------------------------------------------------
function validarViajante(idNomeViajante, idCodViajante, idQtidadeViajante) {
    let nome = document.getElementById(idNomeViajante).value;
    let codigo = document.getElementById(idCodViajante).value;
    let qtidade = document.getElementById(idQtidadeViajante).value;

    if (nome == "")
        alert("Nome do Viajante não pode estar em branco. Favor preenchê-lo!");
    else if (codigo == "")
        alert("Código do Viajante não pode estar em branco. Favor preenchê-lo!");
	
    else cadastrarViajante(nome, codigo, parseInt(qtidade));
}
//-----------------------------------------------------------------------------------------------------------

function cadastrarViajante(viajante, codig, qtidade) {
    let novoViajante = {nome:viajante, codigo:codig, quantidade:qtidade};

    if (typeof(Storage) !== "undefined") {
        let viajantes = localStorage.getItem("viajantes");
        if (viajantes == null) viajantes = []; // Nenhum viajante ainda foi cadastrado
        else viajantes = JSON.parse(viajantes);
        viajantes.push(novoViajante); // Adiciona um novo viajante
        localStorage.setItem("viajantes",JSON.stringify(viajantes))
        alert("Foram cadastradas com sucesso "+qtidade+" quantidade de viajantes "+ viajante+"!");
        atualizarTotalEstoque("totalViajantes");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

//-----------------------------------------------------------------------------------------------------------

function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalViajantes",++document.getElementById(idCampo).innerHTML)
}
//-----------------------------------------------------------------------------------------------------------

function carregarTotalViajantes(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalViajantes = localStorage.getItem("totalViajantes");
        if (totalViajantes == null) totalViajantes = 0;
        document.getElementById(idCampo).innerHTML = totalViajantes;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

//-----------------------------------------------------------------------------------------------------------

function listarViajantes() {
    if (typeof(Storage) !== "undefined") {
        let viajantes = localStorage.getItem("viajantes");
        document.write("<h1>Controle:</h1>")
        if (viajantes == null)
            document.write("<h3>Ainda não há nenhum item no cadastro</h3>");
        else {
            viajantes = JSON.parse(viajantes);
            viajantes.forEach(viajante => {
                document.write("<ul>");
                document.write("<li>Nome do viajante: "+viajante.nome+"</li>");
                document.write("<li>Código do viajante: "+viajante.codigo+"</li>");
                document.write("<li>Acompanhantes: "+viajante.quantidade+"</li>");
                document.write("</ul>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}