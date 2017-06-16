export const Field = new Record({
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
        }],
        authors: [{
            _id: undefined,
            authorName: ""
        }]
    },
    syllabiByInstitution: [],
    topTitlesByYear: []
})
