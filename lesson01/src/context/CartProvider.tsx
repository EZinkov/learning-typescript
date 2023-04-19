export type CartItemType = {
  sky: string
  name: string
  price: number
  qty: number
}

type CartStateType = { cart: CartItemType[] }
