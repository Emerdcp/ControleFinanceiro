async function listarContas() {
    const res = await fetch('/contas');
    const dados = await res.json();

    const container = document.getElementById('listaContas');

    container.innerHTML = '';

    dados.forEach(c => {

        const statusClass = c.status === 'PAGO' ? 'pago' : 'pendente';

        container.innerHTML += `
            <div class="card">
                <h3>${c.descricao}</h3>

                <div class="valor">R$ ${c.valor_total}</div>

                <p>Tipo: ${c.tipo}</p>
                <p>Vencimento: ${c.data_vencimento}</p>

                <p class="${statusClass}">
                    Status: ${c.status}
                </p>

                <button onclick="pagar(${c.id})">
                    💰 Pagar
                </button>
            </div>
        `;
    });
}

listarContas();