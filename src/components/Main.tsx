import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import axios from 'axios'
import { Input, Button, Header, Container } from './style'
import { api_key } from '../../Keys'
import Image from 'next/image'
import Link from 'next/link'
import Tips from '../assets/tips'

const Main = () => {
    const router = useRouter()
    const [nickname, setNickname] = useState('')
    let randToLoad = Math.floor(Math.random() * 100) % Object.keys(Tips).length

    return (
        <>
            <Container>
                <Header>
                    <img src='/smallLogo.png' />
                </Header>
                <img src='/logo.png' />
                <div>
                    <Input
                        name='nickname'
                        placeholder='닉네임'
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    <Link href={`/test?nickname=${nickname}`} replace>
                        <Button>확인</Button>
                    </Link>
                </div>
                <div>
                    <p
                        style={{
                            color: 'white',
                        }}
                    >
                        <b
                            style={{
                                color: 'rgb(197,164,92)',
                            }}
                        >
                            Tip!
                        </b>{' '}
                        {Tips[randToLoad]}
                    </p>
                </div>
            </Container>
        </>
    )
}
export default Main
