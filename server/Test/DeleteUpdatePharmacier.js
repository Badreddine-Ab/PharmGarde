const supertest = require('supertest')

module.exports = app => describe('Delele & Update', () => {

  // change id
  let Update_id = "NBECazu3n6Xp6EwzZ5z9"
  it('Update data', async () => {
    const res = await supertest(app)
      .post('/api/pharmacy/Update/' + Update_id).send(
        {
          name: "jest",
          address: "jest",
          latitude: "jest",
          longitude: "jest",
          opening_hours: "jest",
          services: "jest"
        })
    expect(res.statusCode).toEqual(201)
  })

  // change id
  let delete_id = "NBECazu3n6Xp6EwzZ5z9"
  it('Delele data', async () => {
    const res = await supertest(app)
      .post('/api/pharmacy/Delete/' + delete_id)
    expect(res.statusCode).toEqual(201)
  })
})