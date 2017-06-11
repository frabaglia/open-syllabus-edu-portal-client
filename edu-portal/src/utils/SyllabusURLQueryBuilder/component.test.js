import React from 'react'
import ReactDOM from 'react-dom'
import {syllabusURLQueryBuilder} from './component'
import {configs} from '../configs'

it('build querys without crashing', () => {
    var titleParams = {
        page: 1,
        pub_year_start: 1,
        pub_year_end: 2,
        class_year_start: 3,
        class_year_end: 4,
        open_access: true,
        inst_type: 1,
        author: [
            2, 3
        ],
        institution: 3,
        field: 4,
        country: 5,
        us_state: "Testing",
        query: "Testing"
    }

    var authorParams = {
        page: 1,
        institution: [
            1, 2
        ],
        field: 1,
        country: 1,
        query: "Testing"
    }

    var institutionParams = {
        page: 1,
        field: [
            1, 2
        ],
        country: 1,
        query: "Testing"
    }

    var publisherParams = {
        page: 1,
        pub_year_start: 1,
        pub_year_end: 1,
        class_year_start: 1,
        class_year_end: 1,
        field: [
            1, 2
        ],
        country: 1,
        query: "Testing"
    }

    var fieldParams = {
        page: 1,
        country: [
            1, 2
        ],
        query: "Testing"
    }

    var countryParams = {
        page: 1,
        field: [
            1, 2
        ],
        query: "Testing"
    }

    syllabusURLQueryBuilder.addUrlTitleResultsListParams(configs.HOST + ':' + configs.PORT, titleParams)
    syllabusURLQueryBuilder.addUrlAuthorResultsListParams(configs.HOST + ':' + configs.PORT, authorParams)
    syllabusURLQueryBuilder.addUrlInstitutionResultsListParams(configs.HOST + ':' + configs.PORT, institutionParams)
    syllabusURLQueryBuilder.addUrlPublisherResultsListParams(configs.HOST + ':' + configs.PORT, publisherParams)
    syllabusURLQueryBuilder.addUrlFieldResultsListParams(configs.HOST + ':' + configs.PORT, fieldParams)
    syllabusURLQueryBuilder.addUrlCountryResultsListParams(configs.HOST + ':' + configs.PORT, countryParams)
})
