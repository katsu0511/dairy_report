package register;

import java.io.IOException;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import home.DairyReportDAO;

/**
 * Servlet implementation class RegisterSecurityServlet
 */
@WebServlet("/security/register/dairy_report")
public class RegisterSecurityServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterSecurityServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.getRequestDispatcher("/WEB-INF/app/register/register_security.jsp").forward(request, response);
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
		String overtime = request.getParameter("overtime");
		String transSum = request.getParameter("trans_sum");
		
		// 年月日時の取得
		Date dateObj = new Date();
		Timestamp registerDatetime = new Timestamp(dateObj.getTime());  // 現在の時刻（Timestamp型）
		
		try {
			// データベース接続情報取得
			conn = db.getConnection();
			
			// SCRTに保存
			// SQL
			String sql1 = "INSERT INTO SCRT(SCRTNM,TRANS1,STRPT1,ENDPT1,TRFEE1,RETRN1,TRANS2,STRPT2,ENDPT2,TRFEE2,RETRN2,TRANS3,STRPT3,ENDPT3,TRFEE3,RETRN3,TRANS4,STRPT4,ENDPT4,TRFEE4,RETRN4,OVERTM,TRSSUM,RGDTTM) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			
			// SQL実行
			pstmt1 = conn.prepareStatement(sql1);
			pstmt1.setString(1, name);
			pstmt1.setString(2, channel1);
			pstmt1.setString(3, from1);
			pstmt1.setString(4, to1);
			pstmt1.setString(5, transFee1);
			pstmt1.setString(6, return1);
			pstmt1.setString(7, channel2);
			pstmt1.setString(8, from2);
			pstmt1.setString(9, to2);
			pstmt1.setString(10, transFee2);
			pstmt1.setString(11, return2);
			pstmt1.setString(12, channel3);
			pstmt1.setString(13, from3);
			pstmt1.setString(14, to3);
			pstmt1.setString(15, transFee3);
			pstmt1.setString(16, return3);
			pstmt1.setString(17, channel4);
			pstmt1.setString(18, from4);
			pstmt1.setString(19, to4);
			pstmt1.setString(20, transFee4);
			pstmt1.setString(21, return4);
			pstmt1.setString(22, overtime);
			pstmt1.setString(23, transSum);
			pstmt1.setTimestamp(24, registerDatetime);
			pstmt1.executeUpdate();
			
			// エンコード
			name = URLEncoder.encode(name, "UTF-8");
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
			overtime = URLEncoder.encode(overtime, "UTF-8");
			transSum = URLEncoder.encode(transSum, "UTF-8");
			
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
		
		response.sendRedirect(request.getContextPath() + "/security/top");
	}

}
