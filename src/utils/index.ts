const ParseToUsd = (price = 0) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentValue) => {
    if (currentValue.prices.current) {
      return (accumulator += currentValue.prices.current)
    }
    return 0
  }, 0)
}

export default ParseToUsd
