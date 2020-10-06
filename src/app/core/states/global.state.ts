export interface GlobalState {
    loading: boolean,
    error: boolean,
    errors?: Array<string> | any | null
}