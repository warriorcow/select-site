import { useApi } from '~/composables/useApi';

export interface User {
  id: number;
  name: string;
  email: string;
}

export function useApiMethods() {
  const fetchUsers = () => {
    return useApi<User[]>('users');
  };

  const fetchPosts = () => {
    return useApi('posts');
  };

  return { fetchUsers, fetchPosts };
}