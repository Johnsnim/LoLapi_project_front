import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 90%;
    height: 100px;
    flex-direction: row;
    padding-top: 50px;
`
export const RenderDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 70px;
    border: 1px solid black;
`
export const InfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex: 3;
`
export const SpellDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 0.7;
    > div {
        border-radius: 70%;
        overflow: hidden;
        margin-left: -10px;
        margin-bottom: 3px;
    }
`
export const RuneDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    > div {
        border-radius: 70%;
        overflow: hidden;
        margin-left: -15px;
        margin-bottom: 3px;
    }
`
export const ModsAndLaneDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    vertical-align: middle;
    text-align: center;
`
export const TimeDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    justify-content: center;
    vertical-align: middle;
    text-align: center;
`

export const KDAInfoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
    > p {
        text-align: center;
    }
`
export const WardsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    position: relative;
    .arrow_box {
        display: none;
        position: absolute;
        width: 150px;
        padding: 8px;
        transform: translate(0px, 55px);
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        background: #333;
        color: #fff;
        font-size: 14px;
        z-index: 2;
    }

    .arrow_box:after {
        position: absolute;
        bottom: 100%;
        left: 50%;
        width: 0;
        height: 0;
        margin-left: -10px;
        border: solid transparent;
        border-color: rgba(51, 51, 51, 0);
        border-bottom-color: #333;
        border-width: 10px;
        pointer-events: none;
        content: ' ';
    }

    span:hover + p.arrow_box {
        display: block;
    }
`
export const PlayersDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 3;
`
export const TeamDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 3px;
    margin-left: 1px;
    width: 90%;
    flex: 2;
    > img {
        width: '25px';
        height: '25px';
        margin-left: 2px;
    }
`
export const ItemDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    flex: 2;
    justify-content: center;
    align-items: center;
`
export const ItemLineDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 3px;
    margin-left: 1px;
    width: 90%;
    flex: 1;
    > img {
        width: '25px';
        height: '25px';
        margin-left: 2px;
    }
    /* img:before {
        content: ' ';
        display: block;
        position: absolute;
        height: 50px;
        width: 50px;
        background-image: url('./emptySlot.png');
        background-size: 25px 25px;
        background-repeat: : no-repeat;
    } */
`
export const LvDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1.5;
    text-align: center;
`
export const PlayTimeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    text-align: center;
`
export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.5;
    background-color: grey;
    text-align: center;
    margin-right: -0.5px;
`
