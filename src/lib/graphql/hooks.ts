import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";
import { graphqlRequest } from "./client";

/**
 * Generic hook for GraphQL queries with TanStack Query (WITH auth)
 * @param queryKey - Unique key for the query (use queryKeys from queryKeys.ts)
 * @param query - GraphQL query string
 * @param variables - Optional variables for the query
 * @param options - Additional TanStack Query options
 */
export function useGraphQLQuery<
  TData,
  TVariables extends Record<string, unknown> = Record<string, unknown>
>(
  queryKey: QueryKey,
  query: string,
  variables?: TVariables,
  options?: Omit<UseQueryOptions<TData, Error>, "queryKey" | "queryFn">
) {
  return useQuery<TData, Error>({
    queryKey,
    queryFn: () => graphqlRequest<TData>({ query, variables }),
    ...options,
  });
}
