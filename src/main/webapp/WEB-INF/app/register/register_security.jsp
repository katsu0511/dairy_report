<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<jsp:include page="../common/header.jsp" flush="true"/>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<main>
	<div class="inner">
		<h2>警備日報登録</h2>
		<form action="${pageContext.request.contextPath}/security/register/dairy_report" method="POST">
			
			<div class="tr">
				<label for="name" class="th large_th">名前:</label>
				<div class="td">
					<input type="text" id="name" name="name" value="${STAFF_NAME}" required>
				</div>
			</div>
			
			<div class="tr">
				<label class="th large_th">経路1:</label>
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
				<label class="th large_th">経路2:</label>
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
				<label class="th large_th">経路3:</label>
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
				<label class="th large_th">経路4:</label>
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
				<label for="overtime" class="th large_th">残業時間:<span>*</span></label>
				<div class="td sp_td">
					<input type="text" id="overtime" class="hour_input" name="overtime" maxlength="4" oninput="value = value.replace(/[^0-9.]+/i,'');" required>
					<span class="hour_span">時間</span>
					<p id="overtime_error1" class="error">残業時間を入力してください</p>
				</div>
			</div>
			
			<div class="tr">
				<label for="trans_sum" class="th large_th">交通費(往復):</label>
				<div class="td sp_td">
					<input type="text" id="trans_sum" class="back_gray yen_input" name="trans_sum" value="0" maxlength="6" required readonly>
					<span class="yen_span">円</span>
				</div>
			</div>
			
			<div class="buttons">
				<input type="submit" id="submit" name="submit" value="登録">
				<a href="${pageContext.request.contextPath}/security/top">戻る</a>
			</div>
		</form>
	</div>
</main>

<script type="text/javascript" src="<%= request.getContextPath() %>/js/security.js"></script>
<jsp:include page="../common/footer.jsp" flush="true"/>
