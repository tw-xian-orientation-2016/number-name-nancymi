/**
 * Created by nancymi on 16/3/1.
 */
describe('doTranslate(): translate number array to English array.', function() {

    var inputs;
    var outputs;

    beforeEach(function() {
        inputs = [[0], [11], [21], [100], [113], [603, 112, 43]];
        outputs = [['zero'], ['eleven'], ['twenty one'], ['one hundred'], ['one hundred and thirteen'],
            ['six hundred and three', 'one hundred and twelve thousand', 'forty three million']];
    });

    it('given a number:int list then output a English number:string list', function() {
       inputs.forEach(function(input, index) {
           expect(doTranslate(input, loadDictionary)).toEqual(outputs[index]);
       });
    });

});