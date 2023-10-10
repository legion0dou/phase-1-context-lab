/* Your Code Here */
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
  }
  function createTimeInEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employee.timeInEvents.push({ type: "TimeIn", hour: parseInt(hour), date });
    return employee;
  }
  function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employee.timeOutEvents.push({ type: "TimeOut", hour: parseInt(hour), date });
    return employee;
  }
  function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find((event) => event.date === date);
    const timeOut = employee.timeOutEvents.find((event) => event.date === date);
    const hoursWorked = (timeOut.hour - timeIn.hour) / 100;
    return hoursWorked;
  }
  function allWagesFor(employee) {
    const dates = employee.timeInEvents.map((event) => event.date);
    const totalPay = dates.reduce((acc, date) => {
      return acc + wagesEarnedOnDate(employee, date);
    }, 0); // Initialize accumulator to 0
  
    return totalPay;
  }
  
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

