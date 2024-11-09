<?php
    $serverName = 'localhost';
    $userName = 'root';
    $password = '';
    $dbName = 'federicombi';

    $conexion = new MySQLi($serverName, $userName, $password, $dbName);
    
    /* Esto es para conectar la DDBB al código php para poder hacer cosas.
    siempre debemos conectarnos y establecer si se conectó correctamente o no, por ejemplo al errar algún dato de entrada (user, password, etc.) */ 
    
    if($conexion->connect_error){
        die("Fallo la conexion");
    };
    echo "Conexion exitosa";

    /* para ejecutar esto, en recibir.php, ahí debemos hacer la conexión (es el que recibe los datos)
    En recibir.php llamamos a conexion para que se ejecute.
    
    el index.php envia por POST al recibir.php, así que este doc debe hacer la coenxión a la ddbb, ya que es el que confirma que los datos esten ok
    
    para no tener que escribir el código en cada pagina, es mejor tener la coenxión aparte y llamarla desde cada pagina que la utilice.
    Con el if, si falla detiene la ejecución, de lo contrario continúa
    */


?>