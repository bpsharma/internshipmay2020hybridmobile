<?php
if(isset($_GET['num']))
{
    $n=$_GET['num'];
    $f=1;
    for($i=1;$i<=$n;$i++)
        $f=$f*$i;
    echo "Factorial of $n is $f";
}
else
  echo "Sorry! No data provided";
?>