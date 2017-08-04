<?php
session_start();
if(isset($_SESSION['path']))
    echo('<a href='.$_SESSION['path'].' download="'.$_SESSION['path'].'">Descarca!</a>');
session_destroy();
?>