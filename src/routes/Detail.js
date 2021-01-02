import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const GET_MOVIE = /* GraphQL */ `
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            description_intro
        }
    }
`;

const Detail = () => {
    const { id } = useParams();
    const { data } = useSWR([GET_MOVIE, parseInt(id)], fetcher);

    if (!data) return <div>loading...</div>;

    return data && data.movie && <h1>{data.movie.title}</h1>;
};

export default Detail;
