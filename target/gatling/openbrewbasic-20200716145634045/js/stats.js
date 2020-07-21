var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "2",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "851",
        "ok": "1440",
        "ko": "851"
    },
    "maxResponseTime": {
        "total": "1638",
        "ok": "1638",
        "ko": "851"
    },
    "meanResponseTime": {
        "total": "1195",
        "ok": "1539",
        "ko": "851"
    },
    "standardDeviation": {
        "total": "351",
        "ok": "99",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1146",
        "ok": "1539",
        "ko": "851"
    },
    "percentiles2": {
        "total": "1490",
        "ok": "1589",
        "ko": "851"
    },
    "percentiles3": {
        "total": "1608",
        "ok": "1628",
        "ko": "851"
    },
    "percentiles4": {
        "total": "1632",
        "ok": "1636",
        "ko": "851"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.25",
        "ko": "0.25"
    }
},
contents: {
"req_all-breweries-d72c1": {
        type: "REQUEST",
        name: "all_breweries",
path: "all_breweries",
pathFormatted: "req_all-breweries-d72c1",
stats: {
    "name": "all_breweries",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1440",
        "ok": "1440",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1638",
        "ok": "1638",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1539",
        "ok": "1539",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1539",
        "ok": "1539",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1589",
        "ok": "1589",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1628",
        "ok": "1628",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1636",
        "ok": "1636",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.25",
        "ko": "-"
    }
}
    },"req_get-single-brew-6ed46": {
        type: "REQUEST",
        name: "get_single_brewery",
path: "get_single_brewery",
pathFormatted: "req_get-single-brew-6ed46",
stats: {
    "name": "get_single_brewery",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "851",
        "ok": "-",
        "ko": "851"
    },
    "maxResponseTime": {
        "total": "851",
        "ok": "-",
        "ko": "851"
    },
    "meanResponseTime": {
        "total": "851",
        "ok": "-",
        "ko": "851"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "851",
        "ok": "-",
        "ko": "851"
    },
    "percentiles2": {
        "total": "851",
        "ok": "-",
        "ko": "851"
    },
    "percentiles3": {
        "total": "851",
        "ok": "-",
        "ko": "851"
    },
    "percentiles4": {
        "total": "851",
        "ok": "-",
        "ko": "851"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "-",
        "ko": "0.25"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
