<?php

class Persona {
    Public $nombre;
    Public $apellido;
    Public $edad;
    Public $dni;
    Public $telefono;

    public function __construct($nombre, $apellido, $edad){
        $this-> nombre = $nombre;
        $this-> apellido = $apellido;
        $this-> edad = $edad;
    }

    public function mostrarInfo(){
        return $this->nombre." ".$this->apellido.", ".$this->edad." anios";
    }
}
?>
