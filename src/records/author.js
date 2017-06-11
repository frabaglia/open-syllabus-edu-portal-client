export const Author = new Record({
    _id: undefined,
    authorName: "",
    authorDescription: "",
    appearences: {
        total: undefined,
        byField: [{
            _id: undefined,
            fieldName: "",
            amount: undefined
        }]
    },
    authorTitles: [{
        titleName: "",
        image: "",
        publisher: {
            _id: undefined,
            publisherName: ""
        },
        appearences: {
            byUniqueField: {
                _id: undefined,
                fieldName: "",
                amount: undefined
            }
        },
        publishedYear: undefined,
        unattributed: undefined,
        score: undefined
    }],
    topTitlesByYear: []
})
