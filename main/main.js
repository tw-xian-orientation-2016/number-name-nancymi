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

