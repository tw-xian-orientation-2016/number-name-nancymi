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

function translateTens(tens, engDigits, engTens) {

    var tensStr = '';

    if (tens === 0) {
    } else if (tens < 20) {
        tensStr =  engDigits[tens];
    } else if (tens%10 === 0){
        tensStr = engTens[parseInt(tens/10)];
    } else {
        tensStr = engTens[parseInt(tens/10)] + ' ' + engDigits[tens%10];
    }

    return tensStr;
}

function connect(hundredStr, tensStr, metric) {
    var numberStr = '';

    if (hundredStr !== '') {
        numberStr += hundredStr + ' ';
    }

    if (tensStr !== '') {
        if (numberStr !== '') {
            numberStr += 'and ';
        }
        numberStr += tensStr + ' ';
    }

    if (metric != '') {
        numberStr += metric + ' ';
    }

    numberStr = numberStr.substring(0, numberStr.length-1);

    return numberStr;
}

function getNumberStr(numberStrList) {
    var numberStr = '';
    numberStrList.forEach(function(numberUnitStr) {
        if (numberUnitStr.match(' and ')) {
            numberStr = ', ' + numberUnitStr + numberStr;
        } else {
            numberStr = ' and ' + numberUnitStr + numberStr;
        }
    });

    if (numberStr.indexOf(',') === 0) {
        numberStr = numberStr.substring(2);
    } else {
        numberStr = numberStr.substring(5);
    }

    return numberStr;
}