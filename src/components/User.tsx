//꼭 해야 할 일
//추가적 모듈화
//api 받아오는 것을 백엔드로 제대로 설계
//받아오는 변수에 type 지정
import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import axios from 'axios'
import {
    Input,
    Button,
    Div,
    Header,
    Body,
    Nickname,
    UserInfoDiv,
    LevelWithTier,
    PlayerIcon,
    PlayerInfo,
    RenderDiv,
    ItemDiv,
    DigitizableDiv,
} from './style'
import Image from 'next/image'
import Link from 'next/link'
const apiKey = 'RGAPI-75bee125-feb2-4406-8eab-4271c8f1a337' //api키에 유효기간이 생각보다 짧으니 오류나지 않도록 주기적으로 변경할 것

const gameModes = {
    SOLO: '솔로',
    DUO: '듀오',
}

const lanes = {
    TOP: '탑',
    MIDDLE: '미드',
    BOTTOMS: '바텀',
    JUNGLE: '정글',
}

const User = () => {
    const router = useRouter()
    const nickname = router.query.value //메인페이지에서 불러온 유저 닉네임

    const [userData, setUserData] = useState({}) //닉네임으로 불러온 유저정보
    const [leagueData, setLeagueData] = useState({}) //유저정보의 encrpytedId로 불러온 리그정보
    const [matchData, setMatchData] = useState([]) //puuid로 불러온 매치번호
    const [matchInfoData, setMatchInfoData] = useState([]) //매치번호로 불러온 매치정보

    useEffect(() => {
        async function findUser() {
            //추후 arrow fucntion으로 바꿀 것
            //닉네임으로 유저 정보 불러오는 api 주소
            const link =
                'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/' +
                nickname +
                '?api_key=' +
                apiKey

            const res = await axios.get(link)
            setUserData(res.data)
        }
        findUser()
    }, [])

    useEffect(() => {
        async function findLeague() {
            //암호화유저id로 리그정보 불러오는 api 주소
            const link =
                'https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/' +
                userData.id +
                '?api_key=' +
                apiKey
            const res = await axios.get(link)
            setLeagueData(res.data[0])
        }
        if (userData?.id !== undefined) findLeague()
    }, [userData])

    useEffect(() => {
        async function findMatch() {
            //findUser를 통해 불러온 데이터 속 puuid로 매치번호를 조회
            const link =
                'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/' +
                userData.puuid +
                '/ids?start=0&count=10' +
                '&api_key=' +
                apiKey
            const res = await axios.get(link)
            setMatchData(res.data)
        }
        if (userData?.puuid !== undefined) findMatch()
    }, [leagueData])

    useEffect(() => {
        // async function findMatchInfo() {
        //     //findMatch를 통해 불러온 매치번호로 매치 정보를 조회
        //     const link =
        //         'https://asia.api.riotgames.com/lol/match/v5/matches/' +
        //         matchData +
        //         '?api_key=' +
        //         apiKey
        //     const res = await axios.get(link)
        //     console.log('링크 >>>,', link)
        //     setMatchInfoData(res.data)
        //     console.log('res.data>>>>', res.data.info.gameDuration)
        // }
        // if (matchData !== undefined) findMatchInfo()
    }, [matchData])

    // useEffect(() => {}, [matchInfoData])

    const renderMatch = () => {
        // map은 배열의 새로운 배열을 만든다
        if (matchData !== undefined)
            return matchData.map((el) => (
                <Match key={el} data={el} userData={userData} />
            )) // [Match, Match,]
    }

    return (
        <>
            {/* <p>{userData !== null ? userData.name : null}</p> */}
            <UserInfoDiv>
                <PlayerIcon>
                    <img
                        width='100'
                        height='100'
                        src={
                            'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/' +
                            userData.profileIconId +
                            '.png'
                        }
                    ></img>
                </PlayerIcon>

                <PlayerInfo>
                    <Nickname>{userData.name}</Nickname>
                    <br></br>
                    <LevelWithTier>
                        Level : {userData.summonerLevel} {leagueData.tier}{' '}
                        {leagueData.rank}
                    </LevelWithTier>
                    <p>{leagueData.queueType}</p>
                    <p>
                        {leagueData.wins}승 {leagueData.losses}패
                    </p>
                </PlayerInfo>
            </UserInfoDiv>
            {renderMatch()}
        </>
    )
}

const Match = (props) => {
    const [matchInfo, setMatchInfo] = useState(null)
    useEffect(() => {
        async function FindMatchInfo() {
            const link =
                'https://asia.api.riotgames.com/lol/match/v5/matches/' +
                props.data +
                '?api_key=' +
                apiKey
            const res = await axios.get(link)
            setMatchInfo(res.data)
        }
        FindMatchInfo()
    }, [])
    console.log('puuid >> ', props.userData.puuid)
    if (matchInfo !== null) {
        const participantsIndex = matchInfo.metadata.participants.indexOf(
            props.userData.puuid
        )
        const data = matchInfo.info.participants[participantsIndex]
        console.log('승?>>', data)

        return (
            <RenderDiv
                style={{
                    backgroundColor: data.win
                        ? 'rgb(163,207,236)'
                        : 'rgb(226, 182, 179)',
                }}
                className='match'
            >
                <img
                    width='50'
                    height='50'
                    src={
                        'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/' +
                        data.championName +
                        '.png'
                    }
                ></img>
                <div>
                    {data.role}
                    <br /> {lanes[data.teamPosition]}
                </div>
                {/* <DigitizableDiv> */}
                <div>
                    KDA {((data.kills + data.assists) / data.deaths).toFixed(1)}
                    <br />
                    {data.kills}/{data.deaths}/{data.assists}
                    <br />
                    CS {data.neutralMinionsKilled} / GOLD {data.goldEarned}
                    {/* </DigitizableDiv> */}
                </div>

                <ItemDiv>
                    <img
                        width='40'
                        height='40'
                        src={
                            'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/item/' +
                            data.item0 +
                            '.png'
                        }
                    />
                    <img
                        width='40'
                        height='40'
                        src={
                            'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/item/' +
                            data.item1 +
                            '.png'
                        }
                    />
                    <img
                        width='40'
                        height='40'
                        src={
                            'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/item/' +
                            data.item2 +
                            '.png'
                        }
                    />
                    <img
                        width='40'
                        height='40'
                        src={
                            'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/item/' +
                            data.item3 +
                            '.png'
                        }
                    />
                    <img
                        width='40'
                        height='40'
                        src={
                            'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/item/' +
                            data.item4 +
                            '.png'
                        }
                    />
                    <img
                        width='40'
                        height='40'
                        src={
                            'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/item/' +
                            data.item5 +
                            '.png'
                        }
                    />
                </ItemDiv>
            </RenderDiv>
        )
    }
    return <p> 로딩 중 입니다.. </p>
    // return matchData !== null && <div className='match'>{`match${data}`}</div>
}

export default User
