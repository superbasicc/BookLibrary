import { type NextPage } from "next"
import styles from '@/styles/PublicHeader.module.css'

type NavObj = {
    href: string
    name: string
}

const Header: NextPage = () => {
    const appName = "Book Library"

    const nav: NavObj[] = [
        {
            href: "/About",
            name: "About"
        },
        {
            href: "/AllBooks",
            name: "All Books"
        },
        {
            href: "/Contact",
            name: "Contact"
        },
        {
            href: "/FAQ",
            name: "FAQ"
        },
    ]

    return (
        <>
            <div className="container mx-auto mb-20">
                <nav className={styles.nav}>
                    <input
                        style={{ display: 'none' }}
                        type="checkbox" 
                        className={styles["nav-checkbox"]}
                        id="nav"
                    />
                    <label htmlFor="nav" className={styles["nav-btn"]}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </label> 
                    <div className={styles.logo}>
                        <a href="/">{appName}</a>
                    </div>
                    <div className={styles["nav-wrapper"]}>
                        <ul>
                            {
                                nav.map((d, i) => {
                                    return (
                                        <li key={i}><a href={d.href}>{d.name}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header