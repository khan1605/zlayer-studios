import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import SectionHeading from '../components/SectionHeading';

const services = [
  {
    title: 'Social Media Marketing',
    description: 'Content strategy, posting cadence, and campaigns designed to drive leads.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=90',
  },
  {
    title: 'IT Services & Support',
    description: 'Setup, troubleshooting, and ongoing support to keep your team productive.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=90',
  },
  {
    title: '3D Printing (Add-on)',
    description: 'Custom prints, prototypes, and product runs when you need something made.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90',
  },
  {
    title: '3D Design & File Prep',
    description: 'Model cleanup, supports/orientation guidance, and print-ready optimization.',
    image: 'https://images.unsplash.com/photo-1563520239648-a24e51d4b570?w=1200&q=90',
  },
];

const testimonials = [
  {
    quote: 'Quick turnaround and the print quality was better than expected. Communication was clear from start to finish.',
    name: 'A. Rivera',
    role: 'Custom Decor Order',
  },
  {
    quote: 'They helped us prototype a part in days, not weeks. The iteration process was smooth and efficient.',
    name: 'M. Chen',
    role: 'Product Prototype',
  },
  {
    quote: 'Our socials finally look consistent, and we\'re getting more inquiries. Solid strategy and execution.',
    name: 'J. Patel',
    role: 'Small Business Marketing',
  },
];

const pricingFeatures = [
  'Material + finish recommendations',
  'Design/file review included',
  'Fast turnaround options',
  'Shipping or local pickup (where available)',
  'Business-friendly invoicing',
  'Support after delivery',
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Social media marketing and IT services for small businesses
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Social media marketing and small-business IT services built for clear communication and
            measurable results&mdash;with 3D printing available when you need prototypes, custom parts,
            or product runs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              to="/shop"
              className="px-6 py-3 border border-purple-700 text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Services" title="What We Do" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Pricing"
            title="Simple pricing approach"
            description="Most projects are quoted based on size, materials, complexity, and turnaround time."
          />
          <div className="max-w-lg mx-auto bg-white rounded-2xl border-2 border-purple-200 p-8">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Most Popular
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Project Quote</h3>
            <p className="text-gray-600 text-sm mb-6">
              Tell us what you need and we&apos;ll reply with options, timelines, and a clear estimate.
            </p>
            <ul className="space-y-3 mb-8">
              {pricingFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-purple-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="block text-center px-6 py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800 transition-colors"
            >
              Start a Quote
            </Link>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Need ongoing marketing or IT support? We offer monthly retainers&mdash;request details in your message.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Testimonials" title="What clients say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-purple-200 mb-8">
            Tell us what you need&mdash;we&apos;ll recommend the best service.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request a Quote / Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
