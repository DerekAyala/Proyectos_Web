<?php include 'includes/header.php';

$clientes = [];
$clientes2 = array();
$clientes3 = ['Pedro','Juan','Karen'];
$cliente = [
    'nombre' => 'Juan',
    'saldo' => 200
];
//emty - revisa si esta vacio
var_dump( empty($clientes));
echo "</br>";
var_dump( empty($clientes3));
echo "</br>";
//Isset - revisar si un arreglo esta creado o una propiedad esta definida
var_dump( isset($clientes4));
echo "</br>";
var_dump( isset($clientes3));
echo "</br>";
var_dump( isset($cliente['codigo']));
include 'includes/footer.php';