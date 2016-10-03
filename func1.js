function () {
var 0 = {
	message:(function (){
		var who = "me",
			what = "call",
		return what + " " + who;
		}()).
		getMsg: function () {
			return this.message;
		}
	}
};
o.getMsg();
o.message;