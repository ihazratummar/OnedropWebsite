import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service - OneDrop",
    description: "Read the OneDrop terms of service. By using our app, you agree to these terms.",
};

export default function TermsOfService() {
    return (
        <div className="py-32 px-4 bg-gray-50 min-h-screen">
            <div className="container mx-auto max-w-3xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                <p className="text-gray-500 mb-8">Last updated: October 28, 2025</p>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">1. Acceptance of Terms</h2>
                        <p>By downloading, installing, or using OneDrop (“the App,” “we,” “our,” or “us”), you agree to comply with and be bound by these Terms of Service. If you do not agree, you must not access or use the App.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">2. Purpose of the App</h2>
                        <p>OneDrop is a social blood-donation discovery platform that enables users to register as blood donors or search for donors nearby. We only provide the platform and do not verify donor identity, eligibility, or medical condition. OneDrop does not provide medical advice, diagnosis, or emergency services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">3. Eligibility</h2>
                        <p>You must be at least 18 years old to use this App. By using OneDrop, you confirm that all information you provide is accurate and truthful. We reserve the right to suspend or terminate accounts providing false, misleading, or incomplete information.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">4. Account Registration</h2>
                        <p>Users may register using email + password or Google sign-in. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. Notify us immediately at <a href="mailto:support@onedrops.online" className="text-red-600 hover:underline">support@onedrops.online</a> if you suspect unauthorized access.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">5. User Responsibilities</h2>
                        <p>You agree not to:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                            <li>Post or share false, misleading, or fraudulent donor information.</li>
                            <li>Use the platform to harass, spam, or solicit other users.</li>
                            <li>Collect or store data about other users for commercial or unauthorized purposes.</li>
                            <li>Upload or distribute malicious code or disrupt the App’s operation.</li>
                            <li>Violate any applicable law or regulation.</li>
                        </ul>
                        <p className="mt-4">Failure to comply may result in immediate account termination and possible legal action.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">6. Data Privacy</h2>
                        <p>Our handling of personal information is governed by the OneDrop Privacy Policy available at <a href="/privacy-policy" className="text-red-600 hover:underline">onedrops.online/privacy-policy</a>. By using the App, you consent to the collection and processing of your data as described in that Policy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">7. Advertisements</h2>
                        <p>The App currently displays banner advertisements via Google AdMob. We do not endorse or control third-party ads shown in the App. Any interaction with these ads is solely between you and the advertiser.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">8. No Medical or Emergency Responsibility</h2>
                        <p>OneDrop is not a medical institution and does not guarantee the availability, eligibility, or fitness of any donor. All users are solely responsible for their own safety and for verifying the suitability of any blood donation. You should always follow certified medical guidelines and consult qualified professionals before donation or transfusion.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">9. Limitation of Liability</h2>
                        <p>To the fullest extent permitted by law: We are not liable for any loss, damage, injury, or death arising from the use of the App or reliance on information provided by other users. We are not responsible for any false donor data, failed matches, or technical interruptions. You use OneDrop at your own risk. If any jurisdiction limits such disclaimers, our liability shall not exceed INR 1,000 (one thousand rupees).</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">10. Intellectual Property</h2>
                        <p>All content, code, and trademarks associated with OneDrop are owned or licensed by Hazrat Ummar Shaikh. Users may not copy, modify, distribute, or reverse-engineer any part of the App without prior written consent.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">11. Termination</h2>
                        <p>We reserve the right to suspend or terminate any account at our discretion, without prior notice, for behavior that violates these Terms or applicable law. Users may delete their own accounts at any time within the App.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">12. Modifications to the Service</h2>
                        <p>We may modify, suspend, or discontinue any feature of OneDrop at any time without prior notice. Continued use after updates constitutes acceptance of the revised Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">13. Governing Law</h2>
                        <p>These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Maharashtra, India.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">14. Contact Information</h2>
                        <p>For questions or concerns about these Terms, please contact: <a href="mailto:support@onedrops.online" className="text-red-600 hover:underline">support@onedrops.online</a></p>
                    </section>
                </div>
            </div>
        </div>
    );
}
