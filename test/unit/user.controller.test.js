const {User} = require('../../models/index');
const UserController = require('../../controllers/user.controllers')
const httpMocks = require('node-mocks-http')
const bcrypt = require('bcrypt')

jest.mock('../../models/');

let req, res, next;

beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    bcrypt.hashSync = jest.fn()
})

describe('UserController.getUser', () => {
    it('should return 200', async () => {
        User.findAll.mockResolvedValue({ 
            name : "helo"
        })
        await UserController.getUser(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return 503', async () => {
        const rejected = Promise.reject({ message: "ini error"});
        User.findAll.mockResolvedValue(rejected)
        await UserController.getUser(req, res)
        expect(res.statusCode).toEqual(503);
    })
})

describe('UserController.postUser', () => {
    it('should return 200', async () => {
        User.create.mockResolvedValue({ 
            name : "helo"
        })
        await UserController.postUser(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return 503', async () => {
        const rejected = Promise.reject({ message: "ini error"});
        User.create.mockResolvedValue(rejected)
        await UserController.postUser(req, res)
        expect(res.statusCode).toEqual(503);
    })
}) 


describe('UserController.signUp', () => {
    it('should return 200', async () => {
        User.findOne.mockResolvedValue(null);
        User.create.mockResolvedValue({
            name: "hello"
        });
        await UserController.signUp(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return 400', async () => {
        User.findOne.mockResolvedValue({
            name: "hello"
        })
        await UserController.signUp(req, res)
        expect(res.statusCode).toBe(400)
    })
    it('should return 500', async () => {
        const rejected = Promise.reject({ message: "ini error"});
        User.findOne.mockResolvedValue(null)
        User.create.mockResolvedValue(rejected)
        await UserController.signUp(req, res)
        expect(res.statusCode).toEqual(500);
    })
    it('should return 503', async () => {
        const rejected = Promise.reject({ message: "ini error"});
        User.findOne.mockResolvedValue(rejected)
        await UserController.signUp(req, res)
        expect(res.statusCode).toEqual(503);
    })
})

describe('UserController.signIn', () => {
    it('should return 200', async () => {
        bcrypt.compareSync = jest.fn().mockImplementation(() => true)
        User.findOne.mockResolvedValue({
            name: "hello"
        });
        await UserController.signIn(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return 400', async () => {
        User.findOne.mockResolvedValue(null)
        await UserController.signIn(req, res)
        expect(res.statusCode).toBe(400)
    })
    it('should return 403', async () => {
        bcrypt.compareSync = jest.fn().mockImplementation(() => false)
        User.findOne.mockResolvedValue({
            name: "hello"
        })
        await UserController.signIn(req, res)
        expect(res.statusCode).toBe(403)
    })
    it('should return 503', async () => {
        const rejected = Promise.reject({ message: "ini error"});
        User.findOne.mockResolvedValue(rejected)
        await UserController.signIn(req, res)
        expect(res.statusCode).toEqual(503);
    })
})