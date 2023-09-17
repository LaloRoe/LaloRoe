//export default {};
const config = {
    // title will be displayed on the top of your site
    title: "LaloRoe.com",
    // adding a description helps with SEO
    description: "Mi blog personal y profesional",
    // author of site displayed on the bottom of your site
    author: "laloroe",
    // logo image
    //authorLogo: "/images/logo.svg",
    // url to author website
    //domain: "https://john.app/",
    // links to the pages you want to link to in the navbar
    navLinks: [{ href: "/perfil", name: "Perfil" },{ href: "/notas", name: "Mis Notas" },{ href: "/DS_IA", name: "Data Science e Inteligencia Artificial" },{ href: "/mas", name: "Más" },{ href: "/blog", name: "Blog" }],
    navBarTitle: {
    text: "LaloRoe WebSite",
    //logo: "/assets/your-logo.svg", // optional
  },  
    search: {
        provider: "kbar",
  },
    showToc: true,
};
  
  export default config;
