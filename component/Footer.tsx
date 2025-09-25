import Image from "next/image"

const Footer = () => {

    return(

        <div className="mt-2 mx-auto bg-[#3f3e3e] h-20 flex items-center">
            <div className="flex justify-between mx-auto w-[98%] xl:max-w-[1350px] ">
             <div className="flex gap-4 items-center">
                <Image src="/krea.jpeg" alt="logo" width={40} height={40} className="rounded-[10px] h-10 "/>
                <p className="text-white font-medium text-3xl">Krea AI</p>
             </div>
             <div className="flex gap-6 items-center">
                <p className="text-white font-medium text-3xl">curated by</p>

                <div className="flex gap-2 items-center">
                <Image src="/mobbin.png" alt="logoo" width={70} height={50} className="h-18"/>
                <p className="text-white font-bold text-[40px]">Mobbin</p>
                </div>
             </div>
            </div>
        </div>
    )
}

export default Footer

{/* <div className="mt-[30px] mx-auto bg-[#3f3e3e] h-20">
            <div className="flex justify-between w-[80%] bg-purple-400 xl:w-[1360px]">
             <div className="flex">
                <Image src="/krea.jpeg" alt="logo" width={30} height={30}/>
                <p>Krea AI</p>
             </div>
             <div className="flex">
                <p>curated by</p>
                <Image src="/mobbin.png" alt="logoo" width={30} height={30}/>
                <p>Mobbin</p>
             </div>
            </div>
        </div> */}