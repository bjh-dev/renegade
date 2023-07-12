export function formatPhoneNumber(phoneNumber: string): string {
   const cleaned = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters
  const match = cleaned.match(/^(\d{2})(\d{4})(\d{3})(\d{3})$/); // Match pattern for 10-digit phone number
  if (match) {
    const areaCode = match[1];
    const firstPart = match[2];
    const secondPart = match[3] || match[4]; // Use either the 3rd or 4th captured group
    if (areaCode === '04') {
      return `${areaCode} ${firstPart} ${secondPart}`; // Format as "04XX XXX XXX"
    } else {
      return `(${areaCode}) ${firstPart} ${secondPart}`; // Format as "(XX) XXXX XXXX"
    }
  }
  return phoneNumber; // Return original string if it doesn't match the pattern
}

export function slugifyPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters

  if (cleaned.length === 10) {
    const areaCode = cleaned.substring(0, 2);
    const firstPart = cleaned.substring(2, 6);
    const secondPart = cleaned.substring(6);

    return `tel:+61${areaCode}${firstPart}${secondPart}`;
  }

  return phoneNumber; // Return original string if it doesn't match the expected format
}

