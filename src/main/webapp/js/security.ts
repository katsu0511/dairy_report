const train1: HTMLInputElement = <HTMLInputElement>document.getElementById('train1')
const bus1: HTMLInputElement = <HTMLInputElement>document.getElementById('bus1')
const taxi1: HTMLInputElement = <HTMLInputElement>document.getElementById('taxi1')
const car1: HTMLInputElement = <HTMLInputElement>document.getElementById('car1')
const train2: HTMLInputElement = <HTMLInputElement>document.getElementById('train2')
const bus2: HTMLInputElement = <HTMLInputElement>document.getElementById('bus2')
const taxi2: HTMLInputElement = <HTMLInputElement>document.getElementById('taxi2')
const car2: HTMLInputElement = <HTMLInputElement>document.getElementById('car2')
const train3: HTMLInputElement = <HTMLInputElement>document.getElementById('train3')
const bus3: HTMLInputElement = <HTMLInputElement>document.getElementById('bus3')
const taxi3: HTMLInputElement = <HTMLInputElement>document.getElementById('taxi3')
const car3: HTMLInputElement = <HTMLInputElement>document.getElementById('car3')
const train4: HTMLInputElement = <HTMLInputElement>document.getElementById('train4')
const bus4: HTMLInputElement = <HTMLInputElement>document.getElementById('bus4')
const taxi4: HTMLInputElement = <HTMLInputElement>document.getElementById('taxi4')
const car4: HTMLInputElement = <HTMLInputElement>document.getElementById('car4')
const from1: HTMLInputElement = <HTMLInputElement>document.getElementById('from1')
const to1: HTMLInputElement = <HTMLInputElement>document.getElementById('to1')
const transFee1: HTMLInputElement = <HTMLInputElement>document.getElementById('trans_fee1')
const return1: HTMLInputElement = <HTMLInputElement>document.getElementById('return1')
const from2: HTMLInputElement = <HTMLInputElement>document.getElementById('from2')
const to2: HTMLInputElement = <HTMLInputElement>document.getElementById('to2')
const transFee2: HTMLInputElement = <HTMLInputElement>document.getElementById('trans_fee2')
const return2: HTMLInputElement = <HTMLInputElement>document.getElementById('return2')
const from3: HTMLInputElement = <HTMLInputElement>document.getElementById('from3')
const to3: HTMLInputElement = <HTMLInputElement>document.getElementById('to3')
const transFee3: HTMLInputElement = <HTMLInputElement>document.getElementById('trans_fee3')
const return3: HTMLInputElement = <HTMLInputElement>document.getElementById('return3')
const from4: HTMLInputElement = <HTMLInputElement>document.getElementById('from4')
const to4: HTMLInputElement = <HTMLInputElement>document.getElementById('to4')
const transFee4: HTMLInputElement = <HTMLInputElement>document.getElementById('trans_fee4')
const return4: HTMLInputElement = <HTMLInputElement>document.getElementById('return4')
const transSum: HTMLInputElement = <HTMLInputElement>document.getElementById('trans_sum')

function calculate() {
	const transFee1Value: number = transFee1.value == '' ? 0 : +transFee1.value
	const transportation1: number = return1.checked ? transFee1Value * 2 : transFee1Value
	const transFee2Value: number = transFee2.value == '' ? 0 : +transFee2.value
	const transportation2: number = return2.checked ? transFee2Value * 2 : transFee2Value
	const transFee3Value: number = transFee3.value == '' ? 0 : +transFee3.value
	const transportation3: number = return3.checked ? transFee3Value * 2 : transFee3Value
	const transFee4Value: number = transFee4.value == '' ? 0 : +transFee4.value
	const transportation4: number = return4.checked ? transFee4Value * 2 : transFee4Value
	transSum.value = (transportation1 + transportation2 + transportation3 + transportation4).toString()
}

var remove1: string = ''
function radioDeselection1(already: HTMLInputElement, numeric: string) {
	if (remove1 == numeric) {
		already.checked = false
		remove1 = ''
		from1.value = ''
		from1.disabled = true
		from1.required = false
		to1.value = ''
		to1.disabled = true
		to1.required = false
		transFee1.value = ''
		transFee1.disabled = true
		transFee1.required = false
		return1.checked = false
		return1.disabled = true
		train2.checked = false
		train2.disabled = true
		bus2.checked = false
		bus2.disabled = true
		taxi2.checked = false
		taxi2.disabled = true
		car2.checked = false
		car2.disabled = true
		from2.value = ''
		from2.disabled = true
		from2.required = false
		to2.value = ''
		to2.disabled = true
		to2.required = false
		transFee2.value = ''
		transFee2.disabled = true
		transFee2.required = false
		return2.checked = false
		return2.disabled = true
		train3.checked = false
		train3.disabled = true
		bus3.checked = false
		bus3.disabled = true
		taxi3.checked = false
		taxi3.disabled = true
		car3.checked = false
		car3.disabled = true
		from3.value = ''
		from3.disabled = true
		from3.required = false
		to3.value = ''
		to3.disabled = true
		to3.required = false
		transFee3.value = ''
		transFee3.disabled = true
		transFee3.required = false
		return3.checked = false
		return3.disabled = true
		train4.checked = false
		train4.disabled = true
		bus4.checked = false
		bus4.disabled = true
		taxi4.checked = false
		taxi4.disabled = true
		car4.checked = false
		car4.disabled = true
		from4.value = ''
		from4.disabled = true
		from4.required = false
		to4.value = ''
		to4.disabled = true
		to4.required = false
		transFee4.value = ''
		transFee4.disabled = true
		transFee4.required = false
		return4.checked = false
		return4.disabled = true
		calculate()
	} else {
		remove1 = numeric
		train2.disabled = false
		bus2.disabled = false
		taxi2.disabled = false
		car2.disabled = false
		if (already.value == '電車' || already.value == 'バス') {
			from1.disabled = false
			from1.required = true
			to1.disabled = false
			to1.required = true
			transFee1.disabled = false
			transFee1.required = true
			return1.disabled = false
		} else if (already.value == 'タクシー' || already.value == '車') {
			from1.value = ''
			from1.disabled = true
			from1.required = false
			to1.value = ''
			to1.disabled = true
			to1.required = false
			transFee1.disabled = false
			transFee1.required = true
			return1.disabled = false
		}
	}
}

var remove2: string = ''
function radioDeselection2(already: HTMLInputElement, numeric: string) {
	if (remove2 == numeric) {
		already.checked = false
		remove2 = ''
		from2.value = ''
		from2.disabled = true
		from2.required = false
		to2.value = ''
		to2.disabled = true
		to2.required = false
		transFee2.value = ''
		transFee2.disabled = true
		transFee2.required = false
		return2.checked = false
		return2.disabled = true
		train3.checked = false
		train3.disabled = true
		bus3.checked = false
		bus3.disabled = true
		taxi3.checked = false
		taxi3.disabled = true
		car3.checked = false
		car3.disabled = true
		from3.value = ''
		from3.disabled = true
		from3.required = false
		to3.value = ''
		to3.disabled = true
		to3.required = false
		transFee3.value = ''
		transFee3.disabled = true
		transFee3.required = false
		return3.checked = false
		return3.disabled = true
		train4.checked = false
		train4.disabled = true
		bus4.checked = false
		bus4.disabled = true
		taxi4.checked = false
		taxi4.disabled = true
		car4.checked = false
		car4.disabled = true
		from4.value = ''
		from4.disabled = true
		from4.required = false
		to4.value = ''
		to4.disabled = true
		to4.required = false
		transFee4.value = ''
		transFee4.disabled = true
		transFee4.required = false
		return4.checked = false
		return4.disabled = true
		calculate()
	} else {
		remove2 = numeric
		train3.disabled = false
		bus3.disabled = false
		taxi3.disabled = false
		car3.disabled = false
		if (already.value == '電車' || already.value == 'バス') {
			from2.disabled = false
			from2.required = true
			to2.disabled = false
			to2.required = true
			transFee2.disabled = false
			transFee2.required = true
			return2.disabled = false
		} else if (already.value == 'タクシー' || already.value == '車') {
			from2.value = ''
			from2.disabled = true
			from2.required = false
			to2.value = ''
			to2.disabled = true
			to2.required = false
			transFee2.disabled = false
			transFee2.required = true
			return2.disabled = false
		}
	}
}

var remove3: string = ''
function radioDeselection3(already: HTMLInputElement, numeric: string) {
	if (remove3 == numeric) {
		already.checked = false
		remove3 = ''
		from3.value = ''
		from3.disabled = true
		from3.required = false
		to3.value = ''
		to3.disabled = true
		to3.required = false
		transFee3.value = ''
		transFee3.disabled = true
		transFee3.required = false
		return3.checked = false
		return3.disabled = true
		train4.checked = false
		train4.disabled = true
		bus4.checked = false
		bus4.disabled = true
		taxi4.checked = false
		taxi4.disabled = true
		car4.checked = false
		car4.disabled = true
		from4.value = ''
		from4.disabled = true
		from4.required = false
		to4.value = ''
		to4.disabled = true
		to4.required = false
		transFee4.value = ''
		transFee4.disabled = true
		transFee4.required = false
		return4.checked = false
		return4.disabled = true
		calculate()
	} else {
		remove3 = numeric
		train4.disabled = false
		bus4.disabled = false
		taxi4.disabled = false
		car4.disabled = false
		if (already.value == '電車' || already.value == 'バス') {
			from3.disabled = false
			from3.required = true
			to3.disabled = false
			to3.required = true
			transFee3.disabled = false
			transFee3.required = true
			return3.disabled = false
		} else if (already.value == 'タクシー' || already.value == '車') {
			from3.value = ''
			from3.disabled = true
			from3.required = false
			to3.value = ''
			to3.disabled = true
			to3.required = false
			transFee3.disabled = false
			transFee3.required = true
			return3.disabled = false
		}
	}
}

var remove4: string = ''
function radioDeselection4(already: HTMLInputElement, numeric: string) {
	if (remove4 == numeric) {
		already.checked = false
		remove4 = ''
		from4.value = ''
		from4.disabled = true
		from4.required = false
		to4.value = ''
		to4.disabled = true
		to4.required = false
		transFee4.value = ''
		transFee4.disabled = true
		transFee4.required = false
		return4.checked = false
		return4.disabled = true
		calculate()
	} else {
		remove4 = numeric
		if (already.value == '電車' || already.value == 'バス') {
			from4.disabled = false
			from4.required = true
			to4.disabled = false
			to4.required = true
			transFee4.disabled = false
			transFee4.required = true
			return4.disabled = false
		} else if (already.value == 'タクシー' || already.value == '車') {
			from4.value = ''
			from4.disabled = true
			from4.required = false
			to4.value = ''
			to4.disabled = true
			to4.required = false
			transFee4.disabled = false
			transFee4.required = true
			return4.disabled = false
		}
	}
}

const submit: HTMLInputElement = <HTMLInputElement>document.getElementById('submit')
const section1Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('section1_error1')
const transFee1Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('trans_fee1_error1')
const section2Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('section2_error1')
const transFee2Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('trans_fee2_error1')
const section3Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('section3_error1')
const transFee3Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('trans_fee3_error1')
const section4Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('section4_error1')
const transFee4Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('trans_fee4_error1')
const overtime: HTMLInputElement = <HTMLInputElement>document.getElementById('overtime')
const overtimeError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('overtime_error1')
submit.addEventListener('click', function (event) {
	if ((train1.checked || bus1.checked) && (from1.value == '' || to1.value == '')) {
		section1Error1.style.display = 'block'
    } else {
		section1Error1.style.display = 'none'
	}
	
	if ((train1.checked || bus1.checked || taxi1.checked || car1.checked) && transFee1.value == '') {
		transFee1Error1.style.display = 'block'
    } else {
		transFee1Error1.style.display = 'none'
	}
	
	if ((train2.checked || bus2.checked) && (from2.value == '' || to2.value == '')) {
		section2Error1.style.display = 'block'
    } else {
		section2Error1.style.display = 'none'
	}
	
	if ((train2.checked || bus2.checked || taxi2.checked || car2.checked) && transFee2.value == '') {
		transFee2Error1.style.display = 'block'
    } else {
		transFee2Error1.style.display = 'none'
	}
	
	if ((train3.checked || bus3.checked) && (from3.value == '' || to3.value == '')) {
		section3Error1.style.display = 'block'
    } else {
		section3Error1.style.display = 'none'
	}
	
	if ((train3.checked || bus3.checked || taxi3.checked || car3.checked) && transFee3.value == '') {
		transFee3Error1.style.display = 'block'
    } else {
		transFee3Error1.style.display = 'none'
	}
	
	if ((train4.checked || bus4.checked) && (from4.value == '' || to4.value == '')) {
		section4Error1.style.display = 'block'
    } else {
		section4Error1.style.display = 'none'
	}
	
	if ((train4.checked || bus4.checked || taxi4.checked || car4.checked) && transFee4.value == '') {
		transFee4Error1.style.display = 'block'
    } else {
		transFee4Error1.style.display = 'none'
	}
	
	if (overtime.value == '') {
		overtimeError1.style.display = 'block'
    } else {
		overtimeError1.style.display = 'none'
	}
	
	
	
	if ((train1.checked || bus1.checked) && from1.value == '') {
		from1.focus()
	} else if ((train1.checked || bus1.checked) && to1.value == '') {
		to1.focus()
	} else if ((train1.checked || bus1.checked || taxi1.checked || car1.checked) && transFee1.value == '') {
		transFee1.focus()
	} else if ((train2.checked || bus2.checked) && from2.value == '') {
		from2.focus()
	} else if ((train2.checked || bus2.checked) && to2.value == '') {
		to2.focus()
	} else if ((train2.checked || bus2.checked || taxi2.checked || car2.checked) && transFee2.value == '') {
		transFee2.focus()
	} else if ((train3.checked || bus3.checked) && from3.value == '') {
		from3.focus()
	} else if ((train3.checked || bus3.checked) && to3.value == '') {
		to3.focus()
	} else if ((train3.checked || bus3.checked || taxi3.checked || car3.checked) && transFee3.value == '') {
		transFee3.focus()
	} else if ((train4.checked || bus4.checked) && from4.value == '') {
		from4.focus()
	} else if ((train4.checked || bus4.checked) && to4.value == '') {
		to4.focus()
	} else if ((train4.checked || bus4.checked || taxi4.checked || car4.checked) && transFee4.value == '') {
		transFee4.focus()
	} else if (overtime.value == '') {
		overtime.focus()
	} else {
		if (!confirm('登録しますか？')) {
			event.preventDefault()
		}
	}
})
