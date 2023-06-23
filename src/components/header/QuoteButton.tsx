

export function QuoteButton({extraStyles}: {extraStyles: string}) {
    return (
        <a
            href="https://form.jotform.com/230184112380141"
            target="_blank"
            className={`border-2 border-green-700 border-solid px-2 py-1 rounded-md font-light hover:cursor-pointer ${extraStyles}`}
        >
            request a quote
        </a>
    )
}