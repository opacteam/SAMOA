 const FAQ = [{
     component: 'Layout',
     children: [{
             component: "SimpleSearchBanner",
             data: {
                 bannerURL: "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2021-05/SeniorOnTablet.jpeg?h=93ff39ef&itok=rNlCoNyd",
                 heading: "Frequently Asked Questions",
                 description: "We are here to answer your questions",

             }
         }, {
             component: "Section",
             data: {
                 heading: "ABOUT US",
                 description: "The Heritage Services Division of the Parks, Recreation & Culture Department operates the facilities and services located at the Surrey Museum, Historic Stewart Farm and the City of Surrey Archives. In addition, Heritage Services facilitates the city-wide distribution and delivery of heritage interpretive activities. We hope to see you at our facilities soon!",

             },
             children: [{
                     component: 'DescriptionCard',
                     data: {
                         position: 0,
                         "thumbnail": "https://i.imgur.com/YX6yWsW.jpg",
                         "heading": "Surrey Archives",
                         "description": "The Surrey Archives is home to the documentary history of the City of Surrey. Its holdings include, but are not limited to, photographs, manuscripts, maps, architectural plans, audio-visual materials and an extensive reference collection. Located in one of the City's premier heritage buildings, the 1912 Municipal Hall in Cloverdale, the Archives preserves and provides access to records of Surrey's residents, community groups, businesses, and government",
                         "title": "Archives Collection",
                         url: "/",
                         urlTitle: "Visit The Archive"
                     },
                 },
                 {
                     component: 'DescriptionCard',
                     data: {
                         position: 1,
                         "thumbnail": "https://i.imgur.com/YX6yWsW.jpg",
                         "heading": "Historic Stewart Farm",
                         "description": "The Historic Stewart Farm is a designated heritage site, including eight historic buildings, located in Elgin Heritage Park in South Surrey. The original 1894 Farmhouse and various farm buildings interpret life in Surrey between 1890 and 1920 and provide exhibitions and programs to depict the life and technology of that period.",
                         "title": "Artifact Collection",
                         url: "/",
                         urlTitle: "Visit The Artifact"
                     },
                 }
             ]
         },

         {
             component: "Section",
             data: {
                 heading: "Choose the topics"
             },
             children: [{
                     component: "DescriptionBox",
                     data: {
                         heading: "How to search",
                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
                         url: "/",
                         urlTitle: "Learn more",
                         icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
                         iconLabel: "Article"
                     }
                 },

                 {
                     component: "DescriptionBox",
                     data: {
                         heading: "How to search",
                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
                         url: "/",
                         urlTitle: "Learn more",
                         icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
                         iconLabel: "Article"
                     }
                 }, {
                     component: "DescriptionBox",
                     data: {
                         heading: "How to search",
                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
                         url: "/",
                         urlTitle: "Learn more",
                         icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
                         iconLabel: "Article"
                     }
                 }, {
                     component: "DescriptionBox",
                     data: {
                         heading: "How to search",
                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
                         url: "/",
                         urlTitle: "Learn more",
                         icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
                         iconLabel: "Article"
                     }
                 }, {
                     component: "DescriptionBox",
                     data: {
                         heading: "How to search",
                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
                         url: "/",
                         urlTitle: "Learn more",
                         icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
                         iconLabel: "Article"
                     }
                 }, {
                     component: "DescriptionBox",
                     data: {
                         heading: "How to search",
                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
                         url: "/",
                         urlTitle: "Learn more",
                         icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
                         iconLabel: "Article"
                     }
                 }, {
                     component: "DescriptionBox",
                     data: {
                         heading: "How to search",
                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
                         url: "/",
                         urlTitle: "Learn more",
                         icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
                         iconLabel: "Article"
                     }
                 }, {
                     component: "DescriptionBox",
                     data: {
                         heading: "How to search",
                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
                         url: "/",
                         urlTitle: "Learn more",
                         icon: "https://cdn-icons-png.flaticon.com/512/3524/3524335.png",
                         iconLabel: "Article"
                     }
                 },
             ]
         },
         {
             component: "Section",
             data: {
                 heading: "FAQ's"
             },
             children: [{
                 component: "Accordion",
                 data: {
                     data: [
                         { title: "Where can I create an account", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices tincidunt arcu. At lectus urna duis convallis. Elementum tempus egestas sed sed risus." },
                         { title: "Where can I create an account", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices tincidunt arcu. At lectus urna duis convallis. Elementum tempus egestas sed sed risus." },
                         { title: "Where can I create an account", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices tincidunt arcu. At lectus urna duis convallis. Elementum tempus egestas sed sed risus." }, { title: "Where can I create an account", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices tincidunt arcu. At lectus urna duis convallis. Elementum tempus egestas sed sed risus." }
                     ]
                 }
             }]
         },

     ]
 }]

 export default FAQ;