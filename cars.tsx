import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const cars = [
        { id: 1, name: 'Toyota Corolla', price: '$10,000', mileage: 50000, year: 2018, image: '/images/corolla.jpg' },
        { id: 2, name: 'Honda Civic', price: '$12,000', mileage: 30000, year: 2019, image: '/images/civic.jpg' },
        // Additional cars...
    ];
    res.status(200).json(cars);
}