exports.datamodel = {
    "Healthy": {
        "Healthy": "Healthy",
        "HealtySocialDistancing": "HealtySocialDistancing",
        "LowProbabilitySuspected": "LowProbabilitySuspected",
        "HighProbabilitySuspected": "HighProbabilitySuspected",
        "FluLike": "Healthy",
        "Positive": "HighProbabilitySuspected",
        "Recovered": "Healthy"
    },
    "HealtySocialDistancing": {
        "Healthy": "HealtySocialDistancing",
        "HealtySocialDistancing": "HealtySocialDistancing",
        "LowProbabilitySuspected": "LowProbabilitySuspected",
        "HighProbabilitySuspected": "HighProbabilitySuspected",
        "FluLike": "HealtySocialDistancing",
        "Positive": "Positive",
        "Recovered": "HealtySocialDistancing"
    },
    "LowProbabilitySuspected": {
        "Healthy": "LowProbabilitySuspected",
        "HealtySocialDistancing": "LowProbabilitySuspected",
        "LowProbabilitySuspected": "LowProbabilitySuspected",
        "HighProbabilitySuspected": "HighProbabilitySuspected",
        "FluLike": "LowProbabilitySuspected",
        "Positive": "HighProbabilitySuspected",
        "Recovered": "LowProbabilitySuspected"
    },
    "HighProbabilitySuspected": {
        "Healthy": "HighProbabilitySuspected",
        "HealtySocialDistancing": "HighProbabilitySuspected",
        "LowProbabilitySuspected": "HighProbabilitySuspected",
        "HighProbabilitySuspected": "HighProbabilitySuspected",
        "FluLike": "HighProbabilitySuspected",
        "Positive": "HighProbabilitySuspected",
        "Recovered": "HighProbabilitySuspected"
    },
    "FluLike": {
        "Healthy": "FluLike",
        "HealtySocialDistancing": "HealtySocialDistancing",
        "LowProbabilitySuspected": "LowProbabilitySuspected",
        "HighProbabilitySuspected": "LowProbabilitySuspected",
        "FluLike": "FluLike",
        "Positive": "HighProbabilitySuspected",
        "Recovered": "FluLike"
    },
    "Positive": {
        "Healthy": "Positive",
        "HealtySocialDistancing": "Positive",
        "LowProbabilitySuspected": "Positive",
        "HighProbabilitySuspected": "Positive",
        "FluLike": "Positive",
        "Positive": "Positive",
        "Recovered": "Positive"
    },
    "Recovered": {
        "Healthy": "Recovered",
        "HealtySocialDistancing": "Recovered",
        "LowProbabilitySuspected": "Recovered",
        "HighProbabilitySuspected": "Recovered",
        "FluLike": "Recovered",
        "Positive": "Recovered",
        "Recovered": "Recovered"
    }

};