package register;

import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import home.DairyReportDAO;

/**
 * Servlet implementation class RegisterTestingServlet
 */
@WebServlet("/testing/register/dairy_report")
@MultipartConfig(
    maxFileSize=10000000,
    maxRequestSize=10000000,
    fileSizeThreshold=10000000
)
public class RegisterTestingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterTestingServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.getRequestDispatcher("/WEB-INF/app/register/register_testing.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		// 文字化け対策
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		
		// 接続情報
		DairyReportDAO db = new DairyReportDAO();
		Connection conn = null;
		
		// SQL
		PreparedStatement pstmt1 = null;
		
		// 送信情報の取得
		String name = request.getParameter("name");
		String overtime = request.getParameter("overtime");
		String product1 = request.getParameter("product1");
		String price1 = request.getParameter("price1");
		String selNum1 = request.getParameter("sel_num1");
		String sum1 = request.getParameter("sum1");
		String people1 = request.getParameter("people1");
		String product2 = request.getParameter("product2") == null ? "" : request.getParameter("product2");
		String price2 = request.getParameter("price2") == null ? "" : request.getParameter("price2");
		String selNum2 = request.getParameter("sel_num2") == null ? "" : request.getParameter("sel_num2");
		String sum2 = request.getParameter("sum2") == null ? "" : request.getParameter("sum2");
		String people2 = request.getParameter("people2") == null ? "" : request.getParameter("people2");
		String product3 = request.getParameter("product3") == null ? "" : request.getParameter("product3");
		String price3 = request.getParameter("price3") == null ? "" : request.getParameter("price3");
		String selNum3 = request.getParameter("sel_num3") == null ? "" : request.getParameter("sel_num3");
		String sum3 = request.getParameter("sum3") == null ? "" : request.getParameter("sum3");
		String people3 = request.getParameter("people3") == null ? "" : request.getParameter("people3");
		String situation = request.getParameter("situation");
		String situation3 = request.getParameter("situation3") == null ? "" : request.getParameter("situation3");
		String method = request.getParameter("method");
		String thoughts = request.getParameter("thoughts");
		String feedback = request.getParameter("feedback");
		String channel1 = request.getParameter("channel1") == null ? "" : request.getParameter("channel1");
		String from1 = request.getParameter("from1") == null ? "" : request.getParameter("from1");
		String to1 = request.getParameter("to1") == null ? "" : request.getParameter("to1");
		String transFee1 = request.getParameter("trans_fee1") == null ? "" : request.getParameter("trans_fee1");
		String return1 = request.getParameter("return1") == null ? "" : "往復";
		if (return1.equals("") && !transFee1.equals("")) {
			return1 = "片道";
		}
		String channel2 = request.getParameter("channel2") == null ? "" : request.getParameter("channel2");
		String from2 = request.getParameter("from2") == null ? "" : request.getParameter("from2");
		String to2 = request.getParameter("to2") == null ? "" : request.getParameter("to2");
		String transFee2 = request.getParameter("trans_fee2") == null ? "" : request.getParameter("trans_fee2");
		String return2 = request.getParameter("return2") == null ? "" : "往復";
		if (return2.equals("") && !transFee2.equals("")) {
			return2 = "片道";
		}
		String channel3 = request.getParameter("channel3") == null ? "" : request.getParameter("channel3");
		String from3 = request.getParameter("from3") == null ? "" : request.getParameter("from3");
		String to3 = request.getParameter("to3") == null ? "" : request.getParameter("to3");
		String transFee3 = request.getParameter("trans_fee3") == null ? "" : request.getParameter("trans_fee3");
		String return3 = request.getParameter("return3") == null ? "" : "往復";
		if (return3.equals("") && !transFee3.equals("")) {
			return3 = "片道";
		}
		String channel4 = request.getParameter("channel4") == null ? "" : request.getParameter("channel4");
		String from4 = request.getParameter("from4") == null ? "" : request.getParameter("from4");
		String to4 = request.getParameter("to4") == null ? "" : request.getParameter("to4");
		String transFee4 = request.getParameter("trans_fee4") == null ? "" : request.getParameter("trans_fee4");
		String return4 = request.getParameter("return4") == null ? "" : "往復";
		if (return4.equals("") && !transFee4.equals("")) {
			return4 = "片道";
		}
		String transSum = request.getParameter("trans_sum");
		String cusNum = request.getParameter("cus_num");
		String cusGrp = request.getParameter("cus_grp");
		String stopBy = request.getParameter("stop_by");
		String peakHours = request.getParameter("peak_hours");
		String peakHour1 = request.getParameter("peak_hour1");
		String peakHour2 = request.getParameter("peak_hour2");
		String awareness = request.getParameter("awareness");
		String amount = request.getParameter("amount");
		String prdcPrice = request.getParameter("prdc_price");
		String reaction = request.getParameter("reaction");
		String interest = request.getParameter("interest");
		String incentive = request.getParameter("incentive");
		String frequency = request.getParameter("frequency");
		String ageGrp = request.getParameter("age_grp");
		String ingredientFood = request.getParameter("ingredient_food");
		String ingredientGoods = request.getParameter("ingredient_goods");
		String hotPlate = request.getParameter("hot_plate") == null ? "N" : "Y";
		
		// 年月日時の取得
		Date dateObj = new Date();
		SimpleDateFormat format1 = new SimpleDateFormat("yyyyMMddHHmmss");
		String datetime = format1.format(dateObj);                      // 現在の時刻（String型）
		Timestamp registerDatetime = new Timestamp(dateObj.getTime());  // 現在の時刻（Timestamp型）
		
		// 画像のファイル名取得
		Part part = request.getPart("receipt");
		String receipt = Paths.get(part.getSubmittedFileName()).getFileName().toString();
		String fileName = receipt.substring(0, receipt.lastIndexOf('.'));
		String fileExtention = receipt.substring(receipt.lastIndexOf('.'), receipt.length());
		String receiptName = fileName + "_" + datetime + fileExtention;
		
		try {
			// データベース接続情報取得
			conn = db.getConnection();
			
			// TSTGに保存
			// SQL
			String sql1 = "INSERT INTO TSTG(TSTGNM,OVERTM,PRDCT1,PRICE1,SLNUM1,SLSUM1,TSPPL1,PRDCT2,PRICE2,SLNUM2,SLSUM2,TSPPL2,PRDCT3,PRICE3,SLNUM3,SLSUM3,TSPPL3,STTION,OTRCON,METHOD,SLTHTS,FEDBAC,TRANS1,STRPT1,ENDPT1,TRFEE1,RETRN1,TRANS2,STRPT2,ENDPT2,TRFEE2,RETRN2,TRANS3,STRPT3,ENDPT3,TRFEE3,RETRN3,TRANS4,STRPT4,ENDPT4,TRFEE4,RETRN4,TRSSUM,CUSNUM,CUSGRP,STOPBY,PEAKHO,PEAKH1,PEAKH2,AWARNS,AMOUNT,PRDCPC,REACTN,INTRST,INCNTV,FRQENC,AGEGRP,INGFOD,INGGOD,HOTPLT,RECEIT,RGDTTM) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			
			// SQL実行
			pstmt1 = conn.prepareStatement(sql1);
			pstmt1.setString(1, name);
			pstmt1.setString(2, overtime);
			pstmt1.setString(3, product1);
			pstmt1.setString(4, price1);
			pstmt1.setString(5, selNum1);
			pstmt1.setString(6, sum1);
			pstmt1.setString(7, people1);
			pstmt1.setString(8, product2);
			pstmt1.setString(9, price2);
			pstmt1.setString(10, selNum2);
			pstmt1.setString(11, sum2);
			pstmt1.setString(12, people2);
			pstmt1.setString(13, product3);
			pstmt1.setString(14, price3);
			pstmt1.setString(15, selNum3);
			pstmt1.setString(16, sum3);
			pstmt1.setString(17, people3);
			pstmt1.setString(18, situation);
			pstmt1.setString(19, situation3);
			pstmt1.setString(20, method);
			pstmt1.setString(21, thoughts);
			pstmt1.setString(22, feedback);
			pstmt1.setString(23, channel1);
			pstmt1.setString(24, from1);
			pstmt1.setString(25, to1);
			pstmt1.setString(26, transFee1);
			pstmt1.setString(27, return1);
			pstmt1.setString(28, channel2);
			pstmt1.setString(29, from2);
			pstmt1.setString(30, to2);
			pstmt1.setString(31, transFee2);
			pstmt1.setString(32, return2);
			pstmt1.setString(33, channel3);
			pstmt1.setString(34, from3);
			pstmt1.setString(35, to3);
			pstmt1.setString(36, transFee3);
			pstmt1.setString(37, return3);
			pstmt1.setString(38, channel4);
			pstmt1.setString(39, from4);
			pstmt1.setString(40, to4);
			pstmt1.setString(41, transFee4);
			pstmt1.setString(42, return4);
			pstmt1.setString(43, transSum);
			pstmt1.setString(44, cusNum);
			pstmt1.setString(45, cusGrp);
			pstmt1.setString(46, stopBy);
			pstmt1.setString(47, peakHours);
			pstmt1.setString(48, peakHour1);
			pstmt1.setString(49, peakHour2);
			pstmt1.setString(50, awareness);
			pstmt1.setString(51, amount);
			pstmt1.setString(52, prdcPrice);
			pstmt1.setString(53, reaction);
			pstmt1.setString(54, interest);
			pstmt1.setString(55, incentive);
			pstmt1.setString(56, frequency);
			pstmt1.setString(57, ageGrp);
			pstmt1.setString(58, ingredientFood);
			pstmt1.setString(59, ingredientGoods);
			pstmt1.setString(60, hotPlate);
			pstmt1.setString(61, receiptName);
			pstmt1.setTimestamp(62, registerDatetime);
			pstmt1.executeUpdate();
			
			// 画像アップロード
			String path = getServletContext().getRealPath("/receipt");
			part.write(path + File.separator + receiptName);
			
			// エンコード
			name = URLEncoder.encode(name, "UTF-8");
			overtime = URLEncoder.encode(overtime, "UTF-8");
			product1 = URLEncoder.encode(product1, "UTF-8");
			price1 = URLEncoder.encode(price1, "UTF-8");
			selNum1 = URLEncoder.encode(selNum1, "UTF-8");
			sum1 = URLEncoder.encode(sum1, "UTF-8");
			people1 = URLEncoder.encode(people1, "UTF-8");
			product2 = URLEncoder.encode(product2, "UTF-8");
			price2 = URLEncoder.encode(price2, "UTF-8");
			selNum2 = URLEncoder.encode(selNum2, "UTF-8");
			sum2 = URLEncoder.encode(sum2, "UTF-8");
			people2 = URLEncoder.encode(people2, "UTF-8");
			product3 = URLEncoder.encode(product3, "UTF-8");
			price3 = URLEncoder.encode(price3, "UTF-8");
			selNum3 = URLEncoder.encode(selNum3, "UTF-8");
			sum3 = URLEncoder.encode(sum3, "UTF-8");
			people3 = URLEncoder.encode(people3, "UTF-8");
			situation = URLEncoder.encode(situation, "UTF-8");
			situation3 = URLEncoder.encode(situation3, "UTF-8");
			method = URLEncoder.encode(method, "UTF-8");
			thoughts = URLEncoder.encode(thoughts, "UTF-8");
			feedback = URLEncoder.encode(feedback, "UTF-8");
			channel1 = URLEncoder.encode(channel1, "UTF-8");
			from1 = URLEncoder.encode(from1, "UTF-8");
			to1 = URLEncoder.encode(to1, "UTF-8");
			transFee1 = URLEncoder.encode(transFee1, "UTF-8");
			return1 = URLEncoder.encode(return1, "UTF-8");
			channel2 = URLEncoder.encode(channel2, "UTF-8");
			from2 = URLEncoder.encode(from2, "UTF-8");
			to2 = URLEncoder.encode(to2, "UTF-8");
			transFee2 = URLEncoder.encode(transFee2, "UTF-8");
			return2 = URLEncoder.encode(return2, "UTF-8");
			channel3 = URLEncoder.encode(channel3, "UTF-8");
			from3 = URLEncoder.encode(from3, "UTF-8");
			to3 = URLEncoder.encode(to3, "UTF-8");
			transFee3 = URLEncoder.encode(transFee3, "UTF-8");
			return3 = URLEncoder.encode(return3, "UTF-8");
			channel4 = URLEncoder.encode(channel4, "UTF-8");
			from4 = URLEncoder.encode(from4, "UTF-8");
			to4 = URLEncoder.encode(to4, "UTF-8");
			transFee4 = URLEncoder.encode(transFee4, "UTF-8");
			return4 = URLEncoder.encode(return4, "UTF-8");
			transSum = URLEncoder.encode(transSum, "UTF-8");
			cusNum = URLEncoder.encode(cusNum, "UTF-8");
			cusGrp = URLEncoder.encode(cusGrp, "UTF-8");
			stopBy = URLEncoder.encode(stopBy, "UTF-8");
			peakHours = URLEncoder.encode(peakHours, "UTF-8");
			peakHour1 = URLEncoder.encode(peakHour1, "UTF-8");
			peakHour2 = URLEncoder.encode(peakHour2, "UTF-8");
			awareness = URLEncoder.encode(awareness, "UTF-8");
			amount = URLEncoder.encode(amount, "UTF-8");
			prdcPrice = URLEncoder.encode(prdcPrice, "UTF-8");
			reaction = URLEncoder.encode(reaction, "UTF-8");
			interest = URLEncoder.encode(interest, "UTF-8");
			incentive = URLEncoder.encode(incentive, "UTF-8");
			frequency = URLEncoder.encode(frequency, "UTF-8");
			ageGrp = URLEncoder.encode(ageGrp, "UTF-8");
			ingredientFood = URLEncoder.encode(ingredientFood, "UTF-8");
			ingredientGoods = URLEncoder.encode(ingredientGoods, "UTF-8");
			hotPlate = URLEncoder.encode(hotPlate, "UTF-8");
			receipt = URLEncoder.encode(receipt, "UTF-8");
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				pstmt1.close();
			} catch (SQLException e) { }
			
			try {
				conn.close();
			} catch (SQLException e) {  }
		}
		
		response.sendRedirect(request.getContextPath() + "/testing/top");
	}

}
