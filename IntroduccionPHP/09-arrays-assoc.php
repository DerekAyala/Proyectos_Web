<?php include 'includes/header.php';

$clientes = [
    'nombre' => 'Juan',
    'saldo' => 200,
    'informacion' => [
        'tipo' => 'premium',
        'disponible' => 100
        ]
    ];

    echo $clientes['nombre'];
    echo "<br/>";
    echo $clientes['saldo'];
    echo "<br/>";
    echo $clientes['informacion']['tipo'];
    echo "<br/>";
    echo $clientes['informacion']['disponible'];
    echo "<br/>";
    $clientes['codigo'] = 20160915;


    //util para ver los contenidos de un array
    echo "<pre>";
    //acceder a un elemento de un array
    var_dump($clientes);
    echo "</pre>";
include 'includes/footer.php';