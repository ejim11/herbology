export const shippingData: {
  header: string;
  subHeader?: string;
  texts?: string[];
  endText?: string;
}[] = [
  {
    header: "Order Processing",
    subHeader: "We process your orders as follows:",
    texts: [
      "Orders are submitted through our Checkout Form, which collects your first name, last name, email address, phone number, state, city, Local Government Area (LGA), and address.",
      "Once your order is received, it is sent directly to our WhatsApp account for processing. We will confirm your order details and provide an estimated delivery timeline via WhatsApp.",
      "Orders are typically processed within 1-2 business days, excluding weekends and public holidays. You will be notified via WhatsApp if there are any delays.",
    ],
  },
  {
    header: "Shipping Methods and Costs",
    subHeader: "We ensure reliable delivery through trusted partners:",
    texts: [
      "We partner with trusted local and regional courier services to deliver your order. The specific courier will be communicated to you via WhatsApp after order confirmation.",
      "Shipping costs are calculated based on your location (state, city, and LGA) and the weight of your order. The exact cost will be provided via WhatsApp before your order is finalized.",
      "Free shipping may be available for orders above a certain amount, as determined at the time of order confirmation. Any such offers will be communicated via WhatsApp.",
    ],
  },
  {
    header: "Delivery Timelines",
    subHeader: "Delivery times vary depending on your location:",
    texts: [
      "Local Deliveries (within the same city or LGA): 1-3 business days after order processing.",
      "Regional Deliveries (within the same state): 3-5 business days after order processing.",
      "Other Locations: 5-7 business days, depending on the courier and destination.",
      "You will receive tracking information (if available) via WhatsApp once your order is dispatched.",
      "Delivery times are estimates and may be affected by factors such as weather, public holidays, or courier delays. We will keep you updated via WhatsApp.",
    ],
  },
  {
    header: "Shipping Confirmation and Tracking",
    texts: [
      "Once your order is shipped, we will send a confirmation message via WhatsApp with the courier details and, if applicable, a tracking number or link.",
      "If tracking is not available, we will provide updates on your order status through WhatsApp communication with the courier.",
    ],
  },
  {
    header: "Delivery Issues",
    subHeader: "We address delivery issues promptly:",
    texts: [
      "Incorrect Address: Please ensure the address provided in the Checkout Form is accurate. Herbology is not responsible for delays or failed deliveries due to incorrect or incomplete address information.",
      "Failed Delivery Attempts: If a delivery attempt fails (e.g., no one is available to receive the package), the courier will notify us, and we will contact you via WhatsApp to reschedule or arrange an alternative solution.",
      "Lost or Damaged Packages: If your package is lost or arrives damaged, please contact us immediately via WhatsApp. We will work with the courier to resolve the issue, which may include a replacement or refund, subject to our discretion.",
    ],
  },
  {
    header: "International Shipping",
    texts: [
      "At this time, Herbology does not offer international shipping. We deliver only to locations within Nigeria, as specified by the state, city, and LGA provided in the Checkout Form.",
    ],
  },
  {
    header: "Returns and Refunds",
    texts: [
      "For information on returns or refunds due to shipping issues, please refer to our Returns Policy, available upon request via WhatsApp.",
      "Any shipping-related refund requests (e.g., for lost packages) must be submitted via WhatsApp within 7 days of the estimated delivery date.",
    ],
  },
  {
    header: "Contact Us",
    subHeader: "For any questions about your order or this Shipping Policy:",
    texts: [
      "Contact us via WhatsApp at +2349131212512. We aim to respond within 24 hours, excluding weekends and public holidays.",
    ],
    endText:
      "We appreciate your trust in Herbology and are committed to delivering your order promptly and securely.",
  },
];
