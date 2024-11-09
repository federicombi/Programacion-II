<?php
    class Database {
        private $host = '127.0.0.1';
        private $db_name = 'practica';
        private $username = 'root';
        private $password = '';
        public $conn;

        public function connect() {
            try {
                //intenta hacer la conexión. 
                //PDO = PHP Data Object. Se declara así: new PDO("mysql:host=NOMBRE_HOST;dbname=NOMBRE_BBDD", USUARIO(bbdd), CONTRASEÑA(bbdd))
                $this->conn = new PDO("mysql:host=".$this->host.";dbname=".$this->db_name, $this->username, $this->password);
                /*manejo de errores: 
                PDO::ATTR_ERRMODE: un atributo que define cómo se manejarán los errores en la conexión a la BBDD.
                PDO::ERRMODE_EXCEPTION: indica que se lanzarán excepciones en caso de errores durante las operaciones de la BBDD.
                */
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $e){
                echo "Error de conexión: ".$e->getMessage();
            }
            if ($this->conn === null) {
                die("La conexión a la base de datos no se ha establecido.");
            }
            return $this->conn;
        }
    }
?>


