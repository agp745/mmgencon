import { Link } from "react-router-dom"
import type { ClientPath } from "lib/types"

interface MenuLinkProps {
    path: ClientPath,
    handleClick: (page: ClientPath) => void,
    styles: string
}

export function MenuLink({ path, handleClick, styles }: MenuLinkProps ) {

    const filterPathName = (path: ClientPath) => {
        let filtered = path.slice(1)
        // if (filtered.includes('-')) {
        //     filtered.replace('-', ' ')
        // } 
        // console.log(filtered.includes('-'))
        return filtered
    }

    return (
        <Link
            to={path}
            onClick={() => handleClick(path)}
            className={styles}
        >
            <div className="capitalize">{filterPathName(path)}</div>
        </Link>
    )
}