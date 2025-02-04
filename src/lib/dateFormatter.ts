export default function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-GB", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  }