<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<jsp:include page="../common/header.jsp" flush="true"/>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<main>
	<div class="inner">
		<h2>宣伝販売日報登録</h2>
		<form action="${pageContext.request.contextPath}/testing/register/dairy_report" method="POST" enctype="multipart/form-data">
		
			<div class="tr">
				<label for="name" class="th large_th">名前:</label>
				<div class="td">
					<input type="text" id="name" name="name" value="${STAFF_NAME}" required>
				</div>
			</div>
			
			<div class="tr">
				<label class="th large_th">残業有無:<span>*</span></label>
				<div class="td">
					<div class="overtm_td">
						<div class="radio">
							<input type="radio" id="overtime" name="overtime" value="有"><label for="overtime">有</label>
						</div>
						<div class="radio">
							<input type="radio" id="ontime" name="overtime" value="無" checked><label for="ontime">無</label>
						</div>
					</div>
				</div>
			</div>
			
			<div class="tr">
				<label class="th large_th">売上明細1:</label>
				<div class="product_td">
					<label for="product1" class="th">品名:<span>*</span></label>
					<input type="text" id="product1" name="product1" maxlength="100" required>
					<p id="product1_error1" class="error">品名を入力してください</p>
				</div>
				
				<div class="price_td">
					<div class="pro_info sell_price">
						<label for="price1" class="th">売価:<span>*</span></label>
						<input type="text" id="price1" name="price1" maxlength="5" oninput="value = value.replace(/[^0-9]+/i,'');" required>
						<span>円</span>
					</div>
					<div class="pro_info sell_number">
						<label for="sel_num1" class="th">販売数:<span>*</span></label>
						<input type="text" id="sel_num1" name="sel_num1" maxlength="4" oninput="value = value.replace(/[^0-9]+/i,'');" required>
						<span>個</span>
					</div>
					<p id="price1_error1" class="error">売価を入力してください</p>
					<p id="sel_num1_error1" class="error">販売数を入力してください</p>
				</div>
				
				<div class="people_td">
					<div class="pro_info sell_sum">
						<label for="sum1" class="th">販売金額:</label>
						<input type="text" id="sum1" class="back_gray" name="sum1" maxlength="9" required readonly>
						<span>円</span>
					</div>
					<div class="pro_info test_num">
						<label for="people1" class="th">試食人数:<span>*</span></label>
						<input type="text" id="people1" name="people1" maxlength="4" oninput="value = value.replace(/[^0-9]+/i,'');" required>
						<span>人</span>
					</div>
					<p id="people1_error1" class="error">試食人数を入力してください</p>
				</div>
			</div>
			
			<div class="tr">
				<label class="th large_th">売上明細2:</label>
				<div class="product_td">
					<label for="product2" class="th">品名:</label>
					<input type="text" id="product2" name="product2" maxlength="100" disabled>
				</div>
				
				<div class="price_td">
					<div class="pro_info sell_price">
						<label for="price2" class="th">売価:</label>
						<input type="text" id="price2" name="price2" maxlength="5" oninput="value = value.replace(/[^0-9]+/i,'');" disabled>
						<span>円</span>
					</div>
					<div class="pro_info sell_number">
						<label for="sel_num2" class="th">販売数:</label>
						<input type="text" id="sel_num2" name="sel_num2" maxlength="4" oninput="value = value.replace(/[^0-9]+/i,'');" disabled>
						<span>個</span>
					</div>
					<p id="price2_error1" class="error">売価を入力してください</p>
					<p id="sel_num2_error1" class="error">販売数を入力してください</p>
				</div>
				
				<div class="people_td">
					<div class="pro_info sell_sum">
						<label for="sum2" class="th">販売金額:</label>
						<input type="text" id="sum2" class="back_gray" name="sum2" maxlength="9" readonly>
						<span>円</span>
					</div>
					<div class="pro_info test_num">
						<label for="people2" class="th">試食人数:</label>
						<input type="text" id="people2" name="people2" maxlength="4" oninput="value = value.replace(/[^0-9]+/i,'');" disabled>
						<span>人</span>
					</div>
					<p id="people2_error1" class="error">試食人数を入力してください</p>
				</div>
			</div>
			
			<div class="tr">
				<label class="th large_th">売上明細3:</label>
				<div class="product_td">
					<label for="product3" class="th">品名:</label>
					<input type="text" id="product3" name="product3" maxlength="100" disabled>
				</div>
				
				<div class="price_td">
					<div class="pro_info sell_price">
						<label for="price3" class="th">売価:</label>
						<input type="text" id="price3" name="price3" maxlength="5" oninput="value = value.replace(/[^0-9]+/i,'');" disabled>
						<span>円</span>
					</div>
					<div class="pro_info sell_number">
						<label for="sel_num3" class="th">販売数:</label>
						<input type="text" id="sel_num3" name="sel_num3" maxlength="4" oninput="value = value.replace(/[^0-9]+/i,'');" disabled>
						<span>個</span>
					</div>
					<p id="price3_error1" class="error">売価を入力してください</p>
					<p id="sel_num3_error1" class="error">販売数を入力してください</p>
				</div>
				
				<div class="people_td">
					<div class="pro_info sell_sum">
						<label for="sum3" class="th">販売金額:</label>
						<input type="text" id="sum3" class="back_gray" name="sum3" maxlength="9" readonly>
						<span>円</span>
					</div>
					<div class="pro_info test_num">
						<label for="people3" class="th">試食人数:</label>
						<input type="text" id="people3" name="people3" maxlength="4" oninput="value = value.replace(/[^0-9]+/i,'');" disabled>
						<span>人</span>
					</div>
					<p id="people3_error1" class="error">試食人数を入力してください</p>
				</div>
			</div>
			
			<div class="tr">
				<label for="situation" class="th large_th">展開状況:<span>*</span></label>
				<div class="td">
					<div class="situation_td">
						<div class="radio">
							<input type="radio" id="situation1" name="situation" value="展開場所と商品の陳列場所が近かった" onclick="checkedOther()" required><label for="situation1">展開場所と商品の陳列場所が近かった</label>
						</div>
						<div class="radio">
							<input type="radio" id="situation2" name="situation" value="展開場所と商品の陳列場所が遠かった" onclick="checkedOther()" required><label for="situation2">展開場所と商品の陳列場所が遠かった</label>
						</div>
						<div class="radio">
							<input type="radio" id="situation3" name="situation" value="その他" onclick="checkedOther()" required><label for="situation3">その他</label>
							<input type="hidden" id="situation3Text" name="situation3" maxlength="100" disabled>
						</div>
						<p id="situation_error1" class="error">展開状況を選択してください</p>
						<p id="situation3_error1" class="error">その他の内容を入力してください</p>
					</div>
				</div>
			</div>
			
			<div class="tr">
				<label for="method" class="th large_th">本日の提供方法:</label>
				<div class="td">
					<textarea id="method" name="method" maxlength="8000"></textarea>
				</div>
			</div>
			
			<div class="tr">
				<label for="thoughts" class="th large_th">販売の感想:</label>
				<div class="td">
					<textarea id="thoughts" name="thoughts" maxlength="8000"></textarea>
				</div>
			</div>
			
			<div class="tr">
				<label for="feedback" class="th large_th">お客様のご意見:</label>
				<div class="td">
					<textarea id="feedback" name="feedback" maxlength="8000"></textarea>
				</div>
			</div>
			
			<div class="tr">
				<label class="th large_th">交通費明細1:</label>
				<div class="td">
					<div class="trans_td">
						<div class="radio">
							<input type="radio" id="train1" name="channel1" value="電車" onclick="radioDeselection1(this, '電車')"><label for="train1">電車</label>
						</div>
						<div class="radio">
							<input type="radio" id="bus1" name="channel1" value="バス" onclick="radioDeselection1(this, 'バス')"><label for="bus1">バス</label>
						</div>
						<div class="radio">
							<input type="radio" id="taxi1" name="channel1" value="タクシー" onclick="radioDeselection1(this, 'タクシー')"><label for="taxi1">タクシー</label>
						</div>
						<div class="radio">
							<input type="radio" id="car1" name="channel1" value="車" onclick="radioDeselection1(this, '車')"><label for="car1">車</label>
						</div>
					</div>
				</div>
				
				<div class="section_td">
					<label for="from1" class="th">区間:</label>
					<input type="text" id="from1" name="from1" maxlength="100" disabled>
					<span>〜</span>
					<input type="text" id="to1" name="to1" maxlength="100" disabled>
					<p id="section1_error1" class="error">区間を入力してください</p>
				</div>
				
				<div class="fee_td">
					<div class="fee_td1">
						<label for="trans_fee1" class="th">交通費:</label>
						<input type="text" id="trans_fee1" name="trans_fee1" maxlength="5" oninput="value = value.replace(/[^0-9]+/i,'');" onkeyup="calculate()" disabled>
						<span>円</span>
					</div>
					<div class="fee_td2">
						<label for="return1" class="th">往復:</label>
						<input type="checkbox" id="return1" name="return1" onchange="calculate()" disabled>
					</div>
					<p id="trans_fee1_error1" class="error">交通費を入力してください</p>
				</div>
			</div>
			
			<div class="tr">
				<label class="th large_th">交通費明細2:</label>
				<div class="td">
					<div class="trans_td">
						<div class="radio">
							<input type="radio" id="train2" name="channel2" value="電車" onclick="radioDeselection2(this, '電車')" disabled><label for="train2">電車</label>
						</div>
						<div class="radio">
							<input type="radio" id="bus2" name="channel2" value="バス" onclick="radioDeselection2(this, 'バス')" disabled><label for="bus2">バス</label>
						</div>
						<div class="radio">
							<input type="radio" id="taxi2" name="channel2" value="タクシー" onclick="radioDeselection2(this, 'タクシー')" disabled><label for="taxi2">タクシー</label>
						</div>
						<div class="radio">
							<input type="radio" id="car2" name="channel2" value="車" onclick="radioDeselection2(this, '車')" disabled><label for="car2">車</label>
						</div>
					</div>
				</div>
				
				<div class="section_td">
					<label for="from2" class="th">区間:</label>
					<input type="text" id="from2" name="from2" maxlength="100" disabled>
					<span>〜</span>
					<input type="text" id="to2" name="to2" maxlength="100" disabled>
					<p id="section2_error1" class="error">区間を入力してください</p>
				</div>
				
				<div class="fee_td">
					<div class="fee_td1">
						<label for="trans_fee2" class="th">交通費:</label>
						<input type="text" id="trans_fee2" name="trans_fee2" maxlength="5" oninput="value = value.replace(/[^0-9]+/i,'');" onkeyup="calculate()" disabled>
						<span>円</span>
					</div>
					<div class="fee_td2">
						<label for="return2" class="th">往復:</label>
						<input type="checkbox" id="return2" name="return2" onchange="calculate()" disabled>
					</div>
					<p id="trans_fee2_error1" class="error">交通費を入力してください</p>
				</div>
			</div>
			
			<div class="tr">
				<label class="th large_th">交通費明細3:</label>
				<div class="td">
					<div class="trans_td">
						<div class="radio">
							<input type="radio" id="train3" name="channel3" value="電車" onclick="radioDeselection3(this, '電車')" disabled><label for="train3">電車</label>
						</div>
						<div class="radio">
							<input type="radio" id="bus3" name="channel3" value="バス" onclick="radioDeselection3(this, 'バス')" disabled><label for="bus3">バス</label>
						</div>
						<div class="radio">
							<input type="radio" id="taxi3" name="channel3" value="タクシー" onclick="radioDeselection3(this, 'タクシー')" disabled><label for="taxi3">タクシー</label>
						</div>
						<div class="radio">
							<input type="radio" id="car3" name="channel3" value="車" onclick="radioDeselection3(this, '車')" disabled><label for="car3">車</label>
						</div>
					</div>
				</div>
				
				<div class="section_td">
					<label for="from3" class="th">区間:</label>
					<input type="text" id="from3" name="from3" maxlength="100" disabled>
					<span>〜</span>
					<input type="text" id="to3" name="to3" maxlength="100" disabled>
					<p id="section3_error1" class="error">区間を入力してください</p>
				</div>
				
				<div class="fee_td">
					<div class="fee_td1">
						<label for="trans_fee3" class="th">交通費:</label>
						<input type="text" id="trans_fee3" name="trans_fee3" maxlength="5" oninput="value = value.replace(/[^0-9]+/i,'');" onkeyup="calculate()" disabled>
						<span>円</span>
					</div>
					<div class="fee_td2">
						<label for="return3" class="th">往復:</label>
						<input type="checkbox" id="return3" name="return3" onchange="calculate()" disabled>
					</div>
					<p id="trans_fee3_error1" class="error">交通費を入力してください</p>
				</div>
			</div>
			
			<div class="tr">
				<label class="th large_th">交通費明細4:</label>
				<div class="td">
					<div class="trans_td">
						<div class="radio">
							<input type="radio" id="train4" name="channel4" value="電車" onclick="radioDeselection4(this, '電車')" disabled><label for="train4">電車</label>
						</div>
						<div class="radio">
							<input type="radio" id="bus4" name="channel4" value="バス" onclick="radioDeselection4(this, 'バス')" disabled><label for="bus4">バス</label>
						</div>
						<div class="radio">
							<input type="radio" id="taxi4" name="channel4" value="タクシー" onclick="radioDeselection4(this, 'タクシー')" disabled><label for="taxi4">タクシー</label>
						</div>
						<div class="radio">
							<input type="radio" id="car4" name="channel4" value="車" onclick="radioDeselection4(this, '車')" disabled><label for="car4">車</label>
						</div>
					</div>
				</div>
				
				<div class="section_td">
					<label for="from4" class="th">区間:</label>
					<input type="text" id="from4" name="from4" maxlength="100" disabled>
					<span>〜</span>
					<input type="text" id="to4" name="to4" maxlength="100" disabled>
					<p id="section4_error1" class="error">区間を入力してください</p>
				</div>
				
				<div class="fee_td">
					<div class="fee_td1">
						<label for="trans_fee4" class="th">交通費:</label>
						<input type="text" id="trans_fee4" name="trans_fee4" maxlength="5" oninput="value = value.replace(/[^0-9]+/i,'');" onkeyup="calculate()" disabled>
						<span>円</span>
					</div>
					<div class="fee_td2">
						<label for="return4" class="th">往復:</label>
						<input type="checkbox" id="return4" name="return4" onchange="calculate()" disabled>
					</div>
					<p id="trans_fee4_error1" class="error">交通費を入力してください</p>
				</div>
			</div>
			
			<div class="tr">
				<label for="trans_sum" class="th large_th">交通費(往復):</label>
				<div class="td sp_td">
					<input type="text" id="trans_sum" class="back_gray yen_input" name="trans_sum" value="0" maxlength="6" required readonly>
					<span class="yen_span">円</span>
				</div>
			</div>
			
			<div class="tr">
				<label class="th large_th">店舗状況:</label>
				<div class="select_td">
					<label for="cus_num" class="th">来客数:<span>*</span></label>
					<select id="cus_num" name="cus_num" required>
						<option value="">選択してください</option>
						<option value="多い">多い</option>
						<option value="普通">普通</option>
						<option value="少ない">少ない</option>
					</select>
					<p id="cus_num_error1" class="error">来客数を選択してください</p>
				</div>
				
				<div class="select_td">
					<label for="cus_grp" class="th">来客層:<span>*</span></label>
					<select id="cus_grp" name="cus_grp" required>
						<option value="">選択してください</option>
						<option value="主婦">主婦</option>
						<option value="子連れ">子連れ</option>
						<option value="夫婦">夫婦</option>
						<option value="男性">男性</option>
						<option value="年配者">年配者</option>
					</select>
					<p id="cus_grp_error1" class="error">来客層を選択してください</p>
				</div>
				
				<div class="select_td">
					<label for="stop_by" class="th">立ち寄り率:<span>*</span></label>
					<select id="stop_by" name="stop_by" required>
						<option value="">選択してください</option>
						<option value="多い">多い</option>
						<option value="普通">普通</option>
						<option value="少ない">少ない</option>
					</select>
					<p id="stop_by_error1" class="error">立ち寄り率を選択してください</p>
				</div>
				
				<div class="select_td">
					<label for="peak_hours" class="th">ピーク時間帯:<span>*</span></label>
					<select id="peak_hours" name="peak_hours" required>
						<option value="">選択してください</option>
						<option value="朝">朝</option>
						<option value="午前">午前</option>
						<option value="午後">午後</option>
						<option value="夕方">夕方</option>
					</select>
					<p id="peak_hours_error1" class="error">ピーク時間帯を選択してください</p>
				</div>
				
				<div class="hours_td">
					<input type="text" id="peak_hour1" name="peak_hour1" maxlength="2" oninput="value = value.replace(/[^0-9]+/i,'');" required>
					<span class="peak_start">時頃〜</span>
					<input type="text" id="peak_hour2" name="peak_hour2" maxlength="2" oninput="value = value.replace(/[^0-9]+/i,'');" required>
					<span class="peak_end">時頃</span>
					<p id="peak_hour_error1" class="error">ピーク時間を入力してください</p>
				</div>
			</div>
			
			<div class="tr">
				<label class="th large_th">お客様の反応:</label>
				<div class="select_td">
					<label for="awareness" class="th">商品認知度:<span>*</span></label>
					<select id="awareness" name="awareness" required>
						<option value="">選択してください</option>
						<option value="とても良い">とても良い</option>
						<option value="良い">良い</option>
						<option value="普通">普通</option>
						<option value="悪い">悪い</option>
						<option value="とても悪い">とても悪い</option>
					</select>
					<p id="awareness_error1" class="error">商品認知度を選択してください</p>
				</div>
				
				<div class="select_td">
					<label for="amount" class="th">内容量:<span>*</span></label>
					<select id="amount" name="amount" required>
						<option value="">選択してください</option>
						<option value="とても良い">とても良い</option>
						<option value="良い">良い</option>
						<option value="普通">普通</option>
						<option value="悪い">悪い</option>
						<option value="とても悪い">とても悪い</option>
					</select>
					<p id="amount_error1" class="error">内容量を選択してください</p>
				</div>
				
				<div class="select_td">
					<label for="prdc_price" class="th">商品価格:<span>*</span></label>
					<select id="prdc_price" name="prdc_price" required>
						<option value="">選択してください</option>
						<option value="とても良い">とても良い</option>
						<option value="良い">良い</option>
						<option value="普通">普通</option>
						<option value="悪い">悪い</option>
						<option value="とても悪い">とても悪い</option>
					</select>
					<p id="prdc_price_error1" class="error">商品価格を選択してください</p>
				</div>
				
				<div class="select_td">
					<label for="reaction" class="th">試食反応:<span>*</span></label>
					<select id="reaction" name="reaction" required>
						<option value="">選択してください</option>
						<option value="とても良い">とても良い</option>
						<option value="良い">良い</option>
						<option value="普通">普通</option>
						<option value="悪い">悪い</option>
						<option value="とても悪い">とても悪い</option>
					</select>
					<p id="reaction_error1" class="error">試食反応を選択してください</p>
				</div>
				
				<div class="select_td">
					<label for="interest" class="th">関心有無:<span>*</span></label>
					<select id="interest" name="interest" required>
						<option value="">選択してください</option>
						<option value="とても良い">とても良い</option>
						<option value="良い">良い</option>
						<option value="普通">普通</option>
						<option value="悪い">悪い</option>
						<option value="とても悪い">とても悪い</option>
					</select>
					<p id="interest_error1" class="error">関心有無を選択してください</p>
				</div>
				
				<div class="select_td">
					<label for="incentive" class="th">購入動機:<span>*</span></label>
					<select id="incentive" name="incentive" required>
						<option value="">選択してください</option>
						<option value="とても良い">とても良い</option>
						<option value="良い">良い</option>
						<option value="普通">普通</option>
						<option value="悪い">悪い</option>
						<option value="とても悪い">とても悪い</option>
					</select>
					<p id="incentive_error1" class="error">購入動機を選択してください</p>
				</div>
				
				<div class="select_td">
					<label for="frequency" class="th">購入頻度:<span>*</span></label>
					<select id="frequency" name="frequency" required>
						<option value="">選択してください</option>
						<option value="とても良い">とても良い</option>
						<option value="良い">良い</option>
						<option value="普通">普通</option>
						<option value="悪い">悪い</option>
						<option value="とても悪い">とても悪い</option>
					</select>
					<p id="frequency_error1" class="error">購入頻度を選択してください</p>
				</div>
				
				<div class="select_td">
					<label for="age_grp" class="th">購買年齢層:<span>*</span></label>
					<select id="age_grp" name="age_grp" required>
						<option value="">選択してください</option>
						<option value="20代">20代</option>
						<option value="30代">30代</option>
						<option value="40代">40代</option>
						<option value="50代">50代</option>
						<option value="60代">60代</option>
					</select>
					<p id="age_grp_error1" class="error">購買年齢層を選択してください</p>
				</div>
			</div>
			
			<div class="tr">
				<div class="ingredient_td">
					<label for="ingredient_food" class="th">材料費（食品）:<span>*</span></label>
					<input type="text" id="ingredient_food" name="ingredient_food" maxlength="6" oninput="value = value.replace(/[^0-9]+/i,'');" required>
					<span>円</span>
					<p id="ingredient_food_error1" class="error">材料費（食品）を入力してください</p>
				</div>
				
				<div class="ingredient_td">
					<label for="ingredient_goods" class="th">材料費（日用品）:<span>*</span></label>
					<input type="text" id="ingredient_goods" name="ingredient_goods" maxlength="6" oninput="value = value.replace(/[^0-9]+/i,'');" required>
					<span>円</span>
					<p id="ingredient_goods_error1" class="error">材料費（日用品）を入力してください</p>
				</div>
				
				<div class="belonging_td">
					<input type="checkbox" id="hot_plate" name="hot_plate">
					<label for="hot_plate" class="th">ホットプレート持参</label>
				</div>
				
				<div class="receipt_td">
					<label for="receipt" class="th">領収書:<span>*</span></label>
					<input type="file" id="receipt" name="receipt" required>
					<p id="receipt_error1" class="error">領収書をアップロードしてください</p>
				</div>
			</div>
			
			<div class="buttons">
				<input type="submit" id="submit" name="submit" value="登録">
				<a href="${pageContext.request.contextPath}/testing/top">戻る</a>
			</div>
		</form>
	</div>
</main>

<script type="text/javascript" src="<%= request.getContextPath() %>/js/testing.js"></script>
<jsp:include page="../common/footer.jsp" flush="true"/>
