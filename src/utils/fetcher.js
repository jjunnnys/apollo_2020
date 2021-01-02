import request from 'graphql-request';

const fetcher = (query, id) => request('http://localhost:4000', query, { id });

export default fetcher;
