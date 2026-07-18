import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import electoralStrategies from '../assets/images/electoral-strategies.jpeg';
import electionRally from '../assets/images/election-rally.jpeg';
import service1 from '../assets/images/election/service-1.jpeg';
import service2 from '../assets/images/election/service-2.jpeg';
import service3 from '../assets/images/election/service-3.jpeg';
import service4 from '../assets/images/election/service-4.jpeg';
import service5 from '../assets/images/election/service-5.jpeg';
import service6 from '../assets/images/election/service-6.jpeg';
import service7 from '../assets/images/election/service-7.jpeg';
import service8 from '../assets/images/election/service-8.jpeg';

const services = [
  { title: 'Political Strategy', image: service1 },
  { title: 'Digital Campaign Management', image: service2 },
  { title: 'Booth Management', image: service3 },
  { title: 'Voter Survey & Research', image: service4 },
  { title: 'Public Relations & Media Management', image: service5 },
  { title: 'Content & Creative Design', image: service6 },
  { title: 'Event & Rally Management', image: service7 },
  { title: 'War Room & Data Analytics', image: service8 },
];

const process = [
  {
    step: 'Step 1',
    title: 'Understanding Your Vision',
    description: 'We begin by understanding your political goals, constituency, and campaign objectives.',
  },
  {
    step: 'Step 2',
    title: 'Research & Planning',
    description: 'Our experts conduct detailed research to create a comprehensive campaign roadmap.',
  },
  {
    step: 'Step 3',
    title: 'Campaign Execution',
    description: 'From digital outreach to ground-level operations, we implement every aspect of the campaign.',
  },
  {
    step: 'Step 4',
    title: 'Monitoring & Optimization',
    description: 'We continuously analyze campaign performance and adjust strategies for maximum impact.',
  },
  {
    step: 'Step 5',
    title: 'Election Day Support',
    description: 'We assist with booth coordination, volunteer management, and election-day operations.',
  },
];

const whyChooseUs = [
  'Experienced Political Consultants',
  'Data-Driven Campaign Decisions',
  'End-to-End Campaign Management',
  'Booth-Level Execution',
  'Professional Digital & Media Team',
  'Customized Strategies',
  'Transparent Communication',
  'Ethical & Confidential Services',
];

const strengths = [
  'Political Intelligence',
  'Digital Innovation',
  'Grassroots Organization',
  'Data Analytics',
  'Creative Communication',
  'Professional Execution',
];

const industries = [
  'Independent Candidates',
  'Political Parties',
  'Municipal Elections',
  'Panchayat Elections',
  'Assembly Elections',
  'Parliamentary Elections',
  'Student Union Elections',
  'Cooperative Society Elections',
];

const stats = [
  { value: '50+', label: 'Campaigns Supported' },
  { value: '500+', label: 'Booth Teams Coordinated' },
  { value: '1M+', label: 'Voters Reached' },
  { value: '5+', label: 'Years of Experience' },
];

const keyCampaigns = [
  {
    title: 'Bihar Assembly Election – November 2020',
    description: "Successfully contributed to one of India's most closely contested state elections, supporting campaign planning and voter engagement initiatives.",
  },
  {
    title: 'Assam Assembly Election – March 2021',
    description: 'Worked on strategic election management and ground-level campaign operations to strengthen voter outreach and organizational effectiveness.',
  },
  {
    title: 'Mokama By-Election, Bihar – November 2022',
    description: 'Provided dedicated campaign support during the high-profile by-election with focused constituency-level planning and execution.',
  },
  {
    title: 'Patna Municipal Election – October 2022',
    description: 'Managed campaign activities for urban local body elections, emphasizing public engagement, communication strategy, and local outreach.',
  },
  {
    title: 'Odisha Election – June 2024',
    description: 'Contributed to campaign planning and election management through strategic coordination and constituency-focused execution.',
  },
  {
    title: 'Bihar Assembly Election – November 2025',
    description: 'Supported large-scale campaign operations with data-driven planning, organizational coordination, and voter communication strategies.',
  },
  {
    title: 'Jamshedpur Municipal Election – February 2026',
    description: 'Delivered customized municipal election campaign solutions, including field coordination and public outreach initiatives.',
  },
  {
    title: 'Dhanbad Municipal Election – March 2026',
    description: 'Provided comprehensive election support with strategic planning, campaign management, and constituency engagement.',
  },
];

const detailedServices = [
  'Door To Door Survey',
  'Election War Room',
  'Election Campaign Management',
  'Opinion Poll / Exit Poll',
  'Text SMS',
  'Voice SMS',
  'Call Center',
  'Missed Call Service',
  'IVR Service / Toll-Free Service',
  'Election Management Software',
  'Election Campaign Management System',
  'Nukkad Natak',
  'Download Voter List In Excel Format',
  'WhatsApp',
  'Digital Media Election Campaign Management',
];

const ElectionCampaigns = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Election Campaign Management
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Election Campaign Partner
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              We are a full-service election campaign management company dedicated to helping political leaders,
              candidates, and parties plan, execute, and manage successful election campaigns.
            </p>
            <p className="text-gray-500 mb-4">
              Our experienced team combines political strategy, technology, field operations, digital marketing,
              voter research, and communication expertise to deliver campaigns that create real impact.
            </p>
            <p className="text-gray-500 mb-8">
              Whether you&apos;re contesting local, municipal, assembly, parliamentary elections, or organizational polls,
              we provide customized campaign solutions tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800 transition-colors"
            >
              Start Your Campaign
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-purple-700 text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-colors"
            >
              Request a Consultation
            </Link>
            </div>
          </div>
          <img
            src={electionRally}
            alt="Political leader addressing a campaign rally"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Services" title="Comprehensive Campaign Solutions" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <img src={service.image} alt={service.title} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Process" title="How We Work" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 p-6">
                <span className="text-purple-700 text-sm font-semibold uppercase tracking-wider">
                  {item.step}
                </span>
                <h3 className="text-base font-semibold text-gray-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Strength"
            title="Building Winning Campaigns with Innovation"
            description="We believe every election is unique, and every campaign deserves a customized strategy."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {strengths.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-purple-50 rounded-xl px-5 py-4"
              >
                <svg className="w-5 h-5 text-purple-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-purple-300 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Leaders Trust Our Expertise</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-purple-50">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Industries We Serve" title="We Work With" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 px-5 py-4 text-center text-sm font-medium text-gray-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((item, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-purple-200 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Key Campaigns */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
            <img
              src={electoralStrategies}
              alt="Electoral Strategies—win elections, engage voters"
              className="w-full max-w-md mx-auto rounded-2xl"
            />
            <div>
              <span className="text-purple-700 text-sm font-semibold uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Our Campaign Experience</h2>
              <p className="text-gray-600">
                Over the years, we have had the privilege of contributing to significant electoral campaigns across
                India—spanning Assembly, Municipal, and By-Elections with strategic planning, execution, and voter
                outreach.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyCampaigns.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-10 text-center">
            From grassroots mobilization to strategic planning, we remain committed to delivering professional
            election campaign management that drives meaningful electoral success.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Services" title="Everything We Offer" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {detailedServices.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4"
              >
                <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to win your next election?</h2>
          <p className="text-purple-200 mb-8">
            Tell us about your constituency and goals—we&apos;ll build a campaign strategy tailored to you.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default ElectionCampaigns;
