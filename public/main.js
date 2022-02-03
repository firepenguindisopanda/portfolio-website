function calcAge(){
    var dob = new Date("09/06/1996");
    var month_diff = Date.now() - dob.getTime();

    var age_dt = new Date(month_diff);

    var year = age_dt.getUTCFullYear();

    var age = Math.abs(year - 1970);
    var html = `
        Age: ${age}
    `
    document.getElementById("age").innerHTML = html;
}