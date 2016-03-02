/**
 * Created by nancymi on 16/2/29.
 */
function translate(number) {

    var numberMetricList = divideIntoMetric(number);
    var numberStrList = doTranslate(numberMetricList, loadDictionary);
    var numberStr = getNumberStr(numberStrList);

    return numberStr;
}

function divideIntoMetric(number) {
    var numberMetricList = [];
    var UNIT_LENGTH = 3;

    for (var i = number.length - UNIT_LENGTH; i > 0; i -= UNIT_LENGTH) {
        var numberMetric = parseInt(number.substring(i));
        number = number.substring(0, i);
        numberMetricList.push(numberMetric);
    }

    numberMetricList.push(parseInt(number));
    return numberMetricList;
}

function doTranslate(numberMetricList, loadDictionary) {

    var numberStrList = [];
    var dictonary = loadDictionary();

    if (numberMetricList.length === 1 && numberMetricList[0] === 0) {
        return [dictonary.ZERO];
    }

    numberMetricList.forEach(function(numberMetric, index) {
        if(numberMetric !== 0) {
            var hundredVal = parseInt(numberMetric / 100);
            var tensVal = numberMetric % 100;
            var hundredValStr = translateHundreds(hundredVal, dictonary.engDigits);
            var tensValStr = translateTens(tensVal, dictonary.engDigits, dictonary.engTens);
            var numberStr = connect(hundredValStr, tensValStr, dictonary.metrics[index]);
            numberStrList.push(numberStr);
        }
    });

    return numberStrList;
}

function translateHundreds(hundredVal, digitsEng) {

    var hundredStr = hundredVal ? digitsEng[hundredVal] + ' hundred' : '';

    return hundredStr;
}

function translateTens(tensVal, digitsEng, tensEng) {

    var tensStr = '';
    var tenVal = parseInt(tensVal/10), digitVal = tensVal%10;

    if (tensVal < 20) {
        tensStr =  digitsEng[tensVal];
    } else if (digitVal){
        tensStr = tensEng[tenVal] + ' ' + digitsEng[digitVal];
    } else {
        tensStr = tensEng[tenVal];
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