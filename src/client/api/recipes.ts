import axios from 'axios';
import { Recipe } from '../../server/db/schema';

const API_BASE_URL = '/api';

export async function fetchRecipe(id: number) {
  const { data } = await axios.get<Recipe>(`${API_BASE_URL}/recipes/${id}`);
  return data;
}

export async function useRecipe(id: number) {
  return useQuery({
    queryKey: ['recipe', id],
    queryFn: () => fetchRecipe(id),
  });
}