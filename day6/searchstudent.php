<?php
$rollno=$_POST['rollno'];
$sql="SELECT * FROM student WHERE rollno='$rollno'";
$cn=mysqli_connect("localhost","root","","abes");
$result=mysqli_query($cn,$sql);
$count=mysqli_num_rows($result);
if($count==0){
    echo "Sorry! Invalid Roll Number";
}
else{
    $row=mysqli_fetch_array($result);
    $obj=(object)[];
    $obj->name=$row["name"];
    $obj->course=$row["course"];
    $data=json_encode($obj); //creating a JSON string
    echo $data;
}
mysqli_close($cn);
?>