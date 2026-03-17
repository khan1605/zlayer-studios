const SectionHeading = ({ label, title, description }) => {
  return (
    <div className="text-center mb-12">
      {label && (
        <span className="text-purple-700 text-sm font-semibold uppercase tracking-wider">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{title}</h2>
      {description && (
        <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
