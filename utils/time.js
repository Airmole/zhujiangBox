function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()

  var d = new Date()
  var weekday = new Array(7)
  weekday[0] = "星期日"
  weekday[1] = "星期一"
  weekday[2] = "星期二"
  weekday[3] = "星期三"
  weekday[4] = "星期四"
  weekday[5] = "星期五"
  weekday[6] = "星期六"

  return year + "年" + month + "月" + day + "日" + "  " + weekday[d.getDay()] + '  ' + hour + "点"
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function CompareDate(t1, t2) {
  var date = new Date();
  var t1Arr = t1.split(':');
  var t2Arr = t2.split(':');
  if (t1Arr[0] - t2Arr[0] < 0) {
    return true;
  } else if (t1Arr[0] == t2Arr[0]) {
    if (t1Arr[1] - t2Arr[1] < 0)
    return true;
  } else {
    return false;
  }
}
module.exports = {
  formatTime: formatTime,
  CompareDate: CompareDate
}