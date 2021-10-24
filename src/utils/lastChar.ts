/**
 * Sózdiń aqırǵı háribin qaytaradı
 * @param soz Kiriwsi sóz
 * @returns {string} Aqırǵı hárip
 */
export default (soz: string): string => {
  if (
    soz.slice(-2).toLowerCase() === 'sh' ||
    soz.slice(-2).toLowerCase() === 'ch'
  ) {
    return soz.slice(-2);
  }
  return soz[soz.length - 1].toLowerCase();
};