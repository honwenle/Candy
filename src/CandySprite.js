var Candy = cc.Sprite.extend({

    type: 0,  //泡泡堂 类型
    column: 0, //当前列数
    row: 0,  //当前行数
    ctor: function (type, column, row) {

        this._super("res/"+(type+1)+".png");
        this.init(type, column, row);
    },
    init: function (type, column, row) {
        this.type = type;
        this.column = column;
        this.row = row;
    },





});
Candy.createRandomType = function (column, row) {

    return new Candy(parseInt(Math.random()*Constant.CANDY_TYPE_COUNT), column, row);
};