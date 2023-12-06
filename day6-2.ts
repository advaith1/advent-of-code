const text = `Time:        42     89     91     89
Distance:   308   1170   1291   1467`

const [timeLine, distLine] = text.split('\n')

const time = +timeLine.split(':')[1].replaceAll(' ', '')
const distToBeat = +distLine.split(':')[1].replaceAll(' ', '')

let waysToBeat = 0
for (let holdTime = 1; holdTime < time; holdTime++) {
	const dist = (time - holdTime) * holdTime
	if (dist > distToBeat) waysToBeat++
}
console.log(waysToBeat)
