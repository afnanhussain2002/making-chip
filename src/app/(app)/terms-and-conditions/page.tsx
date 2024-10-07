import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>
      <p className="mb-4 text-gray-700">Effective Date: <span className="font-semibold">October, 7, 2024</span></p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
      <p className="text-gray-600 mb-4">
        By accessing and using our App, you agree to these Terms and Conditions in full. If you disagree, you must stop using the App.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services Provided</h2>
      <p className="text-gray-600 mb-4">
        The App allows users to upload images, optimize them using Cloudinary, and compare the original and optimized versions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
      <p className="text-gray-600 mb-4">
        By using the App, you agree to:
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Upload lawful content and avoid infringing on third-party intellectual property rights.</li>
        <li>Not upload harmful, abusive, or offensive images.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
      <p className="text-gray-600 mb-4">
        All content on the App is the property of the App and is protected by copyright laws.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
      <p className="text-gray-600 mb-4">
        The App is provided as is without warranties. We are not liable for any damages from using the App.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
      <p className="text-gray-600 mb-4">
        We may terminate your access to the App at any time for any reason.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modifications to the Terms</h2>
      <p className="text-gray-600 mb-4">
        We reserve the right to update these Terms from time to time. Your continued use of the App constitutes acceptance of the changes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
      <p className="text-gray-600 mb-4">
        These Terms are governed by the laws of Bangladesh.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
      <p className="text-gray-600 mb-4">
        For any inquiries, contact us at <span className="font-semibold">afnanhussain2022@gmail.com</span>.
      </p>
    </div>
  );
};

export default TermsAndConditions;
