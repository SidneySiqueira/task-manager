export default function formatarData(date: string) {
    const data = new Date(date);
    const dia = data.getDate();
    const mes = data.toLocaleString('pt-BR', { month: 'long' });
  
    return `${dia} de ${mes}`;
  }