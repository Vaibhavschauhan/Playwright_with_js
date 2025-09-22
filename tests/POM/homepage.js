class homepage{
    constructor(page){
        this.page = page; 
        this.productselect= page.getByRole('link', { name: 'Samsung galaxy s6' });
        this.addcart = page.locator('text=Add to cart');
        this.cartbtn = page.locator('#cartur');
        this.placeorderbtn = page.locator("//button[@class='btn btn-success']");
        this.nametf= page.locator('#name');
        this.countrytf= page.locator('#country');
        this.citytf= page.locator('#city');
        this.cardtf= page.locator('#card');
        this.monthtf= page.locator('#month');
        this.yeartf= page.locator('#year');

        
    }

async productaddcart(nametf,countrytf,citytf,cardtf,monthtf,yeartf){
    await this.productselect.click();
    await this.addcart.click();
    await this.page.on('dialog', dialog => dialog.accept());
    await this.cartbtn.click();
    await this.placeorderbtn.click();
    await this.nametf.fill(nametf);
    await this.countrytf.fill(countrytf);
    await this.citytf.fill(citytf);
    await this.cardtf.fill(cardtf);
    await this.monthtf.fill(monthtf);
    await this.yeartf.fill(yeartf);

}


}

module.exports = {homepage};