import React from "react";
import { Header } from "../../components/header/header";
import { Menu } from "../../components/menu/menu";
import { BsWallet } from 'react-icons/bs';
import { RiAddCircleLine } from 'react-icons/ri';
import { ImQrcode } from 'react-icons/im';

export default function CabinentCard() {
    return(
        <>
            <Header></Header>

            <main className="flex mt-8">
                <Menu></Menu>

                <section className="ml-40 w-full pr-8">
                    <div className="flex flex-col">
                        <span className="text-4xl font-light mb-2">Mening kartalarim</span>
                        <span>Barcha kartalar bir ilovada</span>
                    </div>
                    <div className="flex mt-8">
                        <button className="bg-[#3cc] p-3 rounded-xl text-white mr-6 flex items-center"><BsWallet className="mr-4" />Karta qo'shish</button>
                        <button className="bg-[#3cc] p-3 rounded-xl text-white flex items-center"><RiAddCircleLine className="mr-4" />Hamyon ochish</button>
                    </div>
                    <div className="flex flex-col mt-8">
                        <div className="flex items-center ml-3 link"><ImQrcode className="text-xl mr-3"/> QR va so'rovga havola</div>
                        <div className="flex flex-col mt-2 relative text-white font-semibold">
                            <img src="https://cdn.payme.uz/cards/background_preview/android/xhdpi/desert.png?v=1" alt="" className="rounded-xl  drop-shadow-xl" width={318} height={200} />
                            <div className="absolute top-2 left-4">Humo</div>
                            <div className="absolute top-2 right-10">Ipoteka Bank</div>
                            <div className="absolute top-12 left-4 text-sm drop-shadow">Ipoteka</div>
                            <div className="absolute top-16 left-4  drop-shadow"><span className="text-3xl">96 869.10</span> so'm</div>
                            <div className="absolute bottom-16 left-4 text-md uppercase  drop-shadow">Yulchiev sarvarjon</div>
                            <div className="absolute bottom-9 left-4"><span className="bg-[#3cc] rounded-full px-2 py-0.5 text-xs">Asosiy</span></div>
                            <div className="absolute bottom-2 left-4 drop-shadow">9860 01** **** 6054 <span className="m3-4">03/26</span></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}