<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>All Dojos</title>
</head>
<body>
<h1>All Dojos</h1>
<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Ninjas</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
	<c:forEach var="dojo" items="${dojos}">
		<tr>
			<td>${dojo.name}</td>
		<c:forEach var = "ninja" items ="${ninjas}">
			<td>${ninja.name}</td>
		</c:forEach>
			<td><a href="/dojo/edit/${dojo.id}">edit</a>
			<form action="/dojo/${dojo.id}" method="post">
				<input type="hidden" name="_method" value="delete">
				<input type="submit" value="Delete"></form></td>
		</tr>
	</c:forEach>
	
	
	</tbody>

</table>

<form:form action = "/dojos" method = "post" modelAttribute="dojo">
	<h1>Create a Dojo</h1>
	<p>
		<form:label path= "name">Dojo Name: </form:label>
		<form:input path="name"/>
	</p>
	
	
	<button type="submit">Submit</button>

</form:form>

</body>
</html>