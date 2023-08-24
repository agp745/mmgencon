
export function Services() {

    return (
        <main className="text-slate-100">
            <section className="min-h-screen bg-blue-900 bg-cover flex flex-col items-center mt-20">
                <div className="flex flex-col items-center text-center bg-slate-100/90 p-5 text-4xl font-light border-2 border-black tracking-widest text-black mt-2">
                    <h1>Residential Services</h1>
                    <p className="text-xl">Luxury or Custom remodels and renovations</p>
                </div>
                <div className="text-center w-[80%] border-b-4 border-b-slate-100 flex flex-col items-center gap-10 pb-10">
                    <p className="text-3xl text-slate-100 font-semibold mt-10 w-2/3">We handle every step of your remodel or renovation, from concept to materials to reality.</p>
                    <p className="text-2xl bg-neutral-950/40 p-3">Our Pro's are  ready to serve with your TO-DO list from:
                        <ul className="font-light">
                            <li>painting</li>
                            <li>fencing</li>
                            <li>flooring</li>
                            <li>tile</li>
                            <li>repair</li>
                            <li>installs</li>
                        </ul>
                    </p>
                    <p className="mt-10 text-xl font-light">No Job is too big or too small</p>
                    <button className="bg-blue-500 py-1 px-3 rounded text-xl hover:bg-blue-400 transition-all duration-75 ease-in-out">
                        <a href="https://form.jotform.com/230184112380141">Request a Free Quote</a>
                    </button>
                </div>
                
            </section>
            <section className="min-h-screen bg-slate-800 bg-contain flex flex-col items-center">
            <div className="flex flex-col items-center text-center bg-slate-100/90 p-5 text-4xl font-light border-2 border-black tracking-widest text-black mt-2">
                    <h1>Commercial Services</h1>
                    {/* <p className="text-xl">Luxury or Custom remodels and renovations</p> */}
                </div>
                <div className="text-center w-[80%] border-b-4 border-b-slate-100 flex flex-col items-center gap-10 pb-10">
                    <p className="text-3xl text-slate-100 font-semibold mt-10 w-2/3">If you need to build a space for your business, we handle all construction services from tenant improvements to new builds.</p>
                    <p className="text-2xl p-3">Our on-site management crews are ready to serve you.  </p>
                    <p className="mt-10 text-lg font-light">Making spaces better</p>
                    <button className="bg-blue-500 py-1 px-3 rounded text-xl hover:bg-blue-400 transition-all duration-75 ease-in-out">
                        <a href="mailto: mike.a@mmgencon.com">Lets talk about your next project</a>
                    </button>
                </div>
            </section>
        </main>
    )
}