import { TimestampString } from "zapatos/db";

export interface IMessage {
    id: number;
    sent_at: TimestampString;
    from_id: number;
    to_id: number;
    content: string;
}