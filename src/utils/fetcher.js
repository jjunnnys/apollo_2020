import request from 'graphql-request';

const fetcher = (query) => request('https://api.graph.cool/simple/v1/movies', query);

export default fetcher;
