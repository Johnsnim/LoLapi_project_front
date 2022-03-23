import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Spells from '../../../assets/spells'
import Lanes from '../../../assets/lanes'
import Matches from '../../../assets/matches'

import axios from 'axios'
import {
    RenderDiv,
    ItemDiv,
    InfoDiv,
    SpellDiv,
    RuneDiv,
    ModsAndLaneDiv,
    KDAInfoDiv,
    WardsDiv,
    PlayersDiv,
    TeamDiv,
    ItemLineDiv,
    TimeDiv,
    LvDiv,
    PlayTimeDiv,
    ButtonDiv,
} from './style'
import { api_key } from './../../../../Keys'
import timeForToday from './time'

const Match = (props) => {
    const [matchInfo, setMatchInfo] = useState(null)

    useEffect(() => {
        async function FindMatchInfo() {
            const link =
                'https://asia.api.riotgames.com/lol/match/v5/matches/' +
                props.data +
                '?api_key=' +
                api_key
            const res = await axios.get(link)
            setMatchInfo(res.data)
        }
        FindMatchInfo()
    }, [])

    if (matchInfo === null) {
        return <p> 로딩중입니다. </p>
    }
    const participantsIndex = matchInfo.metadata.participants.indexOf(
        props.userData.puuid
    )
    const data = matchInfo.info.participants[participantsIndex]
    const participants = matchInfo.info.participants.map(
        (el) => el.championName
    )

    const onErrorImg = (e) => {
        e.target.src = './emptySlot.png'
    }

    const renderImage = (data, line) => {
        const images = []
        let t = 0
        line ? (t = 0) : (t = 3)
        for (let i = 0; i <= 2; i++) {
            let index = i + t
            const image = (
                <img
                    width='25px'
                    height='25px'
                    src={
                        'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/item/' +
                        data['item' + index] +
                        '.png'
                    }
                    onError={onErrorImg}
                />
            )
            images.push(image)
        }
        return images
    }
    const renderTeamIcons = (participants, team) => {
        const icons = []
        let t = 0
        team ? (t = 0) : (t = 5)
        for (let i = 0; i <= 4; i++) {
            const image = (
                <img
                    width='25px'
                    height='25px'
                    src={
                        'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/' +
                        participants[i + t] +
                        '.png'
                    }
                    onError={onErrorImg}
                />
            )
            icons.push(image)
        }
        return icons
    }

    return (
        <>
            {!data ? (
                <p>데이터 불러오는 중...</p>
            ) : (
                <RenderDiv
                    style={{
                        backgroundColor: data.win
                            ? 'rgb(163,207,236)'
                            : 'rgb(226, 182, 179)',
                    }}
                    className='match'
                >
                    <InfoDiv>
                        <img
                            margin-left='10'
                            width='70px'
                            height='100%'
                            src={
                                'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/' +
                                data.championName +
                                '.png'
                            }
                        />
                        <SpellDiv>
                            <div>
                                <img
                                    width='25px'
                                    height='25px'
                                    src={
                                        '  http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/Summoner' +
                                        Spells.find(
                                            (el) => el.id === data.summoner1Id
                                        ).name +
                                        '.png'
                                    }
                                />
                            </div>
                            <div>
                                <img
                                    width='25px'
                                    height='25px'
                                    src={
                                        '  http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/Summoner' +
                                        Spells.find(
                                            (el) => el.id === data.summoner2Id
                                        ).name +
                                        '.png'
                                    }
                                />
                            </div>
                        </SpellDiv>

                        <ModsAndLaneDiv>
                            {Lanes[data.teamPosition]}
                            <br /> {Matches[matchInfo.info.queueId]}
                        </ModsAndLaneDiv>
                        <TimeDiv>
                            {Math.floor(matchInfo.info.gameDuration / 60)}분{' '}
                            {matchInfo.info.gameDuration % 60}초<br />
                            {timeForToday(matchInfo.info.gameCreation)}
                        </TimeDiv>
                        <KDAInfoDiv>
                            <p>
                                <p
                                    style={{
                                        color:
                                            +(
                                                (data.kills + data.assists) /
                                                data.deaths
                                            ).toFixed(1) > 3
                                                ? 'blue'
                                                : 'black',
                                    }}
                                >
                                    평점{' '}
                                    {(
                                        (data.kills + data.assists) /
                                        data.deaths
                                    ).toFixed(1)}
                                </p>
                                {data.kills} / {data.deaths} / {data.assists}
                                <br />
                            </p>
                        </KDAInfoDiv>
                        <WardsDiv>
                            <span>{data.visionScore}</span>
                            <p className='arrow_box'>
                                설치한 와드 : {data.wardsPlaced} <br />
                                설치한 제어와드 : {data.visionWardsBoughtInGame}
                                <br />
                                파괴한 와드 : {data.wardsKilled}
                            </p>
                        </WardsDiv>
                        <PlayersDiv>
                            <TeamDiv>
                                {renderTeamIcons(participants, true)}
                            </TeamDiv>
                            <TeamDiv>
                                {renderTeamIcons(participants, false)}
                            </TeamDiv>
                        </PlayersDiv>
                        <ItemDiv>
                            <ItemLineDiv>{renderImage(data, true)}</ItemLineDiv>
                            <ItemLineDiv>
                                {renderImage(data, false)}
                                <img
                                    width='25px'
                                    height='25px'
                                    src={
                                        'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/item/' +
                                        data['item' + 6] +
                                        '.png'
                                    }
                                />
                            </ItemLineDiv>
                        </ItemDiv>
                        <LvDiv>
                            Lv {data.champLevel} <br />
                            CS{' '}
                            {data.totalMinionsKilled +
                                data.neutralMinionsKilled}{' '}
                            <br />
                            {data.goldEarned} G
                        </LvDiv>
                        <ButtonDiv>
                            <span>▶</span>
                        </ButtonDiv>
                    </InfoDiv>
                </RenderDiv>
            )}
        </>
    )

    // return matchData !== null && <div className='match'>{`match${data}`}</div>
}

export default Match
