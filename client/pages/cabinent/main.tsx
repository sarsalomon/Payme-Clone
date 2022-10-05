import React from "react";
import { Header } from "../../components/header/header";
import { Menu } from "../../components/menu/menu";
import { BiPlus } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';

export default function Main() {
    return(
        <>
            <Header></Header>

            <main className="flex mt-8">
                <Menu></Menu>

                <section className="ml-40 w-full pr-8">
                    <div className="flex flex-col ">
                        <span className="text-4xl font-light mb-2">Mobil aloqa uchun to’lov</span>
                        <span>Har qanday Online kartasi orqali</span>
                    </div>
                    <div className="mt-6">
                        <div className="flex justify-between">
                            <div className="flex flex-col w-1/2 pr-16">
                                <label htmlFor="">Telefon raqami</label>
                                    <div className="relative mt-2">
                                        <div className="absolute pl-3 inset-0 flex items-center pointer-events-none">
                                            <span>+998</span>
                                        </div>
                                        <input type="text" className="block pl-16 pr-12 w-full bg-[#f8f8f8] outline outline-offset-1 outline-1 outline-[#dadada] rounded-lg px-2.5 py-3.5 focus:bg-white focus:outline-[#33cccc] ease-in duration-200"/>
                                    </div>
                            </div>
                            <div className="flex flex-col w-1/2 pr-16">
                                <label htmlFor="">To’lov summasi</label>
                                <input type="text" className="mt-2 bg-[#f8f8f8] outline outline-offset-1 outline-1 outline-[#dadada] rounded-lg px-2.5 py-3.5 focus:bg-white focus:outline-[#33cccc] ease-in duration-200"/>
                            </div>
                            <button className="bg-[#3ccc] mt-8 text-white rounded-md px-10">To'lash</button>
                        </div>
                    </div>
                    <div className="flex flex-col mt-6">
                        <div>
                            <span className="text-3xl">Mening uyim</span>
                            <span className="px-6">0 uy</span>
                            <button className="px-3 py-2 bg-[#3cc] rounded-lg"><BiPlus className="text-white text-3xl" /></button>
                        </div>
                        <div className="mt-6">
                            <div>
                                <div className="flex items-center text-xl">
                                    <span><AiOutlineStar/></span>
                                    <span className="px-2">Saqlangan to'lovlar</span>
                                    <span>1</span>
                                </div>    
                            </div>
                            <div className="flex mt-2">
                                <div className="flex flex-col text-center items-center px-4 py-6 border border-gray-300 rounded-xl hover:cursor-pointer hover:shadow-2xl transition duration-300">
                                    <img src="https://cdn.payme.uz/merchants/76fecb746b69a3ee09cba43bc3976751a9c0e6ce.png" alt="Mobiuz" width={140} />
                                    <span className="text-sm">Mening telefon raq...</span>
                                    <span className="text-sm">+998975542203</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}