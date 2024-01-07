import { TimestampString } from "zapatos/db";

export interface IMonstre {
    id: number;
    dex_ref: number;
    name: string;
    description: string;
    power: number;
    total_matches: number;
    won_matches: number;
    master_id: number;
    team_id: number;
}