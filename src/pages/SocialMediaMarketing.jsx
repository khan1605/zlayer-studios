import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

const services = [
  {
    title: 'SEO & Digital Marketing',
    description: 'Strategic optimization and targeted campaigns to enhance online visibility.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Content Creation',
    description: 'On-brand graphics, short-form video direction, captions, hashtags, and content repurposing.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: 'Campaigns & Ads',
    description: 'Goal-based campaigns (traffic, leads, awareness), creative testing, and budget optimization.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: 'Social & Influencer Marketing',
    description: 'Community building through dynamic social campaigns.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const process = [
  { step: 'Plan', description: 'Kickoff, goals, brand voice, content calendar.' },
  { step: 'Create + Publish', description: 'Design, write, schedule, monitor.' },
  { step: 'Monitor & Report', description: 'Track performance and optimize.' },
];

const plans = [
  {
    name: 'Essentials',
    price: '$399',
    period: '/month',
    features: ['8 posts/month', 'Content strategy', 'Basic monitoring', 'Monthly report'],
  },
  {
    name: 'Growth',
    price: '$799',
    period: '/month',
    popular: true,
    features: ['12-16 posts/month', 'Video support', 'Lead campaigns', 'Bi-weekly reporting'],
  },
  {
    name: 'Full Service',
    price: 'Custom',
    period: '',
    features: ['Multi-platform', 'Ads management', 'Dedicated support', 'Custom strategy'],
  },
];

const platforms = ['Instagram', 'Facebook', 'X (Twitter)', 'YouTube Shorts', 'LinkedIn'];

const SocialMediaMarketing = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Content that looks great&mdash;and drives leads.
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Social media planning, creation, and management tailored to your brand identity and budget.
            Strategy, consistent posting, and actionable reporting.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800 transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="What We Offer" title="Full-service social media" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-purple-700 shrink-0">{service.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-semibold">Platforms we manage</p>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((platform) => (
              <span key={platform} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="How It Works" title="Plan, Create + Publish, Report" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-purple-100 text-purple-700 font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.step}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Pricing" title="Plans that scale with you" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 ${
                  plan.popular
                    ? 'bg-purple-700 text-white border-2 border-purple-700'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <span className="inline-block bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-purple-200' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                      <svg className={`w-4 h-4 shrink-0 ${plan.popular ? 'text-purple-300' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                    plan.popular
                      ? 'bg-white text-purple-700 hover:bg-gray-100'
                      : 'bg-purple-700 text-white hover:bg-purple-800'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to grow your brand?</h2>
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

export default SocialMediaMarketing;
