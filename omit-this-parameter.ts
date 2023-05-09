function paraHex(this: number) {
  return this.toString(16);
}

const cincoParaHex: OmitThisParameter<typeof paraHex> = paraHex.bind(5);

console.log(cincoParaHex());

/**
 * emove o parâmetro this de Type. Se Type não tem parâmetro this explicitamente declarado, o resultado é simplesmente Type. Caso contrário, um novo tipo função sem o parâmetro this é criado a partir de Type. Generics são apagados e apenas a ultima assinatura sobrecarregada é propagada para o novo tipo função.
 */