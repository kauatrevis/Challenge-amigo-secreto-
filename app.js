function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();
    if (nomeAmigo) {
        const lista = document.getElementById('listaAmigos');
        const item = document.createElement('li');
        item.textContent = nomeAmigo;
        lista.appendChild(item);
        input.value = '';
    } else {
        alert9('Por favor, insira um nome válido.');
    }
}
function sortearAmigo() {
    const lista = document.getElementById('listaAmigos');
    const amigos = lista.getElementsByTagName('li');
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    } 
    const nomes = Array.from(amigos).map(item => item.textContent);
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const amigoSorteado = nomes[indiceSorteado];
    document.getElementById('resultado').textContent = `Amigo sorteado: ${amigoSorteado} 🎉`;
} 