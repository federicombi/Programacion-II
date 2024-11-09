<!DOCTYPE html>
<html>
    <head>
        <html lang="es"></html>
        <title> Practica </title>
        <link rel="icon" type="image" href="Resources/Images/fedicon.ico">
        <link rel="stylesheet" type="text/css" href="Resources/CSS/style.css">
    </head>
    <body>

        <table style="width:84%; margin-left: 8%;margin-right: 8%">
            <caption>
                <h1> Procesar LOGIN </h1>
            </caption>

            <tr>
                <td>
                    <?php
                        require 'conexion.php';
                        $email = clean_input($_POST["email"]);
                        $password = clean_input($_POST["password"]);
                        $bbdd = new Database();
                        $conexion = $bbdd->connect();

                        function clean_input($data) {
                            $data = trim($data);
                            $data = stripslashes($data);
                            $data = htmlspecialchars($data);
                            return $data;
                        }

                        if ($_SERVER["REQUEST_METHOD"] == "POST") {
                            /*
                            $email = clean_input($_POST["email"]);
                            $password = clean_input($_POST["password"]);

                            // Crear una instancia de la clase Database (archivo "conexion.php")
                            $bbdd = new Database();
                            // Obtener la conexión
                            $conexion = $bbdd->connect();
                            */

                            try {
                                // Preparar la consulta SQL
                                $query = $conexion->prepare("SELECT * FROM persona WHERE email = :email");
                                // Vincular los parámetros, la sección ":email" en el query se reemplaze por el contenido de la variable "$email" y le dice que es un string (importante). 
                                $query->bindParam(':email', $email, PDO::PARAM_STR);
                                // Ejecutar la consulta
                                $query->execute();

                                // Obtener el resultado y asignarlo a una variable
                                $usuario_db = $query->fetch(PDO::FETCH_ASSOC);
                                //die(var_dump($usuario_db)); ??????

                                // Verificar si se encontró el usuario y si la contraseña coincide
                                //if ($usuario_db && password_verify($contrasena, $usuario_db['contrasena'])) {
                                if ($usuario_db['contrasena'] == $contrasena) {
                                    // Establecer variables de sesión
                                    //$_SESSION["usuario"] = $usuario;
                                    echo "Login exitoso.";
                                    // Redirigir al usuario a otra página después del login exitoso
                                    //header("Location: insert_alumno.php");
                                    exit();
                                } else {
                                    echo "Error: Usuario o contraseña inválidos.";
                                }
                            } catch (PDOException $e) {
                                echo "Error de conexión: " . $e->getMessage();
                            }

                        } else {
                            echo "Error: No se recibieron los valores por POST.";
                        }

                    ?>
                </td>
            </tr>
        </table>

    </body>
</html>
