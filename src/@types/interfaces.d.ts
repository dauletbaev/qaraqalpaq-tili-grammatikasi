declare interface Dawislilar {
  readonly barligi: Array<string>;
  readonly juwan: Array<string>;
  readonly jinishke: Array<string>;
  readonly erinlik: Array<string>;
  readonly eziwlik: Array<string>;
  readonly ashiq: Array<string>;
  readonly qisiq: Array<string>;
}

declare interface Dawissizlar {
  readonly barligi: Array<string>;
  readonly unli: Array<string>;
  readonly unsiz: Array<string>;
  readonly erinlik: {
    readonly qos_erinlik: Array<string>,
    readonly erinlik_tislik: Array<string>,
  };
  readonly til_aldi: Array<string>;
  readonly til_ortasi: string;
  readonly til_arti: Array<string>;
  readonly kishkene_tillik: Array<string>;
  readonly komekey: string;
  readonly jabisinqi: Array<string>;
  readonly juwisinqi: Array<string>;
}