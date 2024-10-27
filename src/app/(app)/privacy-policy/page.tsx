import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata ={
  title:"Privacy Policy"
}

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="mb-4 text-primary">Effective Date: <span className="font-semibold">October,7,2024</span></p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
      <p className="text-primary mb-4">
        We collect the following types of information when you use our App:
      </p>
      <ul className="list-disc list-inside text-primary space-y-2">
        <li><strong>Personal Information:</strong> We may collect personal information such as your email address.</li>
        <li><strong>Image Data:</strong> Images uploaded are processed using Cloudinary and stored temporarily.</li>
        <li><strong>Usage Data:</strong> We may collect information like IP address, browser type, and device details.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
      <p className="text-primary mb-4">
        We use your information to:
      </p>
      <ul className="list-disc list-inside text-primary space-y-2">
        <li>Provide, operate, and maintain our App.</li>
        <li>Improve user experience and optimize images.</li>
        <li>Communicate about updates and new features.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Image Storage and Optimization</h2>
      <p className="text-primary mb-4">
        Images are temporarily stored and optimized using Cloudinary. Images are deleted based on storage policies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sharing of Information</h2>
      <p className="text-primary mb-4">
        We do not sell your personal information. It may be shared with Cloudinary for optimization or as required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Security</h2>
      <p className="text-primary mb-4">
        We take steps to protect your data, but no method of transmission over the Internet is completely secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
      <p className="text-primary mb-4">
        You have the right to access, correct, or delete your personal information, and opt-out of communications.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
      <p className="text-primary mb-4">
        This policy may be updated periodically. Changes will be posted on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
      <p className="text-primary mb-4">
        If you have any questions, contact us at <span className="font-semibold">afnanhussain2022@gmail.com</span>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
