const supertest = require('supertest')
module.exports=app => describe('Authentification', () => {
  it('login', async () => {
    const res = await supertest(app)
      .post('/api/user/login')
      .send({
        email:"oumaimaabouelhaitam@gmail.com",
        password:"admin"
      })
    expect(res.statusCode).toEqual(200)
  })
  it('Error', async () => {
    const res = await supertest(app)
      .post('/api/user/login')
      .send({
        email: "imaabouOtam@gmail.com",
        password: "OUMA",
      })
    expect(res.statusCode).toEqual(400)
  })
  it('ForgetPassword', async () => {
    const res = await supertest(app)
      .post('/api/user/forgetPassword')
      .send({
        email:"oumaimaabouelhaitam@gmail.com"
      })
    expect(res.statusCode).toEqual(200)
  })
  it('Email invalid', async () => {
    const res = await supertest(app)
      .post('/api/user/forgetPassword')
      .send({
        email:"ouma@gmail.com"
      })
    expect(res.statusCode).toEqual(400)
  })
})
