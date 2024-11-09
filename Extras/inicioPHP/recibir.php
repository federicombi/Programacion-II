<?php
    include('conexion.php');
    $usuario = $_POST["user"];
    echo $usuario;
    $contra = $_POST["password"];
    echo $contra;
    
    $sql= "select * from usuarios;";
    /* la función flecha es el "->" */
    $resultado = $conexion->$sql;
    for($i=0;$i<7;$i++){
        $row = $resultado -> fetch_assoc();
        echo $rox.['nombre'];
    }
?>


<table style="width:100%;text-align:center">
        <tr> 
            <td width="250px"></td>
            <td>
                <h2>Usuario: </h2> 
            </td>
            <td>
                <?php
                    $usuario = $_POST["user"];
                    echo $usuario;
                ?>  
            </td>
            <td width="350px"></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <h2>Contrasenia: </h2> 
            </td>
            <td>
                <?php
                    $contra = $_POST["password"];
                    echo $contra;
                ?> 
            </td>
            <td></td> 
        </tr>
        <tr>
            <td></td>
            <td colspan="2">
                <h3> 
                    <?php
                        $aux= isset ( $_POST["tyc"]);
                        if ($aux){
                            echo "Se aceptaron los terminos y condiciones";
                        } else {
                            echo "NO SE ACEPTARON LOS TERMINOS Y CONDICIONES";
                        }
                    ?> 
                </h3> 
            </td>
            <td></td>
            <td></td> 
        </tr>
</table>