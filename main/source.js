/**
 * Created by nancymi on 16/3/1.
 */

var digitsEng = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

var tensEng = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

var metrics = [ '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion' ];

var ZERO = 'zero';

function loadDictionary() {
    return {
        engTens: tensEng,
        engDigits: digitsEng,
        metrics: metrics,
        ZERO: ZERO
    }
}
