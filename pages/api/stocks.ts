import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from 'next';
import { headers } from '../_app';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(400).json({ error: 'Niedozwolona akcja' });
    }
    try {
        const response: AxiosResponse = await axios.get('https://api.1cart.eu/v1/stocks/all', { headers });
        res.status(200).json(response.data);
    }
    catch (error) {
        res.status(500).json(error);
    }
}