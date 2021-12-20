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
<title>Edit Dojo</title>
</head>
<body>
<h1>Edit Dojo</h1>
<br><br>


<form:form action = "/dojo/edit" method = "post" modelAttribute="dojo">
	<p>
		<form:label path= "name">Dojo Name: </form:label>
		<form:input path="name"/>
	</p>
	
	<button type="submit">Submit</button>


</form:form>
</body>
</html>