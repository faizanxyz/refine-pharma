// useAuth.js
import { useMutation, useQueryClient } from 'react-query';

interface AuthData {
  username: string;
  password: string;
}

export interface AuthResponse {
  access: string;
  refresh: string;
  // ... other properties if present in the actual response
}

const baseUrl = import.meta.env.VITE_BASE_URL;
const useAuth = () => {
  const queryClient = useQueryClient();
  const endpoint = `${baseUrl}/token/`;

  const createPost = async (postData: AuthData): Promise<AuthResponse> => {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return response.json();
  };

  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });

  const postData = async (data: AuthData): Promise<AuthResponse> => {
    try {
      const response = await mutation.mutateAsync(data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    postData,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useAuth;
