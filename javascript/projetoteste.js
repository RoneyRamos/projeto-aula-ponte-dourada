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
    // 1. Captura os dados (apenas para exemplo)
    const produto = document.getElementById('produtoP').value;
    const fornecedor = document.getElementById('fornecedorProduto').value;

    // 2. Validação simples: verificar se os campos estão preenchidos
    if (produto === "" || fornecedor === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // 3. Esconde a parte do formulário (opcional, ou apenas oculte os campos)
    // Se quiser esconder o container todo, use a classe .loginContainer
    document.querySelector('.loginContainer').style.display = 'none';

    // 4. Exibe a mensagem de sucesso
    const telaSucesso = document.getElementById('btnCadastrar');
    telaSucesso.style.display = 'block';

    // 5. Define o texto da mensagem
    document.getElementById('mensagemProdutoCadastro').innerText = "Cadastrado com sucesso!";
    document.getElementById('nomeSetor').innerText = "Produto: " + produto;
}