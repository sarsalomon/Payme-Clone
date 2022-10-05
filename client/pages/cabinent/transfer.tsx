import React from "react";
import { Header } from "../../components/header/header";
import { Menu } from "../../components/menu/menu";

export default function CabinentTransfer() {
    return(
        <>
        <Header></Header>

        <main className="flex mt-8">
            <Menu></Menu>

            <section className="ml-40 w-full pr-8">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-4xl font-light mb-2">Kartadan kartaga o’tkazish</span>
                        <span>Xizmat narxi 1%</span>
                    </div>
                    <button className="border bottom-1 border-gray-400 rounded-lg px-3 my-3">
                        <span>    O'tkazmalar uchun mavjud banklar ro'yxati</span>
                    </button>
                </div>
                <div className="mt-10">
                    1 2 3
                </div>
            </section>
        </main>
    </>
    )
}