function calcular() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const consumo = parseFloat(document.getElementById('consumo').value);
    const preco = parseFloat(document.getElementById('preco').value);
    const resultadoEl = document.getElementById('resultado');

    if (!distancia || !consumo || !preco || consumo <= 0) {
        resultadoEl.textContent = 'Preencha os campos corretamente!';
        return;
    }

    const valorTotal = (distancia / consumo) * preco;

    resultadoEl.textContent = `Custo Total: R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
}