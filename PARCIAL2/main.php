<!DOCTYPE html>
<html>
    <head>
        <title>PARCIAL</title>
    </head>
    <body>
        <h1>ANIMAL ENCONTRADO</h1>
        <h2>
            <?php
                require "Classes.php";
                session_start();

                $animal = $_SESSION["mascota"];

                if($animal["tipo"]=="gato"){
                    $mascota = new Gato($animal["id"],$animal["nombre"],$animal["edad"],$animal["tipo"],$animal["raza"],$animal["peso"],$animal["pelajeLargo"],$animal["comportamiento"]);
                    echo "Se ha creado un nuevo gato";
                }else if($animal["tipo"]=="perro"){
                    $mascota = new Perro($animal["id"],$animal["nombre"],$animal["edad"],$animal["tipo"],$animal["raza"],$animal["peso"],$animal["tamanio"]);
                    $mascota->vacunar("Antirrábica");
                    $mascota->vacunar("Antitetánica");
                    $mascota->vacunar("Hepatitis");
                    echo "Se ha creado un nuevo perro";
                }
                $_SESSION["mascota"] = $mascota;
            ?>
        </h2>

        <table>
            <tr>
                <td width="160px">ID</td>
                <td><?php 
                    echo ($mascota->getId());
                ?></td>
            </tr>
            <tr>
                <td>Nombre</td>
                <td><?php 
                    echo ($mascota->getNombre());
                ?></td>
            </tr>
            <tr>
                <td>Edad</td>
                <td><?php 
                    echo ($mascota->getEdad()." años");
                ?></td>
            </tr>
            <tr>
                <td>Raza</td>
                <td><?php 
                    echo ($mascota->getRaza());
                ?></td>
            </tr>
            <tr>
                <td>Peso</td>
                <td><?php 
                    echo ($mascota->getPeso()." Kg");
                ?></td>
            </tr>
            <?php
                if($animal["tipo"]=="gato"){
                    echo "<tr>
                            <td>Comportamiento</td>
                            <td>".$mascota->mostrarComportamiento()."</td>
                        </tr>"
                    ;
                    if($mascota->tienePelajeLargo()){
                        $pelaje = "largo";
                    }else{
                        $pelaje = "corto";
                    }
                    echo "<tr>
                        <td>Pelaje</td>
                        <td>".$pelaje."</td>
                    </tr>";
                }else if($animal["tipo"]=="perro"){
                    echo "<tr>
                            <td>Tamaño</td>
                            <td>".$mascota->getTamanio()."</td>
                        </tr>"
                    ;
                }
            ?>
        </table>
        <br><br><br>

        <?php
            if($animal["tipo"]=="gato"){
                echo "<h4>Comportamiento Alterado: Ahora el gato es INSOPORTABLE</h4>";
                $comportamiento = $mascota->cambiarComportamiento("INSOPORTABLE");
                    echo "<p> Nuevo comportamiento: ".$mascota->mostrarComportamiento()."</p>";
            }else if($animal["tipo"]=="perro"){
                echo "<h4>VACUNAS RECIBIDAS</h4>";
                $vacunas = $mascota->mostrarVacunas();
                foreach($vacunas as $shot){
                    echo "<p>".$shot."</p>";
                } 
            }
        ?>
        <div>
            <?php
                  
            ?>
        </div>
        <div id="mensaje_error" style="color:red">

        </div>
    </body>
    <script src="fn.js"></script>
</html>

