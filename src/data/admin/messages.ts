import type { ContactMessage } from "@/types/content";

export const messagesData: ContactMessage[] = [
  {
    id: "msg-1",
    name: "Tesfaye Alemu",
    email: "tesfaye.alemu@example.com",
    subject: "Question about loan eligibility",
    body: "I would like to know the requirements for applying for a small business loan as a new member of the cooperative.",
    date: "2024-05-19",
    status: "unread",
  },
  {
    id: "msg-2",
    name: "Beza Girma",
    email: "beza.girma@example.com",
    subject: "Branch opening hours",
    body: "Could you confirm the opening hours for the Jimma main branch on Saturdays?",
    date: "2024-05-18",
    status: "read",
  },
  {
    id: "msg-3",
    name: "Solomon Kebede",
    email: "solomon.kebede@example.com",
    subject: "Feedback on mobile banking",
    body: "The new mobile banking update has been really helpful. Thank you for the improvements!",
    date: "2024-05-17",
    status: "replied",
  },
  {
    id: "msg-4",
    name: "Meron Tadesse",
    email: "meron.tadesse@example.com",
    subject: "Membership transfer",
    body: "I recently relocated to Bahir Dar and want to transfer my membership to the new branch.",
    date: "2024-05-15",
    status: "unread",
  },
  {
    id: "msg-5",
    name: "Nardos Haile",
    email: "nardos.haile@example.com",
    subject: "Interested in fixed deposit rates",
    body: "Please send me the current interest rates for 12-month fixed deposit accounts.",
    date: "2024-05-12",
    status: "read",
  },
];
