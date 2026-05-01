import { NextResponse } from 'next/server';
import { Firestore, FieldValue } from '@google-cloud/firestore';

// Initialize Firestore
// In a Cloud Run environment within the same project, it automatically picks up the credentials.
const firestore = new Firestore();
const CONTACT_COLLECTION = 'contact_submissions';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Prepare document
    const docData = {
      name,
      email,
      message,
      submittedAt: FieldValue.serverTimestamp(),
    };

    // Save to Firestore
    await firestore.collection(CONTACT_COLLECTION).add(docData);

    return NextResponse.json({ success: true, message: 'Message saved securely to GCP.' });
  } catch (error) {
    console.error('Firestore Error:', error);
    return NextResponse.json(
      { error: 'Failed to save message to database.' },
      { status: 500 }
    );
  }
}
