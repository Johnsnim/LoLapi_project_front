import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import axios from 'axios'
import { Input, Button, Div, Header, Body, Container, SearchBar } from './style'
import { api_key } from '../../Keys'
import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
    const router = useRouter()
    const [status, setStatus] = useState('')
    const [nickname, setNickname] = useState('')

    useEffect(() => {
        async function serverCheck() {
            const link =
                'https://kr.api.riotgames.com/lol/status/v3/shard-data?api_key=' +
                api_key
            const res = await axios.get(link)
            setStatus(res.data.services[0].status)
        }
        serverCheck()
    }, [])
    console.log('status>> ', status)

    return (
        <>
            <Container>
                <img src='/logo.png' />
                <div>
                    <Input
                        name='nickname'
                        placeholder='닉네임'
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    <Link href={`/test?nickname=${nickname}`}>
                        <Button>확인</Button>
                    </Link>
                </div>
            </Container>
        </>
    )
}
export default Main
