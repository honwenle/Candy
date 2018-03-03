var director = null;
var winSize = null;
var MyFirstApp = cc.Layer.extend({
    ctor: function () {
        this._super();

        
        winSize = cc.director.getWinSize();

        this._itemMenu = cc.Menu.create(); //创建菜单对象

        //实验图形绘制
        var label = cc.LabelTTF.create("画图形", "Arial", 24);
        var menuItem = cc.MenuItemLabel.create(label, this.onMenuCallback_draw, this);
        menuItem.setPosition(winSize.width / 2, winSize.height / 2 + 60);
        this._itemMenu.addChild(menuItem);

        //实验场景转换
        var label_scence = cc.LabelTTF.create("场景转换", "Arial", 24);
        var menuItem_scence = cc.MenuItemLabel.create(label_scence, this.onMenuCallback_scence, this);
        menuItem_scence.setPosition(winSize.width / 2, winSize.height / 2 + 30);
        this._itemMenu.addChild(menuItem_scence);

        //实验层
        var label_layer = cc.LabelTTF.create("层", "Arial", 24);
        var menuItem_layer = cc.MenuItemLabel.create(label_layer, this.onMenuCallback_layer, this);
        menuItem_layer.setPosition(winSize.width / 2, winSize.height / 2);
        this._itemMenu.addChild(menuItem_layer);

        this._itemMenu.setPosition(cc.p(0, 0)); //设置菜单对象的位置
        this.addChild(this._itemMenu);

        return true;
    },
    onMenuCallback_draw: function () {
        var sence = new DrawPrimitivesTestScene();
        sence.runThisTest();
    },
    onMenuCallback_scence: function () {
        var sence = new SceneTestScene();
        sence.runThisTest();
    },
    onMenuCallback_layer: function () {
        var sence = new LayerTestScene();
        sence.runThisTest();
    }
});

var MyFirstAppScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new MyFirstApp();
        this.addChild(layer);
    }
})