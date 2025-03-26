

export default function Navbar(){
    return (
        <navbar>
            <div className="flex lg:justify-around justify-between bg-blue-custom pt-2 pb-1 lg:pl-0 pl-16">
                <div className="roboto text-slate-50 ml-4">
                    <span>TeraFlow</span>
                </div>
                <div className="roboto lg:flex hidden justify-around gap-7 text-xs">
                    <button className="cursor-pointer text-slate-50">HOME</button>
                    <button className="cursor-pointer text-slate-50">FEATURES</button>
                    <button className="cursor-pointer text-slate-50">CONTACT</button>
                    <div className="bg-pink-lg py-1 px-2 rounded-full">
                        <button className="cursor-pointer text-slate-50">ORDER NOW</button>
                    </div>
                </div>
                <div className="">

                </div>
            </div>
        </navbar>
    )
}