


/**
 * 
 * @param amount amount to format
 * @param country country code, eg : vietnam : vi , english : en
 * @returns string in currentcy format like : 1,000,000 $
 */
export function formatCurrency(amount: number, country: string): string {
  try {
    const formatter = new Intl.NumberFormat(country, {
      style: 'currency',
      currency: country,
    });
    return formatter.format(amount);
  } catch (error) {
    throw Error(`Error formatting currency for country '${country}': ${error}`);
  }
}


