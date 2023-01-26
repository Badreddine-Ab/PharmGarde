const supertest = require('supertest')
module.exports=app => describe('affichage', () => {
  it('affichage', async () => {
    const res = await supertest(app)
      .post('/api/pharmacy/getAllPharmacier')
      .send({
      
        name:"yyy",
        address:"yyy",
        latitude:"yyy",
        longitude:"yyy",
        opening_hours:"yyy",
        services:"yyy"

      })
    expect(res.statusCode).toEqual(400)
  })
})
