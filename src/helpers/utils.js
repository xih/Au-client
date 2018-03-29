export const formatPrice = (price = '') => {
  if (!price) return '?'

  if (typeof price !== 'string') price = String(price)

  const charactersToStrip = [',']

  return price.split('').filter(ch => !charactersToStrip.includes(ch))
}

export async function getData(url) {
	try {
		let response = await fetch(url)
		let data = await response.json()
		return data
	} catch(e) {
		console.log('Error!', e)
	}
}
