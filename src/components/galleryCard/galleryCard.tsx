interface GalleryCardProps {
    src: string
    alt?: string
    title: string
    description?: string
    location?: string
}

export function GalleryCardLeft({src, alt, title, description, location}: GalleryCardProps) {

    return (
        <section className="flex">
            <div className="w-1/2 overflow-hidden">
                <img
                    src={src}
                    alt={alt ? alt : 'gallery photo'}
                    className=""
                />
            </div>
            <div className="flex flex-col items-start w-1/2 bg-sky-700/10 pl-10 text-3xl font-light pt-3">
                <h1 className="uppercase tracking-widest">{title}</h1>
                <h2 className="text-xl tracking-widesr">{location ? location : ''}</h2>
                <p className="text-lg">{description ? description : ''}</p>
            </div>
        </section>
    )
}

export function GalleryCardRight({src, alt, title, description, location}: GalleryCardProps) {

    return (
        <section className="flex">
            <div className="flex flex-col items-end w-1/2 bg-slate-700/10 pr-10 text-3xl font-light pt-3">
                <h1 className="uppercase tracking-widest">{title}</h1>
                <h2 className="text-xl tracking-widesr">{location ? location : ''}</h2>
                <p className="text-lg">{description ? description : ''}</p>
            </div>
            <div className="w-1/2 overflow-hidden">
                <img
                    src={src}
                    alt={alt ? alt : 'gallery photo'}
                    className=""
                />
            </div>
        </section>
    )
}