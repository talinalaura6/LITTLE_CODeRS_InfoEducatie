<?php
session_start();
if(isset($_POST['nota']) && isset($_POST['nume']))
{
    $nota = $_POST['nota'];
    $nume = $_POST['nume'];
    $nume_fisier = $nume.".txt";
    $hand = fopen($nume_fisier, 'w+');
    fwrite($hand, $nota);
    fclose($hand);
    $_SESSION['path'] = $nume_fisier;
    header("Location: link.php");
} 


?>