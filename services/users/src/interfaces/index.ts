export interface IUser {
    id: number
    username: string
    role: string 
    password: string 
    created_at: Date
    total_matches: number
    won_matches: number
    credits: number
}