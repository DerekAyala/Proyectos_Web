<?php include 'includes/header.php';

$nombreCliente = "Derek Ayala  ";
//extencion
echo strlen($nombreCliente);
echo "<br/>";
var_dump($nombreCliente);
echo "<br/>";
echo "<br/>";
//eliminar espacios en blancos
$texto = trim($nombreCliente);
echo "<br/>";
echo strlen($texto);
echo "<br/>";
echo "<br/>";
//convertir a mayusculas
echo strtoupper($texto);
echo "<br/>";
echo str_replace('Derek','D',$nombreCliente);
echo "<br/>";
//revisar si un string existe
echo strpos($nombreCliente,'Derek');

$tipoCliente = "premium";
echo "<br/>";
echo "El cliente " . $nombreCliente . " es " . $tipoCliente;
echo "<br/>";
echo "El cliente {$nombreCliente} es {$tipoCliente}";
include 'includes/footer.php';