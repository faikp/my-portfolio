import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return Response.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "faikpatel844@gmail.com",
            subject: `New portfolio message from ${name}`,
            replyTo: email,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
        });

        return Response.json(
            { message: "Message sent successfully." },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}