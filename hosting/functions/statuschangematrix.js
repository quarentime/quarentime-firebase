exports.datamodel = {
    "Healthy": {
        "Healthy": "Healthy",
        "HealtySocialDistancing": "HealtySocialDistancing",
        "LowProbabilitySuspected": "LowProbabilitySuspected",
        "HighProbabilitySuspected": "LowProbabilitySuspected",
        "FluLike": "Healthy",
        "Positive": "HighProbabilitySuspected",
        "Recovered": "Healthy",
        "Pending": "Healthy"
    },
    "HealtySocialDistancing": {
        "Healthy": "HealtySocialDistancing",
        "HealtySocialDistancing": "HealtySocialDistancing",
        "LowProbabilitySuspected": "LowProbabilitySuspected",
        "HighProbabilitySuspected": "HighProbabilitySuspected",
        "FluLike": "HealtySocialDistancing",
        "Positive": "Positive",
        "Recovered": "HealtySocialDistancing",
        "Pending": "HealtySocialDistancing"
    },
    "LowProbabilitySuspected": {
        "Healthy": "LowProbabilitySuspected",
        "HealtySocialDistancing": "LowProbabilitySuspected",
        "LowProbabilitySuspected": "LowProbabilitySuspected",
        "HighProbabilitySuspected": "HighProbabilitySuspected",
        "FluLike": "LowProbabilitySuspected",
        "Positive": "HighProbabilitySuspected",
        "Recovered": "LowProbabilitySuspected",
        "Pending": "LowProbabilitySuspected"
    },
    "HighProbabilitySuspected": {
        "Healthy": "HighProbabilitySuspected",
        "HealtySocialDistancing": "HighProbabilitySuspected",
        "LowProbabilitySuspected": "HighProbabilitySuspected",
        "HighProbabilitySuspected": "HighProbabilitySuspected",
        "FluLike": "HighProbabilitySuspected",
        "Positive": "HighProbabilitySuspected",
        "Recovered": "HighProbabilitySuspected",
        "Pending": "HighProbabilitySuspected"
    },
    "FluLike": {
        "Healthy": "FluLike",
        "HealtySocialDistancing": "HealtySocialDistancing",
        "LowProbabilitySuspected": "LowProbabilitySuspected",
        "HighProbabilitySuspected": "LowProbabilitySuspected",
        "FluLike": "FluLike",
        "Positive": "HighProbabilitySuspected",
        "Recovered": "FluLike",
        "Pending": "FluLike"
    },
    "Positive": {
        "Healthy": "Positive",
        "HealtySocialDistancing": "Positive",
        "LowProbabilitySuspected": "Positive",
        "HighProbabilitySuspected": "Positive",
        "FluLike": "Positive",
        "Positive": "Positive",
        "Recovered": "Positive",
        "Pending": "Positive"
    },
    "Recovered": {
        "Healthy": "Recovered",
        "HealtySocialDistancing": "Recovered",
        "LowProbabilitySuspected": "Recovered",
        "HighProbabilitySuspected": "Recovered",
        "FluLike": "Recovered",
        "Positive": "Recovered",
        "Recovered": "Recovered",
        "Pending": "Recovered"
    },
    "Pending": {
        "Healthy": "Pending",
        "HealtySocialDistancing": "Pending",
        "LowProbabilitySuspected": "Pending",
        "HighProbabilitySuspected": "Pending",
        "FluLike": "Pending",
        "Positive": "Pending",
        "Recovered": "Pending",
        "Pending": "Pending"
    }
};