<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit Expenses</title>
</head>
<body>
<h1>Edit Expense</h1>
<br><br>
<a href="/expenses">Go back</a>

<form:form action = "/expenses/edit" method = "post" modelAttribute="expense">
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