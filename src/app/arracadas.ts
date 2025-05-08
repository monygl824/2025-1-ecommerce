export type ArracadasInterface = {
    id: number,
    titulo: string,
    descripcion: string,
    img: string,
    precio: number,
}

export type ArracadasVendidas = ArracadasInterface & {
    cantidad: number,
}