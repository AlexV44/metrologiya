// analyzed_program.ts
// Программа для анализа числовых последовательностей и обработки статистических данных

interface DataMetrics {
  mean: number;
  variance: number;
  min: number;
  max: number;
}

function calculateMean(data: number[]): number {
  let totalSum: number = 0;
  let count: number = 0;
  for (let i: number = 0; i < data.length; i = i + 1) {
    totalSum = totalSum + data[i];
    count = count + 1;
  }
  if (count === 0) {
    return 0;
  }
  return totalSum / count;
}

function calculateVariance(data: number[], meanValue: number): number {
  let sumSquaredDiff: number = 0;
  let count: number = 0;
  for (let i: number = 0; i < data.length; i = i + 1) {
    let diff: number = data[i] - meanValue;
    sumSquaredDiff = sumSquaredDiff + (diff * diff);
    count = count + 1;
  }
  if (count === 0) {
    return 0;
  }
  return sumSquaredDiff / count;
}

function findMinMax(data: number[]): [number, number] {
  if (data.length === 0) {
    return [0, 0];
  }
  let minVal: number = data[0];
  let maxVal: number = data[0];
  for (let i: number = 1; i < data.length; i = i + 1) {
    if (data[i] < minVal) {
      minVal = data[i];
    }
    if (data[i] > maxVal) {
      maxVal = data[i];
    }
  }
  return [minVal, maxVal];
}

function filterPositiveNumbers(data: number[]): number[] {
  let result: number[] = [];
  let index: number = 0;
  while (index < data.length) {
    let current: number = data[index];
    if (current > 0) {
      result.push(current);
    }
    index = index + 1;
  }
  return result;
}

function processDataset(numbers: number[]): void {
  console.log("--- Начало обработки данных ---");

  let filtered: number[] = filterPositiveNumbers(numbers);
  let dataLength: number = filtered.length;
  console.log("Количество положительных элементов:", dataLength);

  if (dataLength === 0) {
    console.log("Массив не содержит положительных чисел!");
    return;
  }

  let meanVal: number = calculateMean(filtered);
  let varianceVal: number = calculateVariance(filtered, meanVal);
  let minMax: [number, number] = findMinMax(filtered);

  let score: number = (minMax[1] - minMax[0]) * meanVal / (varianceVal + 1);
  console.log("Комплексный показатель (Score):", score);

  if (score > 50) {
    console.log("Оценка: Высокий показатель разброса");
  } else if (score > 20) {
    console.log("Оценка: Средний показатель разброса");
  } else {
    console.log("Оценка: Низкий показатель разброса");
  }

  console.log("--- Обработка завершена ---");
}

function main(): void {
  let rawData: number[] = [-10, 15, 3, -5, 42, 18, -2, 7, 0, 25, 30, -12, 8];
  processDataset(rawData);
}

main();