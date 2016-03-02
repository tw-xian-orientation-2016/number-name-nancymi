/**
 * Created by nancymi on 16/2/29.
 */
describe('main test', function() {

    it('0 should print zero', function() {
        var number = '0';
        var numberStr = 'zero';
        var expectNumberStr = translateNumberInEnglish(number);
        expect(expectNumberStr).toEqual(numberStr);
    });

    it('99 should print ninety nine', function() {
        var number = '99';
        var numberStr = 'ninety nine';
        var expectNumberStr = translateNumberInEnglish(number);
        expect(expectNumberStr).toEqual(numberStr);
    });

    it('310 should print three hundred and ten', function() {
        var number = '310';
        var numberStr = 'three hundred and ten';
        var expectNumberStr = translateNumberInEnglish(number);
        expect(expectNumberStr).toEqual(numberStr);
    });

    it('10001 should print ten thousand and one', function() {
        var number = '10001';
        var numberStr = 'ten thousand and one';
        var expectNumberStr = translateNumberInEnglish(number);
        expect(expectNumberStr).toEqual(numberStr);
    });

    it('1001001 should print one million and one thousand and one', function() {
        var number = '1001001';
        var numberStr = 'one million and one thousand and one';
        var expectNumberStr = translateNumberInEnglish(number);
        expect(expectNumberStr).toEqual(numberStr);
    });

    it('100000000000001 should print one hundred trillion and one', function() {
        var number = '100000000000001';
        var numberStr = 'one hundred trillion and one';
        var expectNumberStr = translateNumberInEnglish(number);
        expect(expectNumberStr).toEqual(numberStr);
    } );

    it('43112603 should print forty three million, one hundred and twelve thousand, six hundred and three', function() {
        var number = '43112603';
        var numberStr = 'forty three million, one hundred and twelve thousand, six hundred and three';
        var expectNumberStr = translateNumberInEnglish(number);
        expect(expectNumberStr).toEqual(numberStr);
    });

    it('1001001001', function() {
        var number = '1001001001';
        var numberStr = 'one billion and one million and one thousand and one';
        var expectNumberStr = translateNumberInEnglish(number);
        expect(expectNumberStr).toEqual(numberStr);
    });


    it("input 10", function() {
        var input = '10';
        var correctResult = 'ten';
        var result = translateNumberInEnglish(input);

        expect(result).toEqual(correctResult);
    });

    it("input 100", function() {
        var input = '100';
        var correctResult= 'one hundred';
        var result = translateNumberInEnglish(input);

        expect(result).toEqual(correctResult);
    });
    it("input 1001", function() {
        var input = '1001';
        var correctResult= 'one thousand and one';
        var result = translateNumberInEnglish(input);

        expect(result).toEqual(correctResult);
    });

    it("input 12326", function() {
        var input = '12326';
        var correctResult= "twelve thousand, three hundred and twenty six";
        var result = translateNumberInEnglish(input);

        expect(result).toEqual(correctResult);
    });

    it("input 103001", function() {
        var input = '103001';
        var correctResult= 'one hundred and three thousand and one';
        var result = translateNumberInEnglish(input);

        expect(result).toEqual(correctResult);
    });

});
