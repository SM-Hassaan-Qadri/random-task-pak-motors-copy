// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/cars">Cars</Link></li>
                <li><Link href="/search">Search</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;