import { ProductListService } from "./product-list.service";


describe('Test ProductListService',()=>{
    let service:ProductListService;
    beforeEach(()=>{
      service=new ProductListService();
    })

    it('Test Products array ,it have 9 product',()=>{
        expect(service.Products.length).toEqual(9)
    })
    it('Test Categories array ,it have 5 categories ',()=>{
        expect(service.Categories.length).toEqual(5)
    })
    
})