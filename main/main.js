/**
 * Created by nancymi on 16/2/29.
 */

var MAX_LENGTH = 18;

var UNIT_LENGTH = 3;

function translateNumberInEnglish(number) {
    if(isLegal(number)) {
        var numberMetricList = divideIntoMetric(number);
        var numberStrList = doTranslate(numberMetricList);
        var numberStr = getNumberStr(numberStrList);

        return numberStr;
    }
}

function isLegal(number) {
    if (!number) {
        throw 'The number should be a string.'
    }

    if (number.length > MAX_LENGTH) {
        throw 'Sorry, the number is too big to translate.'
    }

    var regExp = new RegExp(/\d+/);
    if (!regExp.test(number)) {
        throw 'The number is illegal.';
    }

    return true;
}

function divideIntoMetric(number) {
    var numberMetricList = [];

    for (var i = number.length - UNIT_LENGTH; i > 0; i -= UNIT_LENGTH) {
        var numberMetric = parseInt(number.substring(i));
        number = number.substring(0, i);
        numberMetricList.push(numberMetric);
    }

    numberMetricList.push(parseInt(number));
    return numberMetricList;
}

function doTranslate(numberMetricList) {

    var numberStrList = [];

    var dictonary = loadDictionary();

    if (numberMetricList.length === 1 && numberMetricList[0] === 0) {
        return [dictonary.ZERO];
    }

    for (var i = 0; i < numberMetricList.length; i ++) {
        if (numberMetricList[i] === 0) {
            continue;
        } else {
            var hundredVal = parseInt(numberMetricList[i] / 100);
            var tensVal = numberMetricList[i] % 100;
            var hundredValStr = translateHundreds(hundredVal, dictonary.engDigits);
            var tensValStr = translateTens(tensVal, dictonary.engDigits, dictonary.engTens);
            var numberStr = connect(hundredValStr, tensValStr, dictonary.metrics[i]);
            numberStrList.push(numberStr);
        }
    }

    return numberStrList;
}

function translateHundreds(hundredVal, engDigits) {

    var hundredStr = hundredVal ? engDigits[hundredVal] + ' hundred' : '';

    return hundredStr;
}

function translateTens(tensVal, engDigits, engTens) {

    var tensStr = '';
    var tensVal = parseInt(tensVal/10), digitsVal = parseInt(tensVal%10);

    if (tensVal < 20) {
        tensStr =  engDigits[tensVal];
    } else if (digitsVal){
        tensStr = engTens[tensVal] + ' ' + engDigits[digitsVal];
    } else {
        tensStr = engTens[tensVal];
    }

    return tensStr;
}

function connect(hundredValStr, tensValStr, metric) {
    var numberUnitStrList = [];
    var numberStr = '';

    if (hundredValStr) {
        numberUnitStrList.push(hundredValStr);
    }

    if (tensValStr) {
        if (hundredValStr) {
            numberUnitStrList.push('and');
        }
        numberUnitStrList.push(tensValStr);
    }

    if (metric) {
        numberUnitStrList.push(metric);
    }

    numberStr = numberUnitStrList.join(' ');

    return numberStr;
}

function getNumberStr(numberStrList) {
    var numberStr = '', connectStr;

    numberStrList.forEach(function(numberUnitStr) {
        connectStr = numberUnitStr.match(' and ') ? ', ' : ' and ';
        numberStr = connectStr + numberUnitStr + numberStr;
    });

    var interCeption = connectStr.length;
    numberStr = numberStr.substring(interCeption);

    return numberStr;
}