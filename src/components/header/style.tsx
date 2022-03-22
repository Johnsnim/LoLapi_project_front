import styled from 'styled-components'

export const Head = styled.header`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: rgb(83, 131, 232);
    color: white;
    padding: 0px 0px 0px 20px;
    flex-direction: row;
    > img {
        height: 45px;
        width: 45px;
    }
    > div {
        display: flex;
        flex-direction: row;
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
    /* margin-top: 10px; */
    background: white;
    border: none;
    border-bottom: solid 1px #ccc;
    font-size: 14px;
    height: 30px;
    width: 180px;
    background-color: white;
    margin-left: 20px;
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    border-radius: 5px 0px 0px 5px;
`

export const Button = styled.button`
    width: 30px;
    height: 31px;
    font-size: 10px;
    background-color: grey;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 0px 5px 5px 0px;
    align-items: center;
    text-align: center;
    margin-left: 0px;
    margin-top: 10px;
    /* position: relative; */
    /* bottom: -17px; */
`
