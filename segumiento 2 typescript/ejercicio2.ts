function showMonth(month: string) {
    switch(month) {
        case 'Enero':
            console.log('Estamos en Enero');
            break;
        case 'Febrero':
            console.log(`Estamos en Febrero`);
            break;
        case 'Marzo':
            console.log('Estamos en Marzo')
            break;
        case 'Abril':
            console.log('Estamos en Abril')
            break;
        case 'Mayo':
                console.log('Estamos en Mayo')
            break;
        case 'Junio':
                console.log('Estamos en Junio')
            break;
        case 'Julio':
                console.log('Estamos en Julio')
            break;
        case 'Agosto':
                console.log('Estamos en Agosto')
            break;
        case 'Septiembre':
                console.log('Estamos en Septiembre')
            break;
        case 'Octubre':
                console.log('Estamos en Octubre')
            break;
        case 'Noviembre':
                console.log('Estamos en Noviembre')
            break;
        case 'Diciembre':
                console.log('Estamos en Diciembre')
            break;
        default: 
            throw new Error('Mes no valido')
    }
}

showMonth('Enero')