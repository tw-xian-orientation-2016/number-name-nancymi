/**
 * Created by nancymi on 16/3/1.
 */
describe('print test', function() {
    it('numberStrList should output right str', function() {
        var numberStrList = ['six hundred and three', 'one hundred and twelve thousand', 'forty three million'];
        var numberStr = 'forty three million, one hundred and twelve thousand, six hundred and three';
        var expectNumberStr = getNumberStr(numberStrList);
        expect(expectNumberStr).toEqual(numberStr);
    });

    it('numberStrList should output right str', function() {
        var numberStrList = ['six hundred', 'one hundred and twelve thousand', 'forty three million'];
        var numberStr = 'forty three million, one hundred and twelve thousand and six hundred';
        var expectNumberStr = getNumberStr(numberStrList);
        expect(expectNumberStr).toEqual(numberStr);
    });

    it('numberStrList should output right str', function() {
        var numberStrList = ['six hundred and three', 'one hundred thousand', 'forty three million'];
        var numberStr = 'forty three million and one hundred thousand, six hundred and three';
        var expectNumberStr = getNumberStr(numberStrList);
        expect(expectNumberStr).toEqual(numberStr);
    });

    it('numberStrList should output right str', function() {
        var numberStrList = ['six hundred', 'one hundred thousand', 'forty three million'];
        var numberStr = 'forty three million and one hundred thousand and six hundred';
        var expectNumberStr = getNumberStr(numberStrList);
        expect(expectNumberStr).toEqual(numberStr);
    });
});