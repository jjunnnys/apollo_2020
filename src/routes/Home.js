import React from 'react';
import useSWR from 'swr';

import fetcher from '../utils/fetcher';

const GET_MOVIES = `
    query {
        movies {
            id
            medium_cover_image
        }
    }`;

const Home = () => {
    const { data, error } = useSWR(GET_MOVIES, fetcher);
    console.log(data);

    if (!data) return <div>로딩 중...</div>;
    return <div>dsads</div>;
};

export default Home;
