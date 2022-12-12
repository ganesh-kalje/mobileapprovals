const DisplayHelper = {
    isValid:  value => (typeof value === 'undefined' || value === "" || value === null) ? false : true,
    amountFormat: (value) => {
        if (isNaN(value)) {
            return value;
        }
        if (value === "" || value === null) {
            return "";
        } 
        if (value === 0) {
            return "0.00";
        }
        return Number(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    },
    getMonDateFromISO: (isodate) => {
        if (isodate != null) {
            var date = new Date(isodate);
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var mon;
            //return month+"-"+day+"-"+year;
            switch (month) {
                case 1:
                    mon = "Jan";
                    break;
                case 2:
                    mon = "Feb";
                    break;
                case 3:
                    mon = "Mar";
                    break;
                case 4:
                    mon = "Apr";
                    break;
                case 5:
                    mon = "May";
                    break;
                case 6:
                    mon = "Jun";
                    break;
                case 7:
                    mon = "Jul";
                    break;
                case 8:
                    mon = "Aug";
                    break;
                case 9:
                    mon = "Sep";
                    break;
                case 10:
                    mon = "Oct";
                    break;
                case 11:
                    mon = "Nov";
                    break;
                case 12:
                    mon = "Dec";
                    break;
                default:
                    mon = ''
            }
            return ('0' + day).slice(-2) + "-"+mon+"-"+year;
            //return year + "-" + month + "-" + day;
            //return isodate.substring(0,9);
        } else
            return isodate;
    }
}
export default DisplayHelper;