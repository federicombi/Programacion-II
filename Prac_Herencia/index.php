<!DOCTYPE html>
<html>
    <head>
        <html lang="es"></html>
        <title> Herencia </title>
        <link rel="stylesheet" type="text/css" href="Estilos/style.css">
    </head>
    <body>
        <table>
            <caption>
                <h1> Herencia PHP </h1>
            </caption>
            <tr>
                <td>
                    <?php 
                        
                        require "Persona.php";
                        $sujeto = new Persona ( );
                    ?>
                </td>
            </tr>
        </table>
    </body>
</html>