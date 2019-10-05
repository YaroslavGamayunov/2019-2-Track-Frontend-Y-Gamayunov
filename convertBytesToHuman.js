/* eslint-disable no-bitwise */
/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

const volume = {
  "B" : 1, 
  "KB": 1 << 10,
  "MB": 1 << 20, 
  "GB": 1 << 30,
} 

export default function convertBytesToHuman(bytes) {
  if (!Number.isInteger(bytes)) {
    return false
  }

  const numberOfBytes = parseInt(bytes)

  if (numberOfBytes < 0) {
    return false
  }
  
  var volumeUnit = "B";

  for (const v in volume) {
     if (volume[v] <= numberOfBytes && volume[volumeUnit] < volume[v]) {
        volumeUnit = v
     }
  }
  
  return `${(numberOfBytes / volume[volumeUnit]).toFixed(2)} ${volumeUnit}`
}
