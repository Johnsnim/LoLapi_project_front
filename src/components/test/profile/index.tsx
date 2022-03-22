import {
    Container,
    ProfileIconDiv,
    ProfileDescriptionDiv,
    NameParagraph,
    InfoParagraph,
} from './style'
import { api_key } from '../../../../Keys'
import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import axios from 'axios'

const Profile = (props) => {
    const userData = props.userData
    const leagueData = props.leagueData

    return (
        <Container>
            <ProfileIconDiv>
                <img
                    width='100'
                    height='100'
                    src={
                        userData
                            ? 'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/' +
                              userData.profileIconId +
                              '.png'
                            : 'deafult.png'
                    }
                />
            </ProfileIconDiv>

            <ProfileDescriptionDiv>
                <NameParagraph>
                    {userData ? userData.name : '사람 이름'}
                </NameParagraph>
                <InfoParagraph>
                    Level : {userData ? userData.summonerLevel : 'level'}
                    <br />
                    {leagueData ? leagueData.tier : 'tier'}{' '}
                    {leagueData ? leagueData.rank : 'rank'}
                    <br />
                    {leagueData ? leagueData.wins : 0}승{' '}
                    {leagueData ? leagueData.losses : 0}패
                </InfoParagraph>
            </ProfileDescriptionDiv>
        </Container>
    )
}

export default Profile
