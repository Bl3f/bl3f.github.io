const getUrl = (table) => {
    return `https://storage.googleapis.com/public-blef-socials/${table}.json`
}

const getData = (table, callback) => {
    fetch(getUrl(table))
        .then(response => response.json())
        .then(callback);
}

const drawChart = (selector, data, kind = 'bar', customOptions = {}, customSeriesOptions = {}) => {
    const chart = echarts.init(document.querySelector(selector));

    const options = {
        tooltip: {},
        xAxis: {type: 'time'},
        yAxis: {},
        series: [
            {
                ...{
                    name: 'views',
                    type: kind,
                    data: data,
                    smooth: true,
                    showSymbol: false
                }, ...customSeriesOptions
            }
        ]
    };

    chart.setOption({...options, ...customOptions});
}

const drawSpan = (selector, value) => {
    document.querySelector(selector).innerHTML = value
}

const displayFollowers = (data) => {
    const platforms = ["linkedin", "blog", "youtube", "twitter"];
    const followers = data.at(-1);
    platforms.map(d => {
        drawSpan(`div.kpi.${d} .value`, followers[`${d}_followers`])
    });
}

const displayViews = (data) => {
    ["youtube", "linkedin"].map(platform =>
        drawChart(`.views .${platform}`, data.map(d => [d["execution_date"], d[`${platform}_views`]]))
    );
}

const displayNewsletterMembers = (data) => {
    const totalNonMembers = data.reduce((a, b) => a + b.total_non_members, 0);
    drawSpan(".newsletter .totalNonMembers .value", totalNonMembers);
    drawChart(".newsletter .daily", data.map(d => [d.day, d.total_members]), 'line');
}

const displayOpenRate = (data) => {
    drawSpan(`.newsletter .openRate .value`, Math.round(data[0].global_or * 100) / 100);
}

const displayCountries = (data) => {
    const threshold = data.reduce((a, b) => a + b.total, 0) * 2 / 100;
    const simplifiedData = data.filter(d => d.total > threshold);
    simplifiedData.push({
        country: "Other",
        total: data.filter(d => d.total <= threshold).reduce((a, b) => a + b.total, 0)
    })
    const options = {
        labelLine: {
            show: false
        },
        label: {
            show: false,
            position: 'center'
        },
        radius: ['40%', '70%'],
    }
    drawChart(
        ".newsletter .countries",
        simplifiedData.map(d => {
            return {value: d.total, name: d.country};
        }),
        "pie",
        {
        },
        options,
    )
}

const init = () => {
    getData("followers", displayFollowers);
    getData("views", displayViews);
    getData("daily_members", displayNewsletterMembers);
    getData("open_rate", displayOpenRate);
    getData("countries", displayCountries);
};

init();