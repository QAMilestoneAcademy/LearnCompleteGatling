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
        "total": "797",
        "ok": "797",
        "ko": "850"
    },
    "maxResponseTime": {
        "total": "1613",
        "ok": "1613",
        "ko": "990"
    },
    "meanResponseTime": {
        "total": "1063",
        "ok": "1205",
        "ko": "920"
    },
    "standardDeviation": {
        "total": "326",
        "ok": "408",
        "ko": "70"
    },
    "percentiles1": {
        "total": "920",
        "ok": "1205",
        "ko": "920"
    },
    "percentiles2": {
        "total": "1146",
        "ok": "1409",
        "ko": "955"
    },
    "percentiles3": {
        "total": "1520",
        "ok": "1572",
        "ko": "983"
    },
    "percentiles4": {
        "total": "1594",
        "ok": "1605",
        "ko": "989"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 25
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 25
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
        "total": "797",
        "ok": "797",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1613",
        "ok": "1613",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1205",
        "ok": "1205",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "408",
        "ok": "408",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1205",
        "ok": "1205",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1409",
        "ok": "1409",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1572",
        "ok": "1572",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1605",
        "ok": "1605",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 50
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
        "total": "850",
        "ok": "-",
        "ko": "850"
    },
    "maxResponseTime": {
        "total": "990",
        "ok": "-",
        "ko": "990"
    },
    "meanResponseTime": {
        "total": "920",
        "ok": "-",
        "ko": "920"
    },
    "standardDeviation": {
        "total": "70",
        "ok": "-",
        "ko": "70"
    },
    "percentiles1": {
        "total": "920",
        "ok": "-",
        "ko": "920"
    },
    "percentiles2": {
        "total": "955",
        "ok": "-",
        "ko": "955"
    },
    "percentiles3": {
        "total": "983",
        "ok": "-",
        "ko": "983"
    },
    "percentiles4": {
        "total": "989",
        "ok": "-",
        "ko": "989"
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
