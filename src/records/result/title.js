export const Title = new Record({
    _id: undefined,
    rank: undefined,
    score: undefined,
    titleName: "",
    author: {
        _id: undefined,
        authorName: ""
    },
    publisher: {
        _id: undefined,
        publisherName: ""
    },
    appearences: {
        total: undefined,
        byField: [{
            _id: undefined,
            fieldName: "",
            amount: undefined
        }]
    },
    textAssignedWith: [{
        _id: undefined,
        titleName: "",
        count: undefined,
        author: {
            _id: undefined,
            authorName: ""
        }
    }],
    availability: {
        openVersion: {
            name: "",
            url: ""
        },
        viaYourInstitution: {
            name: "",
            url: ""
        }
    },
    seeTheTextOn: [{
        name: "",
        url: ""
    }],
    topFieldsByYearMap: [],
    topFieldsByYearChart: []
})
