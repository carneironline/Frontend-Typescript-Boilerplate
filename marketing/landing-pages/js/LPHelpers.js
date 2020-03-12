const LPHelpers = (function() {
    function addQueryOnLinks(tagSearch = 'a') {
        const queriesToSearch = [
            {searchs: ['utm_origem', 'interno_origem'], changeToUtm: 'utm_source'},
            {searchs: ['utm_midia', 'interno_midia'], changeToUtm: 'utm_medium'},
            {searchs: ['utm_campanha', 'interno_campanha'], changeToUtm: 'utm_campaign'},
        ]
    
        const currentPageQueries = () => {
            return window.location.search.substr(1).split("&").concat(window.location.hash.substr(1).split("&")).filter(item => (item))
        }

        const queriesUrl = () => {
            return currentPageQueries().join('&')
        }
 
        const queriesInfracommerce = () => {
            let queries = currentPageQueries().map(item => {
                let newItem = item
    
                queriesToSearch.map(obj => { 
                    obj.searchs.forEach(search => {
                        if(item.includes(search))
                            newItem = item.replace(search, obj.changeToUtm)
                    })
                        
                })
                
                return newItem
            }) 

            return queries.join('&')
        }    
    
        document.querySelectorAll(tagSearch).forEach(function(element) { 
            let link = element.getAttribute("href");
            let isHttp = link.includes("http");
            let classes = element.getAttribute("class");
            let isInfracommerce = classes ? classes.includes("js-utm-is-us") : null;
    
            if (isHttp) {
                let hasSearch = link.includes("?");
                let newUrl = '';

                if(isInfracommerce) {
                    newUrl = (hasSearch) ? `${link}&${queriesInfracommerce()}` : `${link}?${queriesInfracommerce()}`
                } else {
                    newUrl = (hasSearch) ? `${link}&${queriesUrl()}` : `${link}?${queriesUrl()}`
                }

                element.setAttribute("href", newUrl)                
            }
        })
    }

    return {
        addQueryOnLinks: addQueryOnLinks
    }
}())