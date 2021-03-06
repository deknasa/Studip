const {Product} = require('../../models/index');
const ProductController = require('../../controllers/product.controllers')
const httpMocks = require('node-mocks-http')

jest.mock('../../models/');

let req, res, next;

beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
})

describe('ProductController.postProduct', () => {    
    it('should return 200 ', async () => {
        Product.create.mockResolvedValue({ 
            name : "helo"
        })    
        await ProductController.postProduct(req, res);
        expect(res.statusCode).toBe(200);
    })
    it('should return 503', async () => {
        const rejected = Promise.reject({ message: "ini error"});
        Product.create.mockResolvedValue(rejected)
        // Product.findAll.mockRejectedValue(new Error('ini eror'))
        await ProductController.postProduct(req, res)
        expect(res.statusCode).toEqual(503);
        // expect(res._getData()).toEqual(errData)
    })
})

describe('ProductController.getProduct', () => {
    it('should return 200', async () => {
        Product.findAll.mockResolvedValue({ 
            name : "helo"
        })
        await ProductController.getProduct(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return 503', async () => {
        const rejected = Promise.reject({ message: "ini error"});
        Product.findAll.mockResolvedValue(rejected)
        await ProductController.getProduct(req, res)
        expect(res.statusCode).toEqual(503);
    })
})

describe('ProductController.getProductByUserId', () => {
    it('should return 200', async () => {
        Product.findOne.mockResolvedValue({ 
            name : "helo"
        })
        await ProductController.getProductByUserId(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return 503', async () => {
        const rejected = Promise.reject({ message: "ini error"});
        Product.findOne.mockResolvedValue(rejected)
        await ProductController.getProductByUserId(req, res)
        expect(res.statusCode).toEqual(503);
    })
})
