
function microondas() {

    //mudando display de None para flex
    let mudarDisplay = document.getElementById('resultado')
    mudarDisplay.style.display="flex"

    //coletando os dados dos inputs
    let opcao = document.getElementById('opcaoPrato').value
    let tempo = document.getElementById('tempoDePreparo').value

    //iniciando variavel que será exibida no final
    let mensagem

    //verificando qual prato escolhido e verificando o tempo de preparo
    if (opcao == 1) {
        if (tempo < 10) {
            mensagem = `Tempo insuficiente`
        } else if (tempo > 20 && tempo <= 30) {
            mensagem=`Sua pipoca queimou!`
        } else if (tempo > 30) {
            mensagem=`Kaboom!`
        } else {
            mensagem=`Prato pronto! Bom apetite!`
        }
    } else if (opcao == 2) {
        if (tempo < 8) {
            mensagem = `Tempo insuficiente`
        } else if (tempo > 16 && tempo <= 24) {
            mensagem=`Seu macarrão queimou!`
        } else if (tempo > 24) {
            mensagem=`Kaboom!`
        } else {
            mensagem=`Prato pronto! Bom apetite!`
        }
    } else if (opcao == 3) {
        if (tempo < 15) {
            mensagem = `Tempo insuficiente`
        } else if (tempo > 30 && tempo <= 45) {
            mensagem=`Sua carne queimou!`
        } else if (tempo > 45) {
            mensagem=`Kaboom!`
        } else {
            mensagem=`Prato pronto! Bom apetite!`
        }
    } else if (opcao == 4) {
        if (tempo < 12) {
            mensagem = `Tempo insuficiente`
        } else if (tempo > 24 && tempo <= 36) {
            mensagem=`Seu feijão queimou!`
        } else if (tempo > 36) {
            mensagem=`Kaboom!`
        } else {
            mensagem=`Prato pronto! Bom apetite!`
        }
    } else if (opcao == 5) {
        if (tempo < 8) {
            mensagem = `Tempo insuficiente`
        } else if (tempo > 16 && tempo <= 24) {
            mensagem=`Seu brigadeiro queimou!`
        } else if (tempo > 24) {
            mensagem=`Kaboom!`
        } else {
            mensagem=`Prato pronto! Bom apetite!`
        }
    } else { mensagem=`Prato Inexistente` }

    //imprimindo mensagem para tela
    document.getElementById('resultado').innerHTML = mensagem
}
