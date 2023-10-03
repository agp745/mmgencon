
export function Careers() {
    return (
        <main className="flex flex-col items-center justify-center gap-1 h-[85vh] bg-slate-50 text-center">
            <h1 className="text-3xl font-light tracking-wide">We are contracting skilled laborers</h1>
            <p className="text-2xl font-light tracking-wide">Interested? Scan the QR Code below</p>
            <a href="https://form.jotform.com/232346771281154" target="_blank">or click <span className="underline text-sky-500">here</span></a>
            <img src="/assets/mmgencon-pics/mmgencon_careers.png" alt="careers qr code" />
        </main>
    )
}