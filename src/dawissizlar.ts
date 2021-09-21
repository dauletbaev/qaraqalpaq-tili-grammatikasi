/**
 * @readonly
 * @prop {Array} barligi Barlıq dawıssız sesler
 * @prop {Array} unli Únli dawıssız sesler
 * @prop {Array} unsiz Únsiz dawıssız sesler
 * @prop {Object} erinlik Erinlik dawıssız sesler
 * @prop {string} til_ortasi Til ortası dawıssızı
 * @prop {string} komekey Kómekey dawıssız sesi
 * @prop {Array} jabisinqi Jabısınqı dawıssız sesler
 * @prop {Array} juwisinqi Juwısınqı dawıssız sesler
 */
export default {
  barligi: ['b', 'v', 'g', 'ǵ', 'd', 'j', 'z', 'y', 'k', 'q', 'l', 'm', 'h', 'n', 'ń', 'p', 'r', 's', 't', 'w', 'f', 'x', 'c', 'sh', 'ch'],

  unli: ['b', 'v', 'g', 'ǵ', 'd', 'j', 'z', 'l', 'm', 'n', 'ń', 'r', 'w', 'y'],
  unsiz: ['p', 'f', 'k', 'q', 't', 'sh', 's', 'x', 'h', 'c', 'ch'],


  // Jasalıwına qaray túrleri
  erinlik: {
    qos_erinlik: ['b', 'p', 'm', 'w'],
    erinlik_tislik: ['v', 'f'],
  },
  til_aldi: ['t', 'd', 'n', 'l', 's', 'sh', 'z', 'j', 'r', 'c', 'ch'],
  til_ortasi: 'y',
  til_arti: ['g', 'k'],
  kishkene_tillik: ['q', 'ǵ', 'ń', 'x'],
  komekey: 'h',


  // Jasalıw usılına qaray túrleri
  jabisinqi: ['p', 'b', 'm', 't', 'd', 'n', 'g', 'k', 'q', 'ń', 'c', 'ch'],
  juwisinqi: ['w', 'f', 'v', 's', 'z', 'l', 'sh', 'j', 'y', 'h', 'ǵ', 'x'],
}