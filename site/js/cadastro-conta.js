document.getElementById('formConta').addEventListener('submit', async (e) => {
    e.preventDefault();

    const dados = {
        descricao: document.getElementById('descricao').value,
        tipo: document.getElementById('tipo').value,
        valor_total: document.getElementById('valor').value,
        data_vencimento: document.getElementById('vencimento').value,
        categoria_id: document.getElementById('categoria').value
    };

    const res = await fetch('/contas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });

    const retorno = await res.json();

    alert(retorno.message);
});