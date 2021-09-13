const metodoPago = 'PayPal';

switch(metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'PayPal':
        console.log('Pagaste con Paypal');
        break;
    case 'Efectivo':
        console.log('Pagaste con Efectivo');
        break;
    default:
        console.log('metodo invalido');

}