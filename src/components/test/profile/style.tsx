import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 90%;
    height: 150px;
    flex-direction: row;
    padding-bottom: 15px;
    /* background-color: rgb(234, 234, 234); */
`
export const ProfileIconDiv = styled.div`
    display: flex;
    width: 140px;
    height: 100%;
    background-color: #d1a758;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`
export const ProfileDescriptionDiv = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    background-color: #d3b885;
    justify-content: center;
    border: 1px solid black;
    flex-direction: column;
    padding-left: 12px;
`
export const NameParagraph = styled.p`
    font-size: 32px;
`
export const InfoParagraph = styled.p`
    font-size: 15px;
`
