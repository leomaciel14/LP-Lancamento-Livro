import React from "react";

export const Forms = () => {
    return (
        <div className="w-full mt-12 bg-verde2 m-auto flex flex-col xl:flex-row text-branco md:p-4 xl:p-0">
            <h1 className="text-2xl md:text-4xl xl:text-3xl text-center m-auto xl:text-left xl:pl-12 pt-12 xl:pt-0">
                Para dúvidas ou contato, <br /> encaminhe sua mensagem
            </h1>
            <form action="">
                <div className="flex flex-col xl:flex-row gap-8 p-12">
                    <div className="flex flex-col xl:flex-row w-full bg-verde1 p-6 rounded-2xl" id="name">
                        <label className="p-4 text-2xl" for="name">Nome</label>
                        <input
                            className="p-3 rounded-xl text-center"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Insira seu nome aqui"
                        />
                    </div>

                    <div
                        className="flex flex-col xl:flex-row w-full bg-verde1 p-6 rounded-2xl"
                        id="mensagem"
                    >
                        <label className="p-4 text-2xl" for="name">
                            Mensagem
                        </label>
                        <input
                            className="p-3 rounded-xl text-center"
                            type="text"
                            name="mensagem"
                            id="mensagem"
                            maxLength="300"
                            placeholder="Insira sua mensagem aqui"
                        />
                    </div>

                    <button className="m-auto scale-125 xl:scale-100" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
};
