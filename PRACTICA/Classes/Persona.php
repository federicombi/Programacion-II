<?php

class Persona {
    Protected $nombre;
    Protected $apellido;
    Protected $mail;
    Protected $dni;
    Protected $fecha_nacimiento;
    protected $localidad;
    protected $provincia;
    protected $telefono;

    public function __construct($nombre, $apellido, $mail, $dni, $fecha_nacimiento, $localidad, $provincia, $telefono){
        $this-> nombre = $nombre;
        $this-> apellido = $apellido;
        $this-> mail = $mail;
        $this-> dni = $dni;
        $this-> fecha_nacimiento = new DateTime($fecha_nacimiento);
        $this-> localidad = $localidad;
        $this-> provincia = $provincia;
        $this-> telefono = $telefono;
    }

    public function mostrarPersona(){
        $fecha = $this->getFechaNacimiento();
        return $this->nombre." ".$this->apellido.", ".$this->mail."<br>".$fecha;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getApellido(){
        return $this->apellido;
    }
    public function getMail(){
        return $this->mail;
    }
    public function getFechaNacimiento(){
        $fecha = $this->fecha_nacimiento->format("d/m/Y");
        return $fecha;
    }

}
?>
