import GlobalStyle from '../styles/GlobalStyle'
import { AppProps } from 'next/app'
import Head from 'next/head'

const app = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>League-Search</title>
                <link rel='shortcut icon' href='/favicon.ico' />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default app
