<?php include 'includes/header.php';

$carrito = ['Tablet','TV','Lap'];
//util para ver los contenidos de un array
echo "<pre>";
//acceder a un elemento de un array
var_dump($carrito);
echo "</pre>";

$carrito[3] = 'Nuevo Producto...';

//Añadir un elemento nuevo al final
array_push($carrito,'Celular');
//Añadir un elemento nuevo al inicio
array_unshift($carrito,'Smartwatch');

//util para ver los contenidos de un array
echo "<pre>";
//acceder a un elemento de un array
var_dump($carrito);
echo "</pre>";


$clientes = array('Cliente 1','Cliente 2','Cliente 3');
//util para ver los contenidos de un array
echo "<pre>";
//acceder a un elemento de un array
var_dump($clientes);
echo "</pre>";
include 'includes/footer.php';