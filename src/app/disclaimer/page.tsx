import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disclaimer - OneDrop",
    description: "Read the OneDrop disclaimer. Understand the terms and conditions of using our blood donor platform.",
};

export default function Disclaimer() {
    return (
        <div className="py-32 px-4 bg-gray-50 min-h-screen">
            <div className="container mx-auto max-w-3xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
                <p className="text-gray-500 mb-8">Last updated: October 28, 2025</p>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">1. General Information</h2>
                        <p>The information provided by OneDrop (“the App,” “we,” “our,” or “us”) is intended solely for general informational and community-connection purposes. OneDrop is a platform that allows individuals to register as blood donors or search for available donors in their area. We do not operate as a hospital, blood bank, or medical organization, and we do not test, verify, or medically screen users.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">2. No Medical Advice</h2>
                        <p>The App does not provide medical or professional healthcare advice. Any content, donor information, or communication through OneDrop should not be interpreted as medical instruction, diagnosis, or treatment. Always consult qualified healthcare professionals before donating or receiving blood. You are solely responsible for confirming donor eligibility, medical safety, and transfusion compatibility.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">3. Accuracy of Information</h2>
                        <p>We make reasonable efforts to maintain accurate donor listings and user data; however: User profiles and donor details are self-submitted and not independently verified. We make no warranties or guarantees regarding the truth, completeness, or accuracy of any user-provided information. We are not liable for any false, outdated, or misleading data entered by users.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">4. Limitation of Liability</h2>
                        <p>By using OneDrop, you expressly agree that: The App and its developer shall not be responsible for any injury, illness, loss, or damage (including death) resulting from reliance on data found in the App. The developer assumes no liability for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the App. Users interact and exchange information at their own risk. If your local law does not allow such exclusions, the maximum liability of the developer shall not exceed INR 1,000 (one thousand rupees).</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">5. Third-Party Links and Ads</h2>
                        <p>The App may display banner advertisements via Google AdMob or link to third-party websites. We do not endorse, guarantee, or control the content, products, or services offered by these external parties. Interacting with such links is entirely at your discretion and risk.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">6. Technical Issues</h2>
                        <p>While we aim for stable service, we do not warrant that OneDrop will be error-free, uninterrupted, or immune from data loss or cyberattacks. You are advised to keep personal backups and use the App with standard security precautions.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">7. Legal Compliance</h2>
                        <p>This Disclaimer shall be governed by and construed in accordance with the laws of India, and the courts of West Bengal, India shall have exclusive jurisdiction over any disputes arising from or related to this App.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">8. Contact</h2>
                        <p>For questions or concerns about this Disclaimer, contact: <a href="mailto:support@onedrops.online" className="text-red-600 hover:underline">support@onedrops.online</a></p>
                        <p className="mt-2">👤 Hazrat Ummar Shaikh — Independent Developer, West Bengal, India</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
