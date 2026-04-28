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
function clientela() {
    // 1. Capturar os elementos dos inputs
    const nome = document.getElementById('nomeCliente').value;
    const cpf = document.getElementById('cpfCliente').value;
    const tel = document.getElementById('telCliente').value;
    const endereco = document.getElementById('endCliente').value;

    // 2. Verificar se os campos estão preenchidos
    if (nome === "" || cpf === "" || tel === "" || endereco === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // 3. Exibir a div de sucesso
    const divMensagem = document.getElementById('btnCadastrar');
    const msgTexto = document.getElementById('mensagemClienteCadastro');
    const setorTexto = document.getElementById('nomeSetorCliente');

    divMensagem.style.display = 'block'; // Torna visível

    // 4. Preencher as informações de retorno
    msgTexto.innerText = "Cliente cadastrado com sucesso: " + nome;
    setorTexto.innerText = "CADASTRO DE CLIENTES";

    // Opcional: Limpar os campos após o cadastro
    document.getElementById('nomeCliente').value = "";
    document.getElementById('cpfCliente').value = "";
    document.getElementById('telCliente').value = "";
    document.getElementById('endCliente').value = "";
}

// Opcional: Adicionar máscara simples para CPF e Telefone enquanto digita
document.getElementById('cpfCliente').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    e.target.value = value;
});

document.getElementById('telCliente').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    e.target.value = value;
});
