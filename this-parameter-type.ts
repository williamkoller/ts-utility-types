function paraHex(this: number) {
  return this.toString(16);
}

function numeroToString(n: ThisParameterType<typeof paraHex>) {
  return paraHex.apply(n);
}

/**
 * Extrai o tipo do parâmetro this para um tipo function, ou unknown se o tipo da função não tem o parâmetro this.
 */
