export function validarEmpresa({ nome, setor, cnpj }) {
  const erros = [];
  if (!nome) erros.push('Nome é obrigatório');
  if (!setor) erros.push('Setor é obrigatório');
  if (!cnpj) erros.push('CNPJ é obrigatório');

  return {
    status: erros.length === 0,
    message: erros.join(', '),
  };
}