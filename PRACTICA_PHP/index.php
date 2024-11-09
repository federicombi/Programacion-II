<!DOCTYPE html>
<html>
    <head>
        <html lang="es"></html>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <link rel="icon" type="image" href="Resources/Images/fedicon.ico">
        <link rel="stylesheet" type="text/css" href="Resources/CSS/style.css">
    </head>
    <body>
        <div class="login-container">
            <div class="login-header">
                <h1>LOGIN</h1>
            </div>
            <div class="login-body">
                <form action="procesar_login.php" method="post" id="formulario">
                    <p>
                        <input type="text" id="email" name="email" placeholder="email" required>
                    </p>
                    <p>
                        <input type="password" id="password" name="password" placeholder="Contraseña" required>
                    </p>
                    <button type="submit">Ingresar</button><br><br>
                    <button onclick="ir_a_registro();" id="logon-button">Registrarse</button>
                    
                </form>
            </div>
        </div>

    </body>
    <script src="Resources\JS\fn.js" ></script>
</html>