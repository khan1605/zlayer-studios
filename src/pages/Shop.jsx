import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

const products = [
  {
    name: 'Geometric Planter',
    price: '$24.99',
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80',
  },
  {
    name: 'Abstract Vase',
    price: '$34.99',
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
  },
  {
    name: 'Desk Organizer',
    price: '$19.99',
    category: 'Functional',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
  },
  {
    name: 'Custom Miniature',
    price: 'From $14.99',
    category: 'Miniatures',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&q=80',
  },
  {
    name: 'Wall Art Panel',
    price: '$44.99',
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&q=80',
  },
  {
    name: 'Phone Stand',
    price: '$12.99',
    category: 'Functional',
    image: 'https://images.unsplash.com/photo-1563520239648-a24e51d4b570?w=400&q=80',
  },
];

const Shop = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shop</h1>
          <p className="text-lg text-gray-600">Browse our ready-to-order 3D printed products.</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-purple-600 font-medium">{product.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1">{product.name}</h3>
                  <p className="text-purple-700 font-bold mt-2">{product.price}</p>
                  <Link
                    to="/contact"
                    className="mt-3 inline-block text-sm text-purple-700 font-medium hover:underline"
                  >
                    Inquire &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don&apos;t see what you need?</h2>
          <p className="text-gray-600 mb-8">We do custom prints too. Tell us what you&apos;re looking for.</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800 transition-colors"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default Shop;
