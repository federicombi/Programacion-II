<?php

    class Animal{
        protected $id;
        protected $nombre;
        protected $edad;
        protected $tipo;
        protected $raza;
        protected $peso;

        public function __construct($id, $nombre, $edad, $tipo, $raza, $peso) {
            $this->id = $id;
            $this->nombre = $nombre;
            $this->edad = $edad;
            $this->tipo = $tipo;
            $this->raza = $raza;
            $this->peso = $peso;
        }

        public function getId(){
            return $this->id;
        }

        public function getNombre(){
            return $this->nombre;
        }
        public function getEdad(){
            return $this->edad;
        }
        public function getTipo(){
            return $this->tipo;
        }
        public function getRaza(){
            return $this->raza;
        }
        public function getPeso(){
            return $this->peso;
        }
    }

    class Perro extends Animal{
        protected $tamanio;
        protected $vacunas = [];
        protected $id_vacuna;

        public function __construct($id, $nombre, $edad, $tipo, $raza, $peso, $tamanio){
            parent::__construct($id, $nombre, $edad, $tipo, $raza, $peso);
            $this->tamanio = $tamanio;
        }

        public function vacunar($shot){
            array_push($this->vacunas, $shot);
        }
        public function mostrarVacunas(){
            return $this->vacunas;
        }
        public function getTamanio(){
            return $this->tamanio;
        }
    }

    class Gato extends Animal{
        protected $pelajeLargo;
        protected $comportamiento;

        public function __construct($id, $nombre, $edad, $tipo, $raza, $peso, $pelajeLargo, $comportamiento){
            parent::__construct($id, $nombre, $edad, $tipo, $raza, $peso);
            $this->pelajeLargo = $pelajeLargo;
            $this->comportamiento = $comportamiento;
        }

        public function cambiarComportamiento($comportamientoNuevo){
            $this->comportamiento = $comportamientoNuevo;
        }

        public function mostrarComportamiento(){
            return $this->comportamiento;
        }
        public function tienePelajeLargo(){
            return $this->pelajeLargo;
        }
    }

?>