/**
 * Created by nancymi on 16/2/29.
 */

function translateNumberInEnglish(number) {
    var numberMetricList = divideIntoMetric(number);
    var numberStrList = doTranslate(numberMetricList);
    var numberStr = getNumberStr(numberStrList);

    return numberStr;
}

function divideIntoMetric(number) {
    var numberMetricList = [];
    for (var i = number.length-3; i > 0; i -= 3) {
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
            var hundredStr = translateHundreds(parseInt(numberMetricList[i] / 100), dictonary.engDigits);
            var tensStr = translateTens(parseInt(numberMetricList[i] % 100), dictonary.engDigits, dictonary.engTens);
            var numberStr = connect(hundredStr, tensStr, dictonary.metrics[i]);
            numberStrList.push(numberStr);
        }
    }

    return numberStrList;
}

function translateHundreds(hundreds, engDigits) {
    if(hundreds === 0) {
        return '';
    } else {
        return engDigits[hundreds] + ' hundred';
    }
}