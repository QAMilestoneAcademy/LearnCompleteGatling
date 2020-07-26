var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "4",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "854",
        "ok": "854",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1802",
        "ok": "1802",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1269",
        "ok": "1269",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "415",
        "ok": "415",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1210",
        "ok": "1210",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1610",
        "ok": "1610",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1764",
        "ok": "1764",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1794",
        "ok": "1794",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 50
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
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
        "total": "1546",
        "ok": "1546",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1802",
        "ok": "1802",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1674",
        "ok": "1674",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1674",
        "ok": "1674",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1738",
        "ok": "1738",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1789",
        "ok": "1789",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1799",
        "ok": "1799",
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
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "854",
        "ok": "854",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "873",
        "ok": "873",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "864",
        "ok": "864",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles1": {
        "total": "864",
        "ok": "864",
        "ko": "-"
    },
    "percentiles2": {
        "total": "868",
        "ok": "868",
        "ko": "-"
    },
    "percentiles3": {
        "total": "872",
        "ok": "872",
        "ko": "-"
    },
    "percentiles4": {
        "total": "873",
        "ok": "873",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 100
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
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
