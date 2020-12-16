const errHandler = require('../middlewares/errHandler')

describe ("Err database error", () => {
    const err = {name: "SequelizeDatabaseError"}
    it("500 internal server error", done => {
        errHandler(err)
        expect(status).toBe(500)
        expect(body).toEqual(["Internal server error"])
        done()
    })
})