/**
 * Created by nancymi on 16/3/1.
 */

describe('divide test', function() {
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