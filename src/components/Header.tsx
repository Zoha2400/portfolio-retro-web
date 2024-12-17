import Image from "next/image";

function Header() {
    return (
        <header className="bg-black to-indigo-600 text-white border-b-4 border-neutral-300 border-dashed py-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl flex items-center gap-4 uppercase tracking-widest">
                    <Image
                        src={'https://i.pinimg.com/originals/70/52/d4/7052d479be89ff28c0f1828c85ac50ec.gif'}
                        alt={'icon'}
                        width={100}
                        height={250}
                        className="pixelated"
                    />
                    <p className="ml-2 text-xl text-transparent bg-gradient-to-r from-white to-orange-600 bg-clip-text bg-[length:200%] animate-gradient">
                        Portfolio
                    </p>
                </h1>
                <nav>
                    <ul className="flex gap-10">
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white font-bold text-sm transition-all border-b-2 border-dotted border-transparent hover:border-white"
                            >
                                main
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white font-bold text-sm transition-all border-b-2 border-dotted border-transparent hover:border-white"
                            >
                                about me
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white font-bold text-sm transition-all border-b-2 border-dotted border-transparent hover:border-white"
                            >
                                call me?
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
