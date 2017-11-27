export const formatPrice = (price = '') => {
  if (!price) return '?'

  if (typeof price !== 'string') price = String(price)

  const charactersToStrip = [',']
  
  return price.split('').filter(ch => !charactersToStrip.includes(ch))
}