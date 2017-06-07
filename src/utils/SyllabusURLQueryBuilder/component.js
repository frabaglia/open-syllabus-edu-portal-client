class SyllabusURLQueryBuilder {
    constructor() {}

    addUrlTitleResultsListParams = (url, params) => {
        var {
            page,
            pub_year_start,
            pub_year_end,
            class_year_start,
            class_year_end,
            open_access,
            inst_type,
            author,
            institution,
            field,
            country,
            us_state,
            query
        } = params

        var firstParam = true
        url += "?"


        if (page != null) {
            for (var i in page) {
                if (firstParam) {
                    url = url + "page=" + page[i]
                    firstParam = false
                } else
                    url = url + "&page=" + page[i]
            }
        }
        if (pub_year_start != null) {
            for (var i in pub_year_start) {
                if (firstParam) {
                    url = url + "pub_year_start=" + pub_year_start[i]
                    firstParam = false
                } else
                    url = url + "&pub_year_start=" + pub_year_start[i]
            }
        }
        if (pub_year_end != null) {
            for (var i in pub_year_end) {
                if (firstParam) {
                    url = url + "pub_year_end=" + pub_year_end[i]
                    firstParam = false
                } else
                    url = url + "&pub_year_end=" + pub_year_end[i]
            }
        }
        if (class_year_start != null) {
            for (var i in class_year_start) {
                if (firstParam) {
                    url = url + "class_year_start=" + class_year_start[i]
                    firstParam = false
                } else
                    url = url + "&class_year_start=" + class_year_start[i]
            }
        }
        if (class_year_end != null) {
            for (var i in class_year_end) {
                if (firstParam) {
                    url = url + "class_year_end=" + class_year_end[i]
                    firstParam = false
                } else
                    url = url + "&class_year_end=" + class_year_end[i]
            }
        }
        if (open_access != null) {
            for (var i in open_access) {
                if (firstParam) {
                    url = url + "open_access=" + open_access[i]
                    firstParam = false
                } else
                    url = url + "&open_access=" + open_access[i]
            }
        }
        if (inst_type != null) {
            for (var i in inst_type) {
                if (firstParam) {
                    url = url + "inst_type=" + inst_type[i]
                    firstParam = false
                } else
                    url = url + "&inst_type=" + inst_type[i]
            }
        }
        if (author != null) {
            for (var i in author) {
                if (firstParam) {
                    url = url + "author=" + author[i]
                    firstParam = false
                } else
                    url = url + "&author=" + author[i]
            }
        }
        if (institution != null) {
            for (var i in institution) {
                if (firstParam) {
                    url = url + "institution=" + institution[i]
                    firstParam = false
                } else
                    url = url + "&institution=" + institution[i]
            }
        }
        if (field != null) {
            for (var i in field) {
                if (firstParam) {
                    url = url + "field=" + field[i]
                    firstParam = false
                } else
                    url = url + "&field=" + field[i]
            }
        }
        if (country != null) {
            for (var i in country) {
                if (firstParam) {
                    url = url + "country=" + country[i]
                    firstParam = false
                } else
                    url = url + "&country=" + country[i]
            }
        }
        if (us_state != null) {
            for (var i in us_state) {
                if (firstParam) {
                    url = url + "us_state=" + us_state[i]
                    firstParam = false
                } else
                    url = url + "&us_state=" + us_state[i]
            }
        }
        if (query != null) {
            for (var i in query) {
                if (firstParam) {
                    url = url + "query=" + query[i]
                    firstParam = false
                } else
                    url = url + "&query=" + query[i]
            }
        }
        return url
    }

    addUrlAuthorResultsListParams = (url, params) => {
        var {
            page,
            institution,
            field,
            country,
            query
        } = params

        var firstParam = true
        url += "?"


        if (page != null) {
            for (var i in page) {
                if (firstParam) {
                    url = url + "page=" + page[i]
                    firstParam = false
                } else
                    url = url + "&page=" + page[i]
            }
        }
        if (institution != null) {
            for (var i in institution) {
                if (firstParam) {
                    url = url + "institution=" + institution[i]
                    firstParam = false
                } else
                    url = url + "&institution=" + institution[i]
            }
        }

        if (field != null) {
            for (var i in field) {
                if (firstParam) {
                    url = url + "field=" + field[i]
                    firstParam = false
                } else
                    url = url + "&field=" + field[i]
            }
        }

        if (country != null) {
            for (var i in country) {
                if (firstParam) {
                    url = url + "country=" + country[i]
                    firstParam = false
                } else
                    url = url + "&country=" + country[i]
            }
        }

        if (query != null) {
            for (var i in query) {
                if (firstParam) {
                    url = url + "query=" + query[i]
                    firstParam = false
                } else
                    url = url + "&query=" + query[i]
            }
        }
        return url
    }

    addUrlInstitutionResultsListParams = (url, params) => {
        var {
            page,
            field,
            country,
            query
        } = params

        var firstParam = true
        url += "?"


        if (page != null) {
            for (var i in page) {
                if (firstParam) {
                    url = url + "page=" + page[i]
                    firstParam = false
                } else
                    url = url + "&page=" + page[i]
            }
        }
        if (query != null) {
            for (var i in query) {
                if (firstParam) {
                    url = url + "query=" + query[i]
                    firstParam = false
                } else
                    url = url + "&query=" + query[i]
            }
        }

        if (field != null) {
            for (var i in field) {
                if (firstParam) {
                    url = url + "field=" + field[i]
                    firstParam = false
                } else
                    url = url + "&field=" + field[i]
            }
        }

        if (country != null) {
            for (var i in country) {
                if (firstParam) {
                    url = url + "country=" + country[i]
                    firstParam = false
                } else
                    url = url + "&country=" + country[i]
            }
        }

        return url
    }

    addUrlPublisherResultsListParams = (url, params) => {
        var {
            page,
            pub_year_start,
            pub_year_end,
            class_year_start,
            class_year_end,
            field,
            country,
            query
        } = params

        var firstParam = true
        url += "?"


        if (page != null) {
            for (var i in page) {
                if (firstParam) {
                    url = url + "page=" + page[i]
                    firstParam = false
                } else
                    url = url + "&page=" + page[i]
            }
        }
        if (pub_year_start != null) {
            for (var i in pub_year_start) {
                if (firstParam) {
                    url = url + "pub_year_start=" + pub_year_start[i]
                    firstParam = false
                } else
                    url = url + "&pub_year_start=" + pub_year_start[i]
            }
        }
        if (pub_year_end != null) {
            for (var i in pub_year_end) {
                if (firstParam) {
                    url = url + "pub_year_end=" + pub_year_end[i]
                    firstParam = false
                } else
                    url = url + "&pub_year_end=" + pub_year_end[i]
            }
        }
        if (class_year_start != null) {
            for (var i in class_year_start) {
                if (firstParam) {
                    url = url + "class_year_start=" + class_year_start[i]
                    firstParam = false
                } else
                    url = url + "&class_year_start=" + class_year_start[i]
            }
        }
        if (class_year_end != null) {
            for (var i in class_year_end) {
                if (firstParam) {
                    url = url + "class_year_end=" + class_year_end[i]
                    firstParam = false
                } else
                    url = url + "&class_year_end=" + class_year_end[i]
            }
        }
        if (field != null) {
            for (var i in field) {
                if (firstParam) {
                    url = url + "field=" + field[i]
                    firstParam = false
                } else
                    url = url + "&field=" + field[i]
            }
        }
        if (country != null) {
            for (var i in country) {
                if (firstParam) {
                    url = url + "country=" + country[i]
                    firstParam = false
                } else
                    url = url + "&country=" + country[i]
            }
        }
        if (query != null) {
            for (var i in query) {
                if (firstParam) {
                    url = url + "query=" + query[i]
                    firstParam = false
                } else
                    url = url + "&query=" + query[i]
            }
        }
        return url
    }

    addUrlFieldResultsListParams = (url, params) => {
        var {
            page,
            country,
            query
        } = params

        var firstParam = true
        url += "?"


        if (page != null) {
            for (var i in page) {
                if (firstParam) {
                    url = url + "page=" + page[i]
                    firstParam = false
                } else
                    url = url + "&page=" + page[i]
            }
        }
        if (query != null) {
            for (var i in query) {
                if (firstParam) {
                    url = url + "query=" + query[i]
                    firstParam = false
                } else
                    url = url + "&query=" + query[i]
            }
        }

        if (country != null) {
            for (var i in country) {
                if (firstParam) {
                    url = url + "country=" + country[i]
                    firstParam = false
                } else
                    url = url + "&country=" + country[i]
            }
        }

        return url
    }

    addUrlCountryResultsListParams = (url, params) => {
        var {
            page,
            field,
            query
        } = params

        var firstParam = true
        url += "?"


        if (page != null) {
            for (var i in page) {
                if (firstParam) {
                    url = url + "page=" + page[i]
                    firstParam = false
                } else
                    url = url + "&page=" + page[i]
            }
        }
        if (query != null) {
            for (var i in query) {
                if (firstParam) {
                    url = url + "query=" + query[i]
                    firstParam = false
                } else
                    url = url + "&query=" + query[i]
            }
        }

        if (field != null) {
            for (var i in field) {
                if (firstParam) {
                    url = url + "field=" + field[i]
                    firstParam = false
                } else
                    url = url + "&field=" + field[i]
            }
        }
        return url
    }
}

export let syllabusURLQueryBuilder = new SyllabusURLQueryBuilder()
