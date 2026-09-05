import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Tipo baseado no App.tsx que você enviou
export interface Product {
  id: number
  nome: string // 👈 NOME (igual ao App.tsx)
  preco: number
  imagem: string
}

export interface CartItem extends Product {
  quantidade: number
}

interface CartState {
  items: CartItem[]
  total: number
}

const initialState: CartState = {
  items: [],
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.quantidade += 1
      } else {
        state.items.push({ ...action.payload, quantidade: 1 })
      }
      state.total = state.items.reduce(
        (acc, item) => acc + item.preco * item.quantidade,
        0
      )
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.total = state.items.reduce(
        (acc, item) => acc + item.preco * item.quantidade,
        0
      )
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
