import Image from "next/image"; // Should use that
import React from "react";
import { BiSupport, BiWalletAlt, BiGame, BiCheckShield } from 'react-icons/bi';
import { AiOutlineArrowRight, AiOutlineGlobal, AiOutlineCloudServer, AiOutlineYoutube } from 'react-icons/ai';
import { BsUmbrella } from 'react-icons/bs';
import { TiTicket } from 'react-icons/ti';
import { SiContactlesspayment } from 'react-icons/si';
import { GiElectric } from 'react-icons/gi';

import logoBrand from '../components/assets/img/logobrand.png';

export default function Dashboard() {
    return (
        <div>
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white p-5 drop-shadow-md">
                <div className="container mx-auto xl:px-28 max-w-screen-xl">
                    <div className="flex justify-between">
                        {/* <img src="../components/assets/img/logobrand.png" alt="logo" width={40} /> */}
                        <Image src={logoBrand} alt="LogoBrand"/>
                        <div className="flex">
                            <button className="link flex justify-center items-center mr-10"><BiWalletAlt className="text-3xl mr-4" />To'lovlar</button>
                            <button className="link flex justify-center items-center mr-10 text-gray-400"><BiSupport className="text-3xl mr-4"  /> Yordam</button>
                            <div className="link flex justify-center items-center mr-10 text-gray-400">O'zbekcha</div>
                            <button className="rounded-xl text-white p-3 bg-purple-500">Ish o'rni</button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* main */}
                <section className="linearbackground">
                    <div  className="container mx-auto xl:px-28 max-w-screen-xl flex overflow-hidden">
                        <div className="box z-40 px-10 py-20 w-2/10">
                            <div className="flex flex-col">
                                <span className="text-3xl font-light">Kirish yoki ro'yxatdan<br /> o'tish</span>
                                <br />
                                <form>
                                    <label htmlFor="Phone">Telefon raqami</label>
                                    <div className="relative mt-2">
                                            <div className="absolute pl-3 inset-0 flex items-center pointer-events-none">
                                                <span>+998</span>
                                            </div>
                                            <input type="text" className="block pl-16 pr-12 bg-[#f8f8f8] outline outline-offset-0 outline-1 outline-[#dadada] rounded-lg px-2.5 py-3.5 focus:bg-white focus:outline-[#33cccc] ease-in duration-200"/>
                                            <div className="absolute inset-y-0 right-0 flex items-center">
                                                <button type="submit" className="p-4 rounded-r-lg bg-[#3cc] hover:drop-shadow-lg"><AiOutlineArrowRight className="text-white text-xl"/></button>
                                            </div>
                                    </div>
                                </form>
                                <br />
                                <span>Boshqa raqam?</span>
                                <br /><br /><br />
                                <span className="text-3xl font-bold">"Mening uyim" <br /> xizmati</span>
                                <span className="text-xl text-black-400">To'lovlar, tushumlar va hisobdagi qoldiqlar</span>
                            </div>
                        </div>
                        <div className="homephoneimg w-11/12"></div>
                    </div>

                </section>

                <section className="py-10">
                    <div  className="container mx-auto xl:px-28 max-w-screen-xl">
                        <div className="flex py-6">
                            <div className="px-10">
                                <img src="https://bankxizmatlari.uz/upload/iblock/cd8/whpga34ke29hqd5oqihnjhhe7wxx6r3l/C.jpg" alt="Card" className="shadow-xl"/>
                            </div>
                            <div className="flex flex-col ml-10">
                                <span className="text-2xl">Virtual so'm bank karatasi</span>
                                <br />
                                <span>Payme VISA - bu virtual bank kartasidir. Bir necha marta bosish bilan siz to’liq ishlaydigan elektron kartaga ega bo’lasiz, uni ortiqcha harakatlarsiz bemalol ishlatishingiz mumkin.</span>
                                <br />
                                <div>
                                    <button type="button" className="bg-white p-3 px-6 border border-1 rounded-lg text-black outline-none hover:shadow-lg hover:border-[#4ed1d0] transition duration-500">
                                        Batafsil
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between px-0 py-6">
                            <span className="text-3xl">Bizning ilovamizni ko’chirib oling</span>
                            <div>
                                <button type="button" className="bg-white p-3 px-6 border border-1 rounded-lg text-black outline-none hover:shadow-lg hover:border-[#4ed1d0] transition duration-500">
                                    Play Market
                                </button>
                            </div>
                            <div>
                                <button type="button" className="bg-white p-3 px-6 border border-1 rounded-lg text-black outline-none hover:shadow-lg hover:border-[#4ed1d0] transition duration-500">
                                    App Store
                                </button>
                            </div>
                            <div>
                                <button type="button" className="bg-white p-3 px-6 border border-1 rounded-lg text-black outline-none hover:shadow-lg hover:border-[#4ed1d0] transition duration-500">
                                    App Gallery
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-10 bg-white">
                    <div  className="container mx-auto xl:px-28 max-w-screen-xl">
                        <div className="flex flex-col">
                            <div className="mb-3 text-3xl">Mobil aloqa uchun to’lov</div>
                            <div className="mb-3">Har qanday Online kartasi orqali</div>
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
                    </div>
                </section>
                <section className="py-10">
                    <div  className="container mx-auto xl:px-28 max-w-screen-xl">
                        <div className="flex justify-between break-words">
                            <div className="flex flex-col mr-20">
                                <span className="text-3xl">Davlat va kommunal xizmatlar</span>
                                <span>Elektr, gaz, telefon va ko’plab boshqa xizmatlar uchun to’lovlar</span>
                            </div>
                            <div className="flex text-center">
                                <a href="#" className="flex flex-col items-center link">
                                    <SiContactlesspayment className="text-5xl"/>
                                    <span>Soliqlarni <br /> to’lash</span>
                                </a>
                                <a href="#" className="flex flex-col items-center link px-4">
                                    <GiElectric className="text-5xl"/>
                                    <span>Elektr <br /> energiyasi</span>
                                </a>
                                <a href="#" className="flex flex-col items-center link">
                                    <BiCheckShield className="text-5xl"/>
                                    <span>Yo’l qoidalari <br /> buzilishi <br /> uchun <br /> jarimalar</span>
                                </a>

                            </div>
                            <div>
                                    <button type="button" className="bg-white p-3 px-6 border border-1 rounded-lg text-black outline-none hover:shadow-lg hover:border-[#4ed1d0] transition duration-500">
                                        To'liq ro'yxat
                                    </button>
                                </div>
                        </div>
                    </div>
                </section>
                <section className="py-10 bg-white">
                    <div  className="container mx-auto xl:px-28 max-w-screen-xl">
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <span className="text-3xl mb-3">Kreditlarni so’ndirish</span>
                                <span>Tez va qulay</span>
                            </div>
                            <div>
                                <button type="button" className="bg-white p-3 px-6 border border-1 rounded-lg text-black outline-none hover:shadow-lg hover:border-[#4ed1d0] transition duration-500">
                                    Barcha banklar
                                </button>
                            </div>
                        </div>
                        <div className="flex">
                            <img src="https://logobank.uz:8005/media/logos_preview/ipoteka-01.png" alt="Ipoteka" width={160} height={75} className="grow" />
                            <img src="https://logobank.uz:8005/media/logos_preview/qqb_logo-01.jpg" alt="Ipoteka" width={160} height={75} className="grow" />
                            <img src="https://cdn.payme.uz/merchants/mikro-credits.png" alt="Ipoteka" width={160} height={75} className="grow" />
                            <img src="https://cbu.uz/upload/iblock/53c/3.jpg" alt="Ipoteka" width={160} height={75} className="grow" />
                            <img src="https://logobank.uz:8005/media/logos_preview/Asakabank_new-01.png" alt="Ipoteka" width={160} height={75} className="grow" />
                            <img src="https://kapitalbank.uz/bitrix/templates/main/images/Kapitalbank-Logo_Bl.png" alt="Ipoteka" width={160} height={75} className="grow" />
                        </div>
                    </div>
                </section>
                <section className="py-10">
                    <div  className="container mx-auto xl:px-28 max-w-screen-xl">
                        <div className="flex justify-between">
                            <div className="flex flex-col text-3xl">
                                Boshqa toifalar
                            </div>
                            <div>
                                <button type="button" className="bg-white p-3 px-6 border border-1 rounded-lg text-black outline-none hover:shadow-lg hover:border-[#4ed1d0] transition duration-500">
                                    Boshqa toifalar
                                </button>
                            </div>
                        </div>
                        <div className="flex mt-6 text-center">
                            <a href="#" className="flex flex-col items-center grow link">
                                <AiOutlineGlobal className="text-5xl"/>
                                <span className="mt-2">Internet <br /> provayderlar</span>
                            </a>
                            <a href="#" className="flex flex-col items-center grow link">
                                <AiOutlineYoutube className="text-5xl"/>
                                <span className="mt-2">Televidenie va <br /> onlayn tarqatish</span>
                            </a>
                            <a href="#" className="flex flex-col items-center grow link">
                                <BsUmbrella className="text-5xl"/>
                                <span className="mt-2">Sug'urta</span>
                            </a>
                            <a href="#" className="flex flex-col items-center grow link">
                                <BiGame className="text-5xl"/>
                                <span className="mt-2">O'yinlar va ijtimoiy <br /> tarmoqlar</span>
                            </a>
                            <a href="#" className="flex flex-col items-center grow link">
                                <AiOutlineCloudServer className="text-5xl"/>
                                <span className="mt-2">Xosting <br /> provayderlar</span>
                            </a>
                            <a href="#" className="flex flex-col items-center grow link">
                                <TiTicket className="text-5xl"/>
                                <span className="mt-2">Avia va Temiryo'l <br /> chiptalari</span>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="py-20 break-words bg-white">
                    <div  className="container mx-auto xl:px-28 max-w-screen-xl">
                        <div className="grid grid-rows-5  grid-cols-2">
                            <div className="flex items-center">
                                <img src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23ffb800;%7D.cls-2%7Bfill:%23fc0;%7D.cls-3%7Bfill:%233cc;%7D.cls-4%7Bfill:%23f7ad00;%7D.cls-5%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_1-2' data-name='Layer_1'%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2-2' data-name='Layer 1-2'%3E%3Cpath class='cls-1' d='M59.24,37.3h-3.7c-3.47-3.31-9.07-5.45-15.39-5.45S28.27,34,24.81,37.3H21.08v5.46h0c.23,7.23,8.68,13,19.08,13S59,50,59.23,42.8h0Z'/%3E%3Cellipse class='cls-2' cx='40.15' cy='36.84' rx='19.09' ry='14.46'/%3E%3Cpath class='cls-3' d='M28.11,8.81h-10C12,8.81,7,13.45,7,19.15v7.92a.89.89,0,0,0,.44.77h0a2.21,2.21,0,0,0,1.12.3h.09a2.46,2.46,0,0,0,1.21-.32.91.91,0,0,0,.47-.77v-.13h0V19.18h0A7.5,7.5,0,0,1,17.82,12H28.1c.87,0,1.4-.56,1.45-1.57A1.38,1.38,0,0,0,28.11,8.81Z'/%3E%3Cpath class='cls-3' d='M26.53,68.05H17.84a7.49,7.49,0,0,1-7.49-7.21V51.45c0-.82-.61-1.31-1.69-1.35S7,50.63,7,51.46v9.39c0,5.7,5,10.34,11.06,10.34h8.48a1,1,0,0,0,.81-.41,1.93,1.93,0,0,0,.33-1.07.43.43,0,0,1,0-.05.19.19,0,0,0,0-.08,2.09,2.09,0,0,0-.33-1.11,1,1,0,0,0-.8-.43s0,0,0,0Z'/%3E%3Cpath class='cls-3' d='M72.51,52.16h0a2.19,2.19,0,0,0-1.12-.3h-.08a2.46,2.46,0,0,0-1.21.32.89.89,0,0,0-.47.78v7.89a7.5,7.5,0,0,1-7.5,7.2H51.85c-.88,0-1.39.57-1.45,1.58a1.36,1.36,0,0,0,1.45,1.56H61.94C68,71.19,73,66.55,73,60.85v-7.9a.88.88,0,0,0-.49-.79Z'/%3E%3Cpath class='cls-3' d='M53.44,11.95h8.71a7.5,7.5,0,0,1,7.5,7.21v9.39c0,.81.61,1.31,1.69,1.35S73,29.37,73,28.55V19.16c-.05-5.71-5-10.35-11.06-10.35H53.43a1,1,0,0,0-.82.41,1.9,1.9,0,0,0-.32,1.07v.09a2.09,2.09,0,0,0,.34,1.14,1,1,0,0,0,.8.43Z'/%3E%3Cpath class='cls-4' d='M34.54,30.8l4.73-.32V44.73a.14.14,0,0,0,.07.11.27.27,0,0,0,.17.06h2.86a.27.27,0,0,0,.17-.06.11.11,0,0,0,.06-.11h0V27.55a.16.16,0,0,0-.07-.11.34.34,0,0,0-.17,0h0l-7.78,1.3h0c-.13,0-.22.11-.21.17v1.76a.16.16,0,0,0,0,.11l.12.07Z'/%3E%3Cpath class='cls-5' d='M34.54,29.94l4.73-.31V43.87a.14.14,0,0,0,.07.11.27.27,0,0,0,.17.06h2.86a.27.27,0,0,0,.17-.06.11.11,0,0,0,.06-.1h0V26.71a.14.14,0,0,0-.07-.11.27.27,0,0,0-.17-.06h0l-7.78,1.3h0c-.13,0-.22.11-.21.17v1.76a.12.12,0,0,0,0,.1.37.37,0,0,0,.12.07Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt=" Payme" width={92} />
                                <div className="flex flex-col ml-5">
                                    <span className="font-semibold text-2xl">Payme GO</span>
                                    <span>Internetsiz tez va xavfsiz to’lov.</span>
                                    <span className="font-bold">Mobil ilovada bor.</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%233cc;%7D.cls-2%7Bfill:%23fc0;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_1-2' data-name='Layer_1'%3E%3Cpath class='cls-1' d='M38,19.07c0-5.78-5-10.48-11.22-10.48H16.52c-6.19,0-11.21,4.7-11.21,10.48v8.77c0,5.74,4.94,10.4,11.08,10.47h10.3c6.09,0,11-4.53,11.2-10.19Zm-3.34,8.77A7.63,7.63,0,0,1,27,35.19H16.29a7.63,7.63,0,0,1-7.63-7.36V19.06a7.64,7.64,0,0,1,7.64-7.38H27A7.65,7.65,0,0,1,34.62,19Z'/%3E%3Cpath class='cls-2' d='M16,25.52a3.32,3.32,0,0,0,3.31,3.19h4.59a3.32,3.32,0,0,0,3.32-3.19V21.4a3.32,3.32,0,0,0-3.32-3.21H19.36A3.31,3.31,0,0,0,16,21.38Z'/%3E%3Cpath class='cls-2' d='M60.29,18.19H55.84a3.31,3.31,0,0,0-3.31,3.19V25.5a3.31,3.31,0,0,0,3.31,3.19H60.4a3.31,3.31,0,0,0,3.31-3.19V21.38a3.31,3.31,0,0,0-3.31-3.19Z'/%3E%3Cpath class='cls-1' d='M51,45.55H48a2.05,2.05,0,0,0-2.06,2v3.09a2.06,2.06,0,0,0,2.06,2h3.06a2.07,2.07,0,0,0,2.06-2V47.53a2.07,2.07,0,0,0-2.06-2Z'/%3E%3Cpath class='cls-1' d='M68.79,45.55h-3a2.07,2.07,0,0,0-2.06,2v3.09a2.07,2.07,0,0,0,2.06,2h3.06a2.06,2.06,0,0,0,2.06-2V47.53a2.05,2.05,0,0,0-2.06-2Z'/%3E%3Cpath class='cls-1' d='M51,63.1H48a2.05,2.05,0,0,0-2.06,2v3.09a2.05,2.05,0,0,0,2.06,2h3.06a2.07,2.07,0,0,0,2.06-2V68h0v-3a2.07,2.07,0,0,0-2.06-2H51Z'/%3E%3Cpath class='cls-1' d='M63.72,68.12a2.07,2.07,0,0,0,2.06,2h3.06a2.05,2.05,0,0,0,2.06-2V68h0V65.08a2.05,2.05,0,0,0-2.06-2H65.78a2.07,2.07,0,0,0-2.06,2Z'/%3E%3Cpath class='cls-1' d='M60.1,54.48h-3a2.05,2.05,0,0,0-2.06,2v3.09a2.05,2.05,0,0,0,2.06,2h3.07a2.05,2.05,0,0,0,2.06-2V56.46a2.05,2.05,0,0,0-2.06-2H60.1Z'/%3E%3Cpath class='cls-2' d='M23.85,51.84H19.36A3.32,3.32,0,0,0,16.05,55v4.12a3.32,3.32,0,0,0,3.31,3.19H24a3.31,3.31,0,0,0,3.31-3.19V55A3.32,3.32,0,0,0,24,51.84h-.1Z'/%3E%3Cpath class='cls-1' d='M38,52.55c0-5.78-5-10.46-11.22-10.47H16.52c-6.19,0-11.21,4.69-11.21,10.47v8.77c0,5.79,5,10.46,11.21,10.47H26.74c6.09,0,11-4.53,11.21-10.17Zm-3.34,8.77A7.65,7.65,0,0,1,27,68.68H16.28a7.63,7.63,0,0,1-7.62-7.36V52.67h0v-.13h0v-.1h0a7.65,7.65,0,0,1,7.65-7.21H27a7.65,7.65,0,0,1,7.65,7.36Z'/%3E%3Cpath class='cls-1' d='M63.12,38.3c6,0,11-4.53,11.19-10.14V19.09c0-5.8-5-10.5-11.19-10.5H52.89c-6.18,0-11.21,4.68-11.22,10.47v8.77c0,5.77,5,10.46,11.22,10.47H63.12ZM52.89,35.21h-.24A7.63,7.63,0,0,1,45,27.86V19.19h0v-.13h0V19h0a7.65,7.65,0,0,1,7.64-7.28H63.35A7.64,7.64,0,0,1,71,19v9.36h0a7.68,7.68,0,0,1-7.63,6.76h-.21Z'/%3E%3C/g%3E%3C/svg%3E" alt=" Payme" width={92} />
                                <div className="flex flex-col ml-5">
                                    <span className="font-semibold text-2xl">QR Pay</span>
                                    <span>Tovar va xizmatlarga QR-kod orqali to’lash.</span>
                                    <span className="font-bold">Mobil ilovada bor.</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%233cc;%7D.cls-2%7Bfill:%23fc0;%7D.cls-3%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_1-2' data-name='Layer_1'%3E%3Cpath class='cls-1' d='M71,38.4l.73-.27a9.2,9.2,0,0,0,5.16-4.68,1.66,1.66,0,0,0,.14-.66,1.62,1.62,0,0,0-.14-.65L69.62,13.78a1.66,1.66,0,0,0-1.53-1H9.27A1.65,1.65,0,0,0,7.7,13.91L2.12,32.27a1.51,1.51,0,0,0-.07.48,1.62,1.62,0,0,0,.15.69,9.23,9.23,0,0,0,4.55,4.44l.65.3V66.67a5.8,5.8,0,0,0,5.78,5.78h52A5.79,5.79,0,0,0,71,66.67ZM45.13,69.07V49.46H58.06V69.07Zm19.27,0h-3V47.75a1.66,1.66,0,0,0-1.66-1.66H43.45a1.66,1.66,0,0,0-1.66,1.66h0V69.07H13.86A3.08,3.08,0,0,1,10.78,66h0V38.86l1-.08a10,10,0,0,0,5.64-2.21l.72-.6.71.6a10.27,10.27,0,0,0,12.78,0l.7-.58.71.58a10.27,10.27,0,0,0,12.73,0l.71-.58.7.57a10.29,10.29,0,0,0,12.88-.11l.72-.62.72.62a10,10,0,0,0,5.16,2.26l1,.13V65.19c0,2.23-.49,3.88-3.32,3.88Zm3.67-33.6c-2.91-.76-2.18-.3-5.72-3.28-.49-.42-.86-1-1.51-1a1.67,1.67,0,0,0-1.51,1A6.67,6.67,0,0,1,48,32.4a1.67,1.67,0,0,0-2.91,0,6.68,6.68,0,0,1-11.23,0,1.67,1.67,0,0,0-2.91,0,6.39,6.39,0,0,1-5.43,3h-.35a6.36,6.36,0,0,1-5.49-3.13,1.68,1.68,0,0,0-1.47-.87h0a1.68,1.68,0,0,0-1.47.88,6.35,6.35,0,0,1-5.51,3.18h-.27a6.58,6.58,0,0,1-5.08-2.39l-.37-.46,5-16.54H66.94l6.63,16.6-.43.51a6.62,6.62,0,0,1-5,2.28h-.07Z'/%3E%3Cpath class='cls-2' d='M33.32,61.58h0A1.66,1.66,0,0,0,35,59.92h0V47.75a1.67,1.67,0,0,0-1.67-1.66H18.94a1.66,1.66,0,0,0-1.66,1.66h0V60.06A1.67,1.67,0,0,0,19,61.73v0ZM20.62,49.46H31.68v8.8l-11.06.12Z'/%3E%3Ccircle class='cls-2' cx='59.97' cy='23.24' r='15.69'/%3E%3Cpath class='cls-3' d='M67.57,17.6a1.64,1.64,0,0,0-1.11-.44,1.61,1.61,0,0,0-1.1.44L56.2,26.77l-4.29-4.29a1.59,1.59,0,0,0-2.24,2.24L54.93,30l.13.17a1.66,1.66,0,0,0,1.14.46,1.64,1.64,0,0,0,1.13-.46.7.7,0,0,0,.13-.17L67.57,19.85A1.6,1.6,0,0,0,68,18.73a1.64,1.64,0,0,0-.46-1.13Z'/%3E%3C/g%3E%3C/svg%3E" alt=" Payme" width={92} />
                                <div className="flex flex-col ml-5">
                                    <span className="font-semibold text-2xl">Joylarda to’lov</span>
                                    <span>Tovar va xizmatlarga joyida to’lov qilish.</span>
                                    <span className="font-bold">Mobil ilovada bor.</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%233cc;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_1-2' data-name='Layer_1'%3E%3Cpath class='cls-1' d='M68.05,36a2.56,2.56,0,0,0,.45-1.44v0a2.43,2.43,0,0,0-.27-1.12h0a2.82,2.82,0,0,0-1.13-1.09,3.84,3.84,0,0,0-1.24-.4h-.05L49.09,30.12,42.61,14.26A3.27,3.27,0,0,0,41.7,13,2.56,2.56,0,0,0,40,12.3h0a2.63,2.63,0,0,0-1.71.66,3.28,3.28,0,0,0-.9,1.28l-6.5,15.88L14.09,31.91a3.37,3.37,0,0,0-1.63.68,2.65,2.65,0,0,0-.68.81,2.49,2.49,0,0,0-.28,1.14A2.52,2.52,0,0,0,12,36a3.24,3.24,0,0,0,.81.84L13,37h0l12.7,10V47L21.13,63.38h0l0,.19a3.93,3.93,0,0,0-.17,1.08v.06a2.64,2.64,0,0,0,.6,1.68,2.49,2.49,0,0,0,.88.66,2.57,2.57,0,0,0,1,.2h0a3.37,3.37,0,0,0,1.74-.55h0l.85-.55h0l14-8.76.1.07,13.73,9.19a3.24,3.24,0,0,0,1.77.57h0a2.52,2.52,0,0,0,2.22-1.35,3,3,0,0,0,.29-1.3v0a4.6,4.6,0,0,0,0-.64v0L54.28,47l.09-.07,12.73-10h0l.15-.11a3.37,3.37,0,0,0,.8-.84Zm-18,9.47,3.77,16.69L40,52.92,25.44,62,30,45.49,17.1,35.39l16.47-1.75L40,17.87l6.43,15.78L62.9,35.4Z'/%3E%3C/g%3E%3C/svg%3E" alt=" Payme" width={92} />
                                <div className="flex flex-col ml-5">
                                    <span className="font-semibold text-2xl">To’lovni saqlash</span>
                                    <span>To’lovni saqlab qo’ying va keyingi safar uni osongina takrorlang</span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fc0;%7D.cls-2%7Bfill:%233cc;%7D.cls-3%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_1-2' data-name='Layer_1'%3E%3Ccircle class='cls-1' cx='40.42' cy='39.53' r='16.91'/%3E%3Cpath class='cls-2' d='M16.32,59.39,19,57.2a26.87,26.87,0,0,0,20.69,9.73h0A27,27,0,0,0,66.6,40h0A27,27,0,0,0,39.68,13.08h0a26.84,26.84,0,0,0-18.23,7.16h0A27,27,0,0,0,15,29.33h0L11.81,28a30.27,30.27,0,0,1,7.26-10.25h0A30.23,30.23,0,0,1,39.64,9.65h0A30.35,30.35,0,0,1,70,40h0A30.35,30.35,0,0,1,39.68,70.35h0a30.31,30.31,0,0,1-23.33-11Z'/%3E%3Cpath class='cls-2' d='M11,29.13,9.06,17.44a1.27,1.27,0,0,1,0-.28,1.71,1.71,0,0,1,1.47-1.69h0l.27,0a1.72,1.72,0,0,1,1.7,1.41h0L14.13,27l10.21-.8h.14a1.71,1.71,0,0,1,1.7,1.58h0a.71.71,0,0,1,0,.14,1.71,1.71,0,0,1-1.58,1.71h0l-11.79.93h-.14A1.74,1.74,0,0,1,11,29.1Z'/%3E%3Cpath class='cls-3' d='M46.83,46.74l-8.75-4.48a1.71,1.71,0,0,1-.93-1.52h0V28.28h0a1.7,1.7,0,0,1,1.71-1.71h0a1.71,1.71,0,0,1,1.71,1.71h0V39.72l7.82,4a1.73,1.73,0,0,1,.93,1.53,1.76,1.76,0,0,1-.19.78h0A1.7,1.7,0,0,1,47.6,47h0a1.6,1.6,0,0,1-.77-.19Z'/%3E%3C/g%3E%3C/svg%3E" alt=" Payme" width={92} />
                                <div className="flex flex-col ml-5">
                                    <span className="font-semibold text-2xl">To’lovlar monitoringi</span>
                                    <span>Monitoringda xaridlar, o’tkazmalar va tushumlarning tarixi saqlanadi. Bu xizmat bilan byudjetingizni rejalashtirishingiz, xarajatlaringizni toifalarga bo’lishingiz hamda eslatmalar qoldirishingiz mumkin</span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%233cc;%7D.cls-2%7Bfill:%23fc0;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_1-2' data-name='Layer_1'%3E%3Cpath class='cls-1' d='M17.71,32.39H13a1.51,1.51,0,1,0,0,3h4.73a1.51,1.51,0,1,0,0-3Z'/%3E%3Cpath class='cls-1' d='M68.52,32.14H69a1.51,1.51,0,1,0,0-3h-.5a1.51,1.51,0,1,0,0,3Z'/%3E%3Cpath class='cls-1' d='M16.47,55.8H16a1.51,1.51,0,1,0,0,3h.5a1.51,1.51,0,1,0,0-3Z'/%3E%3Cpath class='cls-1' d='M74,50.82H67.27a1.51,1.51,0,1,0,0,3H74a1.51,1.51,0,1,0,0-3Z'/%3E%3Cpath class='cls-1' d='M12.48,46.59H6a1.51,1.51,0,1,0,0,3h6.47a1.51,1.51,0,1,0,0-3Z'/%3E%3Cpath class='cls-1' d='M51.74,8.74H31.14A10.05,10.05,0,0,0,21.09,18.79V60.85a10.05,10.05,0,0,0,10,10h20.6a10.05,10.05,0,0,0,10-10V18.79A10.05,10.05,0,0,0,51.74,8.74ZM58.5,61.09a6.66,6.66,0,0,1-6.76,6.42H31.14a6.66,6.66,0,0,1-6.66-6.66V18.79a6.67,6.67,0,0,1,6.66-6.65H51.78a6.67,6.67,0,0,1,6.68,6.65Z'/%3E%3Cpath class='cls-2' d='M38.68,64.83h0a5.31,5.31,0,0,1-5.3-5.29h0a5.29,5.29,0,0,1,5.3-5.29h5.67a5.29,5.29,0,0,1,5.29,5.29h0a5.29,5.29,0,0,1-5.29,5.29H38.68Zm0-3h5.67a2.31,2.31,0,0,0,2.3-2.3h0a2.31,2.31,0,0,0-2.3-2.3H38.68a2.3,2.3,0,1,0,0,4.6Z'/%3E%3Cpath class='cls-2' d='M36.42,18.44a1.5,1.5,0,0,1-1.5-1.5h0a1.5,1.5,0,0,1,1.5-1.5h10A1.5,1.5,0,0,1,48,16.94h0a1.5,1.5,0,0,1-1.49,1.5Z'/%3E%3C/g%3E%3C/svg%3E" alt=" Payme" width={92} />
                                <div className="flex flex-col ml-5">
                                    <span className="font-semibold text-2xl">Oflayn to’lov</span>
                                    <span>Mobil aloqaga internetsiz to’lash.</span>
                                    <span className="font-bold">Mobil ilovada bor.</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fc0;%7D.cls-2%7Bfill:%233cc;%7D.cls-3%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_1-2' data-name='Layer_1'%3E%3Cpath class='cls-1' d='M24.19,39.77H14.33a2.82,2.82,0,0,0-2.81,2.81v7.34a2.83,2.83,0,0,0,2.81,2.81h9.86A2.82,2.82,0,0,0,27,49.92V42.59h0a2.82,2.82,0,0,0-2.81-2.82Zm-.44,9.63H14.86V43.09h8.86Z'/%3E%3Cpath class='cls-2' d='M62.45,31.42A7.5,7.5,0,0,0,55,23.93H11.31a7.5,7.5,0,0,0-7.49,7.49V62.33a7.51,7.51,0,0,0,7.49,7.49H55a7.51,7.51,0,0,0,7.49-7.49ZM57.91,65.27A4.15,4.15,0,0,1,55,66.49H11.31a4.17,4.17,0,0,1-4.17-4.16V31.42a4.19,4.19,0,0,1,4.17-4.17H55a4.19,4.19,0,0,1,4.17,4.17V62.33a4.17,4.17,0,0,1-1.23,2.94Z'/%3E%3Ccircle class='cls-1' cx='55.73' cy='30.27' r='20.09'/%3E%3Cpath class='cls-3' d='M56.29,41.83l9.62-9.63a.76.76,0,0,0,.23-.55.78.78,0,0,0-.23-.55L64.82,30a.78.78,0,0,0-.54-.23.81.81,0,0,0-.55.23l-6.36,6.37V19.31a.77.77,0,0,0-.77-.77H55a.76.76,0,0,0-.77.77V36.48L47.73,30a.77.77,0,0,0-1.08,0l-1.1,1.1a.76.76,0,0,0,0,1.09l9.63,9.63a.8.8,0,0,0,1.11,0Z'/%3E%3C/g%3E%3C/svg%3E" alt=" Payme" width={92} />
                                <div className="flex flex-col ml-5">
                                    <span className="font-semibold text-2xl">Pul so’rash</span>
                                    <span>Do’st va yaqinlaringizdan kartangizga pul o’tkazishlarini so’rang</span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%233cc;%7D.cls-2%7Bfill:%23fc0;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_1-2' data-name='Layer_1'%3E%3Cpath class='cls-1' d='M12.21,26.82a6.53,6.53,0,0,0-.71,3V64.13a6.22,6.22,0,0,0,.71,2.9,6.13,6.13,0,0,0,2.73,2.58,7,7,0,0,0,2.87.72h44.3A6.34,6.34,0,0,0,64,70a6.75,6.75,0,0,0,3-1.89,6,6,0,0,0,1.48-3.94V29.77a6.49,6.49,0,0,0-.71-3h0A5.76,5.76,0,0,0,65,24.26a7.19,7.19,0,0,0-2.88-.67h0a.38.38,0,0,0-.37.33l-.3,2.64v0a.37.37,0,0,0,.37.37h0a3.28,3.28,0,0,1,3.28,3.28v33.5A3.29,3.29,0,0,1,61.83,67H18.05a3.29,3.29,0,0,1-3.28-3.28V30.31A3.28,3.28,0,0,1,18.05,27h0a.37.37,0,0,0,.38-.37v0L18.19,24a.37.37,0,0,0-.37-.35h0a7.17,7.17,0,0,0-3.9,1.26,5.72,5.72,0,0,0-1.71,2Z'/%3E%3Cpath class='cls-2' d='M51.38,21.37a.36.36,0,0,0-.11-.26L40.58,10.41a1.23,1.23,0,0,0-1.54,0l-10.7,10.7a.39.39,0,0,0-.11.27.36.36,0,0,0,.11.26l1.71,1.73a.38.38,0,0,0,.27.1.37.37,0,0,0,.26-.1l7.84-7.84V53.27a.38.38,0,0,0,.37.37h2.44a.38.38,0,0,0,.37-.37V15.92l7.4,7.4a.39.39,0,0,0,.27.11.36.36,0,0,0,.26-.11l1.72-1.72a.36.36,0,0,0,.13-.23Z'/%3E%3C/g%3E%3C/svg%3E" alt=" Payme" width={92} />
                                <div className="flex flex-col ml-5">
                                    <span className="font-semibold text-2xl">To’lovni yuborish</span>
                                    <span>Tovar yoki xizmatni to’lash uchun chek hosil qiling va uni to’lashni so’rab har qanday messenjer orqali do’stlaringizga yuboring</span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%233cc;%7D.cls-2%7Bfill:%23fc0;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_1-2' data-name='Layer_1'%3E%3Cpath class='cls-1' d='M73.38,27.45a6.62,6.62,0,0,0-4.52-1.82h-.27V20.18a13.5,13.5,0,0,0,.07-1.42v-.38a14,14,0,0,0-2.06-7.32h0a10.25,10.25,0,0,0-4-3.56,14.76,14.76,0,0,0-6.33-1.43h-1a14.85,14.85,0,0,0-6.52,1.51,10.46,10.46,0,0,0-4,3.64,14.36,14.36,0,0,0-2.06,7.42v.23h0v0c0,.42,0,.85.06,1.27v5.44a6.63,6.63,0,0,0-4.34,1.78,6,6,0,0,0-1.88,3.82H9.44a5.63,5.63,0,0,0-3.14,1,4.49,4.49,0,0,0-1.43,1.6,5.44,5.44,0,0,0-.57,2.41V68.63A5.24,5.24,0,0,0,4.87,71a5.07,5.07,0,0,0,2.24,2.06,5.43,5.43,0,0,0,2.33.62H51.5A5,5,0,0,0,53,73.44a5.54,5.54,0,0,0,2.43-1.5,4.94,4.94,0,0,0,1.21-3.23V56.23H68.88a6.61,6.61,0,0,0,4.52-1.79A6.07,6.07,0,0,0,75.3,50V31.87a6.07,6.07,0,0,0-1.92-4.42Zm-1.19,23c0,1.57-1.75,2.75-3.36,2.75H42.93a3.07,3.07,0,0,1-3.2-3V31.87a2.85,2.85,0,0,1,.91-2.06,3.32,3.32,0,0,1,2.27-.9h26a3.32,3.32,0,0,1,2.26.9,2.86,2.86,0,0,1,.92,2.06Zm-19,17.92a1.93,1.93,0,0,1-1.93,1.92H9.6a1.93,1.93,0,0,1-1.93-1.92V36.66A1.93,1.93,0,0,1,9.6,34.74H36.47V49.95a6.1,6.1,0,0,0,1.93,4.41,6.59,6.59,0,0,0,4.52,1.79H53.23ZM45.93,18.89h0v-.13A11.12,11.12,0,0,1,47.52,13a7.3,7.3,0,0,1,2.83-2.57,11.94,11.94,0,0,1,5.06-1.13h.73a11.89,11.89,0,0,1,5,1.08,7.35,7.35,0,0,1,2.78,2.47,10.88,10.88,0,0,1,1.54,5.58v.21h0v0h0v6.91H46v-6h0V19h0Z'/%3E%3Cpath class='cls-2' d='M55.86,33.67h0a4.65,4.65,0,0,0-4.64,4.64v6.64c0,.1,0,.2,0,.3a4.64,4.64,0,1,0,9.28,0c0-.1,0-.2,0-.3V38.32h0a4.64,4.64,0,0,0-4.62-4.65Zm-1.38,4.65a1.39,1.39,0,0,1,2.78,0v7.14a1.44,1.44,0,0,1-1.39,1.4,1.42,1.42,0,0,1-1.38-1.39Z'/%3E%3Cpath class='cls-2' d='M22.88,46H16.77a3.32,3.32,0,0,0-2.39,1,3.56,3.56,0,0,0-.93,2.4h0v4h0a3.58,3.58,0,0,0,.93,2.37,3.26,3.26,0,0,0,2.38,1H22.9a3.26,3.26,0,0,0,2.38-1,3.59,3.59,0,0,0,.94-2.37h0v-4h0a3.64,3.64,0,0,0-.94-2.4A3.33,3.33,0,0,0,22.88,46Zm-6,7.43v-4h6v4Z'/%3E%3C/g%3E%3C/svg%3E" alt=" Payme" width={92} />
                                <div className="flex flex-col ml-5">
                                    <span className="font-semibold text-2xl">Kartani bloklash</span>
                                    <span>Agar kartangizni yuqotib qo’ysangiz, yoki uni o’g’irlashsa ilovada kartani bloklang.
    Diqqat! Kartani faqat uni chiqargan bankdagina blokdan yechish mumkin. Kartani blokdan chiqarish uchun faqat uning egasi murojaat qilishi mumkin.</span>
                                    <span></span>
                                </div>
                            </div>                      
                            <div className="flex items-center">
                                <img src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fc0;%7D.cls-2%7Bfill:%233cc;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_1-2' data-name='Layer_1'%3E%3Cpath class='cls-1' d='M21.18,47.37H15.47a3.09,3.09,0,0,0-2.26,1,3.35,3.35,0,0,0-.89,2.26h0v3.67h0a3.36,3.36,0,0,0,.89,2.27,3.13,3.13,0,0,0,2.26,1h5.7a3.14,3.14,0,0,0,2.27-1,3.46,3.46,0,0,0,.89-2.27h0V50.64h0a3.45,3.45,0,0,0-.89-2.26,3.13,3.13,0,0,0-2.26-1Zm-5.58,7v-3.7h5.46v3.7Z'/%3E%3Cpath class='cls-2' d='M74.35,23.12a5.37,5.37,0,0,0-1.95-1.41h0L37,8.09a5.64,5.64,0,0,0-2-.35,4.69,4.69,0,0,0-2.34.63,4.78,4.78,0,0,0-2,2.4l-9.24,24.1H9.31a5.32,5.32,0,0,0-3,1A4.35,4.35,0,0,0,5,37.33a5,5,0,0,0-.54,2.26q0,14.28,0,28.58A4.8,4.8,0,0,0,5,70.4a4.71,4.71,0,0,0,2.1,2A5.21,5.21,0,0,0,9.32,73H48.9a5.18,5.18,0,0,0,3.68-1.67,4.6,4.6,0,0,0,1.15-3V57.41l4.32,1.13a5.14,5.14,0,0,0,1.78.32H60a5,5,0,0,0,2.34-.58,4.69,4.69,0,0,0,2-2.39L75.09,27.95a5.14,5.14,0,0,0,.4-1.94A4.43,4.43,0,0,0,74.35,23.12ZM48.58,34.9H25.88l7.7-22.71a1.76,1.76,0,0,1,1.65-1.14,1.64,1.64,0,0,1,.65.13L71,24.71A1.77,1.77,0,0,1,72,27L61.36,54.47a1.76,1.76,0,0,1-1.65,1.14,1.82,1.82,0,0,1-.65-.12l-5.34-1.55v-14C53.72,36.8,51.75,34.9,48.58,34.9Zm1.87,33.33c0,1-.7,1.44-1.67,1.44H9a1.32,1.32,0,0,1-1.31-1.39V39.94a1.78,1.78,0,0,1,1.76-1.76H48.69a1.77,1.77,0,0,1,1.76,1.76Z'/%3E%3Cpath class='cls-1' d='M43.36,23.37l-5.34-2a3.12,3.12,0,0,0-2.47.15,3.4,3.4,0,0,0-1.64,1.8h0l-1.29,3.44h0a3.39,3.39,0,0,0,0,2.43,3.11,3.11,0,0,0,1.76,1.74l5.33,2a3.11,3.11,0,0,0,2.48-.15A3.34,3.34,0,0,0,43.85,31h0l1.3-3.43h0a3.42,3.42,0,0,0,0-2.44,3.17,3.17,0,0,0-1.76-1.74Zm-7.68,4.55L37,24.46l5.11,1.92-1.31,3.46Z'/%3E%3C/g%3E%3C/svg%3E" alt=" Payme" width={92} />
                                <div className="flex flex-col ml-5">
                                    <span className="font-semibold text-2xl">Bir nechta kartalarni qo’shish</span>
                                    <span>Barcha kartalaringizni bir ilovada boshqaring</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-20">
                            <span className="w-1/2">Payme xizmatiga SMS-xabarnoma ulangan har qanday kartalarini qo’shish mumkin. SMS-xabarnoma ulanmagan kartalarni Payme xizmatiga qo’shib bo’lmaydi</span>
                            <div>
                                <button type="button" className="bg-white p-3 px-6 border border-1 rounded-lg text-black outline-none hover:shadow-lg hover:border-[#4ed1d0] transition duration-500">
                                    SMS-xabarnoma qanday qo'shiladi
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-[#007f8b]">
                    <div  className="container mx-auto xl:px-28 max-w-screen-xl">
                        <div className="flex items-center">
                            <div className="flex flex-col text-white">
                                <span className="text-3xl">Biznesingiz uchun onlayn kassa</span>
                                <span className="mt-6">To’lovni qabul qilish, internet do’konlar va boshqa tashkilotlar uchun tayyor yechimlar</span>
                                <div>
                                    <button type="button" className="bg-white p-3 px-14 mt-6 rounded-2xl text-[#007f8b]  ">
                                        Saytga o'tish
                                    </button>
                                </div>
                            </div>
                            <img src="https://payme.uz/assets/images/home-business.png" alt="" />
                        </div>
                    </div>
                </section>
            {/* </main> */}
            {/* footer */}
            <div className="container mt-10 mx-auto xl:px-28 max-w-screen-xl">
                <div className="grid grid-cols-3 my-4">
                    <div className="flex flex-col">
                        <div className="text-gray-400 grow">Qo’llab quvvatlash markazining telefon raqami:</div>
                        <div className="flex flex-col grow">
                            <span className="link font-medium">+998 <span className="text-2xl">78 150‑22‑45</span></span>
                            <span className="link font-medium">+998 <span className="text-2xl">71 200-02-05</span></span>
                        </div>
                        <div className="flex grow">
                            <img src="https://i.pngimg.me/thumb/f/720/compngwingzhuya.jpg" width={64} height={64} alt="Telegram" />
                            <img src="https://i.pngimg.me/thumb/f/720/compngwingzhuya.jpg" width={64} height={64} alt="Facebook" />
                            <img src="https://i.pngimg.me/thumb/f/720/compngwingzhuya.jpg" width={64} height={64} alt="Instagram" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <a href="#" className="linkCustom grow" target="_blank">Dasturchilar uchun</a>
                        <a href="#" className="linkCustom grow" target="_blank">Blog</a>
                        <a href="#" className="linkCustom grow" target="_blank">Ish o'rni</a>
                        <img src="https://cdn.payme.uz/terms/certificate_pci_dss.jpg" width={64} height={64} alt="Instagram" />
                    </div>
                    <div className="flex flex-col">
                        <a href="#" className="linkCustom" target="_blank">Maxfiylik siyosati</a>
                        <a href="#" className="linkCustom" target="_blank">Ommaviy oferta</a>
                        <a href="#" className="linkCustom" target="_blank">To’lov tashkiloti litsenziyasi</a>
                        <a href="#" className="linkCustom" target="_blank">Ma’lumot uzatish tarmoqlaridan xizmatlar uchun litsenziya</a>
                        <a href="#" className="linkCustom" target="_blank">Ekologik siyosat</a>
                    </div>
                </div>
                <div className="my-4">© 2013−2022. “Inspired“ MChJ QK</div>
            </div>
        </div>
    )
}