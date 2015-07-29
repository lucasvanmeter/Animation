circle = new Path.Circle({
	center: [20, 20],
	radius: 17.5,
	strokeColor: 'black'
})

t = 0
curr = circle.position

trace = new Path()
trace.strokeColor = 'black'

function onFrame(event) {
	circle.position = view.center+[t/10*Math.cos(t/30),-t/10*Math.sin(t/30)]
	curr = circle.position
	trace.add(curr)
	t++
}