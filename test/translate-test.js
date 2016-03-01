/**
 * Created by nancymi on 16/3/1.
 */
describe('translate test', function() {
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
    })
});