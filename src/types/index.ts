export type Guitar =  {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Guitar & {
    quantity: number
}

// export type GuitarID = Guitar['id'] // look up


// Utility Type Pick para heredar ciertos elementos de Guitar
// contrario a Omit que los quita
// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
//     quantity: number
// }

