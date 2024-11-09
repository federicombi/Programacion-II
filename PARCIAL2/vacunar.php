<?php
    require "Classes.php";
    session_start();
    header('Content-Type: application/json');

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $vacuna = $_POST["vacuna"];
        $mascota = $_SESSION["mascota"];
        $mascota->vacunar($vacuna);
        echo json_encode(1);

    }else{
        echo json_encode(0);
    }

?>