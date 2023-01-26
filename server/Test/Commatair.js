const supertest = require('supertest')
module.exports=app => describe('Commatair', () => {

  it('get', async () => {
    const res = await supertest(app)
      .post('/api/commentaires/get')
      .send({
        email:"amian",
        Commatair:"jhfghfhg"
      })
    expect(res.statusCode).toEqual(400)
  })
})
