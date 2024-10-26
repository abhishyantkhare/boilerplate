import { authenticatedFetch } from '@/utils/api';

export const getAgents = async (): Promise<Agent[]> => {
  const response = await authenticatedFetch('/agents');
  if (!response.ok) {
    throw new Error('Failed to fetch agents');
  }
  const data = await response.json();
  return data.agents;
};


// export const useGetAgents = () => {
//   return useQuery({
//     queryKey: ["agents"],
//     queryFn: () => getAgents(),
//   });
// };
