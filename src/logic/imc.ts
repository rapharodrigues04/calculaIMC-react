export type Level = {
  title: string,
  color: string,
  icon: 'down' | 'up',
  imc: number[],
  yourImc?: number;
}

export const levels: Level[] = [
  { title: 'MAGREZA', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
  { title: 'PESO NORMAL', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
  { title: 'SOBREPESO', color: '#E2B039', icon: 'down', imc: [25, 29.9] },
  { title: 'OBESIDADE', color: '#C3423F', icon: 'down', imc: [30, 99] },
]

export const calculaIMC = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelCopy = { ...levels[i] };
      levelCopy.yourImc = imc;
      return levelCopy;
    }
  }
  return null;
}