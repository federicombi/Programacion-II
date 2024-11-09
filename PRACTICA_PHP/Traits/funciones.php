<?php
    trait Funciones{
        public function Mayus($palabra){
            
        }

        function clean_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
    }
?>