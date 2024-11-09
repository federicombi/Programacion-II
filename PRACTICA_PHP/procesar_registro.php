<!DOCTYPE html>
<html>
    <head>
        <html lang="es"></html>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Procesar REGISTRO </title>
        <link rel="icon" type="image" href="Resources/Images/fedicon.ico">
        <link rel="stylesheet" type="text/css" href="Resources/CSS/style.css">
    </head>
    <body>

        <div class="logon-container">
            <div class="logon-header">
                <h1>Registro</h1>
            </div>
            <div class="logon-body">
                    <?php
                        require 'conexion.php';

                        function clean_input($data) {
                            $data = trim($data);
                            $data = stripslashes($data);
                            $data = htmlspecialchars($data);
                            return $data;
                        }

                        if ($_SERVER["REQUEST_METHOD"] == "POST") {
                            $email = clean_input($_POST["email"]);
                            $password = clean_input($_POST["password"]);
                            $nombre = clean_input($_POST["nombre"]);
                            $apellido = clean_input($_POST["apellido"]);
                            $bbdd = new Database();
                            $conexion = $bbdd->connect();
                            try {
                                $query = $conexion->prepare("SELECT * FROM usuarios WHERE email = :email");
                                $query->bindParam(':email', $email, PDO::PARAM_STR);
                                $query->execute();

                                $usuario_db = $query->fetch(PDO::FETCH_ASSOC);                                

                                if (!$usuario_db){     
                                    //REGISTRA EL USUARIO
                                    $query = $conexion->prepare("INSERT into usuarios values (:email, :contra, :nombre, :apellido);");
                                    $query->bindParam(':email', $email, PDO::PARAM_STR);
                                    $query->bindParam(':contra', $password, PDO::PARAM_STR);
                                    $query->bindParam(':nombre', $nombre, PDO::PARAM_STR);
                                    $query->bindParam(':apellido', $apellido, PDO::PARAM_STR);
                                    $query->execute();
                                    echo "
                                        <p style='color:green;text-align:center;'>
                                            Registrado con éxito!
                                        </p><br>
                                        <p style='text-align:center;'>
                                            Bienvenido ".$nombre."
                                        </p>
                                        <p style='text-align:center;'>
                                            Inicia sesión para continuar:
                                            <br><br>
                                            <a href='index.php' class='login-body-button'>Iniciar Sesion</a>
                                        </p>";
                                } else{
                                    //YA REGISTRADO - INICIAR SESION
                                    echo "
                                        <p style='color:red;text-align:center'>
                                            Usuario ya registrado
                                        </p><br>
                                        <p style='text-align:center;'>
                                            Puede iniciar sesion en el siguiente link:
                                            <br><br>
                                            <a href='index.php' class='login-body-button'>Iniciar Sesion</a>
                                        </p>";
                                };
                                
                            } catch (PDOException $e) {
                                echo "Error de conexión: ".$e->getMessage();
                            }
                        } else {
                            echo "Error: No se recibieron los valores por POST.";
                        }

                    ?>
            </div>
        </div>
                    
    </body>
    <script src="Resources\JS\fn.js" ></script>
</html>