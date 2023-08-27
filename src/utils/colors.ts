export const color = (value: string) => {    
    switch (value) {
        case 'critica': return '#e22c2c';
        case 'alta': return '#f26a0d';
        case 'media': return '#fff612';
        case 'baixa': return '#12ff22';
        default: 
            break;
    }
}
