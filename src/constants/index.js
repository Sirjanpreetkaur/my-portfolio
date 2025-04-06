import Subdomain from "../assets/images/subdomain.png";
import Registration from "../assets/images/registration.png";
import Article from "../assets/images/article.png";
import Ebook from "../assets/images/ebook.png";

export const ProjectList = [
  {
    id: 1,
    projectName: "Registration",
    projectImg: Registration,
    projectDesc: "This project focuses on a user-friendly registration flow built with React. It includes a dynamic form with real-time validation, conditional field rendering, and onboarding steps. It ensures smooth signup, error handling, and accessibility across devices. Integration with backend APIs allows seamless data submission and retrieval, enhancing the user experience.",
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
    id: 2,
    projectName: "Article Pages",
    projectImg: Article,
    projectDesc: "Developed using React SSR, this module handles article listing and detail pages with SEO-optimized rendering. Users can explore articles by categories and tags. Features like breadcrumb navigation, related articles, and lazy loading enhance usability and performance. Designed to manage large-scale content efficiently with structured data integration.",
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
  {
    id: 3,
    projectName: "Ebook Pages",
    projectImg: Ebook,
    projectDesc: "This module includes Ebook Landing, Listing, and Detail pages developed in React. Users can browse ebooks by filters, download them, write reviews, and get exam-related notifications. The layout is responsive and user-centric, offering personalized content delivery with seamless download functionality and enhanced engagement features.",
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
    projectName: "Subdomain Pages",
    projectImg: Subdomain,
    projectDesc: "This project renders dynamic subdomain-based pages using React SSR. It supports SEO-friendly, fast-loading pages for institutions or categories with unique URLs. Each subdomain has custom banners, headers, and tailored content. The architecture ensures content isolation, better indexing, and consistent branding across all subdomains.",
    projectLink: [
      { linkName: "Subdomain Home Page", link: "https://law.careers360.com/" },
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
