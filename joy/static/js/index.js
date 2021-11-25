const height = 1000;
const width = height;
const getRandom = (max) => Math.floor(Math.random() * max);
const chartSize = {width: width / 2.5, height: height / 2};
const xDomain = [0, chartSize.width],
    yDomain = [0, chartSize.height / 30];

const svg = d3.select(".main").append("svg")
    .attr("width", width)
    .attr("height", height);

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
    .attr("height", "100%")
    .append("text")
    .attr("transform", `translate(${width / 2},${chartSize.height / 2 - Math.round(height / 20)})`)
    .attr("fill", "white")
    .attr("font-size", `${Math.round(width / 50)}px`)
    .attr("font-family", "Helvetica")
    .attr("text-anchor", "middle");

function mod(n, m) {
    return ((n % m) + m) % m;
}

const drawRidgeline = (data, title) => {
    const yScale = d3.scaleLinear().domain([0, 15]).range(yDomain);
    const xScale = d3.scaleLinear().domain([0, data[0].length]).range(xDomain);

    textGroup.text(title);

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
    const url = "https://static.observableusercontent.com/files/d8bb57e2ce25a2c277c80011c3aa3c6ad6c31df240f54193509f46623bc6612f19299403aba9778f5d3ce79285df9f615ac323906b2b1de2117e20f63af62f6b?response-content-disposition=attachment%3Bfilename*%3DUTF-8%27%27pulsar.csv"

    fetch(url)
        .then(d => d.text())
        .then(d3.csvParseRows)
        .then(data => drawRidgeline(data, "JOY DIVISION • UNKNOWN PLEASURES"));
}

const initAlter = () => {
    const url = "http://localhost:3000/joy/all.json"

    fetch(url)
        .then(d => d.json())
        .then(data => {
            const cities = Object.keys(data);
            let selectedCity = cities[0]
            const selectedData = data[selectedCity];

            const min = d3.min(selectedData.map(d => d3.min(d))) + 3;
            const max = -min;
            const bins = 100;
            const step = (max - min) / bins;
            const thresholds = d3.range(bins + 1).map(d => min + d * step);

            function createBins(signal) {
                return d3.bin().thresholds(thresholds).domain([min, max])(signal).map(d => d.length);
            }

            document.onkeydown = function (e) {
                switch (e.which) {
                    case 38: // up
                        selectedCity = cities[mod(cities.indexOf(selectedCity) - 1, cities.length)];
                        drawRidgeline(data[selectedCity], `${selectedCity.toUpperCase()} • UNKNOWN FUTURE`);
                        break;

                    case 40: // down
                        selectedCity = cities[mod(cities.indexOf(selectedCity) + 1, cities.length)];
                        drawRidgeline(data[selectedCity], `${selectedCity.toUpperCase()} • UNKNOWN FUTURE`);
                        break;

                    default:
                        return; // exit this handler for other keys
                }
                e.preventDefault(); // prevent the default action (scroll / move caret)
            };


            return [selectedData.map(createBins), selectedCity];
        })
        .then(([data, city]) => drawRidgeline(data, `${city.toUpperCase()} • UNKNOWN FUTURE`));
}

// initOriginal();
initAlter();
