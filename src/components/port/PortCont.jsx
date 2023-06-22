import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const portTitle = {
    title: '농구 유명인',
    desc: '각 리그 별 농구 유명인입니다.'
}

const portMenu = {
    menu1: 'NBA',
    menu2: 'WNBA',
    menu3: 'KBL',
    menu4: 'WKBL'
}

const portText = [
    {
        portImg: './assets/images/port/port01.png',
        iconImg: './assets/images/port/portMember01.svg',
        title: '마이클 조던',
        desc: 'Michael Jordan',
        link: "https://namu.wiki/w/%EB%A7%88%EC%9D%B4%ED%81%B4%20%EC%A1%B0%EB%8D%98"
    },
    {
        portImg: './assets/images/port/port02.png',
        iconImg: './assets/images/port/portMember02.svg',
        title: '르브론 제임스',
        desc: 'Lebron James',
        link: "https://namu.wiki/w/%EB%A5%B4%EB%B8%8C%EB%A1%A0%20%EC%A0%9C%EC%9E%84%EC%8A%A4"
    },
    {
        portImg: './assets/images/port/port03.png',
        iconImg: './assets/images/port/portMember03.svg',
        title: '코비 브라이언트',
        desc: 'Kobe Bryant',
        link: "https://namu.wiki/w/%EC%BD%94%EB%B9%84%20%EB%B8%8C%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8"
    },
    {
        portImg: './assets/images/port/port04.png',
        iconImg: './assets/images/port/portMember04.svg',
        title: '케빈 듀란트',
        desc: 'Kevin Durant',
        link: "https://namu.wiki/w/%EC%BC%80%EB%B9%88%20%EB%93%80%EB%9E%80%ED%8A%B8"
    },
    {
        portImg: './assets/images/port/port05.png',
        iconImg: './assets/images/port/portMember05.svg',
        title: '스테판 커리',
        desc: 'Stephen Curry',
        link: "https://namu.wiki/w/%EC%8A%A4%ED%85%8C%ED%8C%90%20%EC%BB%A4%EB%A6%AC"
    },
    {
        portImg: './assets/images/port/port06.png',
        iconImg: './assets/images/port/portMember06.svg',
        title: '크리스 폴',
        desc: 'Chris Paul',
        link: "https://namu.wiki/w/%ED%81%AC%EB%A6%AC%EC%8A%A4%20%ED%8F%B4"
    },
    {
        portImg: './assets/images/port/port07.png',
        iconImg: './assets/images/port/portMember07.svg',
        title: '샤킬 오닐',
        desc: "Shaquille Rashaun O'Neal",
        link: "https://namu.wiki/w/%EC%83%A4%ED%82%AC%20%EC%98%A4%EB%8B%90"
    },
    {
        portImg: './assets/images/port/port08.png',
        iconImg: './assets/images/port/portMember08.svg',
        title: '니콜라 요키치',
        desc: 'Nikola Jokić',
        link: "https://namu.wiki/w/%EB%8B%88%EC%BD%9C%EB%9D%BC%20%EC%9A%94%ED%82%A4%EC%B9%98"
    }
]

const portText2 = [
    {
        portImg: './assets/images/port/port2_01.png',
        iconImg: './assets/images/port/portMember2_01.svg',
        title: '로렌 잭슨',
        desc: 'Lauren Jackson',
        link: "https://namu.wiki/w/%EB%A1%9C%EB%A0%8C%20%EC%9E%AD%EC%8A%A8"
    },
    {
        portImg: './assets/images/port/port2_02.png',
        iconImg: './assets/images/port/portMember2_02.svg',
        title: '다이애나 터라시',
        desc: 'Diana Taurasi',
        link: "https://en.wikipedia.org/wiki/Diana_Taurasi"
    },
    {
        portImg: './assets/images/port/port2_03.png',
        iconImg: './assets/images/port/portMember2_03.svg',
        title: '타미카 캐칭스',
        desc: 'Tamika Catchings',
        link: "https://namu.wiki/w/%ED%83%80%EB%AF%B8%EC%B9%B4%20%EC%BA%90%EC%B9%AD"
    },
    {
        portImg: './assets/images/port/port2_04.png',
        iconImg: './assets/images/port/portMember2_04.svg',
        title: '마야 무어',
        desc: 'Maya Moore',
        link: "https://en.wikipedia.org/wiki/Maya_Moore"
    },
    {
        portImg: './assets/images/port/port2_05.png',
        iconImg: './assets/images/port/portMember2_05.svg',
        title: '켄디스 파커',
        desc: 'Candace Parker',
        link: "https://en.wikipedia.org/wiki/Candace_Parker"
    },
    {
        portImg: './assets/images/port/port2_06.png',
        iconImg: './assets/images/port/portMember2_06.svg',
        title: '리사 디숀 레슬리',
        desc: 'Lisa Deshaun Leslie',
        link: "https://en.wikipedia.org/wiki/Lisa_Leslie"
    },
    {
        portImg: './assets/images/port/port2_07.png',
        iconImg: './assets/images/port/portMember2_07.svg',
        title: '레베카 함몬',
        desc: 'Rebecca Hammon',
        link: "https://ko.wikipedia.org/wiki/%EB%B2%A0%ED%82%A4_%ED%95%B4%EB%A8%BC"
    },
    {
        portImg: './assets/images/port/port2_08.png',
        iconImg: './assets/images/port/portMember2_08.svg',
        title: '수 버드',
        desc: "Sue Bird",
        link: "https://en.wikipedia.org/wiki/Sue_Bird"
    },
]

const portText3 = [
    {
        portImg: './assets/images/port/port3_01.png',
        iconImg: './assets/images/port/portMember3_01.svg',
        title: '허재',
        desc: 'Hur Jae',
        link: "https://namu.wiki/w/%ED%97%88%EC%9E%AC"
    },
    {
        portImg: './assets/images/port/port3_02.png',
        iconImg: './assets/images/port/portMember3_02.svg',
        title: '서장훈',
        desc: 'Seo Jang-hoon',
        link: "https://namu.wiki/w/%EC%84%9C%EC%9E%A5%ED%9B%88"
    },
    {
        portImg: './assets/images/port/port3_03.png',
        iconImg: './assets/images/port/portMember3_03.svg',
        title: '우지원',
        desc: 'Woo Ji-won',
        link: "https://namu.wiki/w/%EC%9A%B0%EC%A7%80%EC%9B%90"
    },
    {
        portImg: './assets/images/port/port3_04.png',
        iconImg: './assets/images/port/portMember3_04.svg',
        title: '현주엽',
        desc: 'Hyun Ju-yeop',
        link: "https://namu.wiki/w/%ED%98%84%EC%A3%BC%EC%97%BD"
    },
    {
        portImg: './assets/images/port/port3_05.png',
        iconImg: './assets/images/port/portMember3_05.svg',
        title: '하승진',
        desc: 'Ha Seung-jin',
        link: "https://namu.wiki/w/%ED%95%98%EC%8A%B9%EC%A7%84"
    },
    {
        portImg: './assets/images/port/port3_06.png',
        iconImg: './assets/images/port/portMember3_06.svg',
        title: '허웅',
        desc: 'Heo Ung',
        link: "https://namu.wiki/w/%ED%97%88%EC%9B%85"
    },
    {
        portImg: './assets/images/port/port3_07.png',
        iconImg: './assets/images/port/portMember3_07.svg',
        title: '허훈',
        desc: 'Heo Hoon',
        link: "https://namu.wiki/w/%ED%97%88%ED%9B%88"
    },
    {
        portImg: './assets/images/port/port3_08.png',
        iconImg: './assets/images/port/portMember3_08.svg',
        title: '김선형',
        desc: "Kim Sun-hyung",
        link: "https://namu.wiki/w/%EA%B9%80%EC%84%A0%ED%98%95"
    },
]

const portText4 = [
    {
        portImg: './assets/images/port/port4_01.png',
        iconImg: './assets/images/port/portMember4_01.svg',
        title: '김단비',
        desc: 'Kim Dan-bi',
        link: "https://namu.wiki/w/%EA%B9%80%EB%8B%A8%EB%B9%84(1990)"
    },
    {
        portImg: './assets/images/port/port4_02.png',
        iconImg: './assets/images/port/portMember4_02.svg',
        title: '김소니아',
        desc: 'Sonia Ursu-Kim',
        link: "https://namu.wiki/w/%EA%B9%80%EC%86%8C%EB%8B%88%EC%95%84"
    },
    {
        portImg: './assets/images/port/port4_03.png',
        iconImg: './assets/images/port/portMember4_03.svg',
        title: '강이슬',
        desc: 'Kang Lee-seul',
        link: "https://namu.wiki/w/%EA%B0%95%EC%9D%B4%EC%8A%AC"
    },
    {
        portImg: './assets/images/port/port4_04.png',
        iconImg: './assets/images/port/portMember4_04.svg',
        title: '박지수',
        desc: 'Park Ji-Su',
        link: "https://namu.wiki/w/%EB%B0%95%EC%A7%80%EC%88%98(%EB%86%8D%EA%B5%AC%EC%84%A0%EC%88%98)"
    },
    {
        portImg: './assets/images/port/port4_05.png',
        iconImg: './assets/images/port/portMember4_05.svg',
        title: '박지현',
        desc: 'Park Ji-hyun',
        link: "https://namu.wiki/w/%EB%B0%95%EC%A7%80%ED%98%84(%EC%97%AC%EC%9E%90%EB%86%8D%EA%B5%AC)?rev=206"
    },
    {
        portImg: './assets/images/port/port4_06.png',
        iconImg: './assets/images/port/portMember4_06.svg',
        title: '전주원',
        desc: 'Chun Joo-weon',
        link: "https://namu.wiki/w/%EC%A0%84%EC%A3%BC%EC%9B%90"
    },
    {
        portImg: './assets/images/port/port4_07.png',
        iconImg: './assets/images/port/portMember4_07.svg',
        title: '김정은',
        desc: 'Kim Jung-eun',
        link: "https://namu.wiki/w/%EA%B9%80%EC%A0%95%EC%9D%80(%EB%86%8D%EA%B5%AC%EC%84%A0%EC%88%98)"
    },
    {
        portImg: './assets/images/port/port4_08.png',
        iconImg: './assets/images/port/portMember4_08.svg',
        title: '정선민',
        desc: "Jung Sun-min",
        link: "https://namu.wiki/w/%EC%A0%95%EC%84%A0%EB%AF%BC"
    },
]

function PortDesc({portImg, iconImg, title, desc, link}){
    return (
        <div className="port">
            <Link to={link} target='_blank'>
                <figure className="port__header">
                    <img src={portImg} alt={title} />
                </figure>   
                <div className="port__body">
                    <span>
                        <img src={iconImg} alt={title} />
                    </span>
                    <div>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

function PortSection(){
    const [activeButton, setActiveButton] = useState(portMenu.menu1);
    const [portData, setPortData] = useState(portText);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);

        if (buttonName === portMenu.menu2) {
            setPortData(portText2);
        } else if (buttonName === portMenu.menu3){
            setPortData(portText3);
        } else if (buttonName === portMenu.menu4){
            setPortData(portText4);
        } else {
            setPortData(portText);
        }
    };

    return (
        <section id="portSection" className="port__wrap gmarket5 section center">
            <h3>{portTitle.title}</h3>
            <p>{portTitle.desc}</p>
            <div className="port__inner container">
                <div className="port__btn">
                    <button
                        className={activeButton === portMenu.menu1 ? 'active' : ''}
                        onClick={() => handleButtonClick(portMenu.menu1)}
                    >
                        {portMenu.menu1}
                    </button>
                    <button
                        className={activeButton === portMenu.menu2 ? 'active' : ''}
                        onClick={() => handleButtonClick(portMenu.menu2)}
                    >
                        {portMenu.menu2}
                    </button>
                    <button
                        className={activeButton === portMenu.menu3 ? 'active' : ''}
                        onClick={() => handleButtonClick(portMenu.menu3)}
                    >
                        {portMenu.menu3}
                    </button>
                    <button
                        className={activeButton === portMenu.menu4 ? 'active' : ''}
                        onClick={() => handleButtonClick(portMenu.menu4)}
                    >
                        {portMenu.menu4}
                    </button>
                </div>
                <div className="port__cont2">
                    {portData.map((text, index) => (
                        <PortDesc
                            key={index}
                            portImg={text.portImg}
                            iconImg={text.iconImg}
                            title={text.title}
                            desc={text.desc}
                            link={text.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PortSection;