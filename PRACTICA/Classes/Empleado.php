<?php
    require "Persona.php";
    
    class Empleado extends Persona {
        protected $legajo;
        
        public function __construct($nombre, $apellido, $mail, $dni, $fecha_nacimiento, $localidad, $provincia, $telefono, $legajo){
            parent::__construct($nombre,$apellido,$mail,$dni,$fecha_nacimiento,$localidad,$provincia,$telefono);
            $this->legajo = $legajo;
        }
        
        public function mostrarEmpleado(){
            return $this->nombre." ".$this->apellido.": N° ".$this->legajo;
        }

        public function tieneDescuento(){
            if(substr($this->legajo,0,2)=="99"){
                return false;
            } else{
                return true;
            }
        } 

        public function hacerDescuento($plata){
            $plata = $plata * 0.79;
            return $plata;
        }

    }

?>