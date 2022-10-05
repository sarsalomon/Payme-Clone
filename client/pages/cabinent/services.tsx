import React from "react";
import { Header } from "../../components/header/header";
import { Menu } from "../../components/menu/menu";

export default function CabinentService() {
    return(
        <>
        <Header></Header>

        <main className="flex mt-8">
            <Menu></Menu>

            <section className="ml-40 w-full pr-8">
                <div className="flex flex-col">
                    <span className="text-4xl font-light mb-2">Xizmatlar</span>
                    <span>Xizmatlar</span>
                </div>
                <div className="mt-10 flex flex-col">
                    <div className="flex bg-white items-center">
                        <img src="https://cdn.payme.uz/services/new/preview_logo/light/android/xhdpi/payment_to_account.png?v=2" alt="" />
                        <span className="text-[#3cc] font-bold text-sm ml-8">Hisob raqamiga to'lov</span>
                    </div>
                    <div className="flex bg-[#f8f8f8] items-center">
                        <img src="https://cdn.payme.uz/services/new/preview_logo/light/android/xhdpi/mib.png?v=2" alt="" />
                        <span className="text-[#3cc] font-bold text-sm ml-8">MIB qarzdorligini tekshirish</span>
                    </div>
                    <div className="flex bg-white items-center">
                        <img src="https://cdn.payme.uz/services/new/preview_logo/light/android/xhdpi/traffic_fines.png?v=2" alt="" />
                        <div className="flex flex-col ml-8 text-sm">
                            <div className="flex">
                                <input type="checkbox" className="out-of-range:border-red-500 border-gray-100 mr-4"  />
                                <span className="text-[#3cc] font-bold text-sm">YHXBB jarimalari haqida xabarnomalar</span>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span className="text-black py-2">Xizmat oldin yoqilmagan</span>
                                    <span className=" text-sm">Xizmat narxi 2 000 so’m bir oyga</span>
                                    <span className="text-gray-500">YHXBB jarimalar haqida xabarnoma xizmatini yoqsangiz, yo’l qoidabuzarlik sodir etilganda jarimalar</span>
                                    <span className="text-gray-500">haqida ma’lumotlar SMS orqali keladi. Kelgan jarimani Payme ilovasi yordamida to’lashingiz mumkin.</span>
                                    <span>Quyidagi xizmatni yoqib, Siz <span className="text-[#3cc]"> Ommaviy oferta</span> shartlariga rozisiz</span>
                                </div>
                                <div>
                                    <button className="bg-[#3cc] text-white p-3 rounded-2xl">Avtomobil qo'shish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-[#f8f8f8] items-center">
                        <img src="https://cdn.payme.uz/services/new/preview_logo/light/android/xhdpi/zolotaya_korona.png?v=2" alt="" />
                        <div className="flex flex-col ml-8">
                            <span className="text-[#3cc] font-bold text-sm mb-3">Hisob raqamiga to'lov</span>
                            <span>Kartaga to'g'ridan-to'gri xalqaro o'tkazmalarni qabul qiling</span>
                        </div>
                    </div>
                    <div className="flex bg-white items-center">
                        <img src="https://cdn.payme.uz/services/new/preview_logo/light/android/xhdpi/history.png?v=2" alt="" />
                        <div className="flex flex-col ml-8 text-sm ">
                        <div className="flex">
                                <input type="checkbox" className="out-of-range:border-red-500 border-gray-100 mr-4"  />
                                <span className="text-black font-bold text-sm">Kirim-chiqim</span>
                            </div>
                            <span className=" text-black py-2">Xizmat oldin yoqilmagan</span>
                            <span>Xizmat narxi 2 000 so’m bir oyga</span>
                            <span className="text-gray-500">Ushbu xizmatdan foydalangan holda siz, real vaqtda o’zingizning kartalaringiz orqali amalga</span>
                            <span className="text-gray-500">oshirilgan barcha operatsiyalar haqida to’liq ma’lumot olish imkoniga ega bo’lasiz.</span>
                            <span>Quyidagi xizmatni yoqib, Siz <span className="text-[#3cc]"> Ommaviy oferta</span> shartlariga rozisiz</span>
                        </div>
                    </div>
                    <div className="flex bg-[#f8f8f8] items-center">
                        <img src="https://cdn.payme.uz/services/new/preview_logo/light/android/xhdpi/aviasales.png?v=2" alt="" />
                        <div className="flex flex-col ml-8">
                            <span className="text-[#3cc] font-bold text-sm mb-3">Payme Avia</span>
                            <span>Aviachiptalarni sotib olish</span>
                        </div>
                    </div>
                    <div className="flex bg-white items-center">
                        <img src="https://cdn.payme.uz/services/new/preview_logo/light/android/xhdpi/auto_insurance.png?v=2" alt="" />
                        <div className="flex flex-col ml-8">
                            <span className="text-[#3cc] font-bold text-sm mb-3">Avtosug'urta</span>
                            <span>Majburiy avtosug'urtalashning elektron polisini xarid qilish</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
    )
}