import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Deletion Policy - OneDrop",
    description: "Learn how to delete your data from OneDrop. Our data deletion policy gives you full control over your personal information.",
};

export default function DataDeletion() {
    return (
        <div className="py-32 px-4 bg-gray-50 min-h-screen">
            <div className="container mx-auto max-w-3xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Deletion Policy</h1>
                <p className="text-gray-500 mb-8">Last updated: October 28, 2025</p>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">1. Purpose</h2>
                        <p>This Data Deletion Policy explains how users of the OneDrop app (“the App,” “we,” or “our”) can request deletion of their personal data and what happens to that data once deleted. We are committed to respecting your privacy and ensuring transparency in how your data is handled and erased.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">2. How Users Can Delete Their Data</h2>
                        <p>You can permanently delete your account and all associated data directly from the app:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                            <li><strong>Delete Account:</strong> Removes your general user profile, contact number, and authentication data.</li>
                            <li><strong>Delete Donor Account:</strong> Removes all blood donor–related information, including name, age, gender, blood group, and location.</li>
                        </ul>
                        <p className="mt-4">Once a user confirms deletion through these options, all related data is immediately and permanently removed from our servers and databases.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">3. What Data Gets Deleted</h2>
                        <p>Upon successful deletion, the following categories of personal data are erased:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                            <li>Name, phone number, and user ID</li>
                            <li>Age, gender, and blood group</li>
                            <li>Donor listing details (including location and visibility status)</li>
                            <li>Communication history or donor availability records</li>
                            <li>Authentication tokens or session data</li>
                        </ul>
                        <p className="mt-4">No residual copies are stored in backups or logs beyond 72 hours (for technical sync and server maintenance).</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">4. What Data Is Retained (If Any)</h2>
                        <p>We may retain minimal, non-identifiable metadata for security auditing and fraud prevention, such as:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                            <li>Account deletion timestamp</li>
                            <li>Country/region of deletion request</li>
                        </ul>
                        <p className="mt-4">These records do not contain any personal or contact information and are used strictly to ensure system integrity.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">5. Third-Party Data Handling</h2>
                        <p>The OneDrop app uses Google AdMob for displaying banner ads. While we do not directly share any user data with advertisers, AdMob may collect limited, anonymized device data (e.g., ad performance metrics, approximate location) per Google’s Privacy Policy.</p>
                        <p className="mt-2">We do not sell, rent, or share user data with any other third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">6. Requests Outside the App</h2>
                        <p>If you experience technical issues while deleting your account or need confirmation of deletion, contact us directly at: <a href="mailto:support@onedrops.online" className="text-red-600 hover:underline">support@onedrops.online</a></p>
                        <p className="mt-2">We will respond to all verified requests within 7 business days.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">7. Legal Compliance</h2>
                        <p>This Data Deletion Policy complies with:</p>
                        <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                            <li>Digital Personal Data Protection Act, 2023 (India)</li>
                            <li>Information Technology Act, 2000 (India)</li>
                            <li>Google Play Developer Privacy & Data Deletion Policy</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">8. Policy Updates</h2>
                        <p>We may occasionally update this policy to reflect changes in app features, legal requirements, or data management practices. Any changes will be posted within the app and reflected with an updated “Effective Date.”</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
