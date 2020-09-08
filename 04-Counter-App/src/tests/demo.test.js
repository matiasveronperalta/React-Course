
describe('test on demo.test.js', () => {
    
    test('should be equals string', () => {
        
        const message = 'Hola mundo';
        const message2 = `Hola mundo`;
    
        expect(message).toBe(message2);
    })
})

