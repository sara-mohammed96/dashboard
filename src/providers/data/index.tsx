import { GraphQLClient } from "@refinedev/nestjs-query";
import { fetchWrapper } from "./fetch-wapper"
export const API_URL = 'https://api.crm.refine.dev'

export const client = new GraphQLClient(API_URL, {
fetch: (url: String, options: RequestInit) => {
    try {
        return fetchWrapper(url, options);
    } catch (error){
        return Promise.reject(error as Error);
    }
}
})