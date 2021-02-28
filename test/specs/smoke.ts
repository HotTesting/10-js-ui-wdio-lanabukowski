
describe('Website', () => {
    it('Should be alive', () => {
        browser.url('/');
        expect($('#logo')).toBeDisplayed();
        browser.pause(10000);
    });
    it('should allow user to register', () => {
        browser.url('https://demo.opencart.com/index.php?route=account/register');
        const content = $('#content');
        const firstName = $('#input-firstname');
        firstName.setValue('Test');
        const lastName = $('#input-lastname');
        lastName.setValue('Test');
        const email = $('#input-email');
        email.setValue(`test=+${Date.now()}@test.com`);
        const telephone = $('#input-telephone');
        telephone.setValue('1223424324');
        const password = $('#input-password');
        password.setValue('123678');
        const confirm = $('#input-confirm');
        confirm.setValue('123678');
        const checkbox = $('input[value="1"][name="agree"]');
        checkbox.click();
        const submit = $('input[value="Continue"]');
        submit.click();
        expect(content.$('h1')).toHaveText('Your Account Has Been Created!');
    });
});

describe("Product return", () => {
    it("can be submited", () => {
        browser.url('https://demo.opencart.com/index.php?route=account/return/add');
        const firstName = $('#input-firstname');
        firstName.setValue('Test');
        const lastName = $('#input-lastname');
        lastName.setValue('Test');
        const email = $('#input-email');
        email.setValue(`test=+${Date.now()}@test.com`);
        const telephone = $('#input-telephone');
        telephone.setValue('1223424324');
        const orderId = $('#input-order-id');
        orderId.setValue('1111');
        const orderData = $('#input-date-ordered');
        orderData.setValue('2021-02-27');
        const productName = $('#input-product');
        productName.setValue('Apple Cinema 30"');
        const productCode = $('#input-model');
        productCode.setValue('Product 15');
        const quantity = $('#input-quantity');
        quantity.setValue('3');
        const reason = $('input[value="5"]');
        reason.click();
        const isOpen = $('input[name="opened"][value="1"]');
        isOpen.click();
        const comment = $('#input-comment');
        comment.setValue('text')
        const submit = $('input[value="Submit"]');
        submit.click();
        expect(browser).toHaveUrl('https://demo.opencart.com/index.php?route=account/return/success')
    });
});

describe("Gift Certificate", () => {
    it("can be purchased", () => {
        browser.url('https://demo.opencart.com/index.php?route=account/voucher');
        const recipientName = $('#input-to-name');
        recipientName.setValue('recipient');
        const recipientEmail = $('#input-to-email');
        recipientEmail.setValue(`test=+${Date.now()}@test.com`);
        const name = $('#input-from-name');
        name.setValue('name');
        const email = $('#input-from-email');
        email.setValue(`test=+${Date.now()}@test.com`);
        const giftTheme = $('input[name="voucher_theme_id"][value="7"]');
        giftTheme.click();
        const message = $('#input-message');
        message.setValue("text");
        const amount = $('#input-amount');
        amount.setValue('5')
        const checkbox = $('input[name="agree"]');
        checkbox.click();
        const submit = $('input[type="Submit"]');
        submit.click()
        expect(browser).toHaveUrl('https://demo.opencart.com/index.php?route=account/voucher/success')
    });
});

describe("Contact us form", () => {
    it("must send messages to shop administration", () => {
        browser.url('https://demo.opencart.com/index.php?route=information/contact');
        const name = $('#input-name');
        name.setValue('Test');
        const email = $('#input-email');
        email.setValue(`test=+${Date.now()}@test.com`);
        const enquiry = $('#input-enquiry');
        enquiry.setValue('testtesttest');
        const submit = $('input[type="Submit"]');
        submit.click();
        expect(browser).toHaveUrl('https://demo.opencart.com/index.php?route=information/contact/success')
    });
});

describe("Items search", function() {
    it("should show results in case multiple items matches", () => {
        browser.url('https://demo.opencart.com/index.php?route=common/home');
        const search = $('input[placeholder="Search"]');
        search.setValue('iMac');
        browser.keys('Enter');
        const item = $('.product-thumb');
        item.isDisplayed();
    });
  
    it("should redirect to 'no matching results' in case no items matched", () => {
        browser.url('https://demo.opencart.com/index.php?route=common/home');
        const search = $('input[placeholder="Search"]');
        search.setValue('text');
        browser.keys('Enter');
        const message = $('h2+p');
        expect(message).toHaveText('There is no product that matches the search criteria.');
    });
});


