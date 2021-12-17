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
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
	<c:forEach var="expense" items="${expenses}">
		<tr>
			<td>${expense.itemPurchased}</td>
			<td>${expense.vendor}</td>
			<td>${expense.amount}</td>
			<td><a href="/expenses/edit/${expense.id}">edit</a>
			<form action="/expenses/${expense.id}" method="post">
				<input type="hidden" name="_method" value="delete">
				<input type="submit" value="Delete"></form></td>
		</tr>
	</c:forEach>
	
	
	</tbody>

</table>

<form:form action = "/expenses" method = "post" modelAttribute="expense">
	<h1>Track an expense</h1>
	<p>
		<form:label path= "itemPurchased">Expense Name: </form:label>
		<form:input path="itemPurchased"/>
	</p>
	<p>
		<form:label path="vendor">Vendor: </form:label>
		<form:input path="vendor"/>
	</p>
	<p>
		<form:label path="amount">Amount: </form:label>
		<form:input path="amount"/>
	</p>
	<p>
		<form:label path="description">Description:</form:label>
		<form:input path="description"/>
	</p>
	
	<button type="submit">Submit</button>

</form:form>

</body>
</html>