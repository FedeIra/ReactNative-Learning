import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphQL/queries.js';

const useRepositories = () => {
  // const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES);

  /* useQuery as hook replacing useState and useEffect hooks */
  // const { repositories = null } = data;

  const [repositories, setRepositories] = useState(null);

  const fetchRepositories = async () => {
    try {
      const response = await globalThis.fetch(
        'http://192.168.0.15:5000/api/repositories'
      );
      const json = await response.json();
      setRepositories(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  // return { loading, repositories: repositoriesNodes, refetch };
  return { repositories: repositoriesNodes };
};

export default useRepositories;
