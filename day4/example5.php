<?php
if(isset($_POST['name']) && isset($_POST['age'])){
    $name=$_POST['name'];
    $age=$_POST['age'];
    if($age>=18)
     echo "Dear $name you can vote";
    else
     echo "Dear $name you cannot vote";

    $sql="INSERT INTO voter VALUES('$name',$age)";
    $cn=mysqli_connect("localhost","root","","india");
    mysqli_query($cn,$sql);
    mysqli_close($cn);
}
?>