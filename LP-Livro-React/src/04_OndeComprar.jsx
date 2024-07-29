import React from "react";
import { CardsProdutos } from "./CardsProdutos";

export const OndeComprar = () => {
    const produtos = [
        {
            id: 1,
            titulo: "E-BOOK",
            imagem: "./src/assets/imgs/kit-01.webp",
            preco1: "R$18",
            complemento1: "envio imediato <br /> (contate por DM)",
            preco2: "",
            complemento2: "",
            link: "https://www.catarse.me/rduvng",
        },
        {
            id: 2,
            titulo: "livro físico",
            imagem: "./src/assets/imgs/kit-02.webp",
            preco1: "R$65",
            complemento1: "Porto Alegre",
            preco2: "R$60 + frete",
            complemento2: "outras regiões",
            link: "https://www.catarse.me/rduvng",
        },
        {
            id: 3,
            titulo: "kit kétszy",
            imagem: "./src/assets/imgs/kit-03.webp",
            preco1: "R$70",
            complemento1: "Porto Alegre",
            preco2: "R$70 + frete",
            complemento2: "outras regiões",
            link: "https://www.catarse.me/rduvng",
        },
        {
            id: 4,
            titulo: "kit KOVÁCS",
            imagem: "./src/assets/imgs/kit-04.webp",
            preco1: "R$75",
            complemento1: "Porto Alegre",
            preco2: "R$75 + frete",
            complemento2: "outras regiões",
            link: "https://www.catarse.me/rduvng",
        },
    ];

    return (
        <div>
            <h1>Onde Comprar</h1>
            <div className="grid grid-cols-1 gap-12 p-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-2xl sm:text-base xl:text-xl">
                {produtos.map((produto) => (
                    <CardsProdutos key={produto.id} produto={produto} />
                ))}
            </div>
        </div>
    );
};
