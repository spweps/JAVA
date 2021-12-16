<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Expenses</title>
</head>
<body>
<h1>Pocket Book Expenses</h1>
<table>
	<thead>
		<tr>
			<th>Expense</th>
			<th>Vendor</th>
			<th>Amount</th>
		</tr>
	</thead>


</table>

<form:form action = "/expenses" method = "post" modelAttribute="expense">
	<h1>Track an expense</h1>
	<p>
		<form: label ="expenseName">Expense Name: </form:label>
		<form: input ="expenseName"/>
	</p>
		<form: label ="vendor">Vendor: </form:label>
		<form: input ="vendor"/>
	</p>
	<p>
		<form: label = "amount">Amount: </form:label>
		<form: input = "amount"/>

</form:form>

</body>
</html>