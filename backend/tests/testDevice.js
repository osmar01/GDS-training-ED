const supertest = require('supertest');

const app = require('../src/app');

describe('filterName Device', () => {
  it('GET', async () => {
    const response = await supertest(app).get('/device?name=aparelho5')

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('content')
    expect(response.body).toHaveProperty('errors', null)
  })
})

describe('getById device', () => {
  it('GET', async () => {
    const response = await supertest(app).get('/device/1')

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('content')
    expect(response.body).toHaveProperty('errors', null)
  })
})

describe('create device', () => {

  it('POST', async () => {
    const response = await supertest(app).post('/device').send({
      name: 'aparelho06',
      category_id: 1,
      color: 'blue',
      partNumber: 1232
    })

    expect(response.statusCode).toEqual(201)
    expect(response.body).toHaveProperty('content')
    expect(response.body).toHaveProperty('errors', null)
  })
})

describe('delete device', () => {
  it('DELETE', async () => {
    const response = await supertest(app).get('/device/1')

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('content')
    expect(response.body).toHaveProperty('errors', null)
  })
})