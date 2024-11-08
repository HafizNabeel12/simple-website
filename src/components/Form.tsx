export default function Form (){
    return(
        <div>
            <h1 className=" text-3xl font-bold text-center m-9 ">ENTER YOUR DETAILS</h1>  

            <form className=" mt-10 flex gap-5 flex-col justify-center items-center" >

                <input type="email" className="border border-red-950 rounded" placeholder="Enter Your Gmail" />
                <input type="password" className="border border-red-950 rounded" placeholder="Enter Your Password" />

                 <button className="bg-blue-500 py-2 px-6 rounded-lg">Log in</button>
            </form>

        </div>
    )
}