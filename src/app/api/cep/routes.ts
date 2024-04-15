type ResponseCep = {
  logradouro: string
  localidade: string
}

export default async function GET(cep: string | null) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const data = (await response.json()) as ResponseCep
  return data
}
