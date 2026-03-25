CREATE TABLE bancos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    tipo ENUM('CONTA','CARTEIRA','CAIXA'),
    saldo_atual DECIMAL(10,2) DEFAULT 0,
    ativo BOOLEAN DEFAULT TRUE
);


CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)
);


CREATE TABLE contas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255),
    tipo ENUM('PAGAR','RECEBER'),
    valor_total DECIMAL(10,2),
    saldo DECIMAL(10,2),
    data_vencimento DATE,
    status ENUM('PENDENTE','PARCIAL','PAGO'),
    categoria_id INT,
    observacao TEXT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);


CREATE TABLE movimentacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    conta_id INT,
    banco_id INT,
    valor DECIMAL(10,2),
    data_movimento DATE,
    tipo ENUM('PAGAMENTO','RECEBIMENTO'),
    observacao TEXT,
    FOREIGN KEY (conta_id) REFERENCES contas(id),
    FOREIGN KEY (banco_id) REFERENCES bancos(id)
);