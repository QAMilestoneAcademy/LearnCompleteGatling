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
        "total": "842",
        "ok": "842",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1763",
        "ok": "1763",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1226",
        "ok": "1226",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "384",
        "ok": "384",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1150",
        "ok": "1150",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1504",
        "ok": "1504",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1711",
        "ok": "1711",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1753",
        "ok": "1753",
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
        "total": "1418",
        "ok": "1418",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1763",
        "ok": "1763",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1591",
        "ok": "1591",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "173",
        "ok": "173",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1591",
        "ok": "1591",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1677",
        "ok": "1677",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1746",
        "ok": "1746",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1760",
        "ok": "1760",
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
        "total": "842",
        "ok": "842",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "882",
        "ok": "882",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "862",
        "ok": "862",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    },
    "percentiles1": {
        "total": "862",
        "ok": "862",
        "ko": "-"
    },
    "percentiles2": {
        "total": "872",
        "ok": "872",
        "ko": "-"
    },
    "percentiles3": {
        "total": "880",
        "ok": "880",
        "ko": "-"
    },
    "percentiles4": {
        "total": "882",
        "ok": "882",
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
