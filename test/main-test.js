/**
 * Created by nancymi on 16/2/29.
 */
describe('translate(): translate number to English', function() {

    var inputs = [];
    var outputs = [];

    beforeEach(function() {
        inputs = ['0', '16', '20', '99', '310', '10001', '1001001', '100000000000001', '43112603'];
        outputs = ['zero', 'sixteen', 'twenty', 'ninety nine', 'three hundred and ten', 'ten thousand and one',
            'one million and one thousand and one', 'one hundred trillion and one',
            'forty three million, one hundred and twelve thousand, six hundred and three'];
    });

    it('given a number:string then print a English number str', function() {
       inputs.forEach(function(input, index) {
          expect(translate(input)).toEqual(outputs[index]);
       });
    });

});
