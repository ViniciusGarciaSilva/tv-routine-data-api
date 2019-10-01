function parse (data, startInput, finishInput) {
  let result = []
  let i = 0
  let channel = 0

  // sort data by date
  data.sort(function (a, b) {
    return new Date(a.start) - new Date(b.start)
  })

  for (let time = new Date(startInput); time.getTime() <= finishInput.getTime(); time.setMinutes(time.getMinutes() + 1)) {
    if (time.getTime() > data[i].finish.getTime()) {
      channel = 0
      i++
    }
    if (time.getTime() < data[i].start.getTime()) {
      channel = 0
    }
    if (time.getTime() >= data[i].start.getTime() && time.getTime() <= data[i].finish.getTime()) {
      channel = data[i].channel
    }
    result.push({
      date: time.toISOString(),
      channel: channel
    })
    console.log(result[result.length - 1])
  }
  return result
}
exports.parse = parse