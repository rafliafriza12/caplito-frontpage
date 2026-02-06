import { useGraphQLQuery, queryKeys } from "@/lib/graphql";
import { GET_ANNUAL_REPORTS } from "@/lib/graphql/queries";

export interface IAnnualReport {
  id: string;
  coverImageUrl: string;
  reportName: string;
  reportDocumentUrl: string;
  updatedAt: string;
}

export interface IAnnualReportResponse {
  annualReports: IAnnualReport[];
}

export interface UserFilters {
  page?: number;
  limit?: number;
  search?: string;
  [key: string]: unknown;
}

export function useAnnualReports(filters?: UserFilters) {
  return useGraphQLQuery<IAnnualReport>(
    queryKeys.annualReports.list(filters),
    GET_ANNUAL_REPORTS,
    filters
  );
}
