function cpfCnpj(value: string) {
  const number = value.replace(/\D/g, "");
  if (number.length < 11) {
    return number
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  return number
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

function cep(value: string) {
  const number = value.replace(/\D/g, "");
  return number.replace(/(\d{5})(\d{3})/, "$1-$2");
}

function telefone(value: string) {
  const numbers = value.replace(/\D/g, "");
  return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}

function estado(value: string) {
  const estado = value.toUpperCase();
  return estado;
}

const formater = {
  cpfCnpj,
  cep,
  telefone,
  estado,
};

export default formater;
