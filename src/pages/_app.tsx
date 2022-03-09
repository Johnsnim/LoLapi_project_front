import GlobalStyle from '../styles/GlobalStyle'
import { AppProps } from 'next/app'
import Head from 'next/head'

const app = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default app
