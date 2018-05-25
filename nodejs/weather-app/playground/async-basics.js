console.log('Iniciando app');

setTimeout(() => {
    console.log('dentro del callback');
}, 2000);

setTimeout(() => {
    console.log('sin delay');
}, 0);

console.log('terminando app');