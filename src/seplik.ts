import { buwingaBol, juwanBuwinba } from './fonetika/buwin';
import { dawissizlar } from './fonetika/dawissizlar';
import dawislilar from './fonetika/dawislilar';
import getlastChar from './utils/lastChar';

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
  iyelik: {
    juwan: ['nıń', 'dıń', 'tıń'],
    jinishke: ['niń', 'diń', 'tiń'],
  },
  baris: {
    juwan: ['qa', 'ǵa', 'na', 'a'],
    jinishke: ['ke', 'ge', 'ne', 'e'],
  },
  tabis: {
    juwan: ['nı', 'dı', 'tı'],
    jinishke: ['ni', 'di', 'ti'],
  },
  shigis: {
    juwan: ['nan', 'dan', 'tan'],
    jinishke: ['nen', 'den', 'ten'],
  },
  orin: {
    juwan: ['da', 'ta', 'nda'],
    jinishke: ['de', 'te', 'nde'],
  },
};

/**
 * Kiritilgen sózdi seplewshi funkciya
 * @param {string} soz Sepleniwi kerek bolǵan sóz
 * @param {string} seplik Seplik túri
 * @returns {string} Seplengen sóz
 */
export const seple = (soz: string, seplik: Seplikler) => {
  let lastChar = getlastChar(soz);

  let qosimtalar: Array<string>;
  const buwinlar = buwingaBol(soz, true) as Array<string>;
  const aqirgiBuwin = buwinlar.pop();
  if (!aqirgiBuwin) return 'Sóz kiritilmegen';
  const aqirgiBuwinJuwanba = juwanBuwinba(aqirgiBuwin);
  switch (seplik) {
    case Seplikler.Ataw:
      return soz;
    case Seplikler.Iyelik:
      if (aqirgiBuwinJuwanba) {
        qosimtalar = seplikQosimtalari.iyelik.juwan;
      } else {
        qosimtalar = seplikQosimtalari.iyelik.jinishke;
      }
      if (
        dawissizlar.unli.includes(lastChar) ||
        dawislilar.barligi.includes(lastChar) ||
        ['b', 'g', 'd', 'v'].includes(lastChar)
      ) {
        return `${soz}${qosimtalar[0]}`;
      } else if (dawissizlar.unsiz.includes(lastChar)) {
        return `${soz}${qosimtalar[2]}`;
      }
      // if (!aqirgiBuwinUnlime(soz)) return `${soz}${qosimtalar[2]}`;
      // else {
      //   return `${soz}${qosimtalar[0]}`;
      // }
      break;

    default:
      return 'Nadurıs seplik túri.';
  }
};
