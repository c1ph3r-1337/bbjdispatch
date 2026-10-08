export const TRAINER_WHATSAPP = '917888825122';
export const TRAINER_PHONE = '+917888825122';

export type WhatsAppActionType = 'demo' | 'talk' | 'batch' | 'start' | 'syllabus';

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
        ? `Hello BBJ Dispatch, I want to book a free demo class for ${context}. Please share the schedule.`
        : 'Hello BBJ Dispatch, I want to book a free demo class for the 45-Day Truck Dispatch Training. Please share the available schedule.';
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
  }
  return `https://wa.me/${TRAINER_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(type: WhatsAppActionType, context?: string): void {
  const url = getWhatsAppUrl(type, context);
  const isMobile =
    typeof window !== 'undefined' &&
    (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 768);

  if (isMobile) {
    window.location.href = url;
    return;
  }

  const win = window.open(url, '_blank', 'noopener,noreferrer');
  if (!win || win.closed || typeof win.closed === 'undefined') {
    window.location.href = url;
  }
}

export function openDialer(phoneNumber: string = TRAINER_PHONE): void {
  window.location.href = `tel:${phoneNumber.replace(/\s+/g, '')}`;
}
