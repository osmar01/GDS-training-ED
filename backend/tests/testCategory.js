const supertest = require('supertest');

const app = require('../src/app');

describe('filterName category', () => {
  it('GET', async () => {
    const response = await supertest(app).get('/category?name=none')

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('content')
    expect(response.body).toHaveProperty('errors', null)
  })
})

describe('getById category', () => {
  it('GET', async () => {
    const response = await supertest(app).get('/category/1')

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('content')
    expect(response.body).toHaveProperty('errors', null)
  })
})

describe('create category', () => {

  it('POST', async () => {
    const response = await supertest(app).post('/category').send({
      name: 'category01'
    })

    expect(response.statusCode).toEqual(201)
    expect(response.body).toHaveProperty('content')
    expect(response.body).toHaveProperty('errors', null)
  })
})

describe('delete category', () => {
  it('DELETE', async () => {
    const response = await supertest(app).get('/category/1')

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('content')
    expect(response.body).toHaveProperty('errors', null)
  })
})