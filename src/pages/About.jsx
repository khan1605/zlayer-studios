import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';

const team = [
  {
    role: 'Production & Print Lead',
    description: 'Oversees print quality, materials, and finishing for clean details and consistent results.',
  },
  {
    role: 'Design & Prototyping Lead',
    description: 'Converts ideas into printable models and functional prototypes with optimized strength and fit.',
  },
  {
    role: 'Digital Services Lead',
    description: 'Provides IT support and builds marketing systems for small-business visibility and lead generation.',
  },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About ZLayer Studios</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We make custom 3D-printed home decor and personalized miniatures&mdash;plus rapid prototyping,
            IT support, and social media marketing that helps small businesses grow.
          </p>
        </div>
      </section>

      {/* How We Started */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Built for makers, founders, and busy teams
              </h2>
              <p className="text-gray-600 mb-4">
                The studio was established to simplify access to custom fabrication and digital support.
                It combines 3D printing with IT services and social media marketing, enabling clients to
                launch ideas, ship products, and receive ongoing support through a single vendor rather
                than multiple providers.
              </p>
              <p className="text-gray-600">
                We design and produce made-to-order 3D prints ranging from home decor to personalized
                miniatures using quality materials and finishing options. For businesses, services include
                rapid prototyping, IT support, and social media marketing to maintain operational stability
                and brand visibility.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90"
                alt="3D modeling"
                className="rounded-xl object-cover h-48 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=90"
                alt="Styled decor"
                className="rounded-xl object-cover h-48 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=90"
                alt="Workshop"
                className="rounded-xl object-cover h-48 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=90"
                alt="Team collaboration"
                className="rounded-xl object-cover h-48 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Team" title="Who makes it happen" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{member.role}</h3>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialCard
            quote="ZLayer made the process simple\u2014quick turnaround, great communication, and the final print looked exactly like the proof."
            name="Verified Customer"
            role="Custom 3D Print"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to build something custom?</h2>
          <p className="text-purple-200 mb-8 max-w-xl mx-auto">
            Whether it&apos;s home decor, miniatures, prototypes, or business support&mdash;let&apos;s talk.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
