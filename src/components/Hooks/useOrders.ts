// useOrders.js
import { useQuery, useQueryClient } from 'react-query';

const baseUrl = import.meta.env.VITE_BASE_URL;

const useOrders = () => {
  const token = localStorage.getItem('accessToken');
  const queryClient = useQueryClient();
  const endpoint = `${baseUrl}/order/`;

  const query = useQuery('orders', async () => {
    // Check for the presence of the token
    if (!token) {
      // Handle token absence, e.g., redirect to login
      throw new Error('No access token found');
    }

    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch orders');
    }

    return response.json();
  }, {
    onSuccess: () => {
      // Invalidate relevant queries on success if needed
      // queryClient.invalidateQueries('someOtherQueryKey');
    },
  });

  return {
    orders: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};

export default useOrders;
