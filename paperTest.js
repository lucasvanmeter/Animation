circle = new Path.Circle({
	center: [20, 20],
	radius: 17.5,
	strokeColor: 'black',
	fillColor: 'green'
})

t = 0
rate = 1/(20*Math.PI)
curr = circle.position

trace = new Path()
trace.selected = false
trace.strokeColor = 'black'

function onFrame(event) {
	circle.position = view.center+[t/20*Math.cos(t*rate),-t/20*Math.sin(t*rate)]
	curr = circle.position
	trace.add(curr)
	t += 1
}