import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - OneDrop",
    description: "Your privacy is important to us. Read the OneDrop privacy policy to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
    return (
        <div className="py-32 px-4 bg-gray-50 min-h-screen">
            <div className="container mx-auto max-w-3xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                <p className="text-gray-500 mb-8">Last updated: October 28, 2025</p>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <p>Welcome to OneDrop, a mobile application designed to connect blood donors and recipients. OneDrop (“the App,” “we,” “our,” or “us”) is operated by Hazrat Ummar Shaikh, an independent developer based in India.</p>
                        <p className="mt-4">This Privacy Policy describes how we collect, use, store, and protect your personal information when you use the OneDrop Android app. By using OneDrop, you agree to the practices described in this Policy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">1. Scope</h2>
                        <p>This Policy applies to:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                            <li>All registered and unregistered users of the OneDrop mobile application.</li>
                            <li>Donors and recipients who access or interact with the App’s features.</li>
                            <li>Any person who contacts us through the App or support email.</li>
                        </ul>
                        <p className="mt-4">This Policy does not cover third-party websites, apps, or services that may link to or from OneDrop.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">2. Information We Collect</h2>
                        <p>When you use OneDrop, we collect the following user-provided information:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                            <li>Name</li>
                            <li>Age</li>
                            <li>Gender</li>
                            <li>Blood group</li>
                            <li>State, district, and city</li>
                            <li>Email address</li>
                            <li>Mobile number</li>
                        </ul>
                        <p className="mt-4">We do not collect device location, health diagnostics, or background data. You may choose to provide additional details voluntarily, but only the above fields are required for registration.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">3. How We Use Your Information</h2>
                        <p>Your information is used to:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                            <li>Create and manage your donor or recipient profile.</li>
                            <li>Allow users to search for compatible donors or recipients.</li>
                            <li>Maintain communication between donors and recipients when necessary.</li>
                            <li>Improve user experience and service functionality.</li>
                            <li>Display banner advertisements through Google AdMob.</li>
                        </ul>
                        <p className="mt-4">We do not sell, rent, or trade user data for marketing or analytics purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">4. Data Storage and Security</h2>
                        <p>User data is securely stored in MongoDB Atlas (Cloud). Authentication and login credentials are managed via Firebase Authentication. Reasonable technical and organizational measures are implemented to protect data against unauthorized access, alteration, or disclosure. Despite our efforts, no online platform is 100% secure, and we cannot guarantee absolute protection from unauthorized access or breaches.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">5. Data Sharing and Third Parties</h2>
                        <p>We may share limited information only under these circumstances:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                            <li>With other users: when you choose to register as a donor, certain information (e.g., name, blood group, and city) may be visible to recipients.</li>
                            <li>With service providers: we use trusted third-party services like Firebase (for authentication) and Google AdMob (for banner ads).</li>
                            <li>When required by law: if demanded under legal process, court order, or applicable law.</li>
                        </ul>
                        <p className="mt-4">We do not integrate any analytics or tracking services that monitor user behavior across other apps or websites.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">6. Data Retention and Deletion</h2>
                        <p>You can delete your account and donor profile at any time from within the app. When deleted, all your personal data and donor information are permanently removed from our systems. No residual or hidden copies are retained, except where required by law for security or fraud prevention.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">7. User Rights</h2>
                        <p>Under India’s Digital Personal Data Protection Act (DPDPA) 2023, users have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                            <li>Access the personal data held about them.</li>
                            <li>Request correction or deletion of inaccurate information.</li>
                            <li>Withdraw consent for data processing.</li>
                        </ul>
                        <p className="mt-4">For any of these requests, email us at <a href="mailto:support@onedrops.online" className="text-red-600 hover:underline">support@onedrops.online</a> with the subject “Data Request.”</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">8. Use of Advertising (AdMob)</h2>
                        <p>OneDrop uses Google AdMob to serve banner ads. AdMob may collect certain identifiers (such as advertising IDs) to display relevant ads. You can learn more about Google’s ad data practices <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">here</a>.</p>
                        <p className="mt-2">We do not serve personalized ads based on sensitive health or location data.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">9. Children’s Privacy</h2>
                        <p>OneDrop is intended for users aged 18 years and above. We do not knowingly collect personal information from minors. If a child’s data is found in our system, it will be deleted promptly upon verification.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">10. Updates to This Policy</h2>
                        <p>We may update this Privacy Policy periodically to reflect changes in features, laws, or security practices. The latest version will always be available within the App or at onedrops.online/privacy-policy. We encourage you to review this Policy regularly.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">11. Contact Information</h2>
                        <p>If you have any questions, complaints, or requests regarding this Privacy Policy or data handling, you can reach us at:</p>
                        <ul className="list-none space-y-2 pl-4 mt-2">
                            <li>📧 <a href="mailto:support@onedrops.online" className="text-red-600 hover:underline">support@onedrops.online</a></li>
                            <li>👤 Hazrat Ummar Shaikh</li>
                            <li>📍 Independent Developer, India</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
