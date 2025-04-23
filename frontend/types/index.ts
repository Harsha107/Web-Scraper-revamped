export interface Product {
    title: string;
    price: number;
    ratings: string;
    url: string;
    image_url?: string;
}

export interface MonitorRequest {
    url: string;
    target_price: number;
    email: string;
}

export interface MonitorResponse {
    message: string;
    current_price: number;
    below_target: boolean;
}