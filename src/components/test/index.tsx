import { Container } from './style'
import Profile from './profile'
import Matches from './matches'
// import Header from '../header'

import { api_key } from '../../../Keys'
import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import axios from 'axios'

const Test = () => {
    const router = useRouter()
    const nickname = router.query.nickname //메인페이지에서 불러온 유저 닉네임
    // const [nickname, setNickname] = useState<String>(null)
    // const url = new URL(window.location.href)
    // const urlParams = url.searchParams

    // const nickname = urlParams.get('nickname')

    const [isLoading, setIsLoading] = useState<boolean>(false)
    interface IUser {
        id: String
        name: String
        profileIconId: Number
        summonerLevel: Number
        puuid: String
    }
    const [userData, setUserData] = useState<IUser>(null as IUser) //닉네임으로 불러온 유저정보
    // const [userData, setUserData] = useState({}) //닉네임으로 불러온 유저정보
    interface ILeague {
        tier: String
        rank: String
        wins: Number
        losses: Number
    }
    const [leagueData, setLeagueData] = useState<ILeague>(null as ILeague) //유저정보의 encrpytedId로 불러온 리그정보

    const [matchData, setMatchData] = useState<Object>(null) //puuid로 불러온 매치번호

    const HeaderWithNoSSR = dynamic(
        () => import('../header'),
        { ssr: false } // ssr옵션을 false로. SSR이 적용되지 않는 기능을 사용하는 컴포넌트의 경우 이것처럼 에시처리 필수, 안하면 window error
    )

    useEffect(() => {
        async function findUser() {
            const link =
                'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/' +
                nickname +
                '?api_key=' +
                api_key

            const res = await axios.get(link) // 응답이 안옴
            setUserData(res.data)
            console.log('닉네임2', nickname)
        }
        findUser()
    }, [nickname])

    useEffect(() => {
        async function findLeague() {
            const link =
                'https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/' +
                userData.id +
                '?api_key=' +
                api_key
            const res = await axios.get(link)
            setLeagueData(res.data[0])
            console.log('66')
        }

        if (userData?.id !== undefined) findLeague()
    }, [userData])

    useEffect(() => {
        async function findMatch() {
            const link =
                'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/' +
                userData.puuid +
                '/ids?start=0&count=10' +
                '&api_key=' +
                api_key
            const res = await axios.get(link)
            setMatchData(res.data)
        }
        if (userData?.puuid !== undefined) findMatch()
    }, [leagueData])

    useEffect(() => {
        if (userData !== null && leagueData !== null) setIsLoading(true)
    }, [userData, leagueData])

    return (
        <>
            <HeaderWithNoSSR />
            <Container>
                <div>
                    <Profile userData={userData} leagueData={leagueData} />
                    {matchData && userData && (
                        <Matches matchData={matchData} userData={userData} />
                    )}
                </div>
            </Container>
        </>
    )
}

export default Test
