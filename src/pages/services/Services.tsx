export function Services() {
  return (
    <main className="text-slate-100">
      <section className="mt-20 flex min-h-screen flex-col items-center justify-center gap-20 bg-slate-900 bg-cover">
        <div className="flex flex-col items-center border-2 border-black bg-slate-100/90 p-5 text-center text-4xl font-light tracking-widest text-black">
          <h1>Residential Services</h1>
          <p className="text-xl">Luxury or Custom remodels and renovations</p>
        </div>
        <div className="flex w-[80%] flex-col items-center gap-10 pb-10 text-center">
          <p className="w-2/3  text-4xl font-semibold text-slate-100">
            We handle every step of your remodel or renovation, from concept to
            materials to reality.
          </p>
          <div className="mt-2 flex flex-col items-center justify-center border-2 border-black bg-slate-100/90 p-5 font-light tracking-widest text-black">
            <ul className="flex flex-wrap justify-center gap-4 text-2xl font-extralight">
                <li>painting</li>
                <li>fencing</li>
                <li>flooring</li>
                <li>tile</li>
                <li>repair</li>
                <li>installs</li>
            </ul>
            <p className="mt-10 text-2xl font-light tracking-wide">
                No Job is too big or too small
            </p>
          </div>
          <button className="rounded bg-blue-500 px-3 py-1 text-xl transition-all duration-75 ease-in-out hover:bg-blue-400 mt-1">
            <a href="https://form.jotform.com/230184112380141" target="_blank">
              Request a Free Quote
            </a>
          </button>
        </div>
      </section>
      <section className="flex max-h-screen flex-col items-center justify-start gap-20 bg-slate-800 bg-contain">
        <div className="flex flex-col items-center border-2 border-black bg-slate-100/90 p-5 mt-2 text-center text-4xl font-light tracking-widest text-black">
          <h1>Commercial Services</h1>
          <p className="text-xl tracking-wide">Our on-site management crews are ready to serve you</p>
        </div>
        <div className="flex sm:w-[80%] w-full flex-col items-center gap-10 pb-10 text-center">
          <p className="w-2/3 text-3xl font-semibold text-slate-100 -mt-7">
            If you need to build a space for your business, we handle all
            construction services from tenant improvements to new builds.
          </p>
          <button className="rounded bg-blue-500 px-3 py-1 text-xl transition-all duration-75 ease-in-out hover:bg-blue-400">
            <a href="mailto: mike.a@mmgencon.com">
              Lets talk about your next project
            </a>
          </button>
        </div>
      </section>
    </main>
  );
}
