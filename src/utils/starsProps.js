export function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

export function getDistribution(length, grow, itemCount, zonesCount = 12)
{
    const zones = [];
    const distribution = new Array(itemCount);
    let accum = grow;

    for(let factor = 1; factor <= zonesCount; factor++)
        zones.push(parseInt(length/factor));

    for(let i = 0; i < distribution.length; i++)
    {
	let direction = i%2 === 0 ? 1 : -1;

        distribution[i] = zones[getRandomInt(0, zones.length)] + accum * direction;
	accum += grow;
    }

    return distribution;
}

export default function starsProps(width, height, count)
{
    const props = new Array(count);
    const colors = [
        "#4872d2",
	"#f46ad6",
	"#ff4f4f",
	"#fbfe2e",
	"#b16ffe",
	"#ffffff"
    ];

    for(let i = 0; i < props.length; i++)
    {
        const size = getRandomInt(5, 25);
	const color = colors[getRandomInt(0, colors.length)];
	const xDistribution = getDistribution(width, 3, count, 7);
	const yDistribution = getDistribution(height, 3, count, 7);

	props[i] = {
            width: `${size}px`,
	    height: `${size}px`,
            left: xDistribution[i],
	    top: yDistribution[i],
	    background: `radial-gradient(closest-side, white 5%, ${color} 10%, var(--bs-body-bg) 70%)`
	};
    }
    localStorage.clear();
    localStorage.setItem("props", JSON.stringify(props));
}

