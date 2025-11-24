import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'OneDrop Blood Donation App - India\'s Free Blood Donor Finder'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #ffffff 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '80px',
                    position: 'relative',
                }}
            >
                {/* Background Pattern */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.05,
                        display: 'flex',
                    }}
                >
                    {/* Decorative blood drops pattern would go here */}
                </div>

                {/* Main Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        zIndex: 1,
                    }}
                >
                    {/* Logo/Icon */}
                    <div
                        style={{
                            width: '120px',
                            height: '120px',
                            background: '#dc2626',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '40px',
                            boxShadow: '0 20px 60px rgba(220, 38, 38, 0.3)',
                        }}
                    >
                        <div style={{ fontSize: '60px', color: 'white' }}>🩸</div>
                    </div>

                    {/* Title */}
                    <h1
                        style={{
                            fontSize: '72px',
                            fontWeight: 'bold',
                            background: 'linear-gradient(to right, #1e293b, #1e40af, #1e293b)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            margin: '0 0 20px 0',
                            lineHeight: 1.2,
                        }}
                    >
                        OneDrop Blood Donation
                    </h1>

                    {/* Subtitle */}
                    <p
                        style={{
                            fontSize: '36px',
                            color: '#64748b',
                            margin: '0 0 30px 0',
                        }}
                    >
                        India's Free Blood Donation App
                    </p>

                    {/* Tagline */}
                    <p
                        style={{
                            fontSize: '32px',
                            color: '#dc2626',
                            fontWeight: 'bold',
                            margin: '0 0 40px 0',
                        }}
                    >
                        Every Drop Saves a Life
                    </p>

                    {/* Features */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '40px',
                            fontSize: '24px',
                            color: '#475569',
                        }}
                    >
                        <span>⚡ Find Donors Instantly</span>
                        <span>•</span>
                        <span>🚫 No Middleman</span>
                        <span>•</span>
                        <span>💯 100% Free</span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
