const text = `Time:        42     89     91     89
Distance:   308   1170   1291   1467`

const [timeLine, distLine] = text.split('\n')

const times = timeLine.split(':')[1].split(' ').filter(Boolean).map(Number)
const dists = distLine.split(':')[1].split(' ').filter(Boolean).map(Number)

let product = 1

for (let i = 0; i < times.length; i++) {
	let waysToBeat = 0
	for (let holdTime = 1; holdTime < times[i]; holdTime++) {
		const dist = (times[i] - holdTime) * holdTime
		if (dist > dists[i]) waysToBeat++
	}
	console.log(waysToBeat)
	product *= waysToBeat
}

console.log(product)
