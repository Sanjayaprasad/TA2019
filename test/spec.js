describe('ShoppingCart home page', function(){
		
	var result = element(by.binding('item_itemprice'));
	var totalResult = element(by.binding('totalPrice'));
	var itemname = "Adidas";
	var price = "500";
	var username = "test";
	var useremail = "test@email.com";
	var userphonenumber = 9845098450;
	var useraddress = "Bengaluru"	

	beforeEach(function(){
		browser.get('http://localhost:3000/');
	});

	it('Should display the home page', function(){
		expect(browser.getTitle()).toEqual('Shopping-cart-submit-production');
	});

	it('should get the item price', function(){
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		browser.sleep(1000);
	});

	it('should display a error message when quantity is 0', function(){
		var itemqty = 0;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		console.log("should Return an error message");
		expect(element(by.css('.message')).isDisplayed()).toBe(true);
		browser.sleep(1000);
	});

	it('should calculate total price when quantity is 1', function(){
		var itemqty = 1;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		var totalprice1 = itemqty * price;
		var actualResult = totalprice1.toString();
		console.log(actualResult);
		expect(totalResult.getText()).toEqual(actualResult);
		browser.sleep(1000);
	});

	it('should calculate total price when quantity is 2', function(){
		var itemqty = 2;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		var totalprice1 = itemqty * price;
		var actualResult = totalprice1.toString();
		console.log(actualResult);
		expect(totalResult.getText()).toEqual(actualResult);
		browser.sleep(1000);
	});

	it('should calculate total price when quantity is 5', function(){
		var itemqty = 5;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		var totalprice1 = itemqty * price;
		var actualResult = totalprice1.toString();
		console.log(actualResult);
		expect(totalResult.getText()).toEqual(actualResult);
		browser.sleep(1000);
	});

	it('Should display a error message if quantity is not available', function(){
		var itemqty = 34;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		expect(element(by.css('.message')).isDisplayed()).toBe(true);
		browser.sleep(1000);
	});

	it('should clear all the fields if CLEAR button is clicked', function(){
		var itemqty = 5;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		var totalprice1 = itemqty * price;
		var actualResult = totalprice1.toString();
		console.log(actualResult);
		expect(totalResult.getText()).toEqual(actualResult);
		browser.sleep(1000);
		element(by.id('cleardata')).click();
		expect(element(by.model('item_ItemName')).getAttribute('value')).toBe('');
		expect(element(by.model('productData.qty')).getAttribute('value')).toBe('');
		browser.sleep(1000);
	});

	it('should display available sizes for the particular brand',function(){
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		expect($('[ng-show=IsVisible]').isDisplayed()).toBeTruthy();
		browser.sleep(1000);
	});

/*	it('should navigate to "UserDetails" only when the totalprice is dispalyed', function(){
		var itemqty = 2;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('totalprice')).click();
		var totalprice1 = itemqty * price;
		var actualResult = totalprice1.toString();
		console.log(actualResult);
		expect(totalResult.getText()).toEqual(actualResult);
		element(by.id('myButton')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/userDetails');
		element(by.model('form.user_name')).sendKeys(username);
		element(by.model('form.user_phonenumber')).sendKeys(userphonenumber);
		element(by.model('form.user_email')).sendKeys(useremail);
		element(by.model('form.user_Address')).sendKeys(useraddress);
		element(by.id('btncontinue')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/checkout');
		element(by.id('btnsubmit')).click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/shippingConformation')
		browser.sleep(1000);
	});*/

	it('buy now button should be disabled if totalprice is equal to " "', function(){
		var itemqty = 2;
		element(by.model('item_ItemName')).sendKeys(itemname);
		element(by.id('singleitem')).click();
		expect(result.getText()).toEqual("500");
		element(by.model('productData.qty')).sendKeys(itemqty);
		element(by.id('myButton')).click();
		expect(element(by.css('.home-page')).getAttribute('disabled')).toBeFalsy();
		browser.sleep(1000);
	});

});
