var _loop_1 = function (i) {
    var price = document.getElementById('price' + i);
    var selNum = document.getElementById('sel_num' + i);
    price.addEventListener('keyup', function () {
        calculateSales();
    });
    selNum.addEventListener('keyup', function () {
        calculateSales();
    });
    function calculateSales() {
        var priceValue = price.value == '' ? 0 : +price.value;
        var selNumValue = selNum.value == '' ? 0 : +selNum.value;
        var sum = document.getElementById('sum' + i);
        sum.value = price.value == '' && selNum.value == '' ? '' : (priceValue * selNumValue).toString();
    }
};
for (var i = 1; i <= 3; i++) {
    _loop_1(i);
}
var product1 = document.getElementById('product1');
var price1 = document.getElementById('price1');
var selNum1 = document.getElementById('sel_num1');
var sum1 = document.getElementById('sum1');
var people1 = document.getElementById('people1');
var product2 = document.getElementById('product2');
var price2 = document.getElementById('price2');
var selNum2 = document.getElementById('sel_num2');
var sum2 = document.getElementById('sum2');
var people2 = document.getElementById('people2');
var product3 = document.getElementById('product3');
var price3 = document.getElementById('price3');
var selNum3 = document.getElementById('sel_num3');
var sum3 = document.getElementById('sum3');
var people3 = document.getElementById('people3');
product1.addEventListener('keyup', function () {
    if (product1.value != '') {
        product2.disabled = false;
    }
    else {
        product2.disabled = true;
        product2.value = '';
        price2.disabled = true;
        price2.required = false;
        price2.value = '';
        selNum2.disabled = true;
        selNum2.required = false;
        selNum2.value = '';
        people2.disabled = true;
        people2.required = false;
        people2.value = '';
        sum2.value = '';
        product3.disabled = true;
        product3.value = '';
        price3.disabled = true;
        price3.required = false;
        price3.value = '';
        selNum3.disabled = true;
        selNum3.required = false;
        selNum3.value = '';
        people3.disabled = true;
        people3.required = false;
        people3.value = '';
        sum3.value = '';
    }
});
product2.addEventListener('keyup', function () {
    if (product2.value != '') {
        price2.disabled = false;
        price2.required = true;
        selNum2.disabled = false;
        selNum2.required = true;
        people2.disabled = false;
        people2.required = true;
        product3.disabled = false;
    }
    else {
        price2.disabled = true;
        price2.required = false;
        price2.value = '';
        selNum2.disabled = true;
        selNum2.required = false;
        selNum2.value = '';
        people2.disabled = true;
        people2.required = false;
        people2.value = '';
        sum2.value = '';
        product3.disabled = true;
        product3.value = '';
        price3.disabled = true;
        price3.required = false;
        price3.value = '';
        selNum3.disabled = true;
        selNum3.required = false;
        selNum3.value = '';
        people3.disabled = true;
        people3.required = false;
        people3.value = '';
        sum3.value = '';
    }
});
product3.addEventListener('keyup', function () {
    if (product3.value != '') {
        price3.disabled = false;
        price3.required = true;
        selNum3.disabled = false;
        selNum3.required = true;
        people3.disabled = false;
        people3.required = true;
    }
    else {
        price3.disabled = true;
        price3.required = false;
        price3.value = '';
        selNum3.disabled = true;
        selNum3.required = false;
        selNum3.value = '';
        people3.disabled = true;
        people3.required = false;
        people3.value = '';
        sum3.value = '';
    }
});
var situation3 = document.getElementById('situation3');
var situation3Text = document.getElementById('situation3Text');
function checkedOther() {
    if (situation3.checked) {
        situation3Text.type = 'text';
        situation3Text.disabled = false;
        situation3Text.required = true;
    }
    else {
        situation3Text.type = 'hidden';
        situation3Text.disabled = true;
        situation3Text.required = false;
    }
}
var train1 = document.getElementById('train1');
var bus1 = document.getElementById('bus1');
var taxi1 = document.getElementById('taxi1');
var car1 = document.getElementById('car1');
var train2 = document.getElementById('train2');
var bus2 = document.getElementById('bus2');
var taxi2 = document.getElementById('taxi2');
var car2 = document.getElementById('car2');
var train3 = document.getElementById('train3');
var bus3 = document.getElementById('bus3');
var taxi3 = document.getElementById('taxi3');
var car3 = document.getElementById('car3');
var train4 = document.getElementById('train4');
var bus4 = document.getElementById('bus4');
var taxi4 = document.getElementById('taxi4');
var car4 = document.getElementById('car4');
var from1 = document.getElementById('from1');
var to1 = document.getElementById('to1');
var transFee1 = document.getElementById('trans_fee1');
var return1 = document.getElementById('return1');
var from2 = document.getElementById('from2');
var to2 = document.getElementById('to2');
var transFee2 = document.getElementById('trans_fee2');
var return2 = document.getElementById('return2');
var from3 = document.getElementById('from3');
var to3 = document.getElementById('to3');
var transFee3 = document.getElementById('trans_fee3');
var return3 = document.getElementById('return3');
var from4 = document.getElementById('from4');
var to4 = document.getElementById('to4');
var transFee4 = document.getElementById('trans_fee4');
var return4 = document.getElementById('return4');
var transSum = document.getElementById('trans_sum');
function calculate() {
    var transFee1Value = transFee1.value == '' ? 0 : +transFee1.value;
    var transportation1 = return1.checked ? transFee1Value * 2 : transFee1Value;
    var transFee2Value = transFee2.value == '' ? 0 : +transFee2.value;
    var transportation2 = return2.checked ? transFee2Value * 2 : transFee2Value;
    var transFee3Value = transFee3.value == '' ? 0 : +transFee3.value;
    var transportation3 = return3.checked ? transFee3Value * 2 : transFee3Value;
    var transFee4Value = transFee4.value == '' ? 0 : +transFee4.value;
    var transportation4 = return4.checked ? transFee4Value * 2 : transFee4Value;
    transSum.value = (transportation1 + transportation2 + transportation3 + transportation4).toString();
}
var remove1 = '';
function radioDeselection1(already, numeric) {
    if (remove1 == numeric) {
        already.checked = false;
        remove1 = '';
        from1.value = '';
        from1.disabled = true;
        from1.required = false;
        to1.value = '';
        to1.disabled = true;
        to1.required = false;
        transFee1.value = '';
        transFee1.disabled = true;
        transFee1.required = false;
        return1.checked = false;
        return1.disabled = true;
        train2.checked = false;
        train2.disabled = true;
        bus2.checked = false;
        bus2.disabled = true;
        taxi2.checked = false;
        taxi2.disabled = true;
        car2.checked = false;
        car2.disabled = true;
        from2.value = '';
        from2.disabled = true;
        from2.required = false;
        to2.value = '';
        to2.disabled = true;
        to2.required = false;
        transFee2.value = '';
        transFee2.disabled = true;
        transFee2.required = false;
        return2.checked = false;
        return2.disabled = true;
        train3.checked = false;
        train3.disabled = true;
        bus3.checked = false;
        bus3.disabled = true;
        taxi3.checked = false;
        taxi3.disabled = true;
        car3.checked = false;
        car3.disabled = true;
        from3.value = '';
        from3.disabled = true;
        from3.required = false;
        to3.value = '';
        to3.disabled = true;
        to3.required = false;
        transFee3.value = '';
        transFee3.disabled = true;
        transFee3.required = false;
        return3.checked = false;
        return3.disabled = true;
        train4.checked = false;
        train4.disabled = true;
        bus4.checked = false;
        bus4.disabled = true;
        taxi4.checked = false;
        taxi4.disabled = true;
        car4.checked = false;
        car4.disabled = true;
        from4.value = '';
        from4.disabled = true;
        from4.required = false;
        to4.value = '';
        to4.disabled = true;
        to4.required = false;
        transFee4.value = '';
        transFee4.disabled = true;
        transFee4.required = false;
        return4.checked = false;
        return4.disabled = true;
        calculate();
    }
    else {
        remove1 = numeric;
        train2.disabled = false;
        bus2.disabled = false;
        taxi2.disabled = false;
        car2.disabled = false;
        if (already.value == '電車' || already.value == 'バス') {
            from1.disabled = false;
            from1.required = true;
            to1.disabled = false;
            to1.required = true;
            transFee1.disabled = false;
            transFee1.required = true;
            return1.disabled = false;
        }
        else if (already.value == 'タクシー' || already.value == '車') {
            from1.value = '';
            from1.disabled = true;
            from1.required = false;
            to1.value = '';
            to1.disabled = true;
            to1.required = false;
            transFee1.disabled = false;
            transFee1.required = true;
            return1.disabled = false;
        }
    }
}
var remove2 = '';
function radioDeselection2(already, numeric) {
    if (remove2 == numeric) {
        already.checked = false;
        remove2 = '';
        from2.value = '';
        from2.disabled = true;
        from2.required = false;
        to2.value = '';
        to2.disabled = true;
        to2.required = false;
        transFee2.value = '';
        transFee2.disabled = true;
        transFee2.required = false;
        return2.checked = false;
        return2.disabled = true;
        train3.checked = false;
        train3.disabled = true;
        bus3.checked = false;
        bus3.disabled = true;
        taxi3.checked = false;
        taxi3.disabled = true;
        car3.checked = false;
        car3.disabled = true;
        from3.value = '';
        from3.disabled = true;
        from3.required = false;
        to3.value = '';
        to3.disabled = true;
        to3.required = false;
        transFee3.value = '';
        transFee3.disabled = true;
        transFee3.required = false;
        return3.checked = false;
        return3.disabled = true;
        train4.checked = false;
        train4.disabled = true;
        bus4.checked = false;
        bus4.disabled = true;
        taxi4.checked = false;
        taxi4.disabled = true;
        car4.checked = false;
        car4.disabled = true;
        from4.value = '';
        from4.disabled = true;
        from4.required = false;
        to4.value = '';
        to4.disabled = true;
        to4.required = false;
        transFee4.value = '';
        transFee4.disabled = true;
        transFee4.required = false;
        return4.checked = false;
        return4.disabled = true;
        calculate();
    }
    else {
        remove2 = numeric;
        train3.disabled = false;
        bus3.disabled = false;
        taxi3.disabled = false;
        car3.disabled = false;
        if (already.value == '電車' || already.value == 'バス') {
            from2.disabled = false;
            from2.required = true;
            to2.disabled = false;
            to2.required = true;
            transFee2.disabled = false;
            transFee2.required = true;
            return2.disabled = false;
        }
        else if (already.value == 'タクシー' || already.value == '車') {
            from2.value = '';
            from2.disabled = true;
            from2.required = false;
            to2.value = '';
            to2.disabled = true;
            to2.required = false;
            transFee2.disabled = false;
            transFee2.required = true;
            return2.disabled = false;
        }
    }
}
var remove3 = '';
function radioDeselection3(already, numeric) {
    if (remove3 == numeric) {
        already.checked = false;
        remove3 = '';
        from3.value = '';
        from3.disabled = true;
        from3.required = false;
        to3.value = '';
        to3.disabled = true;
        to3.required = false;
        transFee3.value = '';
        transFee3.disabled = true;
        transFee3.required = false;
        return3.checked = false;
        return3.disabled = true;
        train4.checked = false;
        train4.disabled = true;
        bus4.checked = false;
        bus4.disabled = true;
        taxi4.checked = false;
        taxi4.disabled = true;
        car4.checked = false;
        car4.disabled = true;
        from4.value = '';
        from4.disabled = true;
        from4.required = false;
        to4.value = '';
        to4.disabled = true;
        to4.required = false;
        transFee4.value = '';
        transFee4.disabled = true;
        transFee4.required = false;
        return4.checked = false;
        return4.disabled = true;
        calculate();
    }
    else {
        remove3 = numeric;
        train4.disabled = false;
        bus4.disabled = false;
        taxi4.disabled = false;
        car4.disabled = false;
        if (already.value == '電車' || already.value == 'バス') {
            from3.disabled = false;
            from3.required = true;
            to3.disabled = false;
            to3.required = true;
            transFee3.disabled = false;
            transFee3.required = true;
            return3.disabled = false;
        }
        else if (already.value == 'タクシー' || already.value == '車') {
            from3.value = '';
            from3.disabled = true;
            from3.required = false;
            to3.value = '';
            to3.disabled = true;
            to3.required = false;
            transFee3.disabled = false;
            transFee3.required = true;
            return3.disabled = false;
        }
    }
}
var remove4 = '';
function radioDeselection4(already, numeric) {
    if (remove4 == numeric) {
        already.checked = false;
        remove4 = '';
        from4.value = '';
        from4.disabled = true;
        from4.required = false;
        to4.value = '';
        to4.disabled = true;
        to4.required = false;
        transFee4.value = '';
        transFee4.disabled = true;
        transFee4.required = false;
        return4.checked = false;
        return4.disabled = true;
        calculate();
    }
    else {
        remove4 = numeric;
        if (already.value == '電車' || already.value == 'バス') {
            from4.disabled = false;
            from4.required = true;
            to4.disabled = false;
            to4.required = true;
            transFee4.disabled = false;
            transFee4.required = true;
            return4.disabled = false;
        }
        else if (already.value == 'タクシー' || already.value == '車') {
            from4.value = '';
            from4.disabled = true;
            from4.required = false;
            to4.value = '';
            to4.disabled = true;
            to4.required = false;
            transFee4.disabled = false;
            transFee4.required = true;
            return4.disabled = false;
        }
    }
}
var submit = document.getElementById('submit');
var product1Error1 = document.getElementById('product1_error1');
var price1Error1 = document.getElementById('price1_error1');
var selNum1Error1 = document.getElementById('sel_num1_error1');
var people1Error1 = document.getElementById('people1_error1');
var price2Error1 = document.getElementById('price2_error1');
var selNum2Error1 = document.getElementById('sel_num2_error1');
var people2Error1 = document.getElementById('people2_error1');
var price3Error1 = document.getElementById('price3_error1');
var selNum3Error1 = document.getElementById('sel_num3_error1');
var people3Error1 = document.getElementById('people3_error1');
var situation1 = document.getElementById('situation1');
var situation2 = document.getElementById('situation2');
var situationError1 = document.getElementById('situation_error1');
var situation3Error1 = document.getElementById('situation3_error1');
var section1Error1 = document.getElementById('section1_error1');
var transFee1Error1 = document.getElementById('trans_fee1_error1');
var section2Error1 = document.getElementById('section2_error1');
var transFee2Error1 = document.getElementById('trans_fee2_error1');
var section3Error1 = document.getElementById('section3_error1');
var transFee3Error1 = document.getElementById('trans_fee3_error1');
var section4Error1 = document.getElementById('section4_error1');
var transFee4Error1 = document.getElementById('trans_fee4_error1');
var cusNum = document.getElementById('cus_num');
var cusNumError1 = document.getElementById('cus_num_error1');
var cusGrp = document.getElementById('cus_grp');
var cusGrpError1 = document.getElementById('cus_grp_error1');
var stopBy = document.getElementById('stop_by');
var stopByError1 = document.getElementById('stop_by_error1');
var peakHours = document.getElementById('peak_hours');
var peakHoursError1 = document.getElementById('peak_hours_error1');
var peakHour1 = document.getElementById('peak_hour1');
var peakHour2 = document.getElementById('peak_hour2');
var peakHourError1 = document.getElementById('peak_hour_error1');
var awareness = document.getElementById('awareness');
var awarenessError1 = document.getElementById('awareness_error1');
var amount = document.getElementById('amount');
var amountError1 = document.getElementById('amount_error1');
var prdcPrice = document.getElementById('prdc_price');
var prdcPriceError1 = document.getElementById('prdc_price_error1');
var reaction = document.getElementById('reaction');
var reactionError1 = document.getElementById('reaction_error1');
var interest = document.getElementById('interest');
var interestError1 = document.getElementById('interest_error1');
var incentive = document.getElementById('incentive');
var incentiveError1 = document.getElementById('incentive_error1');
var frequency = document.getElementById('frequency');
var frequencyError1 = document.getElementById('frequency_error1');
var ageGrp = document.getElementById('age_grp');
var ageGrpError1 = document.getElementById('age_grp_error1');
var ingredientFood = document.getElementById('ingredient_food');
var ingredientFoodError1 = document.getElementById('ingredient_food_error1');
var ingredientGoods = document.getElementById('ingredient_goods');
var ingredientGoodsError1 = document.getElementById('ingredient_goods_error1');
var receipt = document.getElementById('receipt');
var receiptError1 = document.getElementById('receipt_error1');
submit.addEventListener('click', function (event) {
    if (product1.value == '') {
        product1Error1.style.display = 'block';
    }
    else {
        product1Error1.style.display = 'none';
    }
    if (price1.value == '') {
        price1Error1.style.display = 'block';
    }
    else {
        price1Error1.style.display = 'none';
    }
    if (selNum1.value == '') {
        selNum1Error1.style.display = 'block';
    }
    else {
        selNum1Error1.style.display = 'none';
    }
    if (people1.value == '') {
        people1Error1.style.display = 'block';
    }
    else {
        people1Error1.style.display = 'none';
    }
    if (product2.value != '' && price2.value == '') {
        price2Error1.style.display = 'block';
    }
    else {
        price2Error1.style.display = 'none';
    }
    if (product2.value != '' && selNum2.value == '') {
        selNum2Error1.style.display = 'block';
    }
    else {
        selNum2Error1.style.display = 'none';
    }
    if (product2.value != '' && people2.value == '') {
        people2Error1.style.display = 'block';
    }
    else {
        people2Error1.style.display = 'none';
    }
    if (product3.value != '' && price3.value == '') {
        price3Error1.style.display = 'block';
    }
    else {
        price3Error1.style.display = 'none';
    }
    if (product3.value != '' && selNum3.value == '') {
        selNum3Error1.style.display = 'block';
    }
    else {
        selNum3Error1.style.display = 'none';
    }
    if (product3.value != '' && people3.value == '') {
        people3Error1.style.display = 'block';
    }
    else {
        people3Error1.style.display = 'none';
    }
    if (!situation1.checked && !situation2.checked && !situation3.checked) {
        situationError1.style.display = 'block';
    }
    else {
        situationError1.style.display = 'none';
    }
    if (situation3.checked && situation3Text.value == '') {
        situation3Error1.style.display = 'block';
    }
    else {
        situation3Error1.style.display = 'none';
    }
    if ((train1.checked || bus1.checked) && (from1.value == '' || to1.value == '')) {
        section1Error1.style.display = 'block';
    }
    else {
        section1Error1.style.display = 'none';
    }
    if ((train1.checked || bus1.checked || taxi1.checked || car1.checked) && transFee1.value == '') {
        transFee1Error1.style.display = 'block';
    }
    else {
        transFee1Error1.style.display = 'none';
    }
    if ((train2.checked || bus2.checked) && (from2.value == '' || to2.value == '')) {
        section2Error1.style.display = 'block';
    }
    else {
        section2Error1.style.display = 'none';
    }
    if ((train2.checked || bus2.checked || taxi2.checked || car2.checked) && transFee2.value == '') {
        transFee2Error1.style.display = 'block';
    }
    else {
        transFee2Error1.style.display = 'none';
    }
    if ((train3.checked || bus3.checked) && (from3.value == '' || to3.value == '')) {
        section3Error1.style.display = 'block';
    }
    else {
        section3Error1.style.display = 'none';
    }
    if ((train3.checked || bus3.checked || taxi3.checked || car3.checked) && transFee3.value == '') {
        transFee3Error1.style.display = 'block';
    }
    else {
        transFee3Error1.style.display = 'none';
    }
    if ((train4.checked || bus4.checked) && (from4.value == '' || to4.value == '')) {
        section4Error1.style.display = 'block';
    }
    else {
        section4Error1.style.display = 'none';
    }
    if ((train4.checked || bus4.checked || taxi4.checked || car4.checked) && transFee4.value == '') {
        transFee4Error1.style.display = 'block';
    }
    else {
        transFee4Error1.style.display = 'none';
    }
    if (cusNum.value == '') {
        cusNumError1.style.display = 'block';
    }
    else {
        cusNumError1.style.display = 'none';
    }
    if (cusGrp.value == '') {
        cusGrpError1.style.display = 'block';
    }
    else {
        cusGrpError1.style.display = 'none';
    }
    if (stopBy.value == '') {
        stopByError1.style.display = 'block';
    }
    else {
        stopByError1.style.display = 'none';
    }
    if (peakHours.value == '') {
        peakHoursError1.style.display = 'block';
    }
    else {
        peakHoursError1.style.display = 'none';
    }
    if (peakHour1.value == '' || peakHour2.value == '') {
        peakHourError1.style.display = 'block';
    }
    else {
        peakHourError1.style.display = 'none';
    }
    if (awareness.value == '') {
        awarenessError1.style.display = 'block';
    }
    else {
        awarenessError1.style.display = 'none';
    }
    if (amount.value == '') {
        amountError1.style.display = 'block';
    }
    else {
        amountError1.style.display = 'none';
    }
    if (prdcPrice.value == '') {
        prdcPriceError1.style.display = 'block';
    }
    else {
        prdcPriceError1.style.display = 'none';
    }
    if (reaction.value == '') {
        reactionError1.style.display = 'block';
    }
    else {
        reactionError1.style.display = 'none';
    }
    if (interest.value == '') {
        interestError1.style.display = 'block';
    }
    else {
        interestError1.style.display = 'none';
    }
    if (incentive.value == '') {
        incentiveError1.style.display = 'block';
    }
    else {
        incentiveError1.style.display = 'none';
    }
    if (frequency.value == '') {
        frequencyError1.style.display = 'block';
    }
    else {
        frequencyError1.style.display = 'none';
    }
    if (ageGrp.value == '') {
        ageGrpError1.style.display = 'block';
    }
    else {
        ageGrpError1.style.display = 'none';
    }
    if (ingredientFood.value == '') {
        ingredientFoodError1.style.display = 'block';
    }
    else {
        ingredientFoodError1.style.display = 'none';
    }
    if (ingredientGoods.value == '') {
        ingredientGoodsError1.style.display = 'block';
    }
    else {
        ingredientGoodsError1.style.display = 'none';
    }
    if (receipt.value == '') {
        receiptError1.style.display = 'block';
    }
    else {
        receiptError1.style.display = 'none';
    }
    if (product1.value == '') {
        product1.focus();
    }
    else if (price1.value == '') {
        price1.focus();
    }
    else if (selNum1.value == '') {
        selNum1.focus();
    }
    else if (people1.value == '') {
        people1.focus();
    }
    else if (product2.value != '' && price2.value == '') {
        price2.focus();
    }
    else if (product2.value != '' && selNum2.value == '') {
        selNum2.focus();
    }
    else if (product2.value != '' && people2.value == '') {
        people2.focus();
    }
    else if (product3.value != '' && price3.value == '') {
        price3.focus();
    }
    else if (product3.value != '' && selNum3.value == '') {
        selNum3.focus();
    }
    else if (product3.value != '' && people3.value == '') {
        people3.focus();
    }
    else if (!situation1.checked && !situation2.checked && !situation3.checked) {
        situation1.focus();
    }
    else if (situation3.checked && situation3Text.value == '') {
        situation3Text.focus();
    }
    else if ((train1.checked || bus1.checked) && from1.value == '') {
        from1.focus();
    }
    else if ((train1.checked || bus1.checked) && to1.value == '') {
        to1.focus();
    }
    else if ((train1.checked || bus1.checked || taxi1.checked || car1.checked) && transFee1.value == '') {
        transFee1.focus();
    }
    else if ((train2.checked || bus2.checked) && from2.value == '') {
        from2.focus();
    }
    else if ((train2.checked || bus2.checked) && to2.value == '') {
        to2.focus();
    }
    else if ((train2.checked || bus2.checked || taxi2.checked || car2.checked) && transFee2.value == '') {
        transFee2.focus();
    }
    else if ((train3.checked || bus3.checked) && from3.value == '') {
        from3.focus();
    }
    else if ((train3.checked || bus3.checked) && to3.value == '') {
        to3.focus();
    }
    else if ((train3.checked || bus3.checked || taxi3.checked || car3.checked) && transFee3.value == '') {
        transFee3.focus();
    }
    else if ((train4.checked || bus4.checked) && from4.value == '') {
        from4.focus();
    }
    else if ((train4.checked || bus4.checked) && to4.value == '') {
        to4.focus();
    }
    else if ((train4.checked || bus4.checked || taxi4.checked || car4.checked) && transFee4.value == '') {
        transFee4.focus();
    }
    else if (cusNum.value == '') {
        cusNum.focus();
    }
    else if (cusGrp.value == '') {
        cusGrp.focus();
    }
    else if (stopBy.value == '') {
        stopBy.focus();
    }
    else if (peakHours.value == '') {
        peakHours.focus();
    }
    else if (peakHour1.value == '') {
        peakHour1.focus();
    }
    else if (peakHour2.value == '') {
        peakHour2.focus();
    }
    else if (awareness.value == '') {
        awareness.focus();
    }
    else if (amount.value == '') {
        amount.focus();
    }
    else if (prdcPrice.value == '') {
        prdcPrice.focus();
    }
    else if (reaction.value == '') {
        reaction.focus();
    }
    else if (interest.value == '') {
        interest.focus();
    }
    else if (incentive.value == '') {
        incentive.focus();
    }
    else if (frequency.value == '') {
        frequency.focus();
    }
    else if (ageGrp.value == '') {
        ageGrp.focus();
    }
    else if (ingredientFood.value == '') {
        ingredientFood.focus();
    }
    else if (ingredientGoods.value == '') {
        ingredientGoods.focus();
    }
    else if (receipt.value == '') {
        receipt.focus();
    }
    else {
        if (!confirm('登録しますか？')) {
            event.preventDefault();
        }
    }
});
