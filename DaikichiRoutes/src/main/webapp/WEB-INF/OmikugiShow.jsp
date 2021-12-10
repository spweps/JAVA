<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
 
 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Omikuji</title>
</head>
<body>
<div>
<h1>Here's Your Omikuji</h1>
<br>
<p>In <c:out value="${number}"/> years you will live in <c:out value="${city}"/> with <c:out value="${person}"/> as your roommate <c:out value="${activity}"/> for a living.  The next time you see <c:out value="${anyting}"/> you will die.  Also <c:out value="${controversial}"/></p>


</div>

</body>
</html>