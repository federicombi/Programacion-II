<!DOCTYPE html>
<html>
    <head>
        <title>Practica PHP V3</title>
    </head>

    <body>
        <?php
            $name = "Federico";
            echo $name;
        ?>

        <h1> Hola </h1>
        <h1> <?php echo $name; ?> </h1>

        <form action="recibir.php" method="post" id="formulario">
            <table style="width:100%;text-align:center">
                <tr>
                    <td>
                        Usuario:
                    </td>
                    <td>
                        <input type="text" id="user" name="user">
                    </td> 
                </tr>
                <tr>
                    <td>
                        Contrasenia:
                    </td>
                    <td>
                        <input type="text" id="password" name="password">
                    </td> 
                </tr>
                <tr>
                    <td colspan="2">
                        <input type="checkbox" id="tyc" name="tyc"> 
                        <label for="tyc"> Acepto los terminos y condiciones </label> 
                    </td>
                    <td></td> 
                </tr>
                <tr>
                    <td colspan="2"><p id="mensajeError"></p></td>
                    <td></td>
                </tr>
                <tr>
                    <td colspan="2"><button type="button" onclick="verificarTYC()"> INGRESAR </button></td>
                    <td></td>
                </tr>
            </table>
        </form>
        <button onclick="verificarTYC()"> PROBAR </button>
    </body>

<script src="fn.js"></script>
</html>