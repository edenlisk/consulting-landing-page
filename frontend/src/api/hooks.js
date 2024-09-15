import {useQuery} from "@apollo/client";
import {GET_COMPANY_INFO, getCompanyHistory, getCompanyInfoQuery} from "./graphql.js";


export function useCompanyHistory() {
    const { data, error, loading } = useQuery(getCompanyHistory);
    return {
        history: data?.histories?.data ?? [],
        historyError: error,
        historyLoading: loading
    }
}

export function useCompanyInfo() {
    const { data, error, loading } = useQuery(getCompanyInfoQuery);
    return {
        rani: data?.rani?.data?.attributes ?? [],
        raniLoading: loading,
        raniError: error
    }
}