async function main() {
    try {
        const resposta = await fetch('https://official-joke-api.appspot.com/random_joke');
        const dados = await resposta.json();

        document.getElementById("setup").textContent = dados.setup;
        document.getElementById("punch").textContent = dados.punchline;
    } catch (erro) {
        console.log("Erro:", erro);
    }
}

main();