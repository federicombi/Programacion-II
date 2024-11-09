<?php
    require "Classes.php";
    require_once "Animales.php";
    header('Content-Type: application/json');
    session_start();

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $id_animal = $_POST["id_animal"];
        $animalEncontrado = null;
        foreach($animales as $bicho){
            if ($bicho["id"] == $id_animal){
                $animalEncontrado = $bicho;
                $_SESSION["mascota"] = $animalEncontrado;
            };
        }

        if ($animalEncontrado == null){
            echo json_encode(0);
        }else{
            echo json_encode(1);
        }

    }else{
        echo "metodo incorrecto";
    }

?>