export const GET_ANNUAL_REPORTS = `
    query PublishedAnnualReports {
        publishedAnnualReports {
            id
            reportDocumentUrl
            coverImageUrl
            reportName
            updatedAt
        }
    }
`;
