import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const car = {
        id: Number(id),
        name: 'Toyota Corolla',
        price: '$10,000',
        mileage: 50000,
        year: 2018,
        description: 'A reliable car.',
        image: '/images/corolla.jpg',
    };
    res.status(200).json(car);
}