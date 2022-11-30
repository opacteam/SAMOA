const Home = [{
    component: "Layout",
    children: [{
            component: "SimpleSearchBanner",
            data: {
                bannerURL: "https://www.surrey.ca/sites/default/files/styles/21x9_1920w/public/2022-10/fall-trees-in-surrey.jpg?h=56d0ca2e&itok=YzKjACHG",
                heading: "Surrey Archives and Museums Online Access",
                description: "Browse all of the City's Heritage Collections with a union search, or search the Archives or Artifact Collections separately. Don't miss the featured items from both the Archives and Artifact collection below."
            }
        },
        {
            component: "Section",
            data: {
                heading: "ABOUT US",
                description: "The Heritage Services Division of the Parks, Recreation & Culture Department operates the facilities and services located at the Surrey Museum, Historic Stewart Farm and the City of Surrey Archives. In addition, Heritage Services facilitates the city-wide distribution and delivery of heritage interpretive activities. We hope to see you at our facilities soon!",
                url: "/",
                urlTitle: "View More",
            },
            children: [{
                    component: "DescriptionCard",
                    data: {
                        position: 0,
                        thumbnail: "https://i.imgur.com/YX6yWsW.jpg",
                        title: "Surrey Archives",
                        heading: "Archives Collection",
                        description: "The Surrey Archives is home to the documentary history of the City of Surrey. Its holdings include, but are not limited to, photographs, manuscripts, maps, architectural plans, audio-visual materials and an extensive reference collection. Located in one of the City's premier heritage buildings, the 1912 Municipal Hall in Cloverdale, the Archives preserves and provides access to records of Surrey's residents, community groups, businesses, and government",
                        url: "/",
                        urlTitle: "View More",
                    }
                },

            ]
        },
        {
            component: "Section",
            data: {
                heading: "SURREY ARCHIVES",
                description: "The Archives contains photos, maps, textual records, oral histories, community records, and city records.",
                url: "/",
                urlTitle: "View More",
            },
            children: [{
                component: "ImageCarousel",
                data: {
                    data: [{
                            "thumbnail": "https://picsum.photos/400",
                            "title": "Library"
                        },
                        {
                            "thumbnail": "https://picsum.photos/450",
                            "title": "Books"
                        },
                        {
                            "thumbnail": "https://picsum.photos/500",
                            "title": "Library"
                        },
                        {
                            "thumbnail": "https://picsum.photos/550",
                            "title": "Library"
                        },
                        {
                            "thumbnail": "https://picsum.photos/600",
                            "title": "Library"
                        },
                        {
                            "thumbnail": "https://picsum.photos/650",
                            "title": "Library"
                        },
                        {
                            "thumbnail": "https://picsum.photos/700",
                            "title": "Library"
                        },
                        {
                            "thumbnail": "https://picsum.photos/750",
                            "title": "Library"
                        },
                        {
                            "thumbnail": "https://picsum.photos/800",
                            "title": "Library"
                        },
                        {
                            "thumbnail": "https://picsum.photos/850",
                            "title": "Library"
                        }
                    ]
                }
            }]
        },
        {
            component: "Section",
            data: {
                heading: "SURREY ARTIFACT COLLECTIONS",
                description: "The Artifact Collection feature archaeology, ethnology, and human history materials that reflect the history of Surrey.",
                url: "/",
                urlTitle: "View More",
            },
            children: []
        },
        {
            component: "Section",
            data: {
                heading: "FEATURED COLLECTION",
                description: "Featured Items from the Archives and Artifact Collections",
                url: "/",
                urlTitle: "View More",
            },
            children: []
        },
        {
            component: "Section",
            data: {
                heading: "COLLECTION MAP",
                description: "Featured Items from the Archives and Artifact Collections",
                url: "/",
                urlTitle: "View More",
            },
            children: []
        },

    ]
}]
export default Home;