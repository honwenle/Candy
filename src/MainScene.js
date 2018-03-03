var MainScene = cc.Scene.extend({


    onEnter: function () {
        this._super();
        var gameLayer = new GameLayer();
        gameLayer._name = "gameLayer";
        this.addChild(gameLayer);





    }




});