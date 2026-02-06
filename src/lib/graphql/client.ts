import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";

// ============ CONFIGURATION ============
export const GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:4000/graphql";

const graphqlClient: AxiosInstance = axios.create({
  baseURL: GRAPHQL_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

graphqlClient.interceptors.request.use(
  (config: any): any => {
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

// ============ TYPES ============

export interface GraphQLError {
  message: string;
  locations?: Array<{ line: number; column: number }>;
  path?: string[];
  extensions?: {
    code?: string;
    statusCode?: number;
    [key: string]: unknown;
  };
}

export interface GraphQLResponse<T> {
  data: T;
  errors?: GraphQLError[];
}

// Custom error class untuk GraphQL errors
export class GraphQLRequestError extends Error {
  code?: string;
  statusCode?: number;
  isAuthError: boolean;

  constructor(message: string, code?: string, statusCode?: number) {
    super(message);
    this.name = "GraphQLRequestError";
    this.code = code;
    this.statusCode = statusCode;
    this.isAuthError = code === "UNAUTHENTICATED" || statusCode === 401;
  }
}

export interface GraphQLRequestOptions {
  query: string;
  variables?: Record<string, unknown>;
  config?: AxiosRequestConfig;
}

export async function graphqlRequest<T>({
  query,
  variables,
  config,
}: GraphQLRequestOptions): Promise<T> {
  const makeRequest = async (): Promise<T> => {
    const response = await graphqlClient.post<GraphQLResponse<T>>(
      "",
      { query, variables },
      config
    );

    if (response.data.errors && response.data.errors.length > 0) {
      // Cek apakah error karena authentication (token expired)
      const errorMessages = response.data.errors
        .map((e) => e.message)
        .join(", ");
      throw new Error(`GraphQL Error: ${errorMessages}`);
    }

    return response.data.data;
  };

  try {
    return await makeRequest();
  } catch (error) {
    throw error;
  }
}

export { graphqlClient };
