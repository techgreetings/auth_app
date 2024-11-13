import React from 'react';
import Link from 'next/link'
// import next from 'next';
const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-700">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <p className="mb-4">
          This privacy policy sets out how our website uses and protects any information that you give us when you use this website.
        </p>

        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>

        <p className="mb-4">We may collect the following information:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Your name and contact information</li>
          <li>Demographic information</li>
          <li>Other information relevant to customer surveys and/or offers</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">How We Use the Information</h2>

        <p className="mb-4">
          We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Internal record keeping</li>
          <li>Improving our products and services</li>
          <li>Sending promotional emails about new products, special offers, or other information we think you may find interesting</li>
          <li>Contacting you for market research purposes by email, phone, or mail and customizing the website according to your interests</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Security</h2>

        <p className="mb-4">
          We are committed to ensuring that your information is secure. To prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
        </p>

        <h2 className="text-2xl font-bold mb-2">Cookies</h2>

        <p className="mb-4">
          A cookie is a small file that asks permission to be placed on your computer&apos;s hard drive. Once agreed, the cookie helps analyze web traffic or lets you know when you visit a particular site.
        </p>

        <p className="mb-4">
          Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not.
        </p>

        <h2 className="text-2xl font-bold mb-2">Links to Other Websites</h2>

        <p className="mb-4">
          Our website may contain links to other websites of interest. However, we do not have control over other websites and cannot be responsible for the protection and privacy of any information you provide while visiting them.
        </p>

        <h2 className="text-2xl font-bold mb-2">Controlling Your Personal Information</h2>

        <p className="mb-4">You may choose to restrict the collection or use of your personal information in the following ways:</p>

        <ul className="list-disc list-inside mb-4">
          <li>If you previously agreed to us using your personal information for direct marketing purposes, you may change your mind by contacting us.</li>
          <li>We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so.</li>
          <li>
            You may request details of personal information we hold about you. If you would like a copy, please contact us.
          </li>
          <li>
            If you believe any information we hold about you is incorrect or incomplete, please contact us to promptly correct it.
          </li>
        </ul>

        <p className="mb-4">This privacy policy is subject to change without notice.</p>
      <Link href={"/auth/signup"}>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">signUp Page</button>
        </Link>
        </div>

    </div>
  );
};

export default PrivacyPolicy;
