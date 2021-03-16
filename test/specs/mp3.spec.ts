import {App} from './application/application';
import {Navbar} from './application/pages/components/navbar.component'

const app = new App();
const navbar = new Navbar();

describe('Functions of the guest', function () {
    it('can be selected for comparison by guest', function () {
        browser.url('/');
        navbar.openCategory('MP3 Players');
        const iPodShuffle = app.category.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        iPodShuffle.compareThisProduct();
    });
    
    it('can be added to cart by guest', function () {
        navbar.openCategory('MP3 Players');
        const iPodShuffle = app.category.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        iPodShuffle.addToCart();
    });
});

describe('Functions of the registered user', function () {
    before(function() {
        app.registration.open('index.php?route=account/register');
        app.registration.fillPersonalDetails({
            firstName: 'test',
            lastName: 'test',
            email: `test+${Date.now()}@test.com`,
            telephone: '123123123',
        });
        app.registration.fillPassword({
            password: '123678',
            confirm: '123678',
        });
        app.registration.agreePrivacyPolicy();
        app.registration.continue();
    });
    it('can be added to wishlist', function () {
        navbar.openCategory('MP3 Players');
        const iPodShuffle = app.category.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        iPodShuffle.addToWishList();
    });
    it('can be selected for comparison by registered user', function () {
        navbar.openCategory('MP3 Players');
        const iPodShuffle = app.category.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        iPodShuffle.compareThisProduct();
    });
    it('can be added to cart by registered user', function () {
        navbar.openCategory('MP3 Players');
        const iPodShuffle = app.category.products.find(product => product.title() === 'iPod Shuffle')
        expect(iPodShuffle).toBeDefined()
        iPodShuffle.addToCart();
    });
});

