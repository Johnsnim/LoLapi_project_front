import styled from 'styled-components'
import Image from 'next/image'

export const Header = styled.header`
    width: 100%;
    height: 40px;
    background-color: rgb(83, 131, 232);
    color: white;
    padding: 10px 10px 10px 30px;
`

export const Body = styled.body`
    width: 80%;
    height: 100vh;
    background-color: rgb(83, 131, 232);
    color: white;
    padding: 30px 10px 10px 30px;
`

export const Input = styled.input`
    margin-top: 10px;
    background: white;
    border: none;
    border-bottom: solid 1px #ccc;
    padding: 20px 0px 5px 0px;
    font-size: 14pt;
    width: 20%;
`

export const Button = styled.button`
    margin-top: 10px;
    width: 20%;
    height: 40px;
    font-size: 15px;
    background-color: grey;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`

export const SmallButton = styled.button`
    margin-top: 25px;
    margin-right: 10px;
    width: 130px;
    height: 40px;
    font-size: 15px;
    background-color: grey;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`
export const Div = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const RowDiv = styled.div`
    display: flex;

    flex-direction: Row;
    justify-content: center;
    align-items: center;
`

export const Checker = styled.p`
    color: red;
`
export const StyledImage = styled(Image)`
    box-shadow: 0 0 8px 8px white inset;
    width: 300px;
    height: 281px;
`
export const UserInfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    height: 100px;
    background-color: #cacaca;
    border: 1px solid black;
`
export const PlayerIcon = styled.div`
    width: 150px;
    height: 100px;
    background-color: pink;
`

export const PlayerInfo = styled.div`
    width: 1000px;
    height: 100px;
    background-color: lightblue;
`

export const Nickname = styled.span`
    font-size: 25px;
    font-width: bold;
    color: black;
`
export const LevelWithTier = styled.span`
    font-size: 15px;
    color: black;
`
export const MatchInfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    height: 80px;
    background-color: #cacaca;
    border: 1px solid black;
`
export const RenderDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    height: 70px;
    border: 1px solid black;
`
export const ItemDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 250px;
    height: 100%;
    background-color: blue;
    border: 1px solid black;
    justify-content: flex-end;
`
export const DigitizableDiv = styled.div`
    text-align: center;
    line-height: 80%;
    font-size: 12px;
`
