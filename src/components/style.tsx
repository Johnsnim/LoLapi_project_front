import styled from 'styled-components'
import Image from 'next/image'

export const Header = styled.header`
    width: 100%;
    height: 40px;
    background-color: rgb(83, 131, 232);
    color: white;
    padding: 0px 0px 0px 20px;
    > img {
        height: 40px;
        width: 40px;
    }
`
export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #5c645d;
    > div {
        display: flex;
        max-width: 960px;
        /* background-color: rgb(234, 234, 234); */
        margin-top: 35px;
        flex-direction: row;
        align-items: center;
    }
    > img {
        margin-top: 100px;
        margin-bottom: -50px;
    }
`

export const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    background-color: green;
`

export const Body = styled.body`
    width: 80%;
    height: 100vh;
    background-color: grey(83, 131, 232);
    padding: 30px 10px 10px 30px;
`

export const Input = styled.input`
    display: flex;
    margin-top: 10px;
    background: white;
    border: none;
    border-bottom: solid 1px #ccc;
    padding: 20px 0px 5px 0px;
    font-size: 14pt;
    width: 80%;
    background-color: white;
    margin-top: 35px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px 0px 0px 5px;
`

export const Button = styled.button`
    width: 20%;
    height: 49px;
    font-size: 14px;
    background-color: grey;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 0px 5px 5px 0px;
    align-items: center;
    text-align: center;
    position: relative;
    bottom: -17px;
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
