export const sendMessage = (msgStr: string) => {
  // Remove non-numeric characters from phone number
  const phone = "+2348107171280".replace(/\D/g, "");

  // Encode the message to handle special characters
  const encodedMessage = encodeURIComponent(msgStr);

  // Construct WhatsApp URL
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const whatsappUrl = isMobile
    ? `whatsapp://send?phone=${phone}&text=${encodedMessage}`
    : `https://wa.me/${phone}?text=${encodedMessage}`;

  // Open the URL in a new tab or redirect
  window.open(whatsappUrl, "_blank");
};
