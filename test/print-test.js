/**
 * Created by nancymi on 16/3/1.
 */
describe('print test', function() {

    var inputs;
    var outputs;

    beforeEach(function() {
        inputs = [['six hundred and three', 'one hundred and twelve thousand', 'forty three million'],
            ['six hundred', 'one hundred and twelve thousand', 'forty three million'],
            ['six hundred and three', 'one hundred thousand', 'forty three million'],
            ['six hundred', 'one hundred thousand', 'forty three million']];
        outputs = ['forty three million, one hundred and twelve thousand, six hundred and three',
            'forty three million, one hundred and twelve thousand and six hundred',
            'forty three million and one hundred thousand, six hundred and three',
            'forty three million and one hundred thousand and six hundred'];
    });

    it('given a English string list then print a English number string', function() {
        inputs.forEach(function(input, index) {
            expect(getNumberStr(input)).toEqual(outputs[index]);
        });
    });

});