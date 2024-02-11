"use client"
import Link from "next/link"


export default function page(){
    const handlesubmit = async (e:any)=>{
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        try {
            const response = await fetch("http://localhost:4000/log", {
              method: "POST", 
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(
                {
                    "name":e.target[0].value,
                    "password":e.target[1].value
                }),
            });
            const result = await response.json();
            console.log("Success:", result);
          } catch (error) {
            console.error("Error:", error);
          }
        }
    
    
    return( 
       <main className={`flex min-h-screen w-full flex-col items-center bg-imagebg bg-cover bg-no-repeat`} >
                <h1 className="mb-2 mt-5 text-[54px] font-bold text-blue-600">LOG IN</h1>
            <div className="flex w-[396px] flex-col rounded-md bg-gray-300 bg-transparent bg-opacity-60 p-3 text-center shadow-sm">
                <form action="" onSubmit={handlesubmit} className="flex flex-col">
                    <label className="text-left text-sm font-bold text-white">USERNAME</label>
                    <input type="text" className="mb-3 w-full rounded-md border bg-transparent px-[16px] py-[10px] text-[17px] text-white outline-4 outline-blue-500 placeholder:text-white" placeholder="Enter Username"/>
                    <label className="text-left text-sm font-bold text-white">PASSWORD</label>
                    <div className="mb-7 rounded-md border">
                        <input type="text" className="w-5/6 bg-transparent px-[16px] py-[10px] text-[17px] text-white outline-4 outline-blue-500 placeholder:text-white" placeholder="Enter Password"/>
                        <div className="">

                        </div>
                    </div>
                    <button type="submit" className="lead-[48px] h-12 w-full rounded-[6px] bg-[#1877f2] text-xl font-bold text-white">Log In</button>
                    <Link href={'/'} className="text-[13px] text-[#1877f2] hover:underline">Forgot password?</Link>
                </form>
                <hr className="my-4"/>
                <button className="mx-[90px] mb-3 h-12 rounded-md bg-[#42b72a] px-4 text-[17px] font-bold text-white">Create new account</button>
            </div>
       </main>
    )
}