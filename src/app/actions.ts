"use server";

import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendContactEmail(prevState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Please check your input and try again.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, subject, message } = validatedFields.data;
    const webhookUrl = process.env.DISCORD_CONTACT_WEBHOOK;

    if (!webhookUrl) {
        console.error("DISCORD_CONTACT_WEBHOOK is not defined");
        return {
            success: false,
            message: "Configuration error. Please try again later.",
        };
    }

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: "<@475357995367137282> You have a new contact form submission!",
                embeds: [
                    {
                        title: "📩 New Contact Message",
                        color: 0xff0000, // Red color
                        fields: [
                            {
                                name: "👤 Name",
                                value: name,
                                inline: true,
                            },
                            {
                                name: "📧 Email",
                                value: email,
                                inline: true,
                            },
                            {
                                name: "📝 Subject",
                                value: subject,
                            },
                            {
                                name: "💬 Message",
                                value: message,
                            },
                        ],
                        footer: {
                            text: "OneDrop Contact Form",
                            icon_url: "https://onedrops.online/onedrop_logo.png",
                        },
                        timestamp: new Date().toISOString(),
                    },
                ],
            }),
        });

        if (!response.ok) {
            throw new Error(`Discord API responded with ${response.status}`);
        }

        return {
            success: true,
            message: "Message sent successfully! We'll get back to you soon.",
            errors: {},
        };
    } catch (error) {
        console.error("Failed to send discord webhook:", error);
        return {
            success: false,
            message: "Failed to send message. Please try again later.",
        };
    }
}
