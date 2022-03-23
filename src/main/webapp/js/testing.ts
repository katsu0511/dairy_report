for (let i: number = 1; i <= 3; i++) {
	const price: HTMLInputElement = <HTMLInputElement>document.getElementById('price' + i)
	const selNum: HTMLInputElement = <HTMLInputElement>document.getElementById('sel_num' + i)
	price.addEventListener('keyup', function () {
		calculateSales()
	})
	selNum.addEventListener('keyup', function () {
		calculateSales()
	})
	function calculateSales() {
		const priceValue: number = price.value == '' ? 0 : +price.value
		const selNumValue: number = selNum.value == '' ? 0 : +selNum.value
		const sum: HTMLInputElement = <HTMLInputElement>document.getElementById('sum' + i)
		sum.value = price.value == '' && selNum.value == '' ? '' : (priceValue * selNumValue).toString()
	}
}

const product1: HTMLInputElement = <HTMLInputElement>document.getElementById('product1')
const price1: HTMLInputElement = <HTMLInputElement>document.getElementById('price1')
const selNum1: HTMLInputElement = <HTMLInputElement>document.getElementById('sel_num1')
const sum1: HTMLInputElement = <HTMLInputElement>document.getElementById('sum1')
const people1: HTMLInputElement = <HTMLInputElement>document.getElementById('people1')
const product2: HTMLInputElement = <HTMLInputElement>document.getElementById('product2')
const price2: HTMLInputElement = <HTMLInputElement>document.getElementById('price2')
const selNum2: HTMLInputElement = <HTMLInputElement>document.getElementById('sel_num2')
const sum2: HTMLInputElement = <HTMLInputElement>document.getElementById('sum2')
const people2: HTMLInputElement = <HTMLInputElement>document.getElementById('people2')
const product3: HTMLInputElement = <HTMLInputElement>document.getElementById('product3')
const price3: HTMLInputElement = <HTMLInputElement>document.getElementById('price3')
const selNum3: HTMLInputElement = <HTMLInputElement>document.getElementById('sel_num3')
const sum3: HTMLInputElement = <HTMLInputElement>document.getElementById('sum3')
const people3: HTMLInputElement = <HTMLInputElement>document.getElementById('people3')
product1.addEventListener('keyup', function () {
	if (product1.value != '') {
		product2.disabled = false
	} else {
		product2.disabled = true
		product2.value = ''
		price2.disabled = true
		price2.required = false
		price2.value = ''
		selNum2.disabled = true
		selNum2.required = false
		selNum2.value = ''
		people2.disabled = true
		people2.required = false
		people2.value = ''
		sum2.value = ''
		product3.disabled = true
		product3.value = ''
		price3.disabled = true
		price3.required = false
		price3.value = ''
		selNum3.disabled = true
		selNum3.required = false
		selNum3.value = ''
		people3.disabled = true
		people3.required = false
		people3.value = ''
		sum3.value = ''
	}
})

product2.addEventListener('keyup', function () {
	if (product2.value != '') {
		price2.disabled = false
		price2.required = true
		selNum2.disabled = false
		selNum2.required = true
		people2.disabled = false
		people2.required = true
		product3.disabled = false
	} else {
		price2.disabled = true
		price2.required = false
		price2.value = ''
		selNum2.disabled = true
		selNum2.required = false
		selNum2.value = ''
		people2.disabled = true
		people2.required = false
		people2.value = ''
		sum2.value = ''
		product3.disabled = true
		product3.value = ''
		price3.disabled = true
		price3.required = false
		price3.value = ''
		selNum3.disabled = true
		selNum3.required = false
		selNum3.value = ''
		people3.disabled = true
		people3.required = false
		people3.value = ''
		sum3.value = ''
	}
})

product3.addEventListener('keyup', function () {
	if (product3.value != '') {
		price3.disabled = false
		price3.required = true
		selNum3.disabled = false
		selNum3.required = true
		people3.disabled = false
		people3.required = true
	} else {
		price3.disabled = true
		price3.required = false
		price3.value = ''
		selNum3.disabled = true
		selNum3.required = false
		selNum3.value = ''
		people3.disabled = true
		people3.required = false
		people3.value = ''
		sum3.value = ''
	}
})

const situation3: HTMLInputElement = <HTMLInputElement>document.getElementById('situation3')
const situation3Text: HTMLInputElement = <HTMLInputElement>document.getElementById('situation3Text')
function checkedOther() {
	if (situation3.checked) {
		situation3Text.type = 'text';
		situation3Text.disabled = false
		situation3Text.required = true
	} else {
		situation3Text.type = 'hidden';
		situation3Text.disabled = true
		situation3Text.required = false
	}
}

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
const product1Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('product1_error1')
const price1Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('price1_error1')
const selNum1Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('sel_num1_error1')
const people1Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('people1_error1')
const price2Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('price2_error1')
const selNum2Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('sel_num2_error1')
const people2Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('people2_error1')
const price3Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('price3_error1')
const selNum3Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('sel_num3_error1')
const people3Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('people3_error1')
const situation1: HTMLInputElement = <HTMLInputElement>document.getElementById('situation1')
const situation2: HTMLInputElement = <HTMLInputElement>document.getElementById('situation2')
const situationError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('situation_error1')
const situation3Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('situation3_error1')
const section1Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('section1_error1')
const transFee1Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('trans_fee1_error1')
const section2Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('section2_error1')
const transFee2Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('trans_fee2_error1')
const section3Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('section3_error1')
const transFee3Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('trans_fee3_error1')
const section4Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('section4_error1')
const transFee4Error1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('trans_fee4_error1')
const cusNum: HTMLSelectElement = <HTMLSelectElement>document.getElementById('cus_num')
const cusNumError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('cus_num_error1')
const cusGrp: HTMLSelectElement = <HTMLSelectElement>document.getElementById('cus_grp')
const cusGrpError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('cus_grp_error1')
const stopBy: HTMLSelectElement = <HTMLSelectElement>document.getElementById('stop_by')
const stopByError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('stop_by_error1')
const peakHours: HTMLSelectElement = <HTMLSelectElement>document.getElementById('peak_hours')
const peakHoursError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('peak_hours_error1')
const peakHour1: HTMLInputElement = <HTMLInputElement>document.getElementById('peak_hour1')
const peakHour2: HTMLInputElement = <HTMLInputElement>document.getElementById('peak_hour2')
const peakHourError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('peak_hour_error1')
const awareness: HTMLSelectElement = <HTMLSelectElement>document.getElementById('awareness')
const awarenessError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('awareness_error1')
const amount: HTMLSelectElement = <HTMLSelectElement>document.getElementById('amount')
const amountError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('amount_error1')
const prdcPrice: HTMLSelectElement = <HTMLSelectElement>document.getElementById('prdc_price')
const prdcPriceError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('prdc_price_error1')
const reaction: HTMLSelectElement = <HTMLSelectElement>document.getElementById('reaction')
const reactionError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('reaction_error1')
const interest: HTMLSelectElement = <HTMLSelectElement>document.getElementById('interest')
const interestError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('interest_error1')
const incentive: HTMLSelectElement = <HTMLSelectElement>document.getElementById('incentive')
const incentiveError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('incentive_error1')
const frequency: HTMLSelectElement = <HTMLSelectElement>document.getElementById('frequency')
const frequencyError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('frequency_error1')
const ageGrp: HTMLSelectElement = <HTMLSelectElement>document.getElementById('age_grp')
const ageGrpError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('age_grp_error1')
const ingredientFood: HTMLInputElement = <HTMLInputElement>document.getElementById('ingredient_food')
const ingredientFoodError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('ingredient_food_error1')
const ingredientGoods: HTMLInputElement = <HTMLInputElement>document.getElementById('ingredient_goods')
const ingredientGoodsError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('ingredient_goods_error1')
const receipt: HTMLInputElement = <HTMLInputElement>document.getElementById('receipt')
const receiptError1: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('receipt_error1')
submit.addEventListener('click', function (event) {
	if (product1.value == '') {
		product1Error1.style.display = 'block'
    } else {
		product1Error1.style.display = 'none'
	}
	
	if (price1.value == '') {
		price1Error1.style.display = 'block'
    } else {
		price1Error1.style.display = 'none'
	}
	
	if (selNum1.value == '') {
		selNum1Error1.style.display = 'block'
    } else {
		selNum1Error1.style.display = 'none'
	}
	
	if (people1.value == '') {
		people1Error1.style.display = 'block'
    } else {
		people1Error1.style.display = 'none'
	}
	
	if (product2.value != '' && price2.value == '') {
		price2Error1.style.display = 'block'
    } else {
		price2Error1.style.display = 'none'
	}
	
	if (product2.value != '' && selNum2.value == '') {
		selNum2Error1.style.display = 'block'
    } else {
		selNum2Error1.style.display = 'none'
	}
	
	if (product2.value != '' && people2.value == '') {
		people2Error1.style.display = 'block'
    } else {
		people2Error1.style.display = 'none'
	}
	
	if (product3.value != '' && price3.value == '') {
		price3Error1.style.display = 'block'
    } else {
		price3Error1.style.display = 'none'
	}
	
	if (product3.value != '' && selNum3.value == '') {
		selNum3Error1.style.display = 'block'
    } else {
		selNum3Error1.style.display = 'none'
	}
	
	if (product3.value != '' && people3.value == '') {
		people3Error1.style.display = 'block'
    } else {
		people3Error1.style.display = 'none'
	}
	
	if (!situation1.checked && !situation2.checked && !situation3.checked) {
		situationError1.style.display = 'block'
    } else {
		situationError1.style.display = 'none'
	}
	
	if (situation3.checked && situation3Text.value == '') {
		situation3Error1.style.display = 'block'
    } else {
		situation3Error1.style.display = 'none'
	}
	
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
	
	if (cusNum.value == '') {
		cusNumError1.style.display = 'block'
    } else {
		cusNumError1.style.display = 'none'
	}
	
	if (cusGrp.value == '') {
		cusGrpError1.style.display = 'block'
    } else {
		cusGrpError1.style.display = 'none'
	}
	
	if (stopBy.value == '') {
		stopByError1.style.display = 'block'
    } else {
		stopByError1.style.display = 'none'
	}
	
	if (peakHours.value == '') {
		peakHoursError1.style.display = 'block'
    } else {
		peakHoursError1.style.display = 'none'
	}
	
	if (peakHour1.value == '' || peakHour2.value == '') {
		peakHourError1.style.display = 'block'
    } else {
		peakHourError1.style.display = 'none'
	}
	
	if (awareness.value == '') {
		awarenessError1.style.display = 'block'
    } else {
		awarenessError1.style.display = 'none'
	}
	
	if (amount.value == '') {
		amountError1.style.display = 'block'
    } else {
		amountError1.style.display = 'none'
	}
	
	if (prdcPrice.value == '') {
		prdcPriceError1.style.display = 'block'
    } else {
		prdcPriceError1.style.display = 'none'
	}
	
	if (reaction.value == '') {
		reactionError1.style.display = 'block'
    } else {
		reactionError1.style.display = 'none'
	}
	
	if (interest.value == '') {
		interestError1.style.display = 'block'
    } else {
		interestError1.style.display = 'none'
	}
	
	if (incentive.value == '') {
		incentiveError1.style.display = 'block'
    } else {
		incentiveError1.style.display = 'none'
	}
	
	if (frequency.value == '') {
		frequencyError1.style.display = 'block'
    } else {
		frequencyError1.style.display = 'none'
	}
	
	if (ageGrp.value == '') {
		ageGrpError1.style.display = 'block'
    } else {
		ageGrpError1.style.display = 'none'
	}
	
	if (ingredientFood.value == '') {
		ingredientFoodError1.style.display = 'block'
    } else {
		ingredientFoodError1.style.display = 'none'
	}
	
	if (ingredientGoods.value == '') {
		ingredientGoodsError1.style.display = 'block'
    } else {
		ingredientGoodsError1.style.display = 'none'
	}
	
	if (receipt.value == '') {
		receiptError1.style.display = 'block'
    } else {
		receiptError1.style.display = 'none'
	}
	
	
	
	if (product1.value == '') {
		product1.focus()
	} else if (price1.value == '') {
		price1.focus()
	} else if (selNum1.value == '') {
		selNum1.focus()
	} else if (people1.value == '') {
		people1.focus()
	} else if (product2.value != '' && price2.value == '') {
		price2.focus()
	} else if (product2.value != '' && selNum2.value == '') {
		selNum2.focus()
	} else if (product2.value != '' && people2.value == '') {
		people2.focus()
	} else if (product3.value != '' && price3.value == '') {
		price3.focus()
	} else if (product3.value != '' && selNum3.value == '') {
		selNum3.focus()
	} else if (product3.value != '' && people3.value == '') {
		people3.focus()
	} else if (!situation1.checked && !situation2.checked && !situation3.checked) {
		situation1.focus()
	} else if (situation3.checked && situation3Text.value == '') {
		situation3Text.focus()
	} else if ((train1.checked || bus1.checked) && from1.value == '') {
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
	} else if (cusNum.value == '') {
		cusNum.focus()
	} else if (cusGrp.value == '') {
		cusGrp.focus()
	} else if (stopBy.value == '') {
		stopBy.focus()
	} else if (peakHours.value == '') {
		peakHours.focus()
	} else if (peakHour1.value == '') {
		peakHour1.focus()
	} else if (peakHour2.value == '') {
		peakHour2.focus()
	} else if (awareness.value == '') {
		awareness.focus()
	} else if (amount.value == '') {
		amount.focus()
	} else if (prdcPrice.value == '') {
		prdcPrice.focus()
	} else if (reaction.value == '') {
		reaction.focus()
	} else if (interest.value == '') {
		interest.focus()
	} else if (incentive.value == '') {
		incentive.focus()
	} else if (frequency.value == '') {
		frequency.focus()
	} else if (ageGrp.value == '') {
		ageGrp.focus()
	} else if (ingredientFood.value == '') {
		ingredientFood.focus()
	} else if (ingredientGoods.value == '') {
		ingredientGoods.focus()
	} else if (receipt.value == '') {
		receipt.focus()
	} else {
		if (!confirm('登録しますか？')) {
			event.preventDefault()
		}
	}
})
