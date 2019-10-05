/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */
import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-12)).toBe(false)
  expect(convertBytesToHuman('noNumber')).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(-99.12345)).toBe(false)
  expect(convertBytesToHuman(3.1415926)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(12737)).toBe("12.44 KB")
  expect(convertBytesToHuman(12733337)).toBe("12.14 MB")
  expect(convertBytesToHuman(10001010)).toBe("9.54 MB")
  expect(convertBytesToHuman(1)).toBe("1.00 B")
  expect(convertBytesToHuman(0)).toBe("0.00 B")
  expect(convertBytesToHuman(127373691991)).toBe("118.63 GB")
});
