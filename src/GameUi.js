var GameUi = cc.Layer.extend({

    txtScore: null,//分数
    txtLevel: null,//等级
    txtStep: null,//步数
    gameLayer:null,
    ctor: function (game) {
        this._super();
        this._initUi();
        this.gameLayer = game;
        this.scheduleUpdate();

    },
    _initUi: function () {
        var size = cc.winSize;
        this.txtScore = new cc.LabelTTF("1", "arial", 24);
        this.txtScore.x = 200;
        this.txtScore.y = size.height - 20;
        this.addChild(this.txtScore);
        var lblScore = new cc.LabelTTF("Score", "arial", 24);
        lblScore.x = 150;
        lblScore.y = size.height -20;
        this.addChild(lblScore);

        
        this.txtLevel = new cc.LabelTTF("2", "arial", 24);
        this.txtLevel.x = 300;
        this.txtLevel.y = size.height - 20;
        this.addChild(this.txtLevel);
        var lblLevel = new cc.LabelTTF("Level", "arial", 24);
        lblLevel.x = 250;
        lblLevel.y = size.height - 20;
        this.addChild(lblLevel);


        
        this.txtStep = new cc.LabelTTF("3", "arial", 24);
        this.txtStep.x = 400;
        this.txtStep.y = size.height - 20;
        this.addChild(this.txtStep);
        var lblStep = new cc.LabelTTF("Step", "arial", 24);
        lblStep.x = 350;
        lblStep.y = size.height - 20;
        this.addChild(lblStep);
    },
    showSucess: function () {
        var bg = new cc.LayerColor(cc.color(255, 255, 255), 500, 500);
        this.addChild(bg);
        var size = cc.winSize;
        bg.x = (size.width - bg.width) / 2;
        bg.y = (size.height - bg.height) / 2;
        var stepText = new cc.LabelTTF("恭喜 已完成第");
        stepText.x = 250;
        stepText.y = 250;
        bg.addChild(stepText);
    },
    showFail: function () {
        var bg = new cc.LayerColor(cc.color(255, 255, 255), 500, 500);
        this.addChild(bg);
        var size = cc.winSize;
        bg.x = (size.width - bg.width) / 2;
        bg.y = (size.height - bg.height) / 2;
        var stepText = new cc.LabelTTF("失败了，从头再来");
        stepText.x = 250;
        stepText.y = 250;
        bg.addChild(stepText);
    },
    update: function () {
        this.txtScore.setString(""+ this.gameLayer.score);
        this.txtLevel.setString( this.gameLayer.level);
        this.txtStep.setString(this.gameLayer.limitStep - this.gameLayer.step);
    }



});