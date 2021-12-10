<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Fruit Store</title>
    </head>
<body>
    <div class = "container">
    	<h1>Fruit Store</h1>
    	<table class = "table">
    		<tbody>
    		<tr>
    			<th>Name</th>
    			<th>Price</th>
    		</tr>
    		<tr>
    			 <c:forEach var="oneFruit" items="${fruitsFromMainController}">
       				 <p><c:out value="${onefFruit}"></c:out></p>
   				 </c:forEach>
   				
    		</tr>
    		</tbody>
    	</table>
    </div>

</body>
</html>