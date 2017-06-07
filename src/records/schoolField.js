export const SchoolField = new Record({
    topRanked: {
        titles: [{
            _id: undefined,
            rank: undefined,
            textName: "",
            author: {
                _id: undefined,
                authorName: ""
            },
            appearences: {
                total: undefined
            },
            score: undefined
        }]
    },
    topTitlesByYear: []
})
