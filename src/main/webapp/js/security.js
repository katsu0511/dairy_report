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
var section1Error1 = document.getElementById('section1_error1');
var transFee1Error1 = document.getElementById('trans_fee1_error1');
var section2Error1 = document.getElementById('section2_error1');
var transFee2Error1 = document.getElementById('trans_fee2_error1');
var section3Error1 = document.getElementById('section3_error1');
var transFee3Error1 = document.getElementById('trans_fee3_error1');
var section4Error1 = document.getElementById('section4_error1');
var transFee4Error1 = document.getElementById('trans_fee4_error1');
var overtime = document.getElementById('overtime');
var overtimeError1 = document.getElementById('overtime_error1');
submit.addEventListener('click', function (event) {
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
    if (overtime.value == '') {
        overtimeError1.style.display = 'block';
    }
    else {
        overtimeError1.style.display = 'none';
    }
    if ((train1.checked || bus1.checked) && from1.value == '') {
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
    else if (overtime.value == '') {
        overtime.focus();
    }
    else {
        if (!confirm('登録しますか？')) {
            event.preventDefault();
        }
    }
});
