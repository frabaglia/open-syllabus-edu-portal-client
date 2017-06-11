import {
    configs
} from '../configs'
import {
    syllabusURLQueryBuilder
} from '../SyllabusURLQueryBuilder/component'
import axios from 'axios'
import store from '../../store/index'
import {
    TYPE_TITLE,
    TYPE_AUTHOR,
    TYPE_INSTITUTION,
    TYPE_FIELD,
    TYPE_COUNTRY,
    TYPE_PUBLISHER,
    TYPE_INSTITUTION_FIELD
} from '../../store/storeTypes'
import {
    isStoredDataUpToDate
} from '../Date/component'

const DEV_ERROR = "Simulated development error."
    // FIXEAR PARA PRODUCCION process.env.NODE_ENV === "development"

class SyllabusHTTPService {

    constructor(baseUrl) {
        console.log("Creating SyllabusHTTPService...")
        console.log("baseUrl:" + baseUrl)
        this.baseUrl = baseUrl
    }

    getTitleResultsList = (params) => {
        let url = syllabusURLQueryBuilder.addUrlTitleResultsListParams(this.baseUrl + "/api/texts", params)

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetTitleResultsListPromise) : axios.get(url)
    }

    getTitleResult = (_id) => {
        let url = this.baseUrl + "/api/texts" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetTitleResultPromise) : axios.get(url)
    }

    getTitleResultNormalized = (_id) => {
        let url = this.baseUrl + "/api/texts" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetTitleResultNormalizedPromise) : axios.get(url)
    }

    getAuthorResultsList = (params) => {
        let url = syllabusURLQueryBuilder.addUrlAuthorResultsListParams(this.baseUrl + "/api/authors", params)

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetAuthorResultsListPromise) : axios.get(url)
    }

    getAuthorResult = (_id) => {
        let url = this.baseUrl + "/api/authors" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetAuthorResultPromise) : axios.get(url)
    }

    getAuthorResultNormalized = (_id) => {
        let url = this.baseUrl + "/api/authors" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetAuthorResultNormalizedPromise) : axios.get(url)
    }

    getFieldResultsList = (params) => {
        let url = syllabusURLQueryBuilder.addUrlFieldResultsListParams(this.baseUrl + "/api/fields", params)

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetFieldResultsListPromise) : axios.get(url)
    }

    getFieldResult = (_id) => {
        let url = this.baseUrl + "/api/fields" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetFieldResultPromise) : axios.get(url)
    }

    getFieldResultNormalized = (_id) => {
        let url = this.baseUrl + "/api/fields" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetFieldResultNormalizedPromise) : axios.get(url)
    }

    getInstitutionResultsList = (params) => {
        let url = syllabusURLQueryBuilder.addUrlInstitutionResultsListParams(this.baseUrl + "/api/institutions", params)

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetInstitutionResultsListPromise) : axios.get(url)
    }

    getInstitutionResult = (_id) => {
        let url = this.baseUrl + "/api/institutions" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetInstitutionResultPromise) : axios.get(url)
    }

    getInstitutionResultNormalized = (_id) => {
        let url = this.baseUrl + "/api/institutions" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetInstitutionResultNormalizedPromise) : axios.get(url)
    }

    getInstitutionFieldResult = (_id) => {
        let url = this.baseUrl + "/api/institutions-field" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetInstitutionFieldResultPromise) : axios.get(url)
    }

    getInstitutionFieldResultNormalized = (_id) => {
        let url = this.baseUrl + "/api/institutions-field" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetInstitutionFieldResultNormalizedPromise) : axios.get(url)
    }

    getCountryFieldResult = (_id) => {
        let url = this.baseUrl + "/api/institutions-field" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetCountryFieldResultPromise) : axios.get(url)
    }

    getCountryFieldResultNormalized = (_id) => {
        let url = this.baseUrl + "/api/institutions-field" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetCountryFieldResultNormalizedPromise) : axios.get(url)
    }

    getCountryResultsList = (params) => {
        let url = syllabusURLQueryBuilder.addUrlCountryResultsListParams(this.baseUrl + "/api/countries", params)

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetCountryResultsListPromise) : axios.get(url)
    }

    getCountryResult = (_id) => {
        let url = this.baseUrl + "/api/countries" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetCountryResultPromise) : axios.get(url)
    }

    getCountryResultNormalized = (_id) => {
        let url = this.baseUrl + "/api/countries" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetCountryResultNormalizedPromise) : axios.get(url)
    }

    getPublisherResultsList = (params) => {
        let url = syllabusURLQueryBuilder.addUrlPublisherResultsListParams(this.baseUrl + "/api/publishers", params)

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetPublisherResultsListPromise) : axios.get(url)
    }

    getPublisherResult = (_id) => {
        let url = this.baseUrl + "/api/publishers" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetPublisherResultPromise) : axios.get(url)
    }

    getPublisherResultNormalized = (_id) => {
        let url = this.baseUrl + "/api/publishers" + _id

        console.log("Sending HTTP request: " + url)

        return (true) ? new Promise(this.settledGetPublisherResultNormalizedPromise) : axios.get(url)
    }

    getMostFrecuentTitles = () => {
        let url = this.baseUrl + "/api/most-frecuent/texts"

        console.log("Sending HTTP request: " + url)

        if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_TITLE, 'updatedAt'])))
            return new Promise(this.settledGetLSMostFrecuentTitlesPromise)

        return (true) ? new Promise(this.settledGetMostFrecuentTitlesPromise) : axios.get(url)
    }

    getMostFrecuentAuthors = () => {
        let url = this.baseUrl + "/api/most-frecuent/authors"

        console.log("Sending HTTP request: " + url)

        if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_AUTHOR, 'updatedAt'])))
            return new Promise(this.settledGetLSMostFrecuentAuthorsPromise)

        return (true) ? new Promise(this.settledGetMostFrecuentAuthorsPromise) : axios.get(url)
    }

    getMostFrecuentFields = () => {
        let url = this.baseUrl + "/api/most-frecuent/fields"

        console.log("Sending HTTP request: " + url)

        if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_FIELD, 'updatedAt'])))
            return new Promise(this.settledGetLSMostFrecuentFieldsPromise)

        return (true) ? new Promise(this.settledGetMostFrecuentFieldsPromise) : axios.get(url)
    }

    getMostFrecuentInstitutions = () => {
        let url = this.baseUrl + "/api/most-frecuent/institutions"

        console.log("Sending HTTP request: " + url)

        if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_INSTITUTION, 'updatedAt'])))
            return new Promise(this.settledGetLSMostFrecuentInstitutionsPromise)

        return (true) ? new Promise(this.settledGetMostFrecuentInstitutionsPromise) : axios.get(url)
    }

    getMostFrecuentCountries = () => {
        let url = this.baseUrl + "/api/most-frecuent/countries"

        console.log("Sending HTTP request: " + url)

        if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_COUNTRY, 'updatedAt'])))
            return new Promise(this.settledGetLSMostFrecuentCountriesPromise)

        return (true) ? new Promise(this.settledGetMostFrecuentCountriesPromise) : axios.get(url)
    }

    getMostFrecuentPublishers = () => {
        let url = this.baseUrl + "/api/most-frecuent/publishers"

        console.log("Sending HTTP request: " + url)

        if (this.isStoredDataUpToDate(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_PUBLISHER, 'updatedAt'])))
            return new Promise(this.settledGetLSMostFrecuentPublishersPromise)

        return (true) ? new Promise(this.settledGetMostFrecuentPublishersPromise) : axios.get(url)
    }

    /* RESULTS LIST */

    settledGetTitleResultsListPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator([{
                      "_id": 52,
                      "rank": 1,
                      "name": "Text name",
                      "author": {
                          "_id": 51,
                          "author_first": "Neil",
                          "author_middle": null,
                          "author_last": "Cambell",
                      },
                      "appearences": {
                          "total": 100
                      },
                      "score": 9.9,
                      "pub_year":1943
                  },
                  {
                      "_id": 52,
                      "rank": 1,
                      "name": "Text name",
                      "author": {
                          "_id": 51,
                          "author_first": "Neil",
                          "author_middle": null,
                          "author_last": "Cambell",
                      },
                      "appearences": {
                          "total": 100
                      },
                      "score": 9.9,
                      "pub_year":1943
                  },
                  {
                      "_id": 52,
                      "rank": 1,
                      "name": "Text name",
                      "author": {
                          "_id": 51,
                          "author_first": "Neil",
                          "author_middle": null,
                          "author_last": "Cambell",
                      },
                      "appearences": {
                          "total": 100
                      },
                      "score": 9.9,
                      "pub_year":1943
                  },
                  {
                      "_id": 52,
                      "rank": 1,
                      "name": "Text name",
                      "author": {
                          "_id": 51,
                          "author_first": "Neil",
                          "author_middle": null,
                          "author_last": "Cambell",
                      },
                      "appearences": {
                          "total": 100
                      },
                      "score": 9.9,
                      "pub_year":1943
                  },
                  {
                      "_id": 52,
                      "rank": 1,
                      "name": "Text name",
                      "author": {
                          "_id": 51,
                          "author_first": "Neil",
                          "author_middle": null,
                          "author_last": "Cambell",
                      },
                      "appearences": {
                          "total": 100
                      },
                      "score": 9.9,
                      "pub_year": 1943
                  }])
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetAuthorResultsListPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator([{
                      "_id": 51,
                      "author_first": "Neil",
                      "author_middle": null,
                      "author_last": "Cambell",
                      "rank": 1,
                      "appearences": {
                          "total": 4000
                      },
                      "text_count": 20,
                      image:null
                    },
                    {
                      "_id": 51,
                      "author_first": "Neil",
                      "author_middle": null,
                      "author_last": "Cambell",
                      "rank": 1,
                      "appearences": {
                          "total": 4000
                      },
                      "text_count": 20,
                      image:null
                    },
                    {
                      "_id": 51,
                      "author_first": "Neil",
                      "author_middle": null,
                      "author_last": "Cambell",
                      "rank": 1,
                      "appearences": {
                          "total": 4000
                      },
                      "text_count": 20,
                      image:null
                    },
                    {
                      "_id": 51,
                      "author_first": "Neil",
                      "author_middle": null,
                      "author_last": "Cambell",
                      "rank": 1,
                      "appearences": {
                          "total": 4000
                      },
                      "text_count": 20,
                      image:null
                    },
                    {
                      "_id": 51,
                      "author_first": "Neil",
                      "author_middle": null,
                      "author_last": "Cambell",
                      "rank": 1,
                      "appearences": {
                          "total": 4000
                      },
                      "text_count": 20,
                      image:null
                    }])
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetInstitutionResultsListPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator([{
                        "name": "Yale University",
                        "country": "USA",
                        "rank": 1,
                        "syllabus_count": 20000,
                        "_id": 1
                    }, {
                        "name": "Stanford University",
                        "country": "USA",
                        "rank": 2,
                        "syllabus_count": 19000,
                        "_id": 2
                    }, {
                        "name": "Harvard University",
                        "country": "USA",
                        "rank": 3,
                        "syllabus_count": 18000,
                        "_id": 3
                    }])
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetPublisherResultsListPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator([{
                        "name": "Elsevier",
                        "rank": 1,
                        "assignment_count": 125000,
                        "text_count": 4500,
                        "_id": 1
                    }, {
                        "name": "Cengage",
                        "rank": 2,
                        "assignment_count": 110000,
                        "text_count": 3000,
                        "_id": 2
                    }, {
                        "name": "MacMillan",
                        "rank": 3,
                        "assignment_count": 100000,
                        "text_count": 2000,
                        "_id": 3
                    }])
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetFieldResultsListPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator([{
                        "name": "History",
                        "rank": 1,
                        "syllabus_count": 20000,
                        "_id": 1
                    }, {
                        "name": "English",
                        "rank": 2,
                        "syllabus_count": 19000,
                        "_id": 2
                    }, {
                        "name": "Computer Science",
                        "rank": 3,
                        "syllabus_count": 18000,
                        "_id": 3
                    }])
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetCountryResultsListPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator([{
                        "name": "United States",
                        "rank": 1,
                        "syllabus_count": 3000000,
                        "inst_count": 3000,
                        "_id": 1
                    }, {
                        "name": "Canada",
                        "rank": 2,
                        "syllabus_count": 2000000,
                        "inst_count": 2000,
                        "_id": 2
                    }, {
                        "name": "Australia",
                        "rank": 3,
                        "syllabus_count": 1000000,
                        "inst_count": 1000,
                        "_id": 3
                    }])
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    /* RESULTS */

    settledGetTitleResultPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                      "_id": 55,
                      "rank": 1,
                      "score": 6.5,
                      "title": "A Manual for Writers of Term Papers, Theses, and Dissertations",
                      "title_description": "Whether you’re a policymaker, investor, or involved in a nonprofit, Social Entrepreneurship for the 21st Century gives you the knowledge you need to make the best possible decisions for the future. A former McKinsey consultant reveals how social entrepreneurship has filtered into the workings of government and private enterprise, where social sector values are now shaping “social impact” capitalism.", //DOESNT EXISTS ACTUALLY
                      "author": {
                          "_id": 51,
                          "author_first": "Neil",
                          "author_middle": null,
                          "author_last": "Cambell",
                      },
                      "publisher": {
                          "_id": 55,
                          "name": "MacMillan"
                      },
                      "pub_year": 2013,
                      "appearences": {
                          "total": 200,
                          "by_field": [
                            {
                              "_id": 41,
                              "name": "Math",
                              "syllabus_count": 10
                            },
                            {
                              "_id": 41,
                              "name": 'Public Administration',
                              "syllabus_count": 9
                            },
                            {
                              "_id": 100,
                              "name": 'Business',
                              "syllabus_count": 5
                            },
                            {
                              "_id": 54,
                              "name": 'Undefined',
                              "syllabus_count": 1
                            },
                            {
                              "_id": 13,
                              "name": 'Urban Planing',
                              "syllabus_count": 4
                            }
                          ]
                      },
                      "textAssignedWith": [
                        {
                          "_id": 55,
                          "title": "Thesis #1",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                        {
                          "_id": 55,
                          "title": "Thesis #2",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                        {
                          "_id": 55,
                          "title": "Thesis #3",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                        {
                          "_id": 55,
                          "title": "Thesis #4",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                        {
                          "_id": 55,
                          "title": "Thesis #5",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                        {
                          "_id": 55,
                          "title": "Thesis #6",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                        {
                          "_id": 55,
                          "title": "Thesis #7",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                      ],
                      "availability": {
                          "openVersion": { // OR EXTERNAL LINKS, NO DB INDEXED?
                              "_id": 55,
                              "title": "Thesis #1",
                              "url": "https://facebook.com"
                          },
                          "viaYourInstitution": { // OR EXTERNAL LINKS, NO DB INDEXED?
                              "_id": 55,
                              "title": "Thesis #1",
                              "url": "https://facebook.com"
                          }
                      },
                      "seeTheTextOn": [
                        { // OR EXTERNAL LINKS, NO DB INDEXED?
                          "_id": 55,
                          "name": "Sociology 1",
                          "url": "https://facebook.com"
                        },
                        { // OR EXTERNAL LINKS, NO DB INDEXED?
                          "_id": 55,
                          "name": "Sociology 1",
                          "url": "https://facebook.com"
                        },
                        { // OR EXTERNAL LINKS, NO DB INDEXED?
                          "_id": 55,
                          "name": "Sociology 1",
                          "url": "https://facebook.com"
                        },
                        { // OR EXTERNAL LINKS, NO DB INDEXED?
                          "_id": 55,
                          "name": "Sociology 1",
                          "url": "https://facebook.com"
                        },
                        { // OR EXTERNAL LINKS, NO DB INDEXED?
                          "_id": 55,
                          "name": "Sociology 1",
                          "url": "https://facebook.com"
                        },
                        { // OR EXTERNAL LINKS, NO DB INDEXED?
                          "_id": 55,
                          "name": "Sociology 1",
                          "url": "https://facebook.com"
                        },
                      ],
                      "country_map": {
                        initialPosition:{
                          lat: 39.73,
                          lng: -104.99,
                          zoom: 10
                        },
                        "data": [
                          {
                            "_id": 55,
                            "lat": 39.61,
                            "lon": -105.02,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                          {
                            "_id": 55,
                            "lat": 39.74,
                            "lon": -104.99,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                          {
                            "_id": 55,
                            "lat": 39.73,
                            "lon": -104.8,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                          {
                            "_id": 55,
                            "lat": 39.77,
                            "lon": -105.23,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                        ]
                      },
                      "top_fields_by_year": {
                          "data": [
                            {
                              label: 'Economics',
                              values: [
                                {x: '1997', y: 2000},
                                {x: '1998', y: 2000},
                                {x: '1999', y: 2000},
                                {x: '2000', y: 2000},
                                {x: '2001', y: 2000},
                                {x: '2002', y: 2000},
                                {x: '2003', y: 2000},
                                {x: '2004', y: 2000},
                                {x: '2005', y: 2000},
                                {x: '2006', y: 2000},
                                {x: '2007', y: 2000},
                                {x: '2008', y: 2000},
                                {x: '2009', y: 2000},
                                {x: '2010', y: 2000},
                                {x: '2011', y: 6000},
                                {x: '2012', y: 2500},
                                {x: '2013', y: 5500},
                                {x: '2014', y: 6000},
                                {x: '2015', y: 4000},
                                {x: '2016', y: 4000},
                              ]
                            },
                            {
                              label: 'Literature',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 10000},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 2000},
                                {x: '2015', y: 3000},
                                {x: '2016', y: 3000},
                              ]
                            },
                            {
                              label: 'History',
                              values: [
                                {x: '1997', y: 3800},
                                {x: '1998', y: 3800},
                                {x: '1999', y: 3800},
                                {x: '2000', y: 3800},
                                {x: '2001', y: 3800},
                                {x: '2002', y: 3800},
                                {x: '2003', y: 3800},
                                {x: '2004', y: 3800},
                                {x: '2005', y: 3800},
                                {x: '2006', y: 3800},
                                {x: '2007', y: 3800},
                                {x: '2008', y: 3800},
                                {x: '2009', y: 3800},
                                {x: '2010', y: 3800},
                                {x: '2011', y: 3800},
                                {x: '2012', y: 7000},
                                {x: '2013', y: 3800},
                                {x: '2014', y: 2000},
                                {x: '2015', y: 2000},
                                {x: '2016', y: 2000},
                              ]
                            },
                            {
                              label: 'English',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 2000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 2000},
                                {x: '2016', y: 3800},
                              ]
                            },
                            {
                              label: 'Biology',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 2000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 0},
                                {x: '2016', y: 4000},
                              ]
                            },
                          ]
                      }
                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetTitleResultNormalizedPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                      "_id": 55,
                      "rank": 1,
                      "score": 6.5,
                      "title": "A Manual for Writers of Term Papers, Theses, and Dissertations",
                      "title_description": "Whether you’re a policymaker, investor, or involved in a nonprofit, Social Entrepreneurship for the 21st Century gives you the knowledge you need to make the best possible decisions for the future. A former McKinsey consultant reveals how social entrepreneurship has filtered into the workings of government and private enterprise, where social sector values are now shaping “social impact” capitalism.", //DOESNT EXISTS ACTUALLY
                      "author": {
                          "_id": 51,
                          "author_first": "Neil",
                          "author_middle": null,
                          "author_last": "Cambell",
                      },
                      "publisher": {
                          "_id": 55,
                          "name": "MacMillan"
                      },
                      "pub_year": 2013,
                      "appearences": {
                          "total": 200,
                          "by_field": [
                            {
                              "_id": 41,
                              "name": "Math",
                              "syllabus_count": 10
                            },
                            {
                              "_id": 41,
                              "name": 'Public Administration',
                              "syllabus_count": 9
                            },
                            {
                              "_id": 100,
                              "name": 'Business',
                              "syllabus_count": 5
                            },
                            {
                              "_id": 54,
                              "name": 'Undefined',
                              "syllabus_count": 1
                            },
                            {
                              "_id": 13,
                              "name": 'Urban Planing',
                              "syllabus_count": 4
                            }
                          ]
                      },
                      "textAssignedWith": [
                        {
                          "_id": 55,
                          "title": "Thesis #1",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                        {
                          "_id": 55,
                          "title": "Thesis #2",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                        {
                          "_id": 55,
                          "title": "Thesis #3",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                        {
                          "_id": 55,
                          "title": "Thesis #4",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                        {
                          "_id": 55,
                          "title": "Thesis #5",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                        {
                          "_id": 55,
                          "title": "Thesis #6",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                        {
                          "_id": 55,
                          "title": "Thesis #7",
                          "rank": 10,
                          "author": {
                              "_id": 55,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                          },
                          "pub_year": 1943
                        },
                      ],
                      "availability": {
                          "openVersion": { // OR EXTERNAL LINKS, NO DB INDEXED?
                              "_id": 55,
                              "title": "Thesis #1",
                              "url": "https://facebook.com"
                          },
                          "viaYourInstitution": { // OR EXTERNAL LINKS, NO DB INDEXED?
                              "_id": 55,
                              "title": "Thesis #1",
                              "url": "https://facebook.com"
                          }
                      },
                      "seeTheTextOn": [
                        { // OR EXTERNAL LINKS, NO DB INDEXED?
                          "_id": 55,
                          "name": "Sociology 1",
                          "url": "https://facebook.com"
                        },
                        { // OR EXTERNAL LINKS, NO DB INDEXED?
                          "_id": 55,
                          "name": "Sociology 1",
                          "url": "https://facebook.com"
                        },
                        { // OR EXTERNAL LINKS, NO DB INDEXED?
                          "_id": 55,
                          "name": "Sociology 1",
                          "url": "https://facebook.com"
                        },
                        { // OR EXTERNAL LINKS, NO DB INDEXED?
                          "_id": 55,
                          "name": "Sociology 1",
                          "url": "https://facebook.com"
                        },
                        { // OR EXTERNAL LINKS, NO DB INDEXED?
                          "_id": 55,
                          "name": "Sociology 1",
                          "url": "https://facebook.com"
                        },
                        { // OR EXTERNAL LINKS, NO DB INDEXED?
                          "_id": 55,
                          "name": "Sociology 1",
                          "url": "https://facebook.com"
                        },
                      ],
                      "country_map": {
                        initialPosition:{
                          lat: 39.73,
                          lng: -104.99,
                          zoom: 10
                        },
                        "data": [
                          {
                            "_id": 55,
                            "lat": 39.61,
                            "lon": -105.02,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                          {
                            "_id": 55,
                            "lat": 39.74,
                            "lon": -104.99,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                          {
                            "_id": 55,
                            "lat": 39.73,
                            "lon": -104.8,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                          {
                            "_id": 55,
                            "lat": 39.77,
                            "lon": -105.23,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                        ]
                      },
                      "top_fields_by_year": {
                          "data": [
                            {
                              label: 'Economics',
                              values: [
                                {x: '1997', y: 20},
                                {x: '1998', y: 20},
                                {x: '1999', y: 20},
                                {x: '2000', y: 20},
                                {x: '2001', y: 20},
                                {x: '2002', y: 20},
                                {x: '2003', y: 20},
                                {x: '2004', y: 20},
                                {x: '2005', y: 20},
                                {x: '2006', y: 20},
                                {x: '2007', y: 20},
                                {x: '2008', y: 20},
                                {x: '2009', y: 20},
                                {x: '2010', y: 20},
                                {x: '2011', y: 60},
                                {x: '2012', y: 25},
                                {x: '2013', y: 55},
                                {x: '2014', y: 60},
                                {x: '2015', y: 40},
                                {x: '2016', y: 40},
                              ]
                            },
                            {
                              label: 'Literature',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 100},
                                {x: '2011', y: 0},
                                {x: '2012', y: 200},
                                {x: '2013', y: 0},
                                {x: '2014', y: 20},
                                {x: '2015', y: 30},
                                {x: '2016', y: 30},
                              ]
                            },
                            {
                              label: 'History',
                              values: [
                                {x: '1997', y: 38},
                                {x: '1998', y: 38},
                                {x: '1999', y: 38},
                                {x: '2000', y: 38},
                                {x: '2001', y: 38},
                                {x: '2002', y: 38},
                                {x: '2003', y: 38},
                                {x: '2004', y: 38},
                                {x: '2005', y: 38},
                                {x: '2006', y: 38},
                                {x: '2007', y: 38},
                                {x: '2008', y: 38},
                                {x: '2009', y: 38},
                                {x: '2010', y: 38},
                                {x: '2011', y: 38},
                                {x: '2012', y: 70},
                                {x: '2013', y: 38},
                                {x: '2014', y: 20},
                                {x: '2015', y: 20},
                                {x: '2016', y: 20},
                              ]
                            },
                            {
                              label: 'English',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 20},
                                {x: '2016', y: 38},
                              ]
                            },
                            {
                              label: 'Biology',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 0},
                                {x: '2016', y: 40},
                              ]
                            },
                          ]
                      }
                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetAuthorResultPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                      "_id": 42,
                      "author_first": "Fredric",
                      "author_middle": null,
                      "author_last": "Jameson",
                      "author_description": "Fredric Jameson (born 14 April 1934) is an American literary critic and Marxist political theorist. He is best known for his analysis of contemporary cultural trends. He once described postmodernism as the spatialization of culture under the pressure of organized capitalism. Jameson's best-known books include Postmodernism, or, The Cultural Logic of Late Capitalism, The Political Unconscious, and Marxism and Form.", //DOESNT EXISTS ACTUALLY
                      "image": null, //STATIC ASSETS SHOULD BE INDEXED AS THE RELATIVE PATH FROM ROOT,
                      "appearences": {
                          "total": 200,
                          "by_field": [
                            {
                              "_id": 41,
                              "name": "Math",
                              "syllabus_count": 10
                            },
                            {
                              "_id": 41,
                              "name": 'Public Administration',
                              "syllabus_count": 9
                            },
                            {
                              "_id": 100,
                              "name": 'Business',
                              "syllabus_count": 5
                            },
                            {
                              "_id": 54,
                              "name": 'Undefined',
                              "syllabus_count": 1
                            },
                          ]
                      },
                      "author_titles": [
                        {
                          "_id": 41,
                          "title": "The Antinomies Of Realism",
                          "publisher": {
                              "_id": 432,
                              "name": "The penguin books"
                          },
                          "appearences": {
                              "by_unique_field": {
                                  "_id": 12,
                                  "name": "Math",
                                  "syllabus_count": 123
                              }
                          },
                          "pub_year": 1998,
                          "unattributed": 8,
                          "score": 12.0
                        },
                        {
                          "_id": 41,
                          "title": "Archaeologies of the Future: The Desire Called Utopia and Other Science Fictions",
                          "publisher": {
                              "_id": 432,
                              "name": "The penguin books"
                          },
                          "appearences": {
                              "by_unique_field": {
                                  "_id": 12,
                                  "name": "Math",
                                  "syllabus_count": 123
                              }
                          },
                          "pub_year": 1998,
                          "unattributed": 8,
                          "score": 12.0
                        },
                        {
                          "_id": 41,
                          "title": "The Geopolitical Aesthetic: Cinema and Space in the World System (Perspectives)",
                          "publisher": {
                              "_id": 432,
                              "name": "The penguin books"
                          },
                          "appearences": {
                              "by_unique_field": {
                                  "_id": 12,
                                  "name": "Math",
                                  "syllabus_count": 123
                              }
                          },
                          "pub_year": 1998,
                          "unattributed": 8,
                          "score": 12.0
                        },
                        {
                          "_id": 41,
                          "title": "The Geopolitical Aesthetic: Cinema and Space in the World System (Perspectives)",
                          "publisher": {
                              "_id": 432,
                              "name": "The penguin books"
                          },
                          "appearences": {
                              "by_unique_field": {
                                  "_id": 12,
                                  "name": "Math",
                                  "syllabus_count": 123
                              }
                          },
                          "pub_year": 1998,
                          "unattributed": 8,
                          "score": 12.0
                        },
                    ],
                    "country_map": {
                      initialPosition:{
                        lat: 39.73,
                        lng: -104.99,
                        zoom: 10
                      },
                      "data": [
                        {
                          "_id": 55,
                          "lat": 39.61,
                          "lon": -105.02,
                          "name": "FICH - Universidad Nacional del Litoral",
                          "formatedAdress": "Santa fe, Santa fe",
                          "syllabus_count": 20000
                        },
                        {
                          "_id": 55,
                          "lat": 39.74,
                          "lon": -104.99,
                          "name": "FICH - Universidad Nacional del Litoral",
                          "formatedAdress": "Santa fe, Santa fe",
                          "syllabus_count": 20000
                        },
                        {
                          "_id": 55,
                          "lat": 39.73,
                          "lon": -104.8,
                          "name": "FICH - Universidad Nacional del Litoral",
                          "formatedAdress": "Santa fe, Santa fe",
                          "syllabus_count": 20000
                        },
                        {
                          "_id": 55,
                          "lat": 39.77,
                          "lon": -105.23,
                          "name": "FICH - Universidad Nacional del Litoral",
                          "formatedAdress": "Santa fe, Santa fe",
                          "syllabus_count": 20000
                        },
                      ]
                    },
                      "top_titles_by_year": {
                          "data": [
                            {
                              label: 'Economics',
                              values: [
                                {x: '1997', y: 2000},
                                {x: '1998', y: 2000},
                                {x: '1999', y: 2000},
                                {x: '2000', y: 2000},
                                {x: '2001', y: 2000},
                                {x: '2002', y: 2000},
                                {x: '2003', y: 2000},
                                {x: '2004', y: 2000},
                                {x: '2005', y: 2000},
                                {x: '2006', y: 2000},
                                {x: '2007', y: 2000},
                                {x: '2008', y: 2000},
                                {x: '2009', y: 2000},
                                {x: '2010', y: 2000},
                                {x: '2011', y: 6000},
                                {x: '2012', y: 2500},
                                {x: '2013', y: 5500},
                                {x: '2014', y: 6000},
                                {x: '2015', y: 4000},
                                {x: '2016', y: 4000},
                              ]
                            },
                            {
                              label: 'Literature',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 10000},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 2000},
                                {x: '2015', y: 3000},
                                {x: '2016', y: 3000},
                              ]
                            },
                            {
                              label: 'History',
                              values: [
                                {x: '1997', y: 3800},
                                {x: '1998', y: 3800},
                                {x: '1999', y: 3800},
                                {x: '2000', y: 3800},
                                {x: '2001', y: 3800},
                                {x: '2002', y: 3800},
                                {x: '2003', y: 3800},
                                {x: '2004', y: 3800},
                                {x: '2005', y: 3800},
                                {x: '2006', y: 3800},
                                {x: '2007', y: 3800},
                                {x: '2008', y: 3800},
                                {x: '2009', y: 3800},
                                {x: '2010', y: 3800},
                                {x: '2011', y: 3800},
                                {x: '2012', y: 7000},
                                {x: '2013', y: 3800},
                                {x: '2014', y: 2000},
                                {x: '2015', y: 2000},
                                {x: '2016', y: 2000},
                              ]
                            },
                            {
                              label: 'English',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 2000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 2000},
                                {x: '2016', y: 3800},
                              ]
                            },
                            {
                              label: 'Biology',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 2000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 0},
                                {x: '2016', y: 4000},
                              ]
                            },
                          ]
                      }

                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetAuthorResultNormalizedPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                      "_id": 42,
                      "author_first": "Fredric",
                      "author_middle": null,
                      "author_last": "Jameson",
                      "author_description": "Fredric Jameson (born 14 April 1934) is an American literary critic and Marxist political theorist. He is best known for his analysis of contemporary cultural trends. He once described postmodernism as the spatialization of culture under the pressure of organized capitalism. Jameson's best-known books include Postmodernism, or, The Cultural Logic of Late Capitalism, The Political Unconscious, and Marxism and Form.", //DOESNT EXISTS ACTUALLY
                      "image": null, //STATIC ASSETS SHOULD BE INDEXED AS THE RELATIVE PATH FROM ROOT,
                      "appearences": {
                          "total": 200,
                          "by_field": [
                            {
                              "_id": 41,
                              "name": "Math",
                              "syllabus_count": 10
                            },
                            {
                              "_id": 41,
                              "name": 'Public Administration',
                              "syllabus_count": 9
                            },
                            {
                              "_id": 100,
                              "name": 'Business',
                              "syllabus_count": 5
                            },
                            {
                              "_id": 54,
                              "name": 'Undefined',
                              "syllabus_count": 1
                            },
                          ]
                      },
                      "author_titles": [
                        {
                          "_id": 41,
                          "title": "The Antinomies Of Realism",
                          "publisher": {
                              "_id": 432,
                              "name": "The penguin books"
                          },
                          "appearences": {
                              "by_unique_field": {
                                  "_id": 12,
                                  "name": "Math",
                                  "syllabus_count": 123
                              }
                          },
                          "pub_year": 1998,
                          "unattributed": 8,
                          "score": 12.0
                        },
                        {
                          "_id": 41,
                          "title": "Archaeologies of the Future: The Desire Called Utopia and Other Science Fictions",
                          "publisher": {
                              "_id": 432,
                              "name": "The penguin books"
                          },
                          "appearences": {
                              "by_unique_field": {
                                  "_id": 12,
                                  "name": "Math",
                                  "syllabus_count": 123
                              }
                          },
                          "pub_year": 1998,
                          "unattributed": 8,
                          "score": 12.0
                        },
                        {
                          "_id": 41,
                          "title": "The Geopolitical Aesthetic: Cinema and Space in the World System (Perspectives)",
                          "publisher": {
                              "_id": 432,
                              "name": "The penguin books"
                          },
                          "appearences": {
                              "by_unique_field": {
                                  "_id": 12,
                                  "name": "Math",
                                  "syllabus_count": 123
                              }
                          },
                          "pub_year": 1998,
                          "unattributed": 8,
                          "score": 12.0
                        },
                        {
                          "_id": 41,
                          "title": "The Geopolitical Aesthetic: Cinema and Space in the World System (Perspectives)",
                          "publisher": {
                              "_id": 432,
                              "name": "The penguin books"
                          },
                          "appearences": {
                              "by_unique_field": {
                                  "_id": 12,
                                  "name": "Math",
                                  "syllabus_count": 123
                              }
                          },
                          "pub_year": 1998,
                          "unattributed": 8,
                          "score": 12.0
                        },
                    ],
                    "country_map": {
                      initialPosition:{
                        lat: 39.73,
                        lng: -104.99,
                        zoom: 10
                      },
                      "data": [
                        {
                          "_id": 55,
                          "lat": 39.61,
                          "lon": -105.02,
                          "name": "FICH - Universidad Nacional del Litoral",
                          "formatedAdress": "Santa fe, Santa fe",
                          "syllabus_count": 20000
                        },
                        {
                          "_id": 55,
                          "lat": 39.74,
                          "lon": -104.99,
                          "name": "FICH - Universidad Nacional del Litoral",
                          "formatedAdress": "Santa fe, Santa fe",
                          "syllabus_count": 20000
                        },
                        {
                          "_id": 55,
                          "lat": 39.73,
                          "lon": -104.8,
                          "name": "FICH - Universidad Nacional del Litoral",
                          "formatedAdress": "Santa fe, Santa fe",
                          "syllabus_count": 20000
                        },
                        {
                          "_id": 55,
                          "lat": 39.77,
                          "lon": -105.23,
                          "name": "FICH - Universidad Nacional del Litoral",
                          "formatedAdress": "Santa fe, Santa fe",
                          "syllabus_count": 20000
                        },
                      ]
                    },
                      "top_titles_by_year": {
                          "data": [
                            {
                              label: 'Economics',
                              values: [
                                {x: '1997', y: 20},
                                {x: '1998', y: 20},
                                {x: '1999', y: 20},
                                {x: '2000', y: 20},
                                {x: '2001', y: 20},
                                {x: '2002', y: 20},
                                {x: '2003', y: 20},
                                {x: '2004', y: 20},
                                {x: '2005', y: 20},
                                {x: '2006', y: 20},
                                {x: '2007', y: 20},
                                {x: '2008', y: 20},
                                {x: '2009', y: 20},
                                {x: '2010', y: 20},
                                {x: '2011', y: 60},
                                {x: '2012', y: 25},
                                {x: '2013', y: 55},
                                {x: '2014', y: 60},
                                {x: '2015', y: 40},
                                {x: '2016', y: 40},
                              ]
                            },
                            {
                              label: 'Literature',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 100},
                                {x: '2011', y: 0},
                                {x: '2012', y: 200},
                                {x: '2013', y: 0},
                                {x: '2014', y: 20},
                                {x: '2015', y: 30},
                                {x: '2016', y: 30},
                              ]
                            },
                            {
                              label: 'History',
                              values: [
                                {x: '1997', y: 38},
                                {x: '1998', y: 38},
                                {x: '1999', y: 38},
                                {x: '2000', y: 38},
                                {x: '2001', y: 38},
                                {x: '2002', y: 38},
                                {x: '2003', y: 38},
                                {x: '2004', y: 38},
                                {x: '2005', y: 38},
                                {x: '2006', y: 38},
                                {x: '2007', y: 38},
                                {x: '2008', y: 38},
                                {x: '2009', y: 38},
                                {x: '2010', y: 38},
                                {x: '2011', y: 38},
                                {x: '2012', y: 70},
                                {x: '2013', y: 38},
                                {x: '2014', y: 20},
                                {x: '2015', y: 20},
                                {x: '2016', y: 20},
                              ]
                            },
                            {
                              label: 'English',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 20},
                                {x: '2016', y: 38},
                              ]
                            },
                            {
                              label: 'Biology',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 0},
                                {x: '2016', y: 40},
                              ]
                            },
                          ]
                      }

                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetInstitutionResultPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                        "_id": 20,
                        "name": "Amherst College",
                        "school_description": "Amherst College is a private liberal arts college located in Amherst, Massachusetts, United States. Founded in 1821 as an attempt to relocate Williams College by its president, Zephaniah Swift Moore, Amherst is the third oldest institution of higher education in Massachusetts.[6] The institution was named after the town, which in turn had been named after Lord Jeffery Amherst. Amherst was established as a men's college and became coeducational in 1975.",
                        "image": null,
                        "syllabi": {
                            "total": 1200,
                            "by_field": [
                              {
                                "_id": 12,
                                "name": "Math",
                                "syllabus_count": 123
                              },
                              {
                                "_id": 12,
                                "name": "English",
                                "syllabus_count": 420
                              },
                              {
                                "_id": 12,
                                "name": "Architecture",
                                "syllabus_count": 99
                              },
                              {
                                "_id": 12,
                                "name": "Philosophy",
                                "syllabus_count": 10
                              },
                          ]
                        },
                        "most_frecuently_assigned_texts": [
                          {
                            "_id": 12,
                            "title": "Introduction to Economics",
                            "author": {
                                "_id": 32,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "publisher": {
                                "_id": 14,
                                "name": "Pengiun Books"
                            },
                            "pub_year": 2000,
                            "appearences": {
                                "by_unique_field": {
                                    "_id": 152,
                                    "name": "Math",
                                    "syllabus_count": 9
                                }
                            }
                          },
                          {
                            "_id": 12,
                            "title": "Introduction to Economics",
                            "author": {
                                "_id": 32,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "publisher": {
                                "_id": 14,
                                "name": "Pengiun Books"
                            },
                            "pub_year": 2000,
                            "appearences": {
                                "by_unique_field": {
                                    "_id": 152,
                                    "name": "Math",
                                    "syllabus_count": 9
                                }
                            }
                          },
                          {
                            "_id": 12,
                            "title": "Introduction to Economics",
                            "author": {
                                "_id": 32,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "publisher": {
                                "_id": 14,
                                "name": "Pengiun Books"
                            },
                            "pub_year": 2000,
                            "appearences": {
                                "by_unique_field": {
                                    "_id": 152,
                                    "name": "Math",
                                    "syllabus_count": 9
                                }
                            }
                        },
                          {
                            "_id": 12,
                            "title": "Introduction to Economics",
                            "author": {
                                "_id": 32,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "publisher": {
                                "_id": 14,
                                "name": "Pengiun Books"
                            },
                            "pub_year": 2000,
                            "appearences": {
                                "by_unique_field": {
                                    "_id": 152,
                                    "name": "Math",
                                    "syllabus_count": 9
                                }
                            }
                          },
                        ],
                        "country_map": {
                          initialPosition:{
                            lat: 39.73,
                            lng: -104.99,
                            zoom: 10
                          },
                          "data": [
                            {
                              "_id": 55,
                              "lat": 39.61,
                              "lon": -105.02,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                            {
                              "_id": 55,
                              "lat": 39.74,
                              "lon": -104.99,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                            {
                              "_id": 55,
                              "lat": 39.73,
                              "lon": -104.8,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                            {
                              "_id": 55,
                              "lat": 39.77,
                              "lon": -105.23,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                          ]
                        },
                      "top_fields_by_year": {
                          "data": [
                            {
                              label: 'Economics',
                              values: [
                                {x: '1997', y: 2000},
                                {x: '1998', y: 2000},
                                {x: '1999', y: 2000},
                                {x: '2000', y: 2000},
                                {x: '2001', y: 2000},
                                {x: '2002', y: 2000},
                                {x: '2003', y: 2000},
                                {x: '2004', y: 2000},
                                {x: '2005', y: 2000},
                                {x: '2006', y: 2000},
                                {x: '2007', y: 2000},
                                {x: '2008', y: 2000},
                                {x: '2009', y: 2000},
                                {x: '2010', y: 2000},
                                {x: '2011', y: 6000},
                                {x: '2012', y: 2500},
                                {x: '2013', y: 5500},
                                {x: '2014', y: 6000},
                                {x: '2015', y: 4000},
                                {x: '2016', y: 4000},
                              ]
                            },
                            {
                              label: 'Literature',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 10000},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 2000},
                                {x: '2015', y: 3000},
                                {x: '2016', y: 3000},
                              ]
                            },
                            {
                              label: 'History',
                              values: [
                                {x: '1997', y: 3800},
                                {x: '1998', y: 3800},
                                {x: '1999', y: 3800},
                                {x: '2000', y: 3800},
                                {x: '2001', y: 3800},
                                {x: '2002', y: 3800},
                                {x: '2003', y: 3800},
                                {x: '2004', y: 3800},
                                {x: '2005', y: 3800},
                                {x: '2006', y: 3800},
                                {x: '2007', y: 3800},
                                {x: '2008', y: 3800},
                                {x: '2009', y: 3800},
                                {x: '2010', y: 3800},
                                {x: '2011', y: 3800},
                                {x: '2012', y: 7000},
                                {x: '2013', y: 3800},
                                {x: '2014', y: 2000},
                                {x: '2015', y: 2000},
                                {x: '2016', y: 2000},
                              ]
                            },
                            {
                              label: 'English',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 2000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 2000},
                                {x: '2016', y: 3800},
                              ]
                            },
                            {
                              label: 'Biology',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 2000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 0},
                                {x: '2016', y: 4000},
                              ]
                            },
                          ]
                      }
                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetInstitutionResultNormalizedPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                        "_id": 20,
                        "name": "Amherst College",
                        "school_description": "Amherst College is a private liberal arts college located in Amherst, Massachusetts, United States. Founded in 1821 as an attempt to relocate Williams College by its president, Zephaniah Swift Moore, Amherst is the third oldest institution of higher education in Massachusetts.[6] The institution was named after the town, which in turn had been named after Lord Jeffery Amherst. Amherst was established as a men's college and became coeducational in 1975.",
                        "image": null,
                        "syllabi": {
                            "total": 1200,
                            "by_field": [
                              {
                                "_id": 12,
                                "name": "Math",
                                "syllabus_count": 123
                              },
                              {
                                "_id": 12,
                                "name": "English",
                                "syllabus_count": 420
                              },
                              {
                                "_id": 12,
                                "name": "Architecture",
                                "syllabus_count": 99
                              },
                              {
                                "_id": 12,
                                "name": "Philosophy",
                                "syllabus_count": 10
                              },
                          ]
                        },
                        "most_frecuently_assigned_texts": [
                          {
                            "_id": 12,
                            "title": "Introduction to Economics",
                            "author": {
                                "_id": 32,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "publisher": {
                                "_id": 14,
                                "name": "Pengiun Books"
                            },
                            "pub_year": 2000,
                            "appearences": {
                                "by_unique_field": {
                                    "_id": 152,
                                    "name": "Math",
                                    "syllabus_count": 9
                                }
                            }
                          },
                          {
                            "_id": 12,
                            "title": "Introduction to Economics",
                            "author": {
                                "_id": 32,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "publisher": {
                                "_id": 14,
                                "name": "Pengiun Books"
                            },
                            "pub_year": 2000,
                            "appearences": {
                                "by_unique_field": {
                                    "_id": 152,
                                    "name": "Math",
                                    "syllabus_count": 9
                                }
                            }
                          },
                          {
                            "_id": 12,
                            "title": "Introduction to Economics",
                            "author": {
                                "_id": 32,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "publisher": {
                                "_id": 14,
                                "name": "Pengiun Books"
                            },
                            "pub_year": 2000,
                            "appearences": {
                                "by_unique_field": {
                                    "_id": 152,
                                    "name": "Math",
                                    "syllabus_count": 9
                                }
                            }
                        },
                          {
                            "_id": 12,
                            "title": "Introduction to Economics",
                            "author": {
                                "_id": 32,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "publisher": {
                                "_id": 14,
                                "name": "Pengiun Books"
                            },
                            "pub_year": 2000,
                            "appearences": {
                                "by_unique_field": {
                                    "_id": 152,
                                    "name": "Math",
                                    "syllabus_count": 9
                                }
                            }
                          },
                        ],
                        "country_map": {
                          initialPosition:{
                            lat: 39.73,
                            lng: -104.99,
                            zoom: 10
                          },
                          "data": [
                            {
                              "_id": 55,
                              "lat": 39.61,
                              "lon": -105.02,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                            {
                              "_id": 55,
                              "lat": 39.74,
                              "lon": -104.99,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                            {
                              "_id": 55,
                              "lat": 39.73,
                              "lon": -104.8,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                            {
                              "_id": 55,
                              "lat": 39.77,
                              "lon": -105.23,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                          ]
                        },
                      "top_fields_by_year": {
                          "data": [
                            {
                              label: 'Economics',
                              values: [
                                {x: '1997', y: 20},
                                {x: '1998', y: 20},
                                {x: '1999', y: 20},
                                {x: '2000', y: 20},
                                {x: '2001', y: 20},
                                {x: '2002', y: 20},
                                {x: '2003', y: 20},
                                {x: '2004', y: 20},
                                {x: '2005', y: 20},
                                {x: '2006', y: 20},
                                {x: '2007', y: 20},
                                {x: '2008', y: 20},
                                {x: '2009', y: 20},
                                {x: '2010', y: 20},
                                {x: '2011', y: 60},
                                {x: '2012', y: 25},
                                {x: '2013', y: 55},
                                {x: '2014', y: 60},
                                {x: '2015', y: 40},
                                {x: '2016', y: 40},
                              ]
                            },
                            {
                              label: 'Literature',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 100},
                                {x: '2011', y: 0},
                                {x: '2012', y: 200},
                                {x: '2013', y: 0},
                                {x: '2014', y: 20},
                                {x: '2015', y: 30},
                                {x: '2016', y: 30},
                              ]
                            },
                            {
                              label: 'History',
                              values: [
                                {x: '1997', y: 38},
                                {x: '1998', y: 38},
                                {x: '1999', y: 38},
                                {x: '2000', y: 38},
                                {x: '2001', y: 38},
                                {x: '2002', y: 38},
                                {x: '2003', y: 38},
                                {x: '2004', y: 38},
                                {x: '2005', y: 38},
                                {x: '2006', y: 38},
                                {x: '2007', y: 38},
                                {x: '2008', y: 38},
                                {x: '2009', y: 38},
                                {x: '2010', y: 38},
                                {x: '2011', y: 38},
                                {x: '2012', y: 70},
                                {x: '2013', y: 38},
                                {x: '2014', y: 20},
                                {x: '2015', y: 20},
                                {x: '2016', y: 20},
                              ]
                            },
                            {
                              label: 'English',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 20},
                                {x: '2016', y: 38},
                              ]
                            },
                            {
                              label: 'Biology',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 0},
                                {x: '2016', y: 40},
                              ]
                            },
                          ]
                      }
                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetInstitutionFieldResultPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                      "name": "Amherst College: History",
                      "syllabus_count": 10,
                        "top_ranked": {
                            "titles": [
                              {
                                "_id": 52,
                                "rank": 1,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 2,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 3,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 4,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 5,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 6,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 7,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 8,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 9,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 10,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 11,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                          ]
                        },
                        "top_titles_by_year": {
                          "data": [
                            {
                              label: 'Economics',
                              values: [
                                {x: '1997', y: 2000},
                                {x: '1998', y: 2000},
                                {x: '1999', y: 2000},
                                {x: '2000', y: 2000},
                                {x: '2001', y: 2000},
                                {x: '2002', y: 2000},
                                {x: '2003', y: 2000},
                                {x: '2004', y: 2000},
                                {x: '2005', y: 2000},
                                {x: '2006', y: 2000},
                                {x: '2007', y: 2000},
                                {x: '2008', y: 2000},
                                {x: '2009', y: 2000},
                                {x: '2010', y: 2000},
                                {x: '2011', y: 6000},
                                {x: '2012', y: 2500},
                                {x: '2013', y: 5500},
                                {x: '2014', y: 6000},
                                {x: '2015', y: 4000},
                                {x: '2016', y: 4000},
                              ]
                            },
                            {
                              label: 'Literature',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 10000},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 2000},
                                {x: '2015', y: 3000},
                                {x: '2016', y: 3000},
                              ]
                            },
                            {
                              label: 'History',
                              values: [
                                {x: '1997', y: 3800},
                                {x: '1998', y: 3800},
                                {x: '1999', y: 3800},
                                {x: '2000', y: 3800},
                                {x: '2001', y: 3800},
                                {x: '2002', y: 3800},
                                {x: '2003', y: 3800},
                                {x: '2004', y: 3800},
                                {x: '2005', y: 3800},
                                {x: '2006', y: 3800},
                                {x: '2007', y: 3800},
                                {x: '2008', y: 3800},
                                {x: '2009', y: 3800},
                                {x: '2010', y: 3800},
                                {x: '2011', y: 3800},
                                {x: '2012', y: 7000},
                                {x: '2013', y: 3800},
                                {x: '2014', y: 2000},
                                {x: '2015', y: 2000},
                                {x: '2016', y: 2000},
                              ]
                            },
                            {
                              label: 'English',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 2000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 2000},
                                {x: '2016', y: 3800},
                              ]
                            },
                            {
                              label: 'Biology',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 2000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 0},
                                {x: '2016', y: 4000},
                              ]
                            },
                          ]
                        }
                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetInstitutionFieldResultNormalizedPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                      "name": "Amherst College: History",
                      "syllabus_count": 10,
                        "top_ranked": {
                            "titles": [
                              {
                                "_id": 52,
                                "rank": 1,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 2,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 3,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 4,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 5,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 6,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 7,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 8,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 9,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 10,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 11,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                          ]
                        },
                        "top_titles_by_year": {
                          "data": [
                            {
                              label: 'Economics',
                              values: [
                                {x: '1997', y: 20},
                                {x: '1998', y: 20},
                                {x: '1999', y: 20},
                                {x: '2000', y: 20},
                                {x: '2001', y: 20},
                                {x: '2002', y: 20},
                                {x: '2003', y: 20},
                                {x: '2004', y: 20},
                                {x: '2005', y: 20},
                                {x: '2006', y: 20},
                                {x: '2007', y: 20},
                                {x: '2008', y: 20},
                                {x: '2009', y: 20},
                                {x: '2010', y: 20},
                                {x: '2011', y: 60},
                                {x: '2012', y: 25},
                                {x: '2013', y: 55},
                                {x: '2014', y: 60},
                                {x: '2015', y: 40},
                                {x: '2016', y: 40},
                              ]
                            },
                            {
                              label: 'Literature',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 100},
                                {x: '2011', y: 0},
                                {x: '2012', y: 200},
                                {x: '2013', y: 0},
                                {x: '2014', y: 20},
                                {x: '2015', y: 30},
                                {x: '2016', y: 30},
                              ]
                            },
                            {
                              label: 'History',
                              values: [
                                {x: '1997', y: 38},
                                {x: '1998', y: 38},
                                {x: '1999', y: 38},
                                {x: '2000', y: 38},
                                {x: '2001', y: 38},
                                {x: '2002', y: 38},
                                {x: '2003', y: 38},
                                {x: '2004', y: 38},
                                {x: '2005', y: 38},
                                {x: '2006', y: 38},
                                {x: '2007', y: 38},
                                {x: '2008', y: 38},
                                {x: '2009', y: 38},
                                {x: '2010', y: 38},
                                {x: '2011', y: 38},
                                {x: '2012', y: 70},
                                {x: '2013', y: 38},
                                {x: '2014', y: 20},
                                {x: '2015', y: 20},
                                {x: '2016', y: 20},
                              ]
                            },
                            {
                              label: 'English',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 20},
                                {x: '2016', y: 38},
                              ]
                            },
                            {
                              label: 'Biology',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 0},
                                {x: '2016', y: 40},
                              ]
                            },
                          ]
                        }
                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetCountryFieldResultPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                      "name": "United States: English",
                      "syllabus_count": 10,
                        "top_ranked": {
                            "titles": [
                              {
                                "_id": 52,
                                "rank": 1,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 2,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 3,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 4,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 5,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 6,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 7,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 8,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 9,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 10,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 11,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                          ]
                        },
                        "top_titles_by_year": {
                          "data": [
                            {
                              label: 'Economics',
                              values: [
                                {x: '1997', y: 2000},
                                {x: '1998', y: 2000},
                                {x: '1999', y: 2000},
                                {x: '2000', y: 2000},
                                {x: '2001', y: 2000},
                                {x: '2002', y: 2000},
                                {x: '2003', y: 2000},
                                {x: '2004', y: 2000},
                                {x: '2005', y: 2000},
                                {x: '2006', y: 2000},
                                {x: '2007', y: 2000},
                                {x: '2008', y: 2000},
                                {x: '2009', y: 2000},
                                {x: '2010', y: 2000},
                                {x: '2011', y: 6000},
                                {x: '2012', y: 2500},
                                {x: '2013', y: 5500},
                                {x: '2014', y: 6000},
                                {x: '2015', y: 4000},
                                {x: '2016', y: 4000},
                              ]
                            },
                            {
                              label: 'Literature',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 10000},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 2000},
                                {x: '2015', y: 3000},
                                {x: '2016', y: 3000},
                              ]
                            },
                            {
                              label: 'History',
                              values: [
                                {x: '1997', y: 3800},
                                {x: '1998', y: 3800},
                                {x: '1999', y: 3800},
                                {x: '2000', y: 3800},
                                {x: '2001', y: 3800},
                                {x: '2002', y: 3800},
                                {x: '2003', y: 3800},
                                {x: '2004', y: 3800},
                                {x: '2005', y: 3800},
                                {x: '2006', y: 3800},
                                {x: '2007', y: 3800},
                                {x: '2008', y: 3800},
                                {x: '2009', y: 3800},
                                {x: '2010', y: 3800},
                                {x: '2011', y: 3800},
                                {x: '2012', y: 7000},
                                {x: '2013', y: 3800},
                                {x: '2014', y: 2000},
                                {x: '2015', y: 2000},
                                {x: '2016', y: 2000},
                              ]
                            },
                            {
                              label: 'English',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 2000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 2000},
                                {x: '2016', y: 3800},
                              ]
                            },
                            {
                              label: 'Biology',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 2000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 0},
                                {x: '2016', y: 4000},
                              ]
                            },
                          ]
                        }
                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetCountryFieldResultNormalizedPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                      "name": "United States: English",
                      "syllabus_count": 10,
                        "top_ranked": {
                            "titles": [
                              {
                                "_id": 52,
                                "rank": 1,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 2,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 3,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 4,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 5,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 6,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 7,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 8,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 9,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 10,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                              {
                                "_id": 52,
                                "rank": 11,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                              },
                          ]
                        },
                        "top_titles_by_year": {
                          "data": [
                            {
                              label: 'Economics',
                              values: [
                                {x: '1997', y: 20},
                                {x: '1998', y: 20},
                                {x: '1999', y: 20},
                                {x: '2000', y: 20},
                                {x: '2001', y: 20},
                                {x: '2002', y: 20},
                                {x: '2003', y: 20},
                                {x: '2004', y: 20},
                                {x: '2005', y: 20},
                                {x: '2006', y: 20},
                                {x: '2007', y: 20},
                                {x: '2008', y: 20},
                                {x: '2009', y: 20},
                                {x: '2010', y: 20},
                                {x: '2011', y: 60},
                                {x: '2012', y: 25},
                                {x: '2013', y: 55},
                                {x: '2014', y: 60},
                                {x: '2015', y: 40},
                                {x: '2016', y: 40},
                              ]
                            },
                            {
                              label: 'Literature',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 100},
                                {x: '2011', y: 0},
                                {x: '2012', y: 200},
                                {x: '2013', y: 0},
                                {x: '2014', y: 20},
                                {x: '2015', y: 30},
                                {x: '2016', y: 30},
                              ]
                            },
                            {
                              label: 'History',
                              values: [
                                {x: '1997', y: 38},
                                {x: '1998', y: 38},
                                {x: '1999', y: 38},
                                {x: '2000', y: 38},
                                {x: '2001', y: 38},
                                {x: '2002', y: 38},
                                {x: '2003', y: 38},
                                {x: '2004', y: 38},
                                {x: '2005', y: 38},
                                {x: '2006', y: 38},
                                {x: '2007', y: 38},
                                {x: '2008', y: 38},
                                {x: '2009', y: 38},
                                {x: '2010', y: 38},
                                {x: '2011', y: 38},
                                {x: '2012', y: 70},
                                {x: '2013', y: 38},
                                {x: '2014', y: 20},
                                {x: '2015', y: 20},
                                {x: '2016', y: 20},
                              ]
                            },
                            {
                              label: 'English',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 20},
                                {x: '2016', y: 38},
                              ]
                            },
                            {
                              label: 'Biology',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 0},
                                {x: '2016', y: 40},
                              ]
                            },
                          ]
                        }
                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetPublisherResultPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                      "name": "Oxford University Press",
                      "top_ranked": {
                          "titles": [
                            {
                              "_id": 52,
                              "rank": 1,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 2,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 3,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 4,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 5,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 6,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 7,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 8,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 9,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 10,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 11,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                        ],
                          "authors": [
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 1,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 2,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 3,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 4,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 5,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 6,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 7,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 8,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 9,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 10,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 11,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                        ]
                      },
                      "top_titles_by_year": {
                          "data": [
                            {
                              label: 'Economics',
                              values: [
                                {x: '1997', y: 2000},
                                {x: '1998', y: 2000},
                                {x: '1999', y: 2000},
                                {x: '2000', y: 2000},
                                {x: '2001', y: 2000},
                                {x: '2002', y: 2000},
                                {x: '2003', y: 2000},
                                {x: '2004', y: 2000},
                                {x: '2005', y: 2000},
                                {x: '2006', y: 2000},
                                {x: '2007', y: 2000},
                                {x: '2008', y: 2000},
                                {x: '2009', y: 2000},
                                {x: '2010', y: 2000},
                                {x: '2011', y: 6000},
                                {x: '2012', y: 2500},
                                {x: '2013', y: 5500},
                                {x: '2014', y: 6000},
                                {x: '2015', y: 4000},
                                {x: '2016', y: 4000},
                              ]
                            },
                            {
                              label: 'Literature',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 10000},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 2000},
                                {x: '2015', y: 3000},
                                {x: '2016', y: 3000},
                              ]
                            },
                            {
                              label: 'History',
                              values: [
                                {x: '1997', y: 3800},
                                {x: '1998', y: 3800},
                                {x: '1999', y: 3800},
                                {x: '2000', y: 3800},
                                {x: '2001', y: 3800},
                                {x: '2002', y: 3800},
                                {x: '2003', y: 3800},
                                {x: '2004', y: 3800},
                                {x: '2005', y: 3800},
                                {x: '2006', y: 3800},
                                {x: '2007', y: 3800},
                                {x: '2008', y: 3800},
                                {x: '2009', y: 3800},
                                {x: '2010', y: 3800},
                                {x: '2011', y: 3800},
                                {x: '2012', y: 7000},
                                {x: '2013', y: 3800},
                                {x: '2014', y: 2000},
                                {x: '2015', y: 2000},
                                {x: '2016', y: 2000},
                              ]
                            },
                            {
                              label: 'English',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 2000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 2000},
                                {x: '2016', y: 3800},
                              ]
                            },
                            {
                              label: 'Biology',
                              values: [
                                {x: '1997', y: 3000},
                                {x: '1998', y: 5000},
                                {x: '1999', y: 0},
                                {x: '2000', y: 4000},
                                {x: '2001', y: 0},
                                {x: '2002', y: 1500},
                                {x: '2003', y: 3000},
                                {x: '2004', y: 0},
                                {x: '2005', y: 6000},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 7000},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 2000},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 0},
                                {x: '2016', y: 4000},
                              ]
                            },
                          ]
                      }
                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetPublisherResultNormalizedPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                      "name": "Oxford University Press",
                      "top_ranked": {
                          "titles": [
                            {
                              "_id": 52,
                              "rank": 1,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 2,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 3,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 4,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 5,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 6,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 7,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 8,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 9,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 10,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                          {
                              "_id": 52,
                              "rank": 11,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                          },
                        ],
                          "authors": [
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 1,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 2,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 3,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 4,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 5,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 6,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 7,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 8,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 9,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 10,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 11,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                        ]
                      },
                      "top_titles_by_year": {
                          "data": [
                            {
                              label: 'Economics',
                              values: [
                                {x: '1997', y: 20},
                                {x: '1998', y: 20},
                                {x: '1999', y: 20},
                                {x: '2000', y: 20},
                                {x: '2001', y: 20},
                                {x: '2002', y: 20},
                                {x: '2003', y: 20},
                                {x: '2004', y: 20},
                                {x: '2005', y: 20},
                                {x: '2006', y: 20},
                                {x: '2007', y: 20},
                                {x: '2008', y: 20},
                                {x: '2009', y: 20},
                                {x: '2010', y: 20},
                                {x: '2011', y: 60},
                                {x: '2012', y: 25},
                                {x: '2013', y: 55},
                                {x: '2014', y: 60},
                                {x: '2015', y: 40},
                                {x: '2016', y: 40},
                              ]
                            },
                            {
                              label: 'Literature',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 100},
                                {x: '2011', y: 0},
                                {x: '2012', y: 200},
                                {x: '2013', y: 0},
                                {x: '2014', y: 20},
                                {x: '2015', y: 30},
                                {x: '2016', y: 30},
                              ]
                            },
                            {
                              label: 'History',
                              values: [
                                {x: '1997', y: 38},
                                {x: '1998', y: 38},
                                {x: '1999', y: 38},
                                {x: '2000', y: 38},
                                {x: '2001', y: 38},
                                {x: '2002', y: 38},
                                {x: '2003', y: 38},
                                {x: '2004', y: 38},
                                {x: '2005', y: 38},
                                {x: '2006', y: 38},
                                {x: '2007', y: 38},
                                {x: '2008', y: 38},
                                {x: '2009', y: 38},
                                {x: '2010', y: 38},
                                {x: '2011', y: 38},
                                {x: '2012', y: 70},
                                {x: '2013', y: 38},
                                {x: '2014', y: 20},
                                {x: '2015', y: 20},
                                {x: '2016', y: 20},
                              ]
                            },
                            {
                              label: 'English',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 20},
                                {x: '2016', y: 38},
                              ]
                            },
                            {
                              label: 'Biology',
                              values: [
                                {x: '1997', y: 30},
                                {x: '1998', y: 50},
                                {x: '1999', y: 0},
                                {x: '2000', y: 40},
                                {x: '2001', y: 0},
                                {x: '2002', y: 15},
                                {x: '2003', y: 30},
                                {x: '2004', y: 0},
                                {x: '2005', y: 60},
                                {x: '2006', y: 0},
                                {x: '2007', y: 0},
                                {x: '2008', y: 70},
                                {x: '2009', y: 0},
                                {x: '2010', y: 0},
                                {x: '2011', y: 0},
                                {x: '2012', y: 20},
                                {x: '2013', y: 0},
                                {x: '2014', y: 0},
                                {x: '2015', y: 0},
                                {x: '2016', y: 40},
                              ]
                            },
                          ]
                      }
                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetFieldResultPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                      "name": "English",
                        "top_ranked": {
                            "titles": [
                              {
                                "_id": 52,
                                "rank": 1,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 2,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 3,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 4,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 5,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 6,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 7,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 8,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 9,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 10,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 11,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                          ],
                            "authors": [
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 1,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 2,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 3,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 4,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 5,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 6,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 7,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 8,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 9,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 10,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 11,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                          ]
                        },
                        "country_map": {
                          initialPosition:{
                            lat: 39.73,
                            lng: -104.99,
                            zoom: 10
                          },
                          "data": [
                            {
                              "_id": 55,
                              "lat": 39.61,
                              "lon": -105.02,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                            {
                              "_id": 55,
                              "lat": 39.74,
                              "lon": -104.99,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                            {
                              "_id": 55,
                              "lat": 39.73,
                              "lon": -104.8,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                            {
                              "_id": 55,
                              "lat": 39.77,
                              "lon": -105.23,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                          ]
                        },
                        "top_titles_by_year": {
                            "data": [
                              {
                                label: 'Economics',
                                values: [
                                  {x: '1997', y: 2000},
                                  {x: '1998', y: 2000},
                                  {x: '1999', y: 2000},
                                  {x: '2000', y: 2000},
                                  {x: '2001', y: 2000},
                                  {x: '2002', y: 2000},
                                  {x: '2003', y: 2000},
                                  {x: '2004', y: 2000},
                                  {x: '2005', y: 2000},
                                  {x: '2006', y: 2000},
                                  {x: '2007', y: 2000},
                                  {x: '2008', y: 2000},
                                  {x: '2009', y: 2000},
                                  {x: '2010', y: 2000},
                                  {x: '2011', y: 6000},
                                  {x: '2012', y: 2500},
                                  {x: '2013', y: 5500},
                                  {x: '2014', y: 6000},
                                  {x: '2015', y: 4000},
                                  {x: '2016', y: 4000},
                                ]
                              },
                              {
                                label: 'Literature',
                                values: [
                                  {x: '1997', y: 3000},
                                  {x: '1998', y: 5000},
                                  {x: '1999', y: 0},
                                  {x: '2000', y: 4000},
                                  {x: '2001', y: 0},
                                  {x: '2002', y: 1500},
                                  {x: '2003', y: 3000},
                                  {x: '2004', y: 0},
                                  {x: '2005', y: 6000},
                                  {x: '2006', y: 0},
                                  {x: '2007', y: 0},
                                  {x: '2008', y: 7000},
                                  {x: '2009', y: 0},
                                  {x: '2010', y: 10000},
                                  {x: '2011', y: 0},
                                  {x: '2012', y: 20000},
                                  {x: '2013', y: 0},
                                  {x: '2014', y: 2000},
                                  {x: '2015', y: 3000},
                                  {x: '2016', y: 3000},
                                ]
                              },
                              {
                                label: 'History',
                                values: [
                                  {x: '1997', y: 3800},
                                  {x: '1998', y: 3800},
                                  {x: '1999', y: 3800},
                                  {x: '2000', y: 3800},
                                  {x: '2001', y: 3800},
                                  {x: '2002', y: 3800},
                                  {x: '2003', y: 3800},
                                  {x: '2004', y: 3800},
                                  {x: '2005', y: 3800},
                                  {x: '2006', y: 3800},
                                  {x: '2007', y: 3800},
                                  {x: '2008', y: 3800},
                                  {x: '2009', y: 3800},
                                  {x: '2010', y: 3800},
                                  {x: '2011', y: 3800},
                                  {x: '2012', y: 7000},
                                  {x: '2013', y: 3800},
                                  {x: '2014', y: 2000},
                                  {x: '2015', y: 2000},
                                  {x: '2016', y: 2000},
                                ]
                              },
                              {
                                label: 'English',
                                values: [
                                  {x: '1997', y: 3000},
                                  {x: '1998', y: 5000},
                                  {x: '1999', y: 0},
                                  {x: '2000', y: 4000},
                                  {x: '2001', y: 0},
                                  {x: '2002', y: 1500},
                                  {x: '2003', y: 3000},
                                  {x: '2004', y: 0},
                                  {x: '2005', y: 6000},
                                  {x: '2006', y: 0},
                                  {x: '2007', y: 0},
                                  {x: '2008', y: 7000},
                                  {x: '2009', y: 0},
                                  {x: '2010', y: 0},
                                  {x: '2011', y: 0},
                                  {x: '2012', y: 2000},
                                  {x: '2013', y: 0},
                                  {x: '2014', y: 0},
                                  {x: '2015', y: 2000},
                                  {x: '2016', y: 3800},
                                ]
                              },
                              {
                                label: 'Biology',
                                values: [
                                  {x: '1997', y: 3000},
                                  {x: '1998', y: 5000},
                                  {x: '1999', y: 0},
                                  {x: '2000', y: 4000},
                                  {x: '2001', y: 0},
                                  {x: '2002', y: 1500},
                                  {x: '2003', y: 3000},
                                  {x: '2004', y: 0},
                                  {x: '2005', y: 6000},
                                  {x: '2006', y: 0},
                                  {x: '2007', y: 0},
                                  {x: '2008', y: 7000},
                                  {x: '2009', y: 0},
                                  {x: '2010', y: 0},
                                  {x: '2011', y: 0},
                                  {x: '2012', y: 2000},
                                  {x: '2013', y: 0},
                                  {x: '2014', y: 0},
                                  {x: '2015', y: 0},
                                  {x: '2016', y: 4000},
                                ]
                              },
                            ]
                        }
                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetFieldResultNormalizedPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultWrapperSimulator({
                      "name": "English",
                        "top_ranked": {
                            "titles": [
                              {
                                "_id": 52,
                                "rank": 1,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 2,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 3,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 4,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 5,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 6,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 7,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 8,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 9,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 10,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                            {
                                "_id": 52,
                                "rank": 11,
                                "name": "Text name",
                                "author": {
                                    "_id": 51,
                                    "author_first": "Neil",
                                    "author_middle": null,
                                    "author_last": "Cambell",
                                },
                                "appearences": {
                                    "total": 100
                                },
                                "score": 9.9,
                                "pub_year": 1943
                            },
                          ],
                            "authors": [
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 1,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 2,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 3,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 4,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 5,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 6,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 7,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 8,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 9,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 10,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                              {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                                "rank": 11,
                                "appearences": {
                                    "total": 4000
                                },
                                "text_count": 20,
                                image:null
                              },
                          ]
                        },
                        "country_map": {
                          initialPosition:{
                            lat: 39.73,
                            lng: -104.99,
                            zoom: 10
                          },
                          "data": [
                            {
                              "_id": 55,
                              "lat": 39.61,
                              "lon": -105.02,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                            {
                              "_id": 55,
                              "lat": 39.74,
                              "lon": -104.99,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                            {
                              "_id": 55,
                              "lat": 39.73,
                              "lon": -104.8,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                            {
                              "_id": 55,
                              "lat": 39.77,
                              "lon": -105.23,
                              "name": "FICH - Universidad Nacional del Litoral",
                              "formatedAdress": "Santa fe, Santa fe",
                              "syllabus_count": 20000
                            },
                          ]
                        },
                        "top_titles_by_year": {
                            "data": [
                              {
                                label: 'Economics',
                                values: [
                                  {x: '1997', y: 20},
                                  {x: '1998', y: 20},
                                  {x: '1999', y: 20},
                                  {x: '2000', y: 20},
                                  {x: '2001', y: 20},
                                  {x: '2002', y: 20},
                                  {x: '2003', y: 20},
                                  {x: '2004', y: 20},
                                  {x: '2005', y: 20},
                                  {x: '2006', y: 20},
                                  {x: '2007', y: 20},
                                  {x: '2008', y: 20},
                                  {x: '2009', y: 20},
                                  {x: '2010', y: 20},
                                  {x: '2011', y: 60},
                                  {x: '2012', y: 25},
                                  {x: '2013', y: 55},
                                  {x: '2014', y: 60},
                                  {x: '2015', y: 40},
                                  {x: '2016', y: 40},
                                ]
                              },
                              {
                                label: 'Literature',
                                values: [
                                  {x: '1997', y: 30},
                                  {x: '1998', y: 50},
                                  {x: '1999', y: 0},
                                  {x: '2000', y: 40},
                                  {x: '2001', y: 0},
                                  {x: '2002', y: 15},
                                  {x: '2003', y: 30},
                                  {x: '2004', y: 0},
                                  {x: '2005', y: 60},
                                  {x: '2006', y: 0},
                                  {x: '2007', y: 0},
                                  {x: '2008', y: 70},
                                  {x: '2009', y: 0},
                                  {x: '2010', y: 100},
                                  {x: '2011', y: 0},
                                  {x: '2012', y: 200},
                                  {x: '2013', y: 0},
                                  {x: '2014', y: 20},
                                  {x: '2015', y: 30},
                                  {x: '2016', y: 30},
                                ]
                              },
                              {
                                label: 'History',
                                values: [
                                  {x: '1997', y: 38},
                                  {x: '1998', y: 38},
                                  {x: '1999', y: 38},
                                  {x: '2000', y: 38},
                                  {x: '2001', y: 38},
                                  {x: '2002', y: 38},
                                  {x: '2003', y: 38},
                                  {x: '2004', y: 38},
                                  {x: '2005', y: 38},
                                  {x: '2006', y: 38},
                                  {x: '2007', y: 38},
                                  {x: '2008', y: 38},
                                  {x: '2009', y: 38},
                                  {x: '2010', y: 38},
                                  {x: '2011', y: 38},
                                  {x: '2012', y: 70},
                                  {x: '2013', y: 38},
                                  {x: '2014', y: 20},
                                  {x: '2015', y: 20},
                                  {x: '2016', y: 20},
                                ]
                              },
                              {
                                label: 'English',
                                values: [
                                  {x: '1997', y: 30},
                                  {x: '1998', y: 50},
                                  {x: '1999', y: 0},
                                  {x: '2000', y: 40},
                                  {x: '2001', y: 0},
                                  {x: '2002', y: 15},
                                  {x: '2003', y: 30},
                                  {x: '2004', y: 0},
                                  {x: '2005', y: 60},
                                  {x: '2006', y: 0},
                                  {x: '2007', y: 0},
                                  {x: '2008', y: 70},
                                  {x: '2009', y: 0},
                                  {x: '2010', y: 0},
                                  {x: '2011', y: 0},
                                  {x: '2012', y: 20},
                                  {x: '2013', y: 0},
                                  {x: '2014', y: 0},
                                  {x: '2015', y: 20},
                                  {x: '2016', y: 38},
                                ]
                              },
                              {
                                label: 'Biology',
                                values: [
                                  {x: '1997', y: 30},
                                  {x: '1998', y: 50},
                                  {x: '1999', y: 0},
                                  {x: '2000', y: 40},
                                  {x: '2001', y: 0},
                                  {x: '2002', y: 15},
                                  {x: '2003', y: 30},
                                  {x: '2004', y: 0},
                                  {x: '2005', y: 60},
                                  {x: '2006', y: 0},
                                  {x: '2007', y: 0},
                                  {x: '2008', y: 70},
                                  {x: '2009', y: 0},
                                  {x: '2010', y: 0},
                                  {x: '2011', y: 0},
                                  {x: '2012', y: 20},
                                  {x: '2013', y: 0},
                                  {x: '2014', y: 0},
                                  {x: '2015', y: 0},
                                  {x: '2016', y: 40},
                                ]
                              },
                            ]
                        }
                    })
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetCountryResultPromise = (resolve, reject) => {
      if (true) {

          var tid = setTimeout(() => {
              clearInterval(tid)
              resolve(
                  this.httpResultWrapperSimulator({
                      "_id": 20,
                      "name": "United States",
                      "country_description": "The United States of America (USA), commonly known as the United States (U.S.) or America, is a constitutional federal republic composed of 50 states, a federal district, five major self-governing territories, and various possessions. Forty-eight of the fifty states and the federal district are contiguous and located in North America between Canada and Mexico. The state of Alaska is in the northwest corner of North America, bordered by Canada to the east and across the Bering Strait from Russia to the west. The state of Hawaii is an archipelago in the mid-Pacific Ocean. The U.S. territories are scattered about the Pacific Ocean and the Caribbean Sea. Nine time zones are covered. The geography, climate and wildlife of the country are extremely diverse.",
                      "image": null,
                      "syllabi": {
                          "total": 950000,
                          "by_field": [
                            {
                              "_id": 12,
                              "name": "Math",
                              "syllabus_count": 123
                            },
                            {
                              "_id": 12,
                              "name": "English",
                              "syllabus_count": 420
                            },
                            {
                              "_id": 12,
                              "name": "Architecture",
                              "syllabus_count": 99
                            },
                            {
                              "_id": 12,
                              "name": "Philosophy",
                              "syllabus_count": 10
                            },
                        ]
                      },
                      "country_map": {
                        initialPosition:{
                          lat: 38.00,
                          lng: -97.00,
                          zoom: 3
                        },
                        "data": [
                          {
                            "_id": 55,
                            "lat": 39.61,
                            "lon": -105.02,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                          {
                            "_id": 55,
                            "lat": 39.74,
                            "lon": -104.99,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                          {
                            "_id": 55,
                            "lat": 39.73,
                            "lon": -104.8,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                          {
                            "_id": 55,
                            "lat": 39.77,
                            "lon": -105.23,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                        ]
                      },
                      "top_fields_by_year": {
                        "data": [
                          {
                            label: 'Economics',
                            values: [
                              {x: '1997', y: 2000},
                              {x: '1998', y: 2000},
                              {x: '1999', y: 2000},
                              {x: '2000', y: 2000},
                              {x: '2001', y: 2000},
                              {x: '2002', y: 2000},
                              {x: '2003', y: 2000},
                              {x: '2004', y: 2000},
                              {x: '2005', y: 2000},
                              {x: '2006', y: 2000},
                              {x: '2007', y: 2000},
                              {x: '2008', y: 2000},
                              {x: '2009', y: 2000},
                              {x: '2010', y: 2000},
                              {x: '2011', y: 6000},
                              {x: '2012', y: 2500},
                              {x: '2013', y: 5500},
                              {x: '2014', y: 6000},
                              {x: '2015', y: 4000},
                              {x: '2016', y: 4000},
                            ]
                          },
                          {
                            label: 'Literature',
                            values: [
                              {x: '1997', y: 3000},
                              {x: '1998', y: 5000},
                              {x: '1999', y: 0},
                              {x: '2000', y: 4000},
                              {x: '2001', y: 0},
                              {x: '2002', y: 1500},
                              {x: '2003', y: 3000},
                              {x: '2004', y: 0},
                              {x: '2005', y: 6000},
                              {x: '2006', y: 0},
                              {x: '2007', y: 0},
                              {x: '2008', y: 7000},
                              {x: '2009', y: 0},
                              {x: '2010', y: 10000},
                              {x: '2011', y: 0},
                              {x: '2012', y: 20000},
                              {x: '2013', y: 0},
                              {x: '2014', y: 2000},
                              {x: '2015', y: 3000},
                              {x: '2016', y: 3000},
                            ]
                          },
                          {
                            label: 'History',
                            values: [
                              {x: '1997', y: 3800},
                              {x: '1998', y: 3800},
                              {x: '1999', y: 3800},
                              {x: '2000', y: 3800},
                              {x: '2001', y: 3800},
                              {x: '2002', y: 3800},
                              {x: '2003', y: 3800},
                              {x: '2004', y: 3800},
                              {x: '2005', y: 3800},
                              {x: '2006', y: 3800},
                              {x: '2007', y: 3800},
                              {x: '2008', y: 3800},
                              {x: '2009', y: 3800},
                              {x: '2010', y: 3800},
                              {x: '2011', y: 3800},
                              {x: '2012', y: 7000},
                              {x: '2013', y: 3800},
                              {x: '2014', y: 2000},
                              {x: '2015', y: 2000},
                              {x: '2016', y: 2000},
                            ]
                          },
                          {
                            label: 'English',
                            values: [
                              {x: '1997', y: 3000},
                              {x: '1998', y: 5000},
                              {x: '1999', y: 0},
                              {x: '2000', y: 4000},
                              {x: '2001', y: 0},
                              {x: '2002', y: 1500},
                              {x: '2003', y: 3000},
                              {x: '2004', y: 0},
                              {x: '2005', y: 6000},
                              {x: '2006', y: 0},
                              {x: '2007', y: 0},
                              {x: '2008', y: 7000},
                              {x: '2009', y: 0},
                              {x: '2010', y: 0},
                              {x: '2011', y: 0},
                              {x: '2012', y: 2000},
                              {x: '2013', y: 0},
                              {x: '2014', y: 0},
                              {x: '2015', y: 2000},
                              {x: '2016', y: 3800},
                            ]
                          },
                          {
                            label: 'Biology',
                            values: [
                              {x: '1997', y: 3000},
                              {x: '1998', y: 5000},
                              {x: '1999', y: 0},
                              {x: '2000', y: 4000},
                              {x: '2001', y: 0},
                              {x: '2002', y: 1500},
                              {x: '2003', y: 3000},
                              {x: '2004', y: 0},
                              {x: '2005', y: 6000},
                              {x: '2006', y: 0},
                              {x: '2007', y: 0},
                              {x: '2008', y: 7000},
                              {x: '2009', y: 0},
                              {x: '2010', y: 0},
                              {x: '2011', y: 0},
                              {x: '2012', y: 2000},
                              {x: '2013', y: 0},
                              {x: '2014', y: 0},
                              {x: '2015', y: 0},
                              {x: '2016', y: 4000},
                            ]
                          }
                        ]
                      },
                      "top_ranked": {
                          "titles": [
                            {
                              "_id": 52,
                              "rank": 1,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                            },
                            {
                              "_id": 52,
                              "rank": 2,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                            },
                            {
                              "_id": 52,
                              "rank": 3,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                            },
                            {
                              "_id": 52,
                              "rank": 4,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                            },
                            {
                              "_id": 52,
                              "rank": 5,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                            },
                            {
                              "_id": 52,
                              "rank": 6,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                            },
                            {
                              "_id": 52,
                              "rank": 7,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                            },
                            {
                              "_id": 52,
                              "rank": 8,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                            },
                            {
                              "_id": 52,
                              "rank": 9,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                            },
                            {
                              "_id": 52,
                              "rank": 10,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                            },
                            {
                              "_id": 52,
                              "rank": 11,
                              "name": "Text name",
                              "author": {
                                  "_id": 51,
                                  "author_first": "Neil",
                                  "author_middle": null,
                                  "author_last": "Cambell",
                              },
                              "appearences": {
                                  "total": 100
                              },
                              "score": 9.9,
                              "pub_year": 1943
                            },
                          ],
                          "authors": [
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 1,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 2,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 3,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 4,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 5,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 6,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 7,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 8,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 9,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 10,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                            {
                              "_id": 51,
                              "author_first": "Neil",
                              "author_middle": null,
                              "author_last": "Cambell",
                              "rank": 11,
                              "appearences": {
                                  "total": 4000
                              },
                              "text_count": 20,
                              image:null
                            },
                          ],
                          "institutions": [
                            {
                              "name": "Yale University",
                              "country": "USA",
                              "rank": 1,
                              "syllabus_count": 20000,
                              "_id": 1
                            }, {
                              "name": "Stanford University",
                              "country": "USA",
                              "rank": 2,
                              "syllabus_count": 19000,
                              "_id": 2
                            }, {
                              "name": "Harvard University",
                              "country": "USA",
                              "rank": 3,
                              "syllabus_count": 18000,
                              "_id": 3
                            },
                            {
                              "name": "Yale University",
                              "country": "USA",
                              "rank": 1,
                              "syllabus_count": 20000,
                              "_id": 1
                            }, {
                              "name": "Stanford University",
                              "country": "USA",
                              "rank": 2,
                              "syllabus_count": 19000,
                              "_id": 2
                            }, {
                              "name": "Harvard University",
                              "country": "USA",
                              "rank": 3,
                              "syllabus_count": 18000,
                              "_id": 3
                            },
                          ]
                      },
                  })
              )
          }, configs.REQUEST_DEV_TIMMING)
      } else {
          reject(DEV_ERROR)
      }
    }

    settledGetCountryResultNormalizedPromise = (resolve, reject) => {
      if (true) {

          var tid = setTimeout(() => {
              clearInterval(tid)
              resolve(
                  this.httpResultWrapperSimulator({
                      "_id": 20,
                      "name": "United States",
                      "country_description": "The United States of America (USA), commonly known as the United States (U.S.) or America, is a constitutional federal republic composed of 50 states, a federal district, five major self-governing territories, and various possessions. Forty-eight of the fifty states and the federal district are contiguous and located in North America between Canada and Mexico. The state of Alaska is in the northwest corner of North America, bordered by Canada to the east and across the Bering Strait from Russia to the west. The state of Hawaii is an archipelago in the mid-Pacific Ocean. The U.S. territories are scattered about the Pacific Ocean and the Caribbean Sea. Nine time zones are covered. The geography, climate and wildlife of the country are extremely diverse.",
                      "image": null,
                      "syllabi": {
                          "total": 950000,
                          "by_field": [
                            {
                              "_id": 12,
                              "name": "Math",
                              "syllabus_count": 123
                            },
                            {
                              "_id": 12,
                              "name": "English",
                              "syllabus_count": 420
                            },
                            {
                              "_id": 12,
                              "name": "Architecture",
                              "syllabus_count": 99
                            },
                            {
                              "_id": 12,
                              "name": "Philosophy",
                              "syllabus_count": 10
                            },
                        ]
                      },
                    "country_map": {
                        initialPosition:{
                          lat: 38.00,
                          lng: -97.00,
                          zoom: 3
                        },
                        "data": [
                          {
                            "_id": 55,
                            "lat": 39.61,
                            "lon": -105.02,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                          {
                            "_id": 55,
                            "lat": 39.74,
                            "lon": -104.99,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                          {
                            "_id": 55,
                            "lat": 39.73,
                            "lon": -104.8,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                          {
                            "_id": 55,
                            "lat": 39.77,
                            "lon": -105.23,
                            "name": "FICH - Universidad Nacional del Litoral",
                            "formatedAdress": "Santa fe, Santa fe",
                            "syllabus_count": 20000
                          },
                        ]
                    },
                    "top_fields_by_year": {
                        "data": [
                          {
                            label: 'Economics',
                            values: [
                              {x: '1997', y: 20},
                              {x: '1998', y: 20},
                              {x: '1999', y: 20},
                              {x: '2000', y: 20},
                              {x: '2001', y: 20},
                              {x: '2002', y: 20},
                              {x: '2003', y: 20},
                              {x: '2004', y: 20},
                              {x: '2005', y: 20},
                              {x: '2006', y: 20},
                              {x: '2007', y: 20},
                              {x: '2008', y: 20},
                              {x: '2009', y: 20},
                              {x: '2010', y: 20},
                              {x: '2011', y: 60},
                              {x: '2012', y: 25},
                              {x: '2013', y: 55},
                              {x: '2014', y: 60},
                              {x: '2015', y: 40},
                              {x: '2016', y: 40},
                            ]
                          },
                          {
                            label: 'Literature',
                            values: [
                              {x: '1997', y: 30},
                              {x: '1998', y: 50},
                              {x: '1999', y: 0},
                              {x: '2000', y: 40},
                              {x: '2001', y: 0},
                              {x: '2002', y: 15},
                              {x: '2003', y: 30},
                              {x: '2004', y: 0},
                              {x: '2005', y: 60},
                              {x: '2006', y: 0},
                              {x: '2007', y: 0},
                              {x: '2008', y: 70},
                              {x: '2009', y: 0},
                              {x: '2010', y: 100},
                              {x: '2011', y: 0},
                              {x: '2012', y: 200},
                              {x: '2013', y: 0},
                              {x: '2014', y: 20},
                              {x: '2015', y: 30},
                              {x: '2016', y: 30},
                            ]
                          },
                          {
                            label: 'History',
                            values: [
                              {x: '1997', y: 38},
                              {x: '1998', y: 38},
                              {x: '1999', y: 38},
                              {x: '2000', y: 38},
                              {x: '2001', y: 38},
                              {x: '2002', y: 38},
                              {x: '2003', y: 38},
                              {x: '2004', y: 38},
                              {x: '2005', y: 38},
                              {x: '2006', y: 38},
                              {x: '2007', y: 38},
                              {x: '2008', y: 38},
                              {x: '2009', y: 38},
                              {x: '2010', y: 38},
                              {x: '2011', y: 38},
                              {x: '2012', y: 70},
                              {x: '2013', y: 38},
                              {x: '2014', y: 20},
                              {x: '2015', y: 20},
                              {x: '2016', y: 20},
                            ]
                          },
                          {
                            label: 'English',
                            values: [
                              {x: '1997', y: 30},
                              {x: '1998', y: 50},
                              {x: '1999', y: 0},
                              {x: '2000', y: 40},
                              {x: '2001', y: 0},
                              {x: '2002', y: 15},
                              {x: '2003', y: 30},
                              {x: '2004', y: 0},
                              {x: '2005', y: 60},
                              {x: '2006', y: 0},
                              {x: '2007', y: 0},
                              {x: '2008', y: 70},
                              {x: '2009', y: 0},
                              {x: '2010', y: 0},
                              {x: '2011', y: 0},
                              {x: '2012', y: 20},
                              {x: '2013', y: 0},
                              {x: '2014', y: 0},
                              {x: '2015', y: 20},
                              {x: '2016', y: 38},
                            ]
                          },
                          {
                            label: 'Biology',
                            values: [
                              {x: '1997', y: 30},
                              {x: '1998', y: 50},
                              {x: '1999', y: 0},
                              {x: '2000', y: 40},
                              {x: '2001', y: 0},
                              {x: '2002', y: 15},
                              {x: '2003', y: 30},
                              {x: '2004', y: 0},
                              {x: '2005', y: 60},
                              {x: '2006', y: 0},
                              {x: '2007', y: 0},
                              {x: '2008', y: 70},
                              {x: '2009', y: 0},
                              {x: '2010', y: 0},
                              {x: '2011', y: 0},
                              {x: '2012', y: 20},
                              {x: '2013', y: 0},
                              {x: '2014', y: 0},
                              {x: '2015', y: 0},
                              {x: '2016', y: 40},
                            ]
                          },
                        ]
                    },
                    "top_ranked": {
                        "titles": [
                          {
                            "_id": 52,
                            "rank": 1,
                            "name": "Text name",
                            "author": {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "appearences": {
                                "total": 100
                            },
                            "score": 9.9,
                            "pub_year": 1943
                          },
                          {
                            "_id": 52,
                            "rank": 2,
                            "name": "Text name",
                            "author": {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "appearences": {
                                "total": 100
                            },
                            "score": 9.9,
                            "pub_year": 1943
                          },
                          {
                            "_id": 52,
                            "rank": 3,
                            "name": "Text name",
                            "author": {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "appearences": {
                                "total": 100
                            },
                            "score": 9.9,
                            "pub_year": 1943
                          },
                          {
                            "_id": 52,
                            "rank": 4,
                            "name": "Text name",
                            "author": {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "appearences": {
                                "total": 100
                            },
                            "score": 9.9,
                            "pub_year": 1943
                          },
                          {
                            "_id": 52,
                            "rank": 5,
                            "name": "Text name",
                            "author": {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "appearences": {
                                "total": 100
                            },
                            "score": 9.9,
                            "pub_year": 1943
                          },
                          {
                            "_id": 52,
                            "rank": 6,
                            "name": "Text name",
                            "author": {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "appearences": {
                                "total": 100
                            },
                            "score": 9.9,
                            "pub_year": 1943
                          },
                          {
                            "_id": 52,
                            "rank": 7,
                            "name": "Text name",
                            "author": {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "appearences": {
                                "total": 100
                            },
                            "score": 9.9,
                            "pub_year": 1943
                          },
                          {
                            "_id": 52,
                            "rank": 8,
                            "name": "Text name",
                            "author": {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "appearences": {
                                "total": 100
                            },
                            "score": 9.9,
                            "pub_year": 1943
                          },
                          {
                            "_id": 52,
                            "rank": 9,
                            "name": "Text name",
                            "author": {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "appearences": {
                                "total": 100
                            },
                            "score": 9.9,
                            "pub_year": 1943
                          },
                          {
                            "_id": 52,
                            "rank": 10,
                            "name": "Text name",
                            "author": {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "appearences": {
                                "total": 100
                            },
                            "score": 9.9,
                            "pub_year": 1943
                          },
                          {
                            "_id": 52,
                            "rank": 11,
                            "name": "Text name",
                            "author": {
                                "_id": 51,
                                "author_first": "Neil",
                                "author_middle": null,
                                "author_last": "Cambell",
                            },
                            "appearences": {
                                "total": 100
                            },
                            "score": 9.9,
                            "pub_year": 1943
                          },
                        ],
                        "authors": [
                          {
                            "_id": 51,
                            "author_first": "Neil",
                            "author_middle": null,
                            "author_last": "Cambell",
                            "rank": 1,
                            "appearences": {
                                "total": 4000
                            },
                            "text_count": 20,
                            image:null
                          },
                          {
                            "_id": 51,
                            "author_first": "Neil",
                            "author_middle": null,
                            "author_last": "Cambell",
                            "rank": 2,
                            "appearences": {
                                "total": 4000
                            },
                            "text_count": 20,
                            image:null
                          },
                          {
                            "_id": 51,
                            "author_first": "Neil",
                            "author_middle": null,
                            "author_last": "Cambell",
                            "rank": 3,
                            "appearences": {
                                "total": 4000
                            },
                            "text_count": 20,
                            image:null
                          },
                          {
                            "_id": 51,
                            "author_first": "Neil",
                            "author_middle": null,
                            "author_last": "Cambell",
                            "rank": 4,
                            "appearences": {
                                "total": 4000
                            },
                            "text_count": 20,
                            image:null
                          },
                          {
                            "_id": 51,
                            "author_first": "Neil",
                            "author_middle": null,
                            "author_last": "Cambell",
                            "rank": 5,
                            "appearences": {
                                "total": 4000
                            },
                            "text_count": 20,
                            image:null
                          },
                          {
                            "_id": 51,
                            "author_first": "Neil",
                            "author_middle": null,
                            "author_last": "Cambell",
                            "rank": 6,
                            "appearences": {
                                "total": 4000
                            },
                            "text_count": 20,
                            image:null
                          },
                          {
                            "_id": 51,
                            "author_first": "Neil",
                            "author_middle": null,
                            "author_last": "Cambell",
                            "rank": 7,
                            "appearences": {
                                "total": 4000
                            },
                            "text_count": 20,
                            image:null
                          },
                          {
                            "_id": 51,
                            "author_first": "Neil",
                            "author_middle": null,
                            "author_last": "Cambell",
                            "rank": 8,
                            "appearences": {
                                "total": 4000
                            },
                            "text_count": 20,
                            image:null
                          },
                          {
                            "_id": 51,
                            "author_first": "Neil",
                            "author_middle": null,
                            "author_last": "Cambell",
                            "rank": 9,
                            "appearences": {
                                "total": 4000
                            },
                            "text_count": 20,
                            image:null
                          },
                          {
                            "_id": 51,
                            "author_first": "Neil",
                            "author_middle": null,
                            "author_last": "Cambell",
                            "rank": 10,
                            "appearences": {
                                "total": 4000
                            },
                            "text_count": 20,
                            image:null
                          },
                          {
                            "_id": 51,
                            "author_first": "Neil",
                            "author_middle": null,
                            "author_last": "Cambell",
                            "rank": 11,
                            "appearences": {
                                "total": 4000
                            },
                            "text_count": 20,
                            image:null
                          },
                        ],
                        "institutions": [
                          {
                            "name": "Yale University",
                            "country": "USA",
                            "rank": 1,
                            "syllabus_count": 20000,
                            "_id": 1
                          }, {
                            "name": "Stanford University",
                            "country": "USA",
                            "rank": 2,
                            "syllabus_count": 19000,
                            "_id": 2
                          }, {
                            "name": "Harvard University",
                            "country": "USA",
                            "rank": 3,
                            "syllabus_count": 18000,
                            "_id": 3
                          },
                          {
                            "name": "Yale University",
                            "country": "USA",
                            "rank": 1,
                            "syllabus_count": 20000,
                            "_id": 1
                          }, {
                            "name": "Stanford University",
                            "country": "USA",
                            "rank": 2,
                            "syllabus_count": 19000,
                            "_id": 2
                          }, {
                            "name": "Harvard University",
                            "country": "USA",
                            "rank": 3,
                            "syllabus_count": 18000,
                            "_id": 3
                          },
                        ]
                    }
                  })
              )
          }, configs.REQUEST_DEV_TIMMING)
      } else {
          reject(DEV_ERROR)
      }
    }

    /* MOST FRECUENT */

    settledGetMostFrecuentTitlesPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator([{
                        "name": "The Elements of Style",
                        "pub_year": 1920,
                        "rank": 1,
                        "appearences": {
                            "total": 3942
                        },
                        "score": 100.0,
                        "author": {
                            "_id": 51,
                            "author_first": "William",
                            "author_middle": "A.",
                            "author_last": "Strunk",
                        },
                        "_id": 1
                    }, {
                        "name": "Biology",
                        "pub_year": 1987,
                        "rank": 2,
                        "appearences": {
                            "total": 3057
                        },
                        "score": 97.2,
                        "author": {
                            "_id": 51,
                            "author_first": "Neil",
                            "author_middle": null,
                            "author_last": "Cambell",
                        },
                        "_id": 2
                    }, {
                        "name": "Frankenstein",
                        "pub_year": 1818,
                        "rank": 3,
                        "appearences": {
                            "total": 2320
                        },
                        "score": 95.0,
                        "author": {
                            "_id": 51,
                            "author_first": "Mary",
                            "author_middle": "Wollstonecraft",
                            "author_last": "Shelley",
                        },
                        "_id": 3
                    }])
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetMostFrecuentAuthorsPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator([{
                        "author_first": "Mark",
                        "author_middle": null,
                        "author_last": "Twain",
                        "rank": 1,
                        "_id": 1,
                        "appearences": {
                            "total": 1000
                        },
                        "text_count": 20,
                        image:null
                    }, {
                        "author_first": "Mary",
                        "author_middle": "Wollstonecraft",
                        "author_last": "Shelley",
                        "rank": 2,
                        "appearences": {
                            "total": 2000
                        },
                        "text_count": 13,
                        "_id": 2,
                        image:null
                    }, {
                        "author_first": "William",
                        "author_middle": "A.",
                        "author_last": "Strunk",
                        "rank": 3,
                        "appearences": {
                            "total": 3000
                        },
                        "text_count": 10,
                        "_id": 3,
                        image:null
                    }])
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetMostFrecuentInstitutionsPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator([{
                        "name": "Yale University",
                        "country": "USA",
                        "rank": 1,
                        "syllabus_count": 20000,
                        "_id": 1
                    }, {
                        "name": "Stanford University",
                        "country": "USA",
                        "rank": 2,
                        "syllabus_count": 19000,
                        "_id": 2
                    }, {
                        "name": "Harvard University",
                        "country": "USA",
                        "rank": 3,
                        "syllabus_count": 18000,
                        "_id": 3
                    }])
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetMostFrecuentPublishersPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator([{
                        "name": "Elsevier",
                        "rank": 1,
                        "assignment_count": 125000,
                        "text_count": 4500,
                        "_id": 1
                    }, {
                        "name": "Cengage",
                        "rank": 2,
                        "assignment_count": 110000,
                        "text_count": 3000,
                        "_id": 2
                    }, {
                        "name": "MacMillan",
                        "rank": 3,
                        "assignment_count": 100000,
                        "text_count": 2000,
                        "_id": 3
                    }])
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetMostFrecuentFieldsPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator([{
                        "name": "History",
                        "rank": 1,
                        "syllabus_count": 20000,
                        "_id": 1
                    }, {
                        "name": "English",
                        "rank": 2,
                        "syllabus_count": 19000,
                        "_id": 2
                    }, {
                        "name": "Computer Science",
                        "rank": 3,
                        "syllabus_count": 18000,
                        "_id": 3
                    }])
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetMostFrecuentCountriesPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator([{
                        "name": "United States",
                        "rank": 1,
                        "syllabus_count": 3000000,
                        "inst_count": 3000,
                        "_id": 1
                    }, {
                        "name": "Canada",
                        "rank": 2,
                        "syllabus_count": 2000000,
                        "inst_count": 2000,
                        "_id": 2
                    }, {
                        "name": "Australia",
                        "rank": 3,
                        "syllabus_count": 1000000,
                        "inst_count": 1000,
                        "_id": 3
                    }])
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    /******************************* LOCAL STORAGE **********************************/

    /* MOST FRECUENT */

    settledGetLSMostFrecuentTitlesPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_TITLE, 'data']))
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetLSMostFrecuentAuthorsPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_AUTHOR, 'data']))
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetLSMostFrecuentInstitutionsPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_INSTITUTION, 'data']))
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetLSMostFrecuentPublishersPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_PUBLISHER, 'data']))
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetLSMostFrecuentFieldsPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_FIELD, 'data']))
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    settledGetLSMostFrecuentCountriesPromise = (resolve, reject) => {
        if (true) {

            var tid = setTimeout(() => {
                clearInterval(tid)
                resolve(
                    this.httpResultsListWrapperSimulator(store.getState().getIn(['Landing', 'mostFrecuent', TYPE_COUNTRY, 'data']))
                )
            }, configs.REQUEST_DEV_TIMMING)
        } else {
            reject(DEV_ERROR)
        }
    }

    httpResultWrapperSimulator = (data) => {
        return {
            /* Taken from axios documentation: https://github.com/mzabriskie/axios#response-schema */
            data: data,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        }
    }

    httpResultsListWrapperSimulator = (data) => {
        return {
            data: {
                hits: [data, data]
            },
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        }
    }

    isStoredDataUpToDate = isStoredDataUpToDate
}

/***********************/
/* Singleton exporting */
/***********************/

export let syllabusHTTPService = new SyllabusHTTPService(configs.HOST + ':' + configs.PORT)
