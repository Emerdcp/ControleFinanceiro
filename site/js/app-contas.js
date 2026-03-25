async function listarContas() {
    const res = await fetch(`${API}/contas`);
    const dados = await res.json();

    const tabela = document.getElementById("tabelaContas");

    tabela.innerHTML = "";

    dados.forEach(c => {
        tabela.innerHTML += `
            <tr>
                <td>${c.descricao}</td>
                <td>${c.valor_total}</td>
                <td>${c.status}</td>
            </tr>
        `;
    });
}

listarContas();