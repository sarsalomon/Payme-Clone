import React from "react";
import { Header } from "../../components/header/header";
import { Menu } from "../../components/menu/menu";
import { AiOutlineFilter, AiOutlineBarChart } from 'react-icons/ai';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

  
  const labels = ['1, Sha', '2, Ya', '3, Du', '4, Se', '5, Cho', '6, Pa'];
  
  export const data = {
    labels,
    datasets: [{
        data: [130000, 200000, 300000, 140000, 20000, 100000],
        backgroundColor: [
            'rgba(51,204,204,255)',
            'rgba(51,204,204,255)',
            'rgb(255, 87, 51)',
            'rgba(51,204,204,255)',
            'rgb(255, 87, 51)',
            'rgb(255, 87, 51)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgb(255, 87, 51)',
            'rgba(54, 162, 235, 1)',
            'rgb(255, 87, 51)',
            'rgb(255, 87, 51)'
        ],
        borderWidth: 1
    }]
  };
  
export default function Cabinenthistory() {
    return(
        <>
        <Header></Header>

        <main className="flex mt-8">
            <Menu></Menu>

            <section className="ml-40 w-full pr-8">
                <div className="flex flex-col ">
                    <span className="text-4xl font-light mb-2">To’lovlar monitoringi</span>
                    <span>Xaridlar, o’tkazmalar va tushumlarning tarixi</span>
                </div>
                <div className="flex mt-4">
                    <button className="flex items-center bg-[#3cc] text-white rounded-xl px-4 py-3 mr-8"><AiOutlineFilter className="mr-3 text-2xl"/>Filtr</button>
                    <button className="flex items-center bg-[#3cc] text-white rounded-xl px-4 py-3"><AiOutlineBarChart className="mr-3 text-2xl"/>Diagramma</button>
                </div>
                <div className="flex flex-col my-10">
                    <Bar data={data} />
                    <div className="flex items-center justify-center mt-4">
                        <div className="flex link mr-6">
                            <input type="radio" name="1" id="test1" className="mr-4"/>
                            <label htmlFor='test1'>Vaqt bo'yicha</label>
                        </div>
                        <div className="flex link">
                            <input type="radio" name="1" id="test2" className="mr-4"/>
                            <label htmlFor='test2'>Kategoriyalar bo’yicha</label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around items-center mt-2">
                    <div className="flex flex-col text-[#3cc] items-center">
                        <div><span className="text-3xl font-semibold">+130 000</span> so'm</div>
                        <span>Tushumlar</span>
                    </div>
                    <div className="flex flex-col text-[#c33] items-center">
                    <div><span className="text-3xl font-semibold">-0</span> so'm</div>
                        <span>Tushumlar</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <div className="flex font-semibold items-baseline">
                            <span className="text-xl mr-4">Oktabr 04</span>
                            <span className="text-gray-400">2022</span>
                        </div>
                        <div className="flex mt-2">
                            <div className="flex flex-col text-center border border-gray-300 rounded-xl hover:cursor-pointer hover:shadow-2xl transition duration-300">
                                <div className="flex justify-between p-2">
                                    <span className="text-gray-400">09:58</span>
                                    <button className="rounded-full px-1 py-0 bg-[#1db997] text-white">o'tkazma</button>
                                </div>
                                <div className="flex items-center text-center pb-10 pt-4 mx-auto">
                                    <img src="https://cdn.paycom.uz/merchants/aloqabank-p2p.png" alt="" width={158}/>
                                </div>
                                <div className="flex flex-col bg-[#e2dfdf] rounded-b-xl px-8 py-1">
                                    <span className="text-gray-400">Karta: Ipoteka</span>
                                    <div className="text-[#3cc]"><span className="text-lg font-semibold">+ 130 000.00</span> so'm</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    </>
    )
}