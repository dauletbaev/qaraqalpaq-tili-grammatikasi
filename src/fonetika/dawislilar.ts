/**
 * @readonly
 * @prop {Array} barligi Barlıq dawıslı sesler
 * @prop {Array} juwan Juwan dawıslı sesler
 * @prop {Array} jinishke Jińishke dawıslı sesler
 * @prop {Array} erinlik Erinlik dawıslı sesler
 * @prop {Array} eziwlik Eziwlik dawıslı sesler
 * @prop {Array} ashiq Ashıq dawıslı sesler
 * @prop {Array} qisiq Qısıq dawıslı sesler
 */
const dawislilar: Dawislilar = {
  barligi: ['a', 'á', 'i', 'ı', 'e', 'o', 'ó', 'u', 'ú'],

  // Juwan hám jińishke bolıp bóliniwi
  juwan: ['a', 'ı', 'o', 'u'],
  jinishke: ['á', 'i', 'ó', 'ú', 'e'],

  // Erinlik hám eziwlik bolıp bóliniwi
  erinlik: ['o', 'u', 'ú', 'ó'],
  eziwlik: ['a', 'á', 'ı', 'i', 'e'],

  // Ashıq hám qısıq bolıp bóliniwi
  ashiq: ['a', 'á', 'o', 'ó'],
  qisiq: ['ı', 'i', 'u', 'ú', 'e'],
};

export default dawislilar;
