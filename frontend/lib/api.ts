import axios from 'axios';
import { Product, MonitorRequest, MonitorResponse } from '../types';

const API_BASE_URL = 'http://localhost:3000/api';

export async function checkPrice(url: string): Promise<Product> {
    try {
        const response = await axios.post(`${API_BASE_URL}/check-price`, { url});
        return response.data;
    } catch (error) {
        console.error('Error checking price:', error);
        throw new Error('Failed to check price. Please verify the URL is correct.');
    }
}

export async function monitorPrice(data: MonitorRequest): Promise<MonitorResponse> {
    try {
        const response = await axios.post(`${API_BASE_URL}/monitor-price`, data);
        return response.data;
    } catch (error) {
        console.error('Error monitoring price:', error);
        throw new Error('Failed to set up price monitoring. Please try again later.');
    }
}