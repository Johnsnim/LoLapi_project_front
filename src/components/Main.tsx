import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import axios from 'axios'
import { Input, Button, Header, Container } from './style'
import { api_key } from '../../Keys'
import Image from 'next/image'
import Link from 'next/link'
import RenderTips from './Tip'

const Main = () => {
    const router = useRouter()
    const [nickname, setNickname] = useState('')

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
                        onChange={(e) => {
                            e.preventDefault()
                            setNickname(e.target.value)
                        }}
                    />
                    <Link href={`/test?nickname=${nickname}`} replace>
                        <Button>확인</Button>
                    </Link>
                </div>
                <RenderTips />
            </Container>
        </>
    )
}
export default React.memo(Main)
