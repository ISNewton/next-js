import Nav from "../components/layout/nav"
import { SessionProvider } from "next-auth/react"

const MyApp = ({ Component, pageProps }) => {

    return (
        <SessionProvider session={pageProps.session} >

        <Nav>
            <Component {...pageProps} />
        </Nav>
        </SessionProvider>

    )
}

export default MyApp