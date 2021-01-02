import request from 'graphql-request';

const fetcher = (query) => request('http://localhost:4000', query);

export default fetcher;
