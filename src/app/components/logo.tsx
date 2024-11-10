 
 import Link from "next/link";

 export default function FlowerLogo(){
    return (
        <div className="h-full flex justify-center items-center w-full bg-white mx-auto max-w-screen-xl sm:py-4 md:px-6 ">
            <div className="object-cover h-[200px] w-[200px]  flex justify-center items-center p-0 ">
                <Link href="">
                <img src="https://www.blossomsflorals.com/public/frontend/img/logo/logo.png"
            className="hover:h-[220] hover:w-[220] transition-transform scale-105 duration-150 ease-in-out"
             alt="logo" />
                </Link>
            
        </div>
        </div>
    )
 }