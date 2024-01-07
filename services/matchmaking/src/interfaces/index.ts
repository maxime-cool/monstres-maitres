import { TimestampString } from "zapatos/db";

export interface IMatchmaking {
    id: number;
    p1: number;
    open: boolean;
    created_at: TimestampString;
    p2: number;
    match_create: boolean
}