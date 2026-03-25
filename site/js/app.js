async function carregarPagina(pagina) {

    const conteudo = document.getElementById('conteudo');

    if (pagina === 'dashboard') {
        conteudo.innerHTML = await dashboardHTML();
        carregarDashboard();
    }

    if (pagina === 'contas') {
        conteudo.innerHTML = `
            <h1>Contas</h1>
            <div id="listaContas" class="cards"></div>
        `;
        listarContas();
    }

    if (pagina === 'cadastro') {
        conteudo.innerHTML = await cadastroHTML();
        iniciarCadastro();
    }
}

carregarPagina('dashboard');

async function dashboardHTML() {
    return `
        <h1>Dashboard</h1>

        <div class="resumo">
            <div class="box">
                <h3>Total a pagar</h3>
                <div id="totalPagar">R$ 0</div>
            </div>

            <div class="box">
                <h3>Total pago</h3>
                <div id="totalPago">R$ 0</div>
            </div>
        </div>

        <div id="listaContas" class="cards"></div>
    `;
}

async function carregarDashboard() {
    const res = await fetch('/contas');
    const dados = await res.json();

    let totalPagar = 0;
    let totalPago = 0;

    dados.forEach(c => {
        if (c.status === 'PAGO') {
            totalPago += Number(c.valor_total);
        } else {
            totalPagar += Number(c.valor_total);
        }
    });

    document.getElementById('totalPagar').innerText = 'R$ ' + totalPagar;
    document.getElementById('totalPago').innerText = 'R$ ' + totalPago;

    renderCards(dados);
}

function renderCards(dados) {
    const container = document.getElementById('listaContas');

    container.innerHTML = '';

    dados.forEach(c => {
        container.innerHTML += `
            <div class="card">
                <h3>${c.descricao}</h3>

                <div class="valor">R$ ${c.valor_total}</div>

                <p>${c.tipo}</p>
                <p>${c.data_vencimento}</p>

                <p>${c.status}</p>
            </div>
        `;
    });
}

async function cadastroHTML() {
    return `
        <h1>Nova Conta</h1>

        <form id="formConta">
            <input type="text" id="descricao" placeholder="Descrição"><br><br>
            <input type="number" id="valor"><br><br>
            <button>Salvar</button>
        </form>
    `;
}

function iniciarCadastro() {
    document.getElementById('formConta').addEventListener('submit', async (e) => {
        e.preventDefault();

        await fetch('/contas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                descricao: document.getElementById('descricao').value,
                valor_total: document.getElementById('valor').value,
                tipo: 'PAGAR',
                data_vencimento: '2026-03-30',
                categoria_id: 1
            })
        });

        alert('Salvo!');
        carregarPagina('contas');
    });
}