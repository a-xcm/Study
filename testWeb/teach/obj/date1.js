//日期运算

var date = new Date();
// date.setDate(date.getDate() + 7);//七天后
// console.log(date);
// console.log(formatDate(date));
/**
 *
 * @param date  显示date这个日期所在月份的日历表
 */
function dateBox(date) {

    //1、计算该月1日是星期几
    date.setDate(1);
    var day = date.getDay();
    var weekNumArr = [7, 1, 2, 3, 4, 5, 6];
    var weekDay = weekNumArr[day];

    //计算打印多少行
    var rows = weekDay > 5 ? 6 : 5;
    var str = "一\t二\t三\t四\t五\t六\t日\n";
    for(var i = 0; i < rows; i++){
        for(var j = 0; j < 7; j++){
            if(i == 0){
                if(j < weekDay - 1){
                    str += " \t";
                }else {
                    str += date.getDate() + "\t";
                    date.setDate(date.getDate() + 1);
                    continue;
                }
            }
            var month = date.getMonth();
            str += date.getDate() + "\t";
            date.setDate(date.getDate() + 1);
            if(month < date.getMonth()){
                break;
            }
        }
        str += "\n";
    }
    return str;
}

console.log(dateBox(date));





