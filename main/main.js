/**
 * Created by nancymi on 16/2/29.
 */

function translateNumberInEnglish(number) {
    var numberMetricList = divideIntoMetric(number);
    var numberStrList = doTranslate(numberMetricList);
    var numberStr = getNumberStr(numberStrList);

    return numberStr;
}

