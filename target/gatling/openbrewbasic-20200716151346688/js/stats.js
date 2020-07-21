var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "0",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "829",
        "ok": "-",
        "ko": "829"
    },
    "maxResponseTime": {
        "total": "2907",
        "ok": "-",
        "ko": "2907"
    },
    "meanResponseTime": {
        "total": "1538",
        "ok": "-",
        "ko": "1538"
    },
    "standardDeviation": {
        "total": "839",
        "ok": "-",
        "ko": "839"
    },
    "percentiles1": {
        "total": "1208",
        "ok": "-",
        "ko": "1208"
    },
    "percentiles2": {
        "total": "1883",
        "ok": "-",
        "ko": "1883"
    },
    "percentiles3": {
        "total": "2702",
        "ok": "-",
        "ko": "2702"
    },
    "percentiles4": {
        "total": "2866",
        "ok": "-",
        "ko": "2866"
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
    "count": 4,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.444",
        "ok": "-",
        "ko": "0.444"
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
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "1541",
        "ok": "-",
        "ko": "1541"
    },
    "maxResponseTime": {
        "total": "2907",
        "ok": "-",
        "ko": "2907"
    },
    "meanResponseTime": {
        "total": "2224",
        "ok": "-",
        "ko": "2224"
    },
    "standardDeviation": {
        "total": "683",
        "ok": "-",
        "ko": "683"
    },
    "percentiles1": {
        "total": "2224",
        "ok": "-",
        "ko": "2224"
    },
    "percentiles2": {
        "total": "2566",
        "ok": "-",
        "ko": "2566"
    },
    "percentiles3": {
        "total": "2839",
        "ok": "-",
        "ko": "2839"
    },
    "percentiles4": {
        "total": "2893",
        "ok": "-",
        "ko": "2893"
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
        "total": "829",
        "ok": "-",
        "ko": "829"
    },
    "maxResponseTime": {
        "total": "874",
        "ok": "-",
        "ko": "874"
    },
    "meanResponseTime": {
        "total": "852",
        "ok": "-",
        "ko": "852"
    },
    "standardDeviation": {
        "total": "23",
        "ok": "-",
        "ko": "23"
    },
    "percentiles1": {
        "total": "852",
        "ok": "-",
        "ko": "852"
    },
    "percentiles2": {
        "total": "863",
        "ok": "-",
        "ko": "863"
    },
    "percentiles3": {
        "total": "872",
        "ok": "-",
        "ko": "872"
    },
    "percentiles4": {
        "total": "874",
        "ok": "-",
        "ko": "874"
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
