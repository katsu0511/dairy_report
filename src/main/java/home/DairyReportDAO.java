package home;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DairyReportDAO {
	private final String url = "jdbc:mysql://localhost:3306/dairy_report?useSSL=false";
	private final String user = "root";
	private final String password = "tkznemou19";

	public Connection getConnection() {
		Connection conn = null;
		
		try {
			// JDBCドライバのロード
			Class.forName("com.mysql.jdbc.Driver");
			
			// データベースへ接続
			conn = DriverManager.getConnection(url, user, password);
			
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return conn;
	}
	
	// Connection型変数が持つデータベースとJDBCリソースの解放
	public void close(Connection conn) {
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
	// PreparedStatement型変数が持つデータベースとJDBCリソースの解放
	public void close(Statement stmt) {
		if (stmt != null) {
			try {
				stmt.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
	// ResultSet型変数が持つデータベースとJDBCリソースの解放
	public void close(ResultSet rset) {
		if (rset != null) {
			try {
				rset.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
