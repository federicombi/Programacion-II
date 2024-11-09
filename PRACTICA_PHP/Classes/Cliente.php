<?php
    require "Persona.php";
    class cliente extends Persona {
        protected $numero_cuenta;
        
        public function __construct($nombre, $apellido, $mail, $dni, $fecha_nacimiento, $localidad, $provincia, $telefono, $numero_cuenta){
            parent::__construct($nombre,$apellido,$mail,$dni,$fecha_nacimiento,$localidad,$provincia,$telefono);
            $this->numero_cuenta = $numero_cuenta;
        }
        
        public function mostrarCliente(){
            return $this->nombre." ".$this->apellido.",<br> Cuenta N° ".$this->numero_cuenta;
        }

        public function hacerDescuento($plata){
            $plata = $plata * 0.7;
            return $plata;
        }
        
        public function esMayor(){
            $hoy = new DateTime();
            $yearGap = $hoy->format("Y") - $this->fecha_nacimiento->format("Y");
            $monthGap = $hoy->format("m") - $this->fecha_nacimiento->format("m");
            $dayGap = $hoy->format("d") - $this->fecha_nacimiento->format("d");
            if($yearGap>17){
                if($monthGap==0){
                    if($dayGap>=0){
                        return true;
                    }else{
                        return false;
                    }
                }elseif($monthGap>0){
                    return true;
                }else{
                    return false;
                }
            } else{
                return false;
            };
        }
    }

?>
