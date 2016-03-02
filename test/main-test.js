/**
 * Created by nancymi on 16/2/29.
 */
describe('translateNumberInEnglish(): translate number to English', function() {

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

    describe('divideIntoMetric(): divide number to array by metric.', function() {
        it('43112603 should print [603, 112, 43]', function() {
            var number = '43112603';
            var numberMetricList = [603, 112, 43];
            var expectNumberMetricList = divideIntoMetric(number);
            expect(expectNumberMetricList).toEqual(numberMetricList);
        });

        it('1 should print [1]', function() {
            var number = '1';
            var numberMetricList = [1];
            var expectNumberMetricList = divideIntoMetric(number);
            expect(expectNumberMetricList).toEqual(numberMetricList);
        });

        it('11 should print [11]', function() {
            var number = '11';
            var numberMetricList = [11];
            var expectNumberMetricList = divideIntoMetric(number);
            expect(expectNumberMetricList).toEqual(numberMetricList);
        });

        it('111 should print [111]', function() {
            var number = '111';
            var numberMetricList = [111];
            var expectNumberMetricList = divideIntoMetric(number);
            expect(expectNumberMetricList).toEqual(numberMetricList);
        });

        it('1111 should print [111, 1]', function() {
            var number = '1111';
            var numberMetricList = [111, 1];
            var expectNumberMetricList = divideIntoMetric(number);
            expect(expectNumberMetricList).toEqual(numberMetricList);
        });

        it('111000111 should print [111, 0, 111]', function() {
            var number = '111000111';
            var numberMetricList = [111, 0, 111];
            var expectNumberMetricList = divideIntoMetric(number);
            expect(expectNumberMetricList).toEqual(numberMetricList);
        });

    });

    describe('doTranslate(): translate number array to English array.', function() {
        it('[603, 112, 43] should print [\'six hundred and three\', \'one hundred and twelve thousand\', \'forty three million\']',
            function() {
                var numberMetricList = [603, 112, 43];
                var numberStrList = ['six hundred and three', 'one hundred and twelve thousand', 'forty three million'];
                var expectNumberStrList = doTranslate(numberMetricList);
                expect(expectNumberStrList).toEqual(numberStrList);
            });

        it('[0] should print [\'zero\']', function() {
            var numberMetricList = [0];
            var numberStrList = ['zero'];
            var expectNumberStrList = doTranslate(numberMetricList);
            expect(expectNumberStrList).toEqual(numberStrList);
        });

        it('[11] should print [\'eleven\']', function() {
            var numberMetricList = [11];
            var numberStrList = ['eleven'];
            var expectNumberStrList = doTranslate(numberMetricList);
            expect(expectNumberStrList).toEqual(numberStrList);
        });

        it('[21] should print [\'twenty one\']', function() {
            var numberMetricList = [21];
            var numberStrList = ['twenty one'];
            var expectNumberStrList = doTranslate(numberMetricList);
            expect(expectNumberStrList).toEqual(numberStrList);
        });

        it('[100] should print [\'one hundred\']', function() {
            var numberMetricList = [100];
            var numberStrList = ['one hundred'];
            var expectNumberStrList = doTranslate(numberMetricList);
            expect(expectNumberStrList).toEqual(numberStrList);
        });

        it('[113] should print [\'one hundred and thirteen\']', function() {
            var numberMetricList = [113];
            var numberStrList = ['one hundred and thirteen'];
            var expectNumberStrList = doTranslate(numberMetricList);
            expect(expectNumberStrList).toEqual(numberStrList);
        });
    });

    describe('getNumberStr(): connect English array to English string.',function() {
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
    })

});
