/**
 * Created by nancymi on 16/3/1.
 */

describe('divideIntoMetric(): divide a number:string to a number:int list', function() {

    var inputs;
    var outputs;

    beforeEach(function() {
        inputs = ['1', '11', '111', '1111', '111000111', '43112603'];
        outputs = [[1], [11], [111], [111, 1], [111, 0, 111], [603, 112, 43]];
    });

    it('given a number:string then print a number:int list', function() {
        inputs.forEach(function(input, index) {
           expect(divideIntoMetric(input)).toEqual(outputs[index]);
        });
    });
});