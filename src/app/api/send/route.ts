import ClientEmail from "../../../../emails/ClientEmail";
import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("body : ", body);
        const { name, email, company, message } = body;

        const { data, error } = await resend.emails.send({
            from: "Skylence Design's Client <contact@mohammadsakib.me>",
            to: ["skylencedesigns@gmail.com"],
            subject: `New Contact Form Submission from ${name}`,
            react: ClientEmail({
                fullName: name,
                email: email,
                description: message,
                companyName: company,
            }),
        });
        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
