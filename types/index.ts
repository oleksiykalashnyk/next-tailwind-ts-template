export interface IRating {
  rate: number
  count: number
}

export interface IProducts {
  id: number
  title: string
  description: string
  category: string
  image: string
  price: number
  rating: IRating
}
