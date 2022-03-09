import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: red;
    > div {
        display: flex;
        max-width: 960px;
        width: 100%;
        background-color: white;
    }
`
