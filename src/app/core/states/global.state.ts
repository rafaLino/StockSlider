export interface GlobalState {
    success: boolean,
    loading: boolean,
    error: boolean,
    errors?: Array<string> | any | null
}