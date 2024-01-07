import { TimestampString } from "zapatos/db";

export interface IMatch {
    id: number;
    status:  'in progress' | 'finished' | 'cancelled';
    p1: number;
    p2: number;
    current_round: number;
    winner: number;
    created_at: TimestampString;
    ended_at: TimestampString;
}