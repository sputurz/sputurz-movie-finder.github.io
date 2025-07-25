import axios from 'axios';

export const BASE_URL = 'https://cinemaguide.skillbox.cc';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

interface PrismaError {
  name: string;
  clientVersion?: string;
  [key: string]: unknown; // Для других возможных полей
}

const handlePrismaError = (data: unknown): void => {
  const errorData = data as PrismaError;
  if (errorData?.name === 'PrismaClientValidationError') {
    throw new Error(`Prisma Error: ${JSON.stringify(errorData)}`);
  }
};

export const makeRequest = async <T>(url: string): Promise<T> => {
  try {
    const response = await api.get<T>(url);
    handlePrismaError(response.data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      handlePrismaError(err.response?.data);
    }
    throw new Error(err instanceof Error ? err.message : 'Unknown error');
  }
};
