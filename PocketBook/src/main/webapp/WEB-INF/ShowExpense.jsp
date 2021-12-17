<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Show Expenses</title>
</head>
<body>
<h1>Expense Details</h1><br><br>
<a href="/expenses">Go back</a><br><br>

<p>Expense Name: ${expense.itemPurchased}</p>
<br><br>
<p>Expense Description:  ${expense.description}</p>
<br><br>
<p>Vendor:  ${expense.vendor}</p>
<br><br>
<p>Amount Spent:  ${expense.amount}</p>

</body>
</html>