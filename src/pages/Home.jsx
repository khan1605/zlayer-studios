import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import SectionHeading from '../components/SectionHeading';
import FAQ from '../components/FAQ';

const services = [
  {
    title: 'Custom 3D Printing',
    description: 'Made-to-order parts, decor, and gifts with material and finish options.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    title: 'Rapid Prototyping',
    description: 'Fast iterations from concept to functional prototypes\u2014test and refine quickly.',
    image: 'https://images.unsplash.com/photo-1563520239648-a24e51d4b570?w=600&q=80',
  },
  {
    title: 'Personalized Miniatures',
    description: 'Miniatures designed for you\u2014great for gifts, collections, and tabletop.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&q=80',
  },
  {
    title: '3D Printed Home Decor',
    description: 'Modern decor pieces that fit your space\u2014custom sizes and colors available.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
  },
  {
    title: 'Social Media Marketing',
    description: 'Content planning and campaigns to build awareness, engagement, and leads.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
  },
  {
    title: 'IT Services & Support',
    description: 'Setup, troubleshooting, and ongoing support to keep your business running.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
  },
];

const testimonials = [
  {
    quote: 'Fast turnaround and the finish quality was better than expected. The piece fit perfectly.',
    name: 'Jordan R.',
    role: 'Custom 3D Print',
  },
  {
    quote: 'They helped us go from a rough idea to a prototype we could actually test\u2014quickly.',
    name: 'Avery L.',
    role: 'Rapid Prototyping',
  },
  {
    quote: 'Clear communication, practical IT help, and a social plan we could execute right away.',
    name: 'Morgan S.',
    role: 'Small Business Services',
  },
];

const faqs = [
  {
    question: 'How do I request a custom print?',
    answer: 'Use the contact form with a short description, size/quantity, and any reference images. We\'ll reply with options and a quote.',
  },
  {
    question: 'What files do you accept?',
    answer: 'STL and OBJ are ideal. If you have STEP/IGES or a sketch, we can review it and recommend the best path.',
  },
  {
    question: 'What\'s your typical turnaround time?',
    answer: 'Many small items are ready in a few days. Complex projects and prototypes vary\u2014your quote will include an estimated timeline.',
  },
  {
    question: 'Do you ship orders?',
    answer: 'Yes\u2014shipping is available for physical products. Local pickup can be arranged when applicable.',
  },
  {
    question: 'Can you help with IT or social media without a print order?',
    answer: 'Yes. You can book IT support or social media marketing as standalone services\u2014no print order required.',
  },
  {
    question: 'Do you offer bulk or business pricing?',
    answer: 'Yes. Tell us your quantities and timeline and we\'ll provide volume pricing and production planning.',
  },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Social Media Marketing
            <span className="text-purple-700"> + </span>
            IT Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4 font-medium">
            Marketing that drives leads. IT that keeps you running.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            We help small businesses grow with social media strategy, content, and campaigns&mdash;plus
            practical IT support. Need something made? Our 3D printing studio is available as an add-on service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-purple-700 text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Services" title="What we do" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="Trusted for quality and follow-through"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="FAQ" title="Common questions" />
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to order?</h2>
          <Link
            to="/shop"
            className="inline-block px-8 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Shop Custom Prints
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
