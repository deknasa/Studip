const jwt = require('jsonwebtoken')
const httpMocks = require('node-mocks-http')
const auth = require('../../middleware/auth')


jest.mock('jsonwebtoken');

let req, res, next;

beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = jest.fn()
})


describe('auth.verify', () => {    
    it('should return 200 ', async () => {
        jwt.verify = jest.fn().mockImplementation(
            (token, privateKey, cb) => {
              cb(null , {
                "id": "123",
                "name": "Budi"
              })
          })
      
          await auth.verify(req, res, next);
          expect(jwt.verify).toHaveBeenCalled();
          expect(req).toHaveProperty("id", "123");
          expect(next).toHaveBeenCalled()
    })
    it('should return 401', async () => {
        jwt.verify = jest.fn().mockImplementation(
            (token, privateKey, cb) => {
              cb({
                "id": "123",
                "name": "Budi"
              },
              null)
          })
      
          await auth.verify(req, res, next);
          expect(jwt.verify).toHaveBeenCalled();
          expect(res.statusCode).toBe(401);
    })
})

describe('auth.verify', () => {    
    it('should return 200 ', async () => {
        jwt.verify = jest.fn().mockImplementation(
            (token, privateKey, cb) => {
              cb(null , {
                "id": "123",
                "name": "Budi"
              })
          })
      
          await auth.verify(req, res, next);
          expect(jwt.verify).toHaveBeenCalled();
          expect(req).toHaveProperty("id", "123");
          expect(next).toHaveBeenCalled()
    })
})
