import Registration from "../assets/images/registration.png";
import Article from "../assets/images/article.png";
import Ebook from "../assets/images/ebook.png";
import QrMenu from "../assets/images/qr-menu.png";

export const ProjectList = [
  {
    id: 1,
    projectName: "QR Menu Ordering System",
    projectImg: QrMenu,
    projectDesc:
      "QR-based ordering system to view menus, manage carts, place table-specific orders, and download receipts. Integrated Razorpay for secure UPI/card payments.",
    projectLink: [
      { linkName: "GitHub Repo", link: "https://github.com/Sirjanpreetkaur/qr-menu-ordering" },
      { linkName: "Live Demo", link: "https://qr-menu-ordering-virid.vercel.app/" },
    ],
    technologies: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "React.js" },
      { name: "Vite" },
      { name: "Razorpay" },
      { name: "CI/CD" },
      { name: "GitHub Actions" },
    ],
  },
  {
    id: 2,
    projectName: "Registration",
    projectImg: Registration,
    projectDesc:
      "A user-friendly registration flow built with React. Features real-time validation, conditional fields, onboarding steps, and smooth API integration for signup.",
    projectLink: [
      {
        linkName: "Registration Link",
        link: "https://law.careers360.com/user/register?destination=https://law.careers360.com/articles/clat-result?&click_location=Header-Article",
      },
    ],
    technologies: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "React.js" },
      { name: "Bootstrap" },
      { name: "Redux" },
      { name: "Axios" },
      { name: "Node.js" },
    ],
  },
  {
    id: 3,
    projectName: "Ebook Pages",
    projectImg: Ebook,
    projectDesc:
      "Ebook landing, listing, and detail pages in React. Users can filter, download, review ebooks, and receive exam notifications with a responsive layout.",
    projectLink: [
      {
        linkName: "Ebook Landing",
        link: "https://www.careers360.com/download/all-ebooks-and-sample-papers",
      },
    ],
    technologies: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "React.js" },
      { name: "Bootstrap" },
      { name: "Redux" },
      { name: "Axios" },
      { name: "Node.js" },
    ],
  },
  {
    id: 4,
    projectName: "Article Pages",
    projectImg: Article,
    projectDesc:
      "SEO-optimized article listing and detail pages with React SSR. Includes category filtering, breadcrumbs, lazy loading, and structured data integration.",
    projectLink: [
      {
        linkName: "Article Listing",
        link: "https://www.careers360.com/articles",
      },
    ],
    technologies: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "React.js" },
      { name: "Bootstrap" },
      { name: "Redux" },
      { name: "Axios" },
      { name: "Node.js" },
    ],
  },
];
