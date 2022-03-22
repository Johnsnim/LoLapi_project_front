import Slider from 'react-slick'
import {} from 'slick-carousel'
import React, { useState, useEffect } from 'react'
import { Head, Button, Input } from './style'
import Link from 'next/link'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SimpleSlider() {
    let randToLoad = Math.floor(Math.random() * 100) % 13
    let randToSlide = Math.floor(Math.random() * 100) % 4

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: randToSlide,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        vertical: true,
        draggable: false,
        initialSlide: randToLoad,
    }
    return (
        <>
            <Slider {...settings}>
                <div>
                    같은 고유 지속 효과를 가진 두 아이템을 동시에 장비할 경우
                    효과가 중첩되지 않고 성능이 더 뛰어난 효과가 적용됩니다.
                </div>
                <div>
                    게임 시작 시, 마법사 미니언 셋으로 구성된 무리의 공격은
                    장비가 없는 챔피언 한 명의 단일 공격보다 총 피해량이 더
                    큽니다.
                </div>
                <div>
                    귀환 등의 주문에 정신을 집중하는 동안 와드를 배치하고 물약을
                    마실 수 있습니다.
                </div>
                <div>게임에서 처음 파괴한 포탑은 골드가 더 많이 나옵니다.</div>
                <div>
                    다른 사람의 기분은 통제할 수 없지만 스스로 냉정함은 유지할
                    수는 있습니다.
                </div>
                <div>
                    미니언은 생성 후 상단 공격로 중앙에 도착하기까지 약 30초가
                    걸립니다. 중단 공격로 중앙까지는 약 20초면 도착합니다.
                </div>
                <div>
                    미니언 웨이브를 세 번 처치하면 게임 시작 시 챔피언을 1명
                    처치한 것보다 골드를 더 많이 획득합니다. 미니언은 갈수록
                    가치가 높아집니다!
                </div>
                <div>
                    와드 토템과 시야석 와드는 제한된 시간 동안만 유지됩니다.
                    클릭해 보면 남은 지속 시간을 알 수 있습니다.
                </div>
                <div>
                    와드가 파괴되면 파편이 남습니다. 파편이 밝게 빛날수록 최근에
                    파괴된 것입니다.
                </div>
                <div>
                    챔피언이 생성한 오브젝트로 순간이동할 수 있습니다. 쓰레쉬의
                    랜턴, 자르반의 깃발은 물론이고 자크의 몸 조각도 가능합니다.
                </div>
                <div>
                    투명 상태의 챔피언은 탐지용 렌즈 및 예언자형 개조 장신구로
                    모습을 드러낼 수 있습니다.
                </div>
                <div>
                    포탑의 아이템 인벤토리를 보고 해당 포탑이 보유한 다양한 특수
                    효과를 파악할 수 있습니다.
                </div>
                <div>포탑이 피해를 받으면 미니맵 상에서 색이 어두워집니다.</div>
            </Slider>
        </>
    )
}

const Header = () => {
    const [nickname, setNickname] = useState('')
    return (
        <>
            <Head>
                <Link href={`/`}>
                    <img src='/smallLogo.png' />
                </Link>
                <div>
                    <Input
                        name='nickname'
                        placeholder='닉네임'
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    <Link href={`/test?nickname=${nickname}`}>
                        <Button>확인</Button>
                    </Link>
                </div>
            </Head>
            {SimpleSlider()}
        </>
    )
}

export default Header
