import React from 'react';
import useSWR from 'swr';
import styled from 'styled-components';

import Movie from '../components/Movie';
import fetcher from '../utils/fetcher';

const GET_MOVIES = /* GraphQL */ `
    query {
        movies {
            id
            medium_cover_image
        }
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`;
const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 45vh;
    color: white;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    margin-bottom: 20px;
`;
const Title = styled.h1`
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 20px;
`;
const Subtitle = styled.h3`
    font-size: 35px;
`;
const Loading = styled.div`
    font-size: 18px;
    opacity: 0.5;
    font-weight: 500;
    margin-top: 10px;
`;

const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    width: 60%;
    position: relative;
    top: -50px;
`;

const Home = () => {
    const { data, error } = useSWR(GET_MOVIES, fetcher);

    return (
        <Container>
            <Header>
                <Title>SWR 2020</Title>
                <Subtitle>I love GraphQL</Subtitle>
            </Header>
            {!data && <Loading>Loading...</Loading>}
            {data && data.movies && (
                <Movies>
                    {data.movies.map((m) => (
                        <Movie key={m.id} id={m.id} bg={m.medium_cover_image} />
                    ))}
                </Movies>
            )}
        </Container>
    );
};

export default Home;
