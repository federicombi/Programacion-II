<!DOCTYPE html>
<html>
    <head>
        <html lang="es"></html>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Procesar Login </title>
        <link rel="icon" type="image" href="Resources/Images/fedicon.ico">
        <link rel="stylesheet" type="text/css" href="Resources/CSS/style.css">
    </head>
    <body>

        <div class='login-container' >
            <div class='login-header'>
            <h1> LOGIN </h1>
            </div>
            <div class="login-body">
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
                        $bbdd = new Database();
                        $conexion = $bbdd->connect();

                        try {
                            $query = $conexion->prepare("SELECT * FROM usuarios WHERE email = :email");
                            $query->bindParam(':email', $email, PDO::PARAM_STR);
                            $query->execute();

                            $usuario_db = $query->fetch(PDO::FETCH_ASSOC);                                
                            // die(var_dump($usuario_db)); la variable es un FALSE si no existe el usuario.

                            if (!$usuario_db){
                                echo "
                                    <p style='color:red;text-align:center;'>
                                        No hay usuarios registrados con ese mail
                                    </p><br>
                                    <p style='text-align:center;'>
                                        Puede registrarse en el siguiente link:<br><br>
                                        <button onclick='ir_a_registro();' id='logon-button'>Registrarse</button>
                                    </p>";
                            } else{
                                if ($usuario_db['password'] == $password) {
                                    echo '<p style="color:green">Sesión iniciada con éxito</p>';
                                    // Redirigir al usuario a otra página después del login exitoso
                                    header("Location: main.php");
                                } else {
                                    //CONTRASEÑA INCORRECTA
                                    echo '<form action="procesar_login.php" method="post" id="formulario">
                                        <p>eMail:<input type="text" id="email" name="email" value="'.$email.'" required></p>
                                        <p>Password:<input type="password" id="password" name="password" required><p style="color:red;">Contraseña Incorrecta</p><br></p>
                                        <button type="submit" >Ingresar</button></form>';
                                }
                            
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
