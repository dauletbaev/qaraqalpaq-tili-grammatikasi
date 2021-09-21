/**
 * Sózdi buwınǵa bóliwshi funkciya
 * @param soz  Buwınǵa bóliniwi kerek bolǵan sóz
 * @param massiv  Buwınǵa bólinigen sózdi massiv retinde qaytarıw
 * @returns {(string|Array)} Buwınǵa bólingen sóz yamasa qátelik
 * @example <caption>buwingaBol funckciyasın qollanıw tártibi.</caption>
 * buwingaBol('qaraqalpaq');
 * // qa-ra-qal-paq dep qaytaradı.
 * @example <caption>buwingaBol funckciyasın qollanıw tártibi (massiv).</caption>
 * buwingaBol('qaraqalpaq', true);
 * // ['qa', 'ra', 'qal', 'paq'] dep qaytaradı.
 */
export const buwingaBol = (
  soz: string,
  massiv: boolean = false
): string | Array<string> => {
  if (soz === '') throw new Error('Sóz kiritilmedi.');
  if (soz.match(/\s/gi))
    throw new Error(
      'Sózde heshqanday bos orınlar ya taza qatar bolmawı kerek.'
    );

  const regExp =
    /[^aáiıeoóuú]*[aáiıeoóuú]+(?:[^aáiıeoóuú]*$|[^aáiıeoóuú](?=[^aáiıeoóuú]))?/gi;

  if (massiv) {
    return soz.match(regExp)!;
  }
  return soz.match(regExp)!.join('-');
};

/**
 * Sózdiń ya buwınnıń ashıq buwınlı ekenligin tekseriw
 * @param soz Tekseriliwi kerek bolǵan sóz ya buwın
 * @returns {boolean} Ekilik logikalıq operator qaytaradı (Jalǵan ya Shın)
 */
export const ashiqBuwinliMa = (soz: string): boolean => {
  const buwinlar = buwingaBol(soz, true) as Array<string>;
  let ashiqpa = true;

  buwinlar.forEach((buwin) => {
    if (buwin.length === 1) {
      ashiqpa = ashiqpa && !!buwin.match(/[aáiıeoóuú]/gi);
    } else {
      ashiqpa = ashiqpa && !!buwin.match(/[aáiıeoóuú]$/gi);
    }
  });

  return ashiqpa;
};

/**
 * Sózdiń ya buwınnıń tuyıq buwınlı ekenligin tekseriw
 * @param soz Tekseriliwi kerek bolǵan sóz ya buwın
 * @returns {boolean} Ekilik logikalıq operator qaytaradı (Jalǵan ya Shın)
 */
export const tuyiqBuwinliMa = (soz: string): boolean => {
  const buwinlar = buwingaBol(soz, true) as Array<string>;
  let tuyiqpa = true;

  if (buwinlar.length === 1) {
    return tuyiqpa && !!buwinlar[0].match(/^[aáiıeoóuú]/gi);
  }

  buwinlar.forEach((buwin) => {
    tuyiqpa = tuyiqpa && !!buwin.match(/^[aáiıeoóuú]/gi);
  });

  return tuyiqpa;
};

/**
 * Sózdiń ya buwınnıń qamaw buwınlı ekenligin tekseriw
 * @param soz Tekseriliwi kerek bolǵan sóz ya buwın
 * @returns {boolean} Ekilik logikalıq operator qaytaradı (Jalǵan ya Shın)
 */
export const qamawBuwinliMa = (soz: string): boolean => {
  const buwinlar = buwingaBol(soz, true) as Array<string>;
  let qamawma = true;

  const { basi, aqiri } = { basi: /[^aáiıeoóuú]$/gi, aqiri: /[^aáiıeoóuú]$/gi };

  if (buwinlar.length === 1) {
    return qamawma && !!buwinlar[0].match(basi) && !!buwinlar[0].match(aqiri);
  }

  buwinlar.forEach((buwin) => {
    qamawma = qamawma && !!buwin.match(basi) && !!buwin.match(aqiri);
  });

  return qamawma;
};
