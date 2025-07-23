-- Criar tabela de níveis
CREATE TABLE niveis (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  codigo VARCHAR(50) UNIQUE NOT NULL,
  descricao TEXT,
  ordem INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Inserir níveis iniciais
INSERT INTO niveis (nome, codigo, descricao, ordem) VALUES
('Iniciante', 'NIV001', 'Nível para iniciantes sem experiência prévia', 1),
('Intermediário', 'NIV002', 'Nível para praticantes com conhecimento básico', 2),
('Avançado', 'NIV003', 'Nível para praticantes experientes', 3),
('Profissional', 'NIV004', 'Nível para atletas profissionais', 4);

-- Atualizar tabela de turmas para referenciar níveis
ALTER TABLE turmas ADD COLUMN nivel_id UUID REFERENCES niveis(id);

-- Atualizar registros existentes (opcional)
UPDATE turmas SET nivel_id = (SELECT id FROM niveis WHERE codigo = 'NIV001') WHERE nivel = 'iniciante';
UPDATE turmas SET nivel_id = (SELECT id FROM niveis WHERE codigo = 'NIV002') WHERE nivel = 'intermediario';
UPDATE turmas SET nivel_id = (SELECT id FROM niveis WHERE codigo = 'NIV003') WHERE nivel = 'avancado';
