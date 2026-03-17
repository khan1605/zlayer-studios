const TermsAndConditions = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <p>
            By using the Z-Layer Studios website and services, you agree to the following terms and conditions.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8">Services</h2>
          <p>
            Z-Layer Studios provides custom 3D printing, social media marketing, and IT support services.
            All services are subject to availability and may vary based on project requirements.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8">Orders and Quotes</h2>
          <p>
            Custom project quotes are provided based on the information you supply. Final pricing may
            vary if project specifications change after the initial quote.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8">Intellectual Property</h2>
          <p>
            All content on this website, including text, images, and designs, is the property of
            Z-Layer Studios unless otherwise stated. You retain ownership of any files or designs
            you provide to us for printing.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8">Shipping and Returns</h2>
          <p>
            Shipping is available for physical products. Due to the custom nature of our products,
            returns are handled on a case-by-case basis. Please contact us if you have concerns
            about your order.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8">Limitation of Liability</h2>
          <p>
            Z-Layer Studios is not liable for any indirect, incidental, or consequential damages
            arising from the use of our services or products.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8">Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href="mailto:hello@zlayerstudios.com" className="text-purple-700 hover:underline">
              hello@zlayerstudios.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
