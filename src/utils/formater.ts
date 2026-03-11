function cpfCnpj(value: string) {
  const number = value.replace(/\D/g, "");
  if (number.length <= 11) {
    return number
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  return number
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .slice(0, 18);
}

function cpfOrCnpj(value: string, type: string) {
  let number;

  if (type === "cpf") {
    number = value.replace(/\D/g, "").slice(0, 11);

    console.log(number, number.length);
    return number
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);
  }
  if (type === "cnpj") {
    number = value.replace(/\D/g, "").slice(0, 14);

    return number
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .slice(0, 18);
  }

  return number;
}

function cep(value: string) {
  const number = value.replace(/\D/g, "");
  return number.replace(/(\d{5})(\d{3})/, "$1-$2").slice(0, 9);
}

function telefone(value: string) {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length === 10) {
    return numbers.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }
  return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3").slice(0, 15);
}

function estado(value: string) {
  const estado = value.toUpperCase();
  return estado;
}

function dinheiro(value: string) {
  const numbers = value.replace(/\D/g, "");

  if (!numbers) return "";

  const valor = (Number(numbers) / 100).toFixed(2);

  return valor.replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function dataBR(value: string) {
  if (!value) return "";

  const [ano, mes, dia] = value.split("-");
  return `${dia}/${mes}/${ano}`;
}

function agencia(value: string) {
  if (!value) return "";
  const numbers = value.replace(/\D/g, "");

  const limited = numbers.slice(0, 5);

  if (limited.length <= 4) {
    return limited;
  }

  return `${limited.slice(0, 4)}-${limited.slice(4)}`;
}

const formater = {
  cpfCnpj,
  cpfOrCnpj,
  cep,
  telefone,
  estado,
  dinheiro,
  dataBR,
  agencia,
};

export default formater;
