export const validateString = (
  value: unknown,
  maxLength: number,
): value is string => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }

  return message;
};

export const SENDER_EMAIL = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
export const RECIVER_EMAIL =
  process.env.RECIVER_EMAIL || 'hereisyeab@gmail.com';
export const APP_NAME = 'Yeabsera Portfolio';
