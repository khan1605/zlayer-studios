const PrivacyPolicy = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <p>
            At Z-Layer Studios, we respect your privacy and are committed to protecting the personal
            information you share with us. This policy outlines what data we collect, how we use it,
            and how we keep it safe.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8">Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your name, email address, phone number,
            and project details when you submit a contact form or place an order.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your inquiries and provide quotes</li>
            <li>Process and fulfill your orders</li>
            <li>Communicate about your projects</li>
            <li>Improve our services</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-900 mt-8">Data Protection</h2>
          <p>
            We do not sell, trade, or share your personal information with third parties except as
            necessary to provide our services (e.g., shipping providers).
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8">Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at{' '}
            <a href="mailto:hello@zlayerstudios.com" className="text-purple-700 hover:underline">
              hello@zlayerstudios.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
