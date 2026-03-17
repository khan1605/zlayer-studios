import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import SectionHeading from '../components/SectionHeading';
import FAQ from '../components/FAQ';

const printServices = [
  {
    title: 'Custom 3D Prints',
    description: 'Made-to-order decor, gifts, and functional parts in various sizes, colors, and finishes.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    title: 'Personalized Miniatures',
    description: 'High-detail minis for display or tabletop gaming from references or concepts.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&q=80',
  },
  {
    title: 'Rapid Prototyping',
    description: 'Fast iterations for product ideas including fit checks and functional prototypes.',
    image: 'https://images.unsplash.com/photo-1563520239648-a24e51d4b570?w=600&q=80',
  },
  {
    title: 'Small-Batch Production',
    description: 'Consistent prints for short runs with QC checks and packaging-ready output.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
  },
];

const steps = [
  {
    number: '01',
    title: 'Share your file or concept',
    description: 'Upload STL/OBJ/3MF formats or describe your needs. Basic fixes available.',
  },
  {
    number: '02',
    title: 'Approve options + timeline',
    description: 'Select size, material, color, finish. Pricing and turnaround confirmed before production.',
  },
  {
    number: '03',
    title: 'We print & deliver',
    description: 'Your piece is printed, finished, and shipped or made available for local pickup.',
  },
];

const faqs = [
  {
    question: 'What file types do you accept?',
    answer: 'STL, OBJ, and 3MF are ideal. If you have STEP/IGES or a sketch, we can review it and recommend the best path.',
  },
  {
    question: 'What if I don\'t have a 3D model?',
    answer: 'We offer design services. Share your concept, reference images, or sketches and we\'ll create a print-ready model for you.',
  },
  {
    question: 'What materials and finishes are available?',
    answer: 'We work with PLA, PETG, ABS, and resin. Finish options include sanding, priming, and painting depending on the project.',
  },
  {
    question: 'What\'s the typical turnaround time?',
    answer: 'Many small items are ready in a few days. Complex projects and prototypes vary\u2014your quote will include an estimated timeline.',
  },
  {
    question: 'Do you ship orders?',
    answer: 'Yes\u2014shipping is available for physical products. Local pickup can be arranged when applicable.',
  },
  {
    question: 'What\'s the difference between shop items and custom quotes?',
    answer: 'Shop items are ready-to-order designs at fixed prices. Custom quotes are for unique projects tailored to your specifications.',
  },
];

const Printing3D = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Custom 3D printing for home decor, miniatures, and prototypes
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            From one-off gifts to small-batch runs, we print with quality materials and clean
            finishes&mdash;plus optional design help to get your file ready.
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
              Shop 3D Prints
            </Link>
          </div>
        </div>
      </section>

      {/* What We Print */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Capabilities" title="What We Print" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {printServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Process"
            title="A simple process that keeps you in control"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 bg-purple-100 text-purple-700 font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Custom Quote</h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default Printing3D;
