<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<jsp:include page="../common/header.jsp" flush="true"/>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<main>
	<div class="inner">
		<div class="top">
			<h2>トップ</h2>
			<a href="${pageContext.request.contextPath}/testing/register/dairy_report" class="button">宣伝販売日報登録</a>
		</div>
	</div>
</main>
	
<jsp:include page="../common/footer.jsp" flush="true"/>
