export default (soz: string) => {
  if (
    soz.slice(-2).toLowerCase() === 'sh' ||
    soz.slice(-2).toLowerCase() === 'ch'
  ) {
    return soz.slice(-2);
  }
  return soz[soz.length - 1].toLowerCase();
};