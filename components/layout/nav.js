import Link from 'next/link'
import classes from './Nav.module.css'
const Nav = () => {

    return (
        <header >
            <Link href='/'>
                    <div >Next Auth</div>
            </Link>
            <nav>
                <ul className={classes.links}>
                    {/* {!session && !loading && ( */}
                        <li>
                            <Link href='/auth'>Login</Link>
                        </li>
                    {/* )} */}
                    {/* {session && ( */}
                        <li>
                            <Link href='/profile'>Profile</Link>
                        </li>
                    {/* )}
                    {session && ( */}
                        <li>
                            <button>Logout</button>
                        </li>
                    {/* )} */}
                </ul>
            </nav>
        </header>
    )
}

export default Nav