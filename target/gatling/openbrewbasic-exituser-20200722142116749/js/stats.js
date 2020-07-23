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
        "total": "903",
        "ok": "903",
        "ko": "2068"
    },
    "maxResponseTime": {
        "total": "2996",
        "ok": "1263",
        "ko": "2996"
    },
    "meanResponseTime": {
        "total": "1808",
        "ok": "1083",
        "ko": "2532"
    },
    "standardDeviation": {
        "total": "805",
        "ok": "180",
        "ko": "464"
    },
    "percentiles1": {
        "total": "1666",
        "ok": "1083",
        "ko": "2532"
    },
    "percentiles2": {
        "total": "2300",
        "ok": "1173",
        "ko": "2764"
    },
    "percentiles3": {
        "total": "2857",
        "ok": "1245",
        "ko": "2950"
    },
    "percentiles4": {
        "total": "2968",
        "ok": "1259",
        "ko": "2987"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 25
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
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "2068",
        "ok": "-",
        "ko": "2068"
    },
    "maxResponseTime": {
        "total": "2996",
        "ok": "-",
        "ko": "2996"
    },
    "meanResponseTime": {
        "total": "2532",
        "ok": "-",
        "ko": "2532"
    },
    "standardDeviation": {
        "total": "464",
        "ok": "-",
        "ko": "464"
    },
    "percentiles1": {
        "total": "2532",
        "ok": "-",
        "ko": "2532"
    },
    "percentiles2": {
        "total": "2764",
        "ok": "-",
        "ko": "2764"
    },
    "percentiles3": {
        "total": "2950",
        "ok": "-",
        "ko": "2950"
    },
    "percentiles4": {
        "total": "2987",
        "ok": "-",
        "ko": "2987"
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
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "903",
        "ok": "903",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1263",
        "ok": "1263",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1083",
        "ok": "1083",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "180",
        "ok": "180",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1083",
        "ok": "1083",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1173",
        "ok": "1173",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1245",
        "ok": "1245",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1259",
        "ok": "1259",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 50
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
        "total": "0.222",
        "ok": "0.222",
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
