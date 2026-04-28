function logar() {
    // Pegando os valores pelos IDs definidos no seu HTML (log e senha)
    const email = document.getElementById('log').value.trim();
    const chave = document.getElementById('senha').value.trim();

    if (email === "admin" && chave === "admin") {
        sessionStorage.setItem("userRole", "gestor");
        alert("Bem-vindo, Gestor!");
        window.location.href = "projetohome.html";
    }
    else if (email === "operacional" && chave === "opec2026") {
        sessionStorage.setItem("userRole", "atendimento");
        alert("Bem-vindo, Operador!");
        window.location.href = "projetohome2.html";
    }
    else {
        alert("E-mail ou Senha incorretos.");
        // Limpando os campos após erro
        document.getElementById('log').value = "";
        document.getElementById('senha').value = "";
    }
}
function cadastrarProduto() {
    const produto = document.getElementById('produtoP').value;
    const fornecedor = document.getElementById('fornecedorProduto').value;

    if (produto === "" || fornecedor === "") {
        alert("Por favor, preencha todos os campos!");
        window.location.href="projetotesteproduto.html";
    }

    // Em vez de esconder o container todo, esconda apenas os inputs
    // (Certifique-se de envolver seus inputs em uma div com id="areaFormulario")
    document.getElementById('areaFormulario').style.display = 'none';

    // Aqui definimos como 'block' para o elemento APARECER
    const telaSucesso = document.getElementById('btnCadastrar');
    telaSucesso.style.display = 'block';

    document.getElementById('mensagemProdutoCadastro').innerText = "Cadastrado com sucesso!";
    document.getElementById('nomeSetor').innerText = "Produto: " + produto;

}

const fornec = document.getElementById('fornecedorProduto');
if (fornec) IMask(fornec,{ mask: ' 00/000-0000' });