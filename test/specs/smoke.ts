describe('Website', () => {
    it('Should be alive', () => {
        browser.url('/');
        expect($('#logo')).toBeDisplayed();
        browser.pause(10000);
    });
})