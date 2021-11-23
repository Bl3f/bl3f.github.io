const height = 1000;
const width = height;
const getRandom = (max) => Math.floor(Math.random() * max);
const chartSize = {width: width / 2.5, height: height / 2};
const xDomain = [0, chartSize.width],
    yDomain = [0, chartSize.height / 30];

const url = "https://static.observableusercontent.com/files/d8bb57e2ce25a2c277c80011c3aa3c6ad6c31df240f54193509f46623bc6612f19299403aba9778f5d3ce79285df9f615ac323906b2b1de2117e20f63af62f6b?response-content-disposition=attachment%3Bfilename*%3DUTF-8%27%27pulsar.csv"

const drawRidgeline = (data) => {
    console.log(data);
    const svg = d3.select(".main").append("svg")
        .attr("width", width)
        .attr("height", height);

    const yScale = d3.scaleLinear().domain([0, 15]).range(yDomain);
    const xScale = d3.scaleLinear().domain([0, data[0].length]).range(xDomain);

    svg.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "black");

    const main = svg
        .append("g")
        .attr("transform", `translate(${width / 2 - chartSize.width / 2},${chartSize.height / 2})`);

    const textGroup = svg
        .append("g")
        .attr("width", "100%")
        .attr("height", "100%");

    textGroup
        .append("text")
        .attr("transform", `translate(${width / 2},${chartSize.height / 2 - Math.round(height / 20)})`)
        .attr("fill", "white")
        .attr("font-size", `${Math.round(width / 50)}px`)
        .attr("font-family", "Helvetica")
        .attr("text-anchor", "middle")
        .text("JOY DIVISION • UNKNOWN PLEASURES")
    ;

    const groups = main
        .selectAll("g")
        .data(data)
        .join("g")
        .attr("transform", (_, i) => `translate(0,${i * chartSize.height / 80})`);

    groups
        .append("path")
        .attr("d", signal => {
            return d3.area(d => d[0], d => d[1], d => d[2])(
                signal.map((d, i) => [xScale(i), -yScale(d), -yScale(d3.min(signal))])
            );
        })
        .attr("stroke", "none")
        .attr("fill", "black");

    groups
        .append("path")
        .attr("d", signal => {
            return d3.line()(signal.map((d, i) => [xScale(i), -yScale(d)]));
        })
        .attr("stroke", "white")
        .attr("fill", "none");
}

const initOriginal = () => {
    fetch(url)
        .then(d => d.text())
        .then(d3.csvParseRows)
        .then(drawRidgeline);
}

initOriginal();
