import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// 이 경로에 적절한 이미지를 직접 배치해야 한다.
import sample from './assets/img/sample.png';

const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                {/* SEO 태그 */}
                <title>{props.title}</title>
                <meta name='description' content={props.description} />
                <meta name='keywords' content={props.keywords} />
                <meta name='author' content={props.author} />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={props.title} />
                <meta property='og:description' content={props.description} />
                <meta property='og:url' content={props.url} />
                <meta property='og:image' content={props.image} />
                <link rel='shortcut icon' href={props.image} type='image/png' />
                <link rel='icon' href={props.image} type='image/png' />

                {/* 웹폰트 적용을 위한 외부 리소스 참조 */}

                {/* Helmet 안에서 CSS 적용하기 */}
                <style type='text/css'>{`

                `}</style>
            </Helmet>
        </HelmetProvider>
    );
};

Meta.defaultProps = {
    title: 'React OpenAPI 연동',
    description: 'React.js 로 만든 Redux 활용 카카오 검색 OpenAPI 연동 예제 입니다..',
    keywords: 'React,Redux,Kakao,OpenAPI',
    author: '호쌤',
    image: sample,
    url: window.location.href
};

export default Meta;