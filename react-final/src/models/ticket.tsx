export interface Ticket {
    id: number;
    title: string;
    description: string;
    requestedDate: number;
    latestUpdate: number;
    status: string;
}