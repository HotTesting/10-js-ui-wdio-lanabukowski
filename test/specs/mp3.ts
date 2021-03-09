describe('Items', function () {
    before(function() {
        browser.url('index.php?route=account/register');
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

    it('can be added to wishlist', function () {
        browser.url('mp3-players');
        const wrap = $('#content');
        const wishList = $$('button[data-original-title="Add to Wish List"]');
        const wish = wishList[0];
        wish.click();
        const success = $('.alert-success');
        success.waitForExist();
        const link = $('*=wish list');
        link.click();
        const table = $('.table-responsive');
        table.isDisplayed();
        
    });
    
    it('can be selected for comparison by registered user', function () {
        browser.url('mp3-players');
        const wrap = $('#content');
        const comparisons = $$('button[data-original-title="Compare this Product"]');
        const comparison = comparisons[1];
        comparison.click();
        const success = $('.alert-success');
        success.waitForExist();
        const link = $('*=product comparison');
        link.click();
        const table = $('h1 + table');
        table.isDisplayed();
    });
    describe('By guest', function () {
        before(function() {
            const account = $('a[title="My Account"]');
            account.click()
            const logout = $('*=Logout');
            logout.click();
        })
        it('can be selected for comparison by guest', function () {
            browser.url('mp3-players');
            const wrap = $('#content');
            const comparisons = $$('button[data-original-title="Compare this Product"]');
            const comparison = comparisons[1];
            comparison.click();
            const success = $('.alert-success');
            success.waitForExist();
            const link = $('*=product comparison');
            link.click();
            const table = $('h1 + table');
            table.isDisplayed();
        });
        
        it('can be added to cart by guest', function () {
            browser.url('mp3-players');
            const wrap = $('#content');
            const shopCarts = $$('.fa-shopping-cart ');
            const shopCart = shopCarts[2];
            shopCart.click();
            const success = $('.alert-success');
            success.waitForExist();
            const link = $('*=shopping cart');
            link.click();
            const table = $('h1 + form');
            table.isDisplayed();
        });
    });
    it('can be added to cart by registered user', function () {
        browser.url('mp3-players');
        const wrap = $('#content');
        const shopCarts = $$('.fa-shopping-cart ');
        const shopCart = shopCarts[2];
        shopCart.click();
        const success = $('.alert-success');
        success.waitForExist();
        const link = $('*=shopping cart');
        link.click();
        const table = $('h1 + form');
        table.isDisplayed();
    });
});