function exercise(activity){
    return () => `Today's Exercise: ${activity}`
}

var run = exercise('Running')
var swim = exercise('Swim')

console.log(run())
console.log(swim())