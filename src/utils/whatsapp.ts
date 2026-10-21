export const TRAINER_WHATSAPP = '917888825122';
export const TRAINER_PHONE = '+917888825122';

export type WhatsAppActionType = 'demo' | 'talk' | 'batch' | 'start' | 'syllabus' | 'carrier';

export function getWhatsAppUrl(type: WhatsAppActionType, context?: string): string {
  let message = '';
  switch (type) {
    case 'start':
      message = context
        ? `Hello BBJ Dispatch, I want to get started with ${context}. Please share how to begin.`
        : 'Hello BBJ Dispatch, I want to get started with the 45-Day Truck Dispatch Training program. Please share the details to begin.';
      break;
    case 'syllabus':
      message = 'Hello BBJ Dispatch, I would like to receive the complete 45-day day-wise syllabus and fee structure.';
      break;
    case 'demo':
      message = context
        ? `Hello BBJ Dispatch, I want to book the ₹49 Demo Class for ${context}. Please share the UPI/QR payment details and schedule.`
        : 'Hello BBJ Dispatch, I want to book the ₹49 Demo Class for the 45-Day Truck Dispatch Training. Please share the UPI/QR payment details and schedule.';
      break;
    case 'talk':
      message = context
        ? `Hello BBJ Dispatch, I would like to talk with the team regarding ${context}.`
        : 'Hello BBJ Dispatch, I would like to talk with an admissions counselor / trainer about the truck dispatch training program.';
      break;
    case 'batch':
      message = context
        ? `Hello BBJ Dispatch, I want to know about the next batch dates and seat availability for ${context}.`
        : 'Hello BBJ Dispatch, I want to know about the next batch start dates, seat availability, and online/offline timings.';
      break;
    case 'carrier':
      message = context
        ? `Hello BBJ Dispatch, I am a carrier / owner-operator interested in your ${context}. Please share onboarding details and how we can get started.`
        : 'Hello BBJ Dispatch, I am a carrier / owner-operator inquiring about your commercial Truck Dispatch & Freight Brokerage services.';
      break;
  }
  return `https://wa.me/${TRAINER_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(type: WhatsAppActionType, context?: string): void {
  if (typeof window === 'undefined') return;
  const url = getWhatsAppUrl(type, context);

  // Open strictly in a new tab/window without modifying the current page
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function openDialer(phoneNumber: string = TRAINER_PHONE): void {
  window.location.href = `tel:${phoneNumber.replace(/\s+/g, '')}`;
}
