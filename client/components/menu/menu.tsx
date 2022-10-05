import { AiOutlineCreditCard } from 'react-icons/ai';
import { MdOutlineHomeRepairService } from 'react-icons/md';
import { BiTransferAlt, BiWalletAlt } from 'react-icons/bi';
import { FaHistory } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';
import Link from 'next/link'

export const Menu = () => {

    return (
        <>
            <div className='bg-[#3cc] cabinet-menu break-words'>
                <ul className='flex flex-col text-center text-white '>
                    <Link href="main"><li className='flex flex-col items-center py-4 hover:cursor-pointer hover:bg-[#f8f8f8] hover:text-[#3cc] transition duration-300'><FiGrid className='text-4xl'/><span className='font-medium text-md'>Asosiy</span></li></Link>
                    <Link href="transfer"><li className='flex flex-col items-center py-4 hover:cursor-pointer hover:bg-[#f8f8f8] hover:text-[#3cc] transition duration-300'><BiTransferAlt className='text-4xl'/><span className='font-medium text-md'>Pul o'tkazish</span></li></Link>
                    <Link href="payment"><li className='flex flex-col items-center py-4 hover:cursor-pointer hover:bg-[#f8f8f8] hover:text-[#3cc] transition duration-300'><BiWalletAlt className='text-4xl'/><span className='font-medium text-md'>To'lovlar</span></li></Link>
                    <Link href="history"><li className='flex flex-col items-center py-4 hover:cursor-pointer hover:bg-[#f8f8f8] hover:text-[#3cc] transition duration-300'><FaHistory className='text-4xl'/><span className='font-medium text-md'>To'lovlar monitoringi</span></li></Link>
                    <Link href="cards"><li className='flex flex-col items-center py-4 hover:cursor-pointer hover:bg-[#f8f8f8] hover:text-[#3cc] transition duration-300'><AiOutlineCreditCard className='text-4xl'/><span className='font-medium text-md'>Mening kartalarim</span></li></Link>
                    <Link href="services"><li className='flex flex-col items-center py-4 hover:cursor-pointer hover:bg-[#f8f8f8] hover:text-[#3cc] transition duration-300'><MdOutlineHomeRepairService className='text-4xl'/><span className='font-medium text-md'>Xizmatlar</span></li></Link>
                </ul>
            </div>
        </>
    )
}