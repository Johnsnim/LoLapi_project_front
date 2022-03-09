import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
import axios from 'axios'
import { Input, Button, Div, Header, Body } from './style'
import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
    const router = useRouter()
    const apiKey = 'RGAPI-6ee2d433-5eb6-4b50-b12f-84f8a56fad97'
    const [nickname, setNickname] = useState('')
    const [userData, setUserData] = useState({})

    function searchUser(e) {
        const link =
            'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/' +
            nickname +
            '?api_key=' +
            apiKey

        axios
            .get(link)
            .then(function (res) {
                //성공
                setUserData(res.data)
                console.log(userData)
            })
            .catch(function (err) {
                //실패
                console.log(err)
            })
    }

    return (
        <>
            <Div>
                <Header>
                    <h1>OP.GG</h1>
                </Header>
                <Body>
                    <Image src='/MainLogo.jpg' width='331' height='200' />
                    <div>
                        <Input
                            name='nickname'
                            placeholder='닉네임'
                            onChange={(e) => setNickname(e.target.value)}
                        />
                        <Link href={`/user?value=${nickname}`}>
                            <Button onClick={(e) => searchUser(e)}>확인</Button>
                        </Link>
                    </div>
                </Body>
                {JSON.stringify(userData) != '{}' ? (
                    <></>
                ) : (
                    <>
                        <p>해당하는 유저를 찾지 못했어요...</p>
                    </>
                )}
            </Div>
        </>
    )
}
export default Main
