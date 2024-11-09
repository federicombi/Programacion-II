<?php

Class Alumno extends Persona{
    
    public $materia;

    public function __construct($nombre, $edad, $materia){
        parent::__construct($nombre, $edad){
            $this->materia = $materia;
        };
    }
}

?>