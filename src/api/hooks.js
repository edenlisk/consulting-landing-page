import {useQuery} from "@apollo/client";
import {
    getCompanyHistory,
    getCompanyInfoQuery, getGalleryQuery, getOneGalleryQuery, getReportsQuery,
    getServicesQuery,
    getSocialMediasQuery,
    getUsersQuery
} from "./graphql.js";


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
        rani: data?.rani?.data?.attributes ?? {},
        raniLoading: loading,
        raniError: error
    }
}

export function useServices() {
    const { data, error, loading } = useQuery(getServicesQuery);
    return {services: data?.services?.data ?? [], servicesLoading: loading, servicesError: error};
}

export function useTeamMembers() {
    const { data, loading, error } = useQuery(getUsersQuery);
    return { users: data?.staffs?.data ?? [], usersLoading: loading, usersError: error };
}

export function useSocialMedias() {
    const { data } = useQuery(getSocialMediasQuery);
    return { socialMedia: data?.socialMedias?.data ?? [] }
}

export function useGetGalleries() {
    const { data } = useQuery(getGalleryQuery);
    return { events: data?.events?.data ?? [] }
}

export function useGetOneGallery(id) {
    const { data } = useQuery(getOneGalleryQuery,
        {
            variables: { id }
        });
    return { event: data?.event?.data ?? {} }
}

export function useGetReports() {
    const { data } = useQuery(getReportsQuery);
    return { reports: data?.reports?.data ?? []}
}