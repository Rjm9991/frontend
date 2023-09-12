import { FALCONER_ENDPOINT } from '../../../constants';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface FeedbackRequest {
  name: string;
  email: string;
  message: string;
  ip: string;
  domain: 'haqq.network' | 'islamiccoin.net';
  captcha_token: string;
}

interface FeedbackErrorResponse {
  error_type: 'validation';
  error_description: string;
}

interface FeedbackSuccessResponse {
  success: true;
}

type FeedbackResponse = FeedbackSuccessResponse | FeedbackErrorResponse;

export async function POST(request: NextRequest) {
  const ip = request.ip ?? '[::1]';
  const { email, token, name, message }: Record<string, string> =
    await request.json();
  const feedbackRequest: FeedbackRequest = {
    domain: 'haqq.network',
    ip,
    email,
    name,
    message,
    captcha_token: token,
  };
  console.log({ feedbackRequest });

  const feedbackUrl = new URL('/feedback/send', FALCONER_ENDPOINT);
  const feedbackResponse = await fetch(feedbackUrl.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedbackRequest),
  });
  const feedbackResponseJson: FeedbackResponse = await feedbackResponse.json();
  console.log({ feedbackResponseJson });

  if ('success' in feedbackResponseJson && feedbackResponseJson.success) {
    return NextResponse.json<{ message: string }>(
      { message: 'Message sent' },
      { status: 200 },
    );
  } else {
    console.log('error', { feedbackResponseJson });
    return NextResponse.json<{ error: string }>(
      {
        error: (feedbackResponseJson as FeedbackErrorResponse)
          .error_description,
      },
      { status: 400 },
    );
  }
}
