export default function Report(){
    return(
        <section className="card card-report rounded-2xl overflow-hidden col-span-1">
            <div className="bg-Blue p-10 rounded-2xl grid grid-cols-2 lg:grid-cols-1 gap-[2rem]">
                <img src="/img/image-jeremy.png" alt="" className="max-w-[4.3rem] border-[2.75px] rounded-full"/>
                <div>
                    <span className="opacity-45">Report for</span>
                    <p className="text-3xl">{'Jeremy Robson'}</p>
                </div>
            </div>
            <div className="bg-Darkblue p-10 grid grid-cols-3 lg:grid-cols-1 gap-3">
                <button className="text-center lg:text-left">Daily</button>
                <button className="text-center lg:text-left">Weekly</button>
                <button className="text-center lg:text-left">Monthly</button>
            </div>
        </section>
    )
}