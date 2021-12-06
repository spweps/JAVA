<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Hopper's Receipt</title>
</head>
<body>
    <h1>Customer Name: Grace Hopper</h1>
	<form>
	<p>Item name: Copper wire</p>
	<p>Price:  $5.25</p>
	<p>Description: Metal strips. Also an illustration of nanoseconds</p>
	<p>Vendor: Little Things Corner Store</p>
	</form>
    <c:out value="${index.jsp}"/>
</body>
</head>