import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgb(234, 234, 234);

    > div {
        display: flex;
        max-width: 960px;
        width: 100%;
        /* background-color: white; */
        margin-top: 35px;
        flex-direction: column;
        /* border: 2px solid black; */
    }
`

export const Header = styled.div`
    width: 100%;
    height: 40px;
    background-color: green;
`
