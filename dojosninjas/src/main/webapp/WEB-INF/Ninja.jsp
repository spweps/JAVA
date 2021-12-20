<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ninjas</title>
</head>
<body>
<h1>Add a Ninja</h1>

<form:form action = "/ninjas" method = "post" modelAttribute="ninja">
	<h3>Begin your training</h3>
	<label>Choose a dojo:</label>
	<form:select path="dojo" id="dojos">
	<c:forEach var="dojo" items="${dojos}">
		<form:option value="${dojo.id}">${dojo.name}</form:option>
	</c:forEach>
	</form:select>
	
	<p>
		<form:label path= "firstName">First Name: </form:label>
		<form:input path="firstName"/>
	</p>
	<p>
		<form:label path="lastName">Last Name: </form:label>
		<form:input path="lastName"/>
	</p>
	<p>
		<form:label path="age">Age: </form:label>
		<form:input path="age"/>
	</p>
	
	
	<button type="submit">Create</button>

</form:form>
</body>
</html>