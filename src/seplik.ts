import getLastChar from './utils/lastChar';
import dawislilar from './dawislilar';
import dawissizlar from './dawissizlar';

/**
 * Seplikler.
 * @readonly
 * @enum {string}
 */
export enum Seplikler {
  Ataw = 'ataw',
  Iyelik = 'iyelik',
  Baris = 'barıs',
  Tabis = 'tabıs',
  Shigis = 'shıǵıs',
  Orin = 'orın',
}

export const seplikQosimtalari = {
  iyelik: ['nıń', 'niń', 'dıń', 'diń', 'tıń', 'tiń'],
  baris: ['qa', 'ke', 'ǵa', 'ge', 'na', 'ne', 'a', 'e'],
  tabis: ['nı', 'ni', 'dı', 'di', 'tı', 'ti'],
  shigis: ['nan', 'nen', 'dan', 'den', 'tan', 'ten'],
  orin: ['da', 'de', 'ta', 'te', 'nda', 'nde'],
};

/**
 *
 * @param {string} soz Sepleniwi kerek bolǵan sóz
 * @param {string} seplik Seplik túri
 * @returns {string}
 */
export const seple = (soz: string, seplik: Seplikler): string => {
  let lastChar = getLastChar(soz);

  let qosimtalar: Array<string>;
  switch (seplik) {
    case 'ataw':
      return soz;
    case 'iyelik':
      qosimtalar = seplikQosimtalari.iyelik;
      if (dawissizlar.barligi.includes(lastChar)) {
        return '';
      }
      if (dawislilar.juwan.includes(lastChar)) {
        return `${soz}${qosimtalar[0]}`;
      }

    default:
      return 'Nadurıs seplik túri.';
  }
};
