import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { login, registration } from "../components/http/user.axios";
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const click = async () => {

        try {
            let data;
            data = await registration(phone, password, 'admin');

        } catch (e) {
            // toast.error(e.response.data.message, {
            //     position: "bottom-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // });
        }
    }

    return(
      <div className="continer m-auto">
        <div className="flex h-screen mt-3 m-auto justify-center">
            <div>
                <div className="box-border bg-white border-1 border-black shadow-md rounded-xl mt-8 p-14">
                    {/* <Image src={} /> */}
                    <img src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 85 25' style='enable-background:new 0 0 85 25;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23232225;%7D .st1%7Bfill:%2333CCCC;%7D .st2%7Bdisplay:none;fill:%23232225;%7D%0A%3C/style%3E%3Cpath class='st0' d='M24,17.6c0,0.4,0.1,0.8,0.6,0.8h2.6c0.5,0,0.6-0.4,0.6-0.8V9.7c0-0.5,0-1-0.1-1.4c-0.1-0.4-0.2-0.8-0.3-1.1 c-0.1-0.3-0.3-0.6-0.5-0.8c-0.2-0.2-0.5-0.4-0.7-0.6c-0.3-0.2-0.6-0.3-0.9-0.5c-0.3-0.1-0.7-0.2-1-0.3c-0.4-0.1-0.8-0.1-1.2-0.2 c-0.4,0-0.9,0-1.5,0c-3.6,0-5.6,1.1-6.1,3.3c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2,0.1,0.3,0.1 h2.2c0.6,0,0.6-0.2,0.8-0.7c0.1-0.3,0.3-0.5,0.5-0.7C20,7.1,20.6,7,21.4,7c0.8,0,1.4,0.2,1.8,0.5c0.4,0.3,0.6,0.8,0.6,1.4 c0,0.7-0.2,1.2-1.1,1.2c-2.2-0.1-4.5,0.2-5.8,0.9c-1.3,0.7-2.1,2.2-2.1,3.8c0,0.6,0.1,1.2,0.4,1.7c0.2,0.5,0.6,0.9,1,1.2 c0.4,0.3,0.9,0.6,1.5,0.7c0.6,0.2,1.2,0.3,1.9,0.2c0.9,0,1.7-0.1,2.5-0.3c0.7-0.2,1.9-1,2-1.1L24,17.6L24,17.6z M23.9,14.8 c0,0-0.7,1.4-3,1.4c-0.6,0-1.1-0.1-1.6-0.4c-0.4-0.3-0.6-0.7-0.6-1.4c0-0.8,0.3-1.4,1-1.7c0.7-0.3,2-0.5,3-0.5c1,0,1.3,0.6,1.3,1.1 C23.9,13.4,23.9,14.8,23.9,14.8z M0.9,18.3h2.6c0.7,0,0.6-0.8,0.6-0.8v-2.2c-1.9-0.7-3.1-1.6-4-2.5v4.6C0.2,17.6,0.1,18.3,0.9,18.3z M14.5,5.6c0-0.6-0.1-1.1-0.2-1.7c-0.1-0.5-0.4-1.1-0.7-1.5c-0.3-0.5-0.7-0.9-1.1-1.2c-0.4-0.3-0.9-0.6-1.4-0.7 C10.6,0.3,10,0.1,9.4,0.1C8.7,0,8.1,0,7.3,0h-6C0.8,0,0.2,0.3,0.2,1v9.6c0.8,1.6,2.2,3.3,3.9,4.1v-1.9c0-1,0.8-1.2,1.1-1.2H7 c2.5,0,4.3-0.5,5.6-1.5C13.9,9.1,14.5,7.6,14.5,5.6z M10.2,7.3C10,7.6,9.7,7.9,9.3,8.1C8.9,8.3,8.4,8.4,8,8.4c-0.5,0-1,0.1-1.5,0.1 H4.8c-0.4,0-0.7-0.3-0.7-0.8V3.8c0-0.1,0-0.2,0-0.2c0-0.1,0.1-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1s0.2,0,0.2,0h1.7 c0.6,0,1.1,0,1.6,0c0.4,0,0.9,0.1,1.3,0.3c0.4,0.2,0.7,0.4,0.8,0.8c0.2,0.3,0.3,0.8,0.3,1.5C10.5,6.3,10.4,6.8,10.2,7.3z M30.9,20.6 c-0.2,0-0.4,0-0.6,0c-0.2,0-0.7,0-0.7,0.4v1.8c0,0.7,0.3,0.7,0.5,0.8c0.5,0.1,1.1,0.2,1.7,0.2c0.7,0,1.3-0.1,1.9-0.4 c0.6-0.3,1.1-0.6,1.5-1.1c0.4-0.5,0.8-1.1,1.1-1.7c0.3-0.7,0.6-1.4,0.9-2.2c0,0,0.1-0.3,0.4-0.9C37,18,33.9,20.9,30.9,20.6z M41.3,5.1H39c-0.2,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.3,0.3-0.4,0.5c-0.2,0.5-2.7,7.4-2.7,7.4s-2.4-6.7-2.6-7.2 c-0.2-0.5-0.5-0.9-1.1-0.9h-2.2c-0.8,0-0.8,0.6-0.7,0.8c0.1,0.2,3,8.2,4.2,11.3c0.3,0.7,0.4,0.9,0.4,1.2c0,0.3-0.3,0.8-0.5,1.2 c-0.1,0.1-0.2,0.3-0.3,0.4c2.2-0.7,4.8-3,6.1-5.6c1.3-3.6,3-8.3,3.1-8.6C41.9,5.4,41.9,5.1,41.3,5.1z'/%3E%3Cpath class='st1' d='M71.9,8c-1.4,0-2.3,0.9-2.5,2.5h4.9C74.2,9.1,73.4,8,71.9,8z'/%3E%3Cpath class='st1' d='M82.2,10.5c-0.5-0.6-3.6-4.6-4.7-5.7c-1.3-1.3-2.4-1.9-3.6-1.9H47.5c-2.4,0-3.2,0.8-3.2,3.5v10.9 c0,2.7,0.2,3.9,3.7,3.9h25.9c1.2,0,2.5-1,3.4-2c1.1-1.1,4.4-4.6,4.9-5.5c0.3-0.5,0.4-1,0.4-1.6C82.7,11.5,82.5,10.9,82.2,10.5z M46.7,6.7c0-0.4,0.1-0.7,0.6-0.7h2.2c0.6,0,0.6,0.3,0.6,0.7v0.1C49,7.4,47.8,8,46.7,9.5V6.7z M64,17.6h-2.3c-0.6,0-0.5-0.5-0.5-0.7 v-6.7c0-0.8-0.1-1.3-0.3-1.6c-0.1-0.2-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.1-0.6-0.1c-1.2,0-2,1.2-2.4,1.7V17c0,0.2,0.1,0.6-0.6,0.6 h-2.2c-0.6,0-0.5-0.5-0.5-0.7v-6.7c0-0.8-0.1-1.3-0.3-1.6c-0.2-0.3-0.6-0.5-1.1-0.5c-1.3,0-2,1.2-2.4,1.7V17c0,0.2,0.1,0.6-0.6,0.6 h-2.3c-0.6,0-0.5-0.5-0.5-0.7v-4.4c0-2.9,3.6-5.7,3.8-5.9c0.9-0.7,2-1,3.1-1c0.8,0,1.5,0.1,2.2,0.5c0.6,0.4,1,0.9,1.3,1.6 c0.5-0.6,1.1-1.1,1.8-1.5c0.6-0.4,1.3-0.5,2-0.5c2.6,0,3.8,1.4,3.8,4.3v7C64.6,17.2,64.7,17.6,64,17.6z M76.7,12.5h-7.3 c0,1.9,1,2.9,2.6,2.9c1,0,1.6-0.4,2.1-1.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.3-0.1,0.4-0.1h1.9c0.1,0,0.1,0,0.2,0 c0.1,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0.1,0,0.1,0,0.2c-0.8,2.1-2.7,3.3-5.1,3.3c-3.5,0-5.7-2.3-5.7-5.8 c0-3.4,2.4-5.9,5.6-5.9c3.3,0,5.4,2.2,5.5,5.8C77.4,12,77.3,12.5,76.7,12.5z'/%3E%3Cpath class='st2' d='M115.4,13.5c0,2.5-1.3,4.1-3.7,4.1c-2.4,0-3.7-1.6-3.7-4.1V5.2h-1.6v8.4c0,3.4,1.8,5.6,5.4,5.6s5.4-2.2,5.4-5.6 V5.1h-1.6V13.5z'/%3E%3Cpath class='st2' d='M124.6,8.7c0-1.3,1.1-2.2,2.7-2.2c0.7,0,1.4,0.1,2.1,0.4c0.7,0.3,1.2,0.7,1.7,1.2l1-1.3 C131,5.7,129.4,5,127.4,5c-2.6,0-4.5,1.5-4.5,3.8c0,4.9,7.8,2.9,7.8,6.5c0,1.1-0.7,2.3-3.1,2.3c-0.8,0-1.6-0.2-2.3-0.5 c-0.7-0.3-1.3-0.8-1.9-1.4l-1,1.3c1.1,1.3,2.8,2.2,5.1,2.2c3.5,0,4.8-2,4.8-4C132.4,10,124.6,11.8,124.6,8.7z'/%3E%3Cpath class='st2' d='M97.9,11.8c1.2-0.3,2.3-1.4,2.3-3.2c0-2.1-1.4-3.5-3.7-3.5h-5.9v13.7h6c2.4,0,3.8-1.5,3.8-3.7 C100.4,13.6,99.3,12,97.9,11.8z M92.3,6.7h3.9c1.5,0,2.3,1,2.3,2.2c0,1.3-0.8,2.2-2.3,2.2h-3.9V6.7z M96.3,17.4h-4v-4.7h4 c1.6,0,2.5,1.1,2.5,2.3C98.7,16.5,97.8,17.4,96.3,17.4L96.3,17.4z'/%3E%3Cpath class='st2' d='M193.8,8.7c0-1.3,1.1-2.2,2.7-2.2c0.7,0,1.4,0.1,2.1,0.4c0.7,0.3,1.2,0.7,1.7,1.2l1-1.3 c-1.1-1.2-2.7-1.9-4.7-1.9c-2.6,0-4.5,1.5-4.5,3.8c0,4.9,7.8,2.9,7.8,6.5c0,1.1-0.7,2.3-3.1,2.3c-0.8,0-1.6-0.2-2.3-0.5 c-0.7-0.3-1.3-0.8-1.9-1.4l-1,1.3c1.1,1.3,2.8,2.2,5.1,2.2c3.5,0,4.8-2,4.8-4C201.6,10,193.8,11.8,193.8,8.7z'/%3E%3Cpath class='st2' d='M179,8.7c0-1.3,1.1-2.2,2.7-2.2c0.7,0,1.4,0.1,2.1,0.4c0.7,0.3,1.2,0.7,1.7,1.2l1-1.3c-1.1-1.2-2.7-1.9-4.7-1.9 c-2.6,0-4.5,1.5-4.5,3.8c0,4.9,7.8,2.9,7.8,6.5c0,1.1-0.7,2.3-3.1,2.3c-0.8,0-1.6-0.2-2.3-0.5c-0.7-0.3-1.3-0.8-1.9-1.4l-1,1.3 c1.1,1.3,2.8,2.2,5.1,2.2c3.5,0,4.8-2,4.8-4C186.8,10,179,11.8,179,8.7z'/%3E%3Cpath class='st2' d='M139.7,5.2h-1.6v13.7h1.6V5.2z'/%3E%3Cpath class='st2' d='M163.3,18.9h8.6v-1.5h-7v-4.7h6.8v-1.5h-6.8V6.7h7V5.2h-8.6V18.9z'/%3E%3Cpath class='st2' d='M155.3,15.9l-7.6-10.7h-1.7v13.7h1.6V8l7.7,10.9h1.6V5.2h-1.6V15.9z'/%3E%3C/svg%3E%0A" alt="" />
                    <div className="font-semibold">Вход</div>
                        <div className="mt-5">
                            <label htmlFor="phone">Telefon raqami</label>
                            <div className="relative mt-4">
                                <div className="absolute pl-3 inset-0 flex items-center pointer-events-none">
                                    <span>+998</span>
                                </div>
                                <input id="phone" type="text" className="block pl-14 w-full bg-[#f8f8f8] outline outline-offset-1 outline-1 outline-[#dadada] rounded-lg py-2.5 focus:bg-white focus:outline-[#33cccc] ease-in duration-200"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="password">Parol</label>
                            <div className="relative mt-4">
                                <input id="password"  type="text" className="block pl-14 w-full bg-[#f8f8f8] outline outline-offset-1 outline-1 outline-[#dadada] rounded-lg py-2.5 focus:bg-white focus:outline-[#33cccc] ease-in duration-200"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-2">Parolni tiklash</div>
                    <div className="mx-2">
                        <button type="button" className="cursor-pointer mt-10 p-3 px-14 border border-1 rounded-lg text-black outline-none hover:shadow-lg hover:border-[#4ed1d0] transition duration-500 ">
                            Назад
                        </button>
                        <button type="button" className="
                        ml-10
                        bg-[#3cc]
                        cursor-pointer
                        mt-10
                        p-3
                        px-14
                        border
                        border-1
                        rounded-lg
                        text-white
                        outline-none
                        hover:shadow-lg
                        hover:border-[#4ed1d0]
                        transition
                        duration-500
                        "
                        onClick={click}>
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
      </div>
    )
}