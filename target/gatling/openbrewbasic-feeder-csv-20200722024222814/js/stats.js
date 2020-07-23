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
        "total": "952",
        "ok": "2549",
        "ko": "952"
    },
    "maxResponseTime": {
        "total": "2599",
        "ok": "2599",
        "ko": "1035"
    },
    "meanResponseTime": {
        "total": "1784",
        "ok": "2574",
        "ko": "994"
    },
    "standardDeviation": {
        "total": "791",
        "ok": "25",
        "ko": "42"
    },
    "percentiles1": {
        "total": "1792",
        "ok": "2574",
        "ko": "994"
    },
    "percentiles2": {
        "total": "2562",
        "ok": "2587",
        "ko": "1014"
    },
    "percentiles3": {
        "total": "2592",
        "ok": "2597",
        "ko": "1031"
    },
    "percentiles4": {
        "total": "2598",
        "ok": "2599",
        "ko": "1034"
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
        "total": "0.444",
        "ok": "0.222",
        "ko": "0.222"
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
        "total": "2549",
        "ok": "2549",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2599",
        "ok": "2599",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2574",
        "ok": "2574",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2574",
        "ok": "2574",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2587",
        "ok": "2587",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2597",
        "ok": "2597",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2599",
        "ok": "2599",
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
        "total": "0.222",
        "ok": "0.222",
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
        "total": "952",
        "ok": "-",
        "ko": "952"
    },
    "maxResponseTime": {
        "total": "1035",
        "ok": "-",
        "ko": "1035"
    },
    "meanResponseTime": {
        "total": "994",
        "ok": "-",
        "ko": "994"
    },
    "standardDeviation": {
        "total": "42",
        "ok": "-",
        "ko": "42"
    },
    "percentiles1": {
        "total": "994",
        "ok": "-",
        "ko": "994"
    },
    "percentiles2": {
        "total": "1014",
        "ok": "-",
        "ko": "1014"
    },
    "percentiles3": {
        "total": "1031",
        "ok": "-",
        "ko": "1031"
    },
    "percentiles4": {
        "total": "1034",
        "ok": "-",
        "ko": "1034"
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
        "total": "0.222",
        "ok": "-",
        "ko": "0.222"
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
