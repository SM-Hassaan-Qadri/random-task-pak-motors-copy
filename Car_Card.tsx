type Car = {
    id: number;
    name: string;
    price: string;
    mileage: number;
    year: number;
    image: string;
};

type CarCardProps = {
    car: Car;
};

const CarCard: React.FC<CarCardProps> = ({ car }) => {
    return (
        <div className="car-card">
            <img src={car.image} alt={car.name} />
            <h2>{car.name}</h2>
            <p>Price: {car.price}</p>
            <p>Mileage: {car.mileage} miles</p>
            <p>Year: {car.year}</p>
        </div>
    );
};

export default CarCard;