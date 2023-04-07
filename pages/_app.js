import Nav from "../components/layout/nav"

const MyApp = ({ Component, pageProps }) => {

    return (
        <Nav>
            <Component {...pageProps} />
        </Nav>
    )
}

export default MyApp