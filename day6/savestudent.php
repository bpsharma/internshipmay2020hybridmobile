<?php
$data=$_POST['data'];
$s=json_decode($data); //conversion to PHP object
$rollno=$s->rollno;
$name=$s->name;
$course=$s->course;

$sql="INSERT INTO student VALUES('$rollno','$name','$course')";
$cn=mysqli_connect("localhost","root","","abes") or die("Unable to connect");
mysqli_query($cn,$sql) or die("Unable to insert record");
mysqli_close($cn);
echo "done";
?>