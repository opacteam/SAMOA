const ArchivesSearch = [{
    component: "Layout",
    children: [{
        component: "AdvancedSearchBanner",
        data: {
            bannerURL: "https://i.imgur.com/VZzGs4y.jpg",
            heading: "Search the Archives",
            description: "The Surrey Archives is home to Surrey's history. Original photos, maps, manuscripts, city and community records and an extensive reference collection are waiting for you. Search for and view over 50,000 photos on SAMOA.",
            toggleSearchFilter: {
                data: {
                    description: "Include the following types of records in the search:",
                    data: [
                        { label: "Maps/Plans", field: "Map" },
                        { label: "Photographs", field: "IMAGE" },
                        { label: "Textual Records", field: "TEXT" },
                        { label: "Oral Histories", field: "HISTORY" },
                    ]
                }
            },
            collapseSearchFilter: {


            }
        },

    }, ]
}]

export default ArchivesSearch;