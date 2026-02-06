export const queryKeys = {
  annualReports: {
    all: ["annualReports"] as const,
    lists: () => [...queryKeys.annualReports.all, "list"] as const,
    list: (filters?: Record<string, unknown>) =>
      filters && Object.keys(filters).length > 0
        ? [...queryKeys.annualReports.lists(), filters]
        : queryKeys.annualReports.lists(),
    details: () => [...queryKeys.annualReports.all, "detail"] as const,
    detail: (id: string | number) =>
      [...queryKeys.annualReports.details(), id] as const,
  },
} as const;
