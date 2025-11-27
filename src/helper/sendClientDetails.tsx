import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/ClientEmail.jsx";

export async function sendVerificationEmail({
  fullName,
  email,
  description,
  companyName,
}: {
  fullName: string;
  email: string;
  description: string;
  companyName?: string;
}) {
  try {
    await resend.emails.send({
      from: "Skylence Designs Client <skylencedesigns@mohammadsakib.me>",
      to: "skylencedesigns@gmail.com",
      subject: `Message from Skylence&apos;s Client - ${fullName}`,
      react: VerificationEmail({ fullName, email, description, companyName }),
    });
    return {
      success: true,
      message: "Client Details Send Successfully ",
    };
  } catch (emailError) {
    console.error("Error Sending Client Details", emailError);
    return {
      success: false,
      message: "Failed to send Client Details",
    };
  }
}
