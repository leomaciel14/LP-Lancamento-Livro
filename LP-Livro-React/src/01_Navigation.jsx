import React, { useState } from "react";

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="p-6 sm:px-12 w-full h-28 z-50 fixed bg-gradient-to-b from-verde2/95 to-verde1/80 backdrop-blur-sm from-80%">
            <nav className="flex items-center justify-between ">
                <img
                    className="w-52 sm:w-64"
                    src="./src/assets/imgs/Logo-2.webp"
                    alt=""
                />

                <div className="lg:hidden">
                    <button
                        className="text-branco focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            >
                            </path>
                        </svg>
                    </button>
                </div>

                <ul className="hidden lg:flex flex-row items-center gap-12 text-branco">
                    <li>
                        <a className="hover:underline" href="#" id="linkKits">
                            Kits
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:underline"
                            href="#"
                            id="linkOndeComprar"
                        >
                            Onde Comprar
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:underline"
                            href="#"
                            id="linkFaleComigo"
                        >
                            Fale Comigo
                        </a>
                    </li>
                    <a
                        id="ComprarAgora"
                        href="https://www.catarse.me/rduvng"
                        target="_blank"
                        className="hidden text-branco lg:inline-block"
                    >
                        <button>Comprar Agora</button>
                    </a>
                </ul>
            </nav>

            {/* Mobile Menu */}

            <div
                className={`fixed top-0 right-0 w-3/4 h-full bg-verde1/95 text-branco transform backdrop-blur-sm ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out lg:hidden`}
            >
                <div className="flex items-center justify-end p-6">
                    <button
                        className="text-branco focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            >
                            </path>
                        </svg>
                    </button>
                </div>

                <div className="bg-verde1/90 h-dvh">
                    <ul className="flex flex-col items-start p-12 space-y-6 text-2xl ">
                        <li>
                            <a
                                className="hover:underline"
                                href="#"
                                id="linkKits"
                                onClick={toggleMenu}
                            >
                                Kits
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:underline"
                                href="#"
                                id="linkOndeComprar"
                                onClick={toggleMenu}
                            >
                                Onde Comprar
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:underline"
                                href="#"
                                id="linkFaleComigo"
                                onClick={toggleMenu}
                            >
                                Fale Comigo
                            </a>
                        </li>
                    </ul>

                    <a
                        id="ComprarAgora"
                        href="https://www.catarse.me/rduvng"
                        target="_blank"
                        className="block w-full text-center mt-6 scale-125"
                        onClick={toggleMenu}
                    >
                        <button>Comprar Agora</button>
                    </a>
                </div>
            </div>
        </header>
    );
};
