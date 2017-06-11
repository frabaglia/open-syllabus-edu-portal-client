import {
    configs
} from '../configs'

class SyllabusLinker {
    constructor(baseUrl) {
        console.log("Creating SyllabusLink...")
        console.log("baseUrl:" + baseUrl)
        this.baseUrl = baseUrl
    }

    title = (_id) => {
        console.log("Creating link: " + this.baseUrl + "/title/" + _id)
        return this.baseUrl + "/title/" + _id
    }

    author = (_id) => {
        console.log("Creating link: " + this.baseUrl + "/author/" + _id)
        return this.baseUrl + "/author/" + _id
    }

    field = (_id) => {
        console.log("Creating link: " + this.baseUrl + "/field/" + _id)
        return this.baseUrl + "/field/" + _id
    }

    school = (_id) => {
        console.log("Creating link: " + this.baseUrl + "/school/" + _id)
        return this.baseUrl + "/school/" + _id
    }

    country = (_id) => {
        console.log("Creating link: " + this.baseUrl + "/country/" + _id)
        return this.baseUrl + "/country/" + _id
    }

    publisher = (_id) => {
        console.log("Creating link: " + this.baseUrl + "/publisher/" + _id)
        return this.baseUrl + "/publisher/" + _id
    }
}

/***********************/
/* Singleton exporting */
/***********************/

export let syllabusLinker = new SyllabusLinker(configs.HOST + ':' + configs.PORT)
