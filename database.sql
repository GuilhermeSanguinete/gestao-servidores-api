CREATE DATABASE dbvlservice;
USE dbvlservice;

-- Tabela de usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL -- Armazene com hash no backend!
);

-- Tabela de categorias/setores
CREATE TABLE tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

-- Tabela de empresas
CREATE TABLE empresas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    setor INT,
    cnpj VARCHAR(20) NOT NULL,
    logo VARCHAR(255),
    aparecer_home BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (setor) REFERENCES tags(id)
);

-- Tabela de servidores
CREATE TABLE servidores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    especificacoes TEXT NOT NULL,
    localizacao VARCHAR(255) NOT NULL,
    status ENUM('Online', 'Offline', 'Em manutenção', 'Desativado') NOT NULL,
    empresa_id INT,
    FOREIGN KEY (empresa_id) REFERENCES empresas(id)
);

-- Tabela de histórico de manutenção
CREATE TABLE manutencoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    servidor_id INT NOT NULL,
    descricao TEXT NOT NULL,
    data DATETIME NOT NULL,
    FOREIGN KEY (servidor_id) REFERENCES servidores(id)
);
