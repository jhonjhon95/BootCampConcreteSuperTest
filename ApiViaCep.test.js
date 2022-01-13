const request = require('supertest');

const expectResponse = {
  
    "cep": "78555-386",
    "logradouro": "Rua Milena",
    "complemento": "de 811/812 a 1675/1676",
    "bairro": "Residencial Florença",
    "localidade": "Sinop",
    "uf": "MT",
    "ibge": "5107909",
    "gia": "",
    "ddd": "66",
    "siafi": "8985"

}

const expectResponseBuscaPorEstadoCidadeRua = [
  
    {
        "cep": "04849-305",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "Chácara Gaivotas",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "08090-605",
        "logradouro": "Rua das Flores",
        "complemento": "(Jardim Arizona)",
        "bairro": "Jardim Helena",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "02364-005",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "Jardim Recanto Verde",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "08383-005",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "Terceira Divisão",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "02280-390",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "Vila Nova Galvão",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "08151-615",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "Jardim Campos",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "04852-508",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "Jardim Novo Jaú",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "08473-760",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "Jardim Vitória",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "08071-105",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "União de Vila Nova",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "08346-380",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "Jardim da Conquista (Zona Leste)",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "02327-160",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "Jardim Portal I e II",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "02169-070",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "Parque Vila Maria",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "08072-070",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "União de Vila Nova",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "04851-705",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "Jardim Prainha",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "01019-010",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "05273-120",
        "logradouro": "Rua das Flores",
        "complemento": "",
        "bairro": "Vila dos Palmares",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "02326-150",
        "logradouro": "Rua das Flores II",
        "complemento": "",
        "bairro": "Jardim Felicidade (Zona Norte)",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    }
]

const responsePorCidade = [
  
    {
        "cep": "05912-960",
        "logradouro": "",
        "complemento": "",
        "bairro": "",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "05960-960",
        "logradouro": "",
        "complemento": "",
        "bairro": "",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "05947-960",
        "logradouro": "",
        "complemento": "",
        "bairro": "",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    },
    {
        "cep": "05909-960",
        "logradouro": "",
        "complemento": "",
        "bairro": "",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    }

]


API_URL = 'https://viacep.com.br'

const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;

 describe('Teste na API ViaCEP', () => {
  it('Testar a busca de determinado CEP', () => {

    request(API_URL).get('/ws/78555386/json/')
      .expect(STATUS_OK)
      .then(response => {
        expect(response.body).toEqual(expectResponse)
      })
  })

  it('Testar a busca de determinado CEP sem /json', () => {
    request(API_URL).get('/ws/01001000/')
      .expect(STATUS_BAD_REQUEST)
  })

  it('Busca por CEP com estado, cidade e rua', () => {
    request(API_URL).get('/ws/SP/Sao Paulo/Rua das flores/json/')
    .expect(STATUS_OK)
      .then(response => {
        expect(response.body).toEqual(expectResponseBuscaPorEstadoCidadeRua)
      })
  })

  it('Busca por CEP inválido', () => {
    request(API_URL).get('/ws/00000000/json').expect(STATUS_OK)
      .then(response => {
        expect(response.body).toEqual({"erro": true})
      })
  })
it('Buscar por CEP com cidade', () => {
  request(API_URL).get('/ws/SP/Sao Paulo/json/')
  .expect(STATUS_OK)
  .then(response => {
    expect(response.body).toEqual(responsePorCidade)
  })
})

 })