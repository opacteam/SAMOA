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
                    data: {
                        description: "More search options",
                        data: [{
                                title: "Field 1",
                                field: "",
                                data: [
                                    { label: "Test 1", value: "123" },
                                    { label: "Test 2", value: "123" },
                                    { label: "Test 3", value: "123" },
                                    { label: "Test 4", value: "123" },
                                    { label: "Test 5", value: "123" },
                                    { label: "Test 6", value: "123" },
                                    { label: "Test 7", value: "123" },
                                ],
                            },


                            {
                                title: "Field 2",
                                field: "",
                                data: [
                                    { label: "Test 1", value: "123" },
                                    { label: "Test 2", value: "123" },
                                    { label: "Test 3", value: "123" },
                                    { label: "Test 4", value: "123" },
                                    { label: "Test 5", value: "123" },
                                    { label: "Test 6", value: "123" },
                                    { label: "Test 7", value: "123" },
                                ]
                            },
                            {
                                title: "Field 3",
                                field: "",
                                data: [
                                    { label: "Test 1", value: "123" },
                                    { label: "Test 2", value: "123" },
                                    { label: "Test 3", value: "123" },
                                    { label: "Test 4", value: "123" },
                                    { label: "Test 5", value: "123" },
                                    { label: "Test 6", value: "123" },
                                    { label: "Test 7", value: "123" },
                                ]
                            },
                            {
                                title: "Field 4",
                                field: "",
                                data: [
                                    { label: "Test 1", value: "123" },
                                    { label: "Test 2", value: "123" },
                                    { label: "Test 3", value: "123" },
                                    { label: "Test 4", value: "123" },
                                    { label: "Test 5", value: "123" },
                                    { label: "Test 6", value: "123" },
                                    { label: "Test 7", value: "123" },
                                ]
                            }
                        ]
                    }

                }
            },
        },
        {
            component: "Section",
            data: {
                heading: "ABOUT US",
                description: "The Heritage Services Division of the Parks, Recreation & Culture Department operates the facilities and services located at the Surrey Museum, Historic Stewart Farm and the City of Surrey Archives. In addition, Heritage Services facilitates the city-wide distribution and delivery of heritage interpretive activities. We hope to see you at our facilities soon!",
                url: "/",
                urlTitle: "View More",
            },
        }


    ]
}]

export default ArchivesSearch;