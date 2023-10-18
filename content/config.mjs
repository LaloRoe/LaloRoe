//export default {};
const config = {
    // title will be displayed on the top of your site
    title: "MisNotas.com",
    // adding a description helps with SEO
    description: "Mi Notas de Formación Profecional",
    // author of site displayed on the bottom of your site
    author: "laloroe",
    showComments: true,
    comments: {
        provider: "utterances",
        config: {
          repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
    },
  },
    // logo image
    //authorLogo: "/images/logo.svg",
    // url to author website
    //domain: "https://john.app/",
    // links to the pages you want to link to in the navbar
    navLinks: [{ href: "/people/laloroe", name: "Autor" },{ href: "/matematicas", name: "Matemáticas" },{ href: "/DS_IA", name: "Data Science e Inteligencia Artificial" },{ href: "/negocios", name: "Negocios" },{ href: "/blog", name: "Blog" }],
    navBarTitle: {
    text: "Mis Notas",
    //logo: "/assets/your-logo.svg", // optional
  },  
    search: {
        provider: "kbar",
  },
    showToc: true,
};
  
  export default config;
