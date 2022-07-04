/* eslint-disable no-useless-escape */
export const validacao = (dados: {nome: string, email: string, celular: string, capital: string}) => {
  if (!dados.nome || !dados.email || !dados.celular || !dados.capital) {
    return false;
  }

  if (dados.celular.indexOf("_") !== -1) {
    return false;
  }

  return true;
};

export const validaNomeCompleto = (nome: string) => {
  const nomes = nome.trim().split(" ");
  if (
    nome.length > 0
    && nomes[0].length > 1
    && nomes[1]
    && nomes[1].length > 0
  ) {
    return true;
  }

  return false;
};

export const validaTelefone = (telefone: string) => {
  const valido = /^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{4})\-?(\d{4}))$/.test(telefone);
  const valido2 = /^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:[9]?[9][9][9][9]))\-?([9][9][9][9]))$/.test(telefone);

  return valido && !valido2;
};

export const validacaoContinue = (dados: {whatsapp: string, estado: string, cidade: string, profissao: string, experiencia: string, tempo: string, porque: string}) => {
  if (
    !dados.whatsapp
    || !dados.estado
    || !dados.cidade
    || !dados.profissao
    || !dados.experiencia
    || !dados.tempo
    || !dados.porque
  ) {
    return false;
  }

  return true;
};

export const validaEmail = (email: string) => {
  const usuario = email.substring(0, email.indexOf("@"));
  const dominio = email.substring(email.indexOf("@") + 1, email.length);
  const blacklist = [
    "plugadomdp@gmail.com",
    "ursoporcoporso@hotmail.com",
    "ericsson50cent@hotmail.com",
    "ggenardo@gmail.com",
  ];

  if (
    blacklist.indexOf(email) == -1
    && usuario.length >= 1
    && dominio.length >= 3
    && usuario.search("@") == -1
    && dominio.search("@") == -1
    && usuario.search(" ") == -1
    && dominio.search(" ") == -1
    && dominio.search(".") != -1
    && dominio.indexOf(".") >= 1
    && dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    return true;
  }
  return false;
};

export const infosErro = {
  texto: "Ocorreu um erro!",
  linkTexto: "Clique aqui e tente novamente.",
  tipo: "erro",
  href: "/",
};
