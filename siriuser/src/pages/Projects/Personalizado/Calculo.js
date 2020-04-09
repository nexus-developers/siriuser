export function calculo(consumo, placaW){
    const sistema = 0;
    const placa = 0;
    while(consumo > sistema){
        placa ++;
        sistema = sistema + placaW;
    }
    return placa;
}