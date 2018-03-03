var LayerTestScene = cc.Scene.extend({
    runThisTest: function () {
        var layer = new LayerTest();
        this.addChild(layer);
        cc.director.runScene(this);
    }
});
var LayerTest = cc.Layer.extend({
    onEnter: function () {
        this._super();

        //启用触摸或鼠标
        if ('touches' in cc.sys.capabilities)
            this.setTouchEnabled(true);
        else if ('mouse' in cc.sys.capabilities)
            this.setMouseEnabled(true);

        //新建一个200*200的层
        var s = director.getWinSize();
        var layer = cc.LayerColor.create(cc.c4b(255, 0, 0, 128), 200, 200);

        layer.ignoreAnchorPointForPosition(false);
        layer.setPosition(cc.p(s.width / 2, s.height / 2));
        this.addChild(layer, 1, 1); //把新层添加到当前层中，定义新层的标签为1


        var label = cc.LabelTTF.create("返回", "Arial", 20);
        var menuItem = cc.MenuItemLabel.create(label, this.onMainMenuCallback, this);

        var menu = cc.Menu.create(menuItem);
        menu.setPosition(0, 0);
        menuItem.setPosition(winSize.width - 50, 25);

        this.addChild(menu, 1);
    },
    updateSize: function (location) {
        var newSize = cc.size(Math.abs(location.x - winSize.width / 2) * 2, Math.abs(location.y - winSize.height / 2) * 2);
        var l = this.getChildByTag(1); //根据标签取得层对象

        l.setContentSize(newSize);
    },
    // 鼠标拖拽触发此事件，重新定义层的大小
    onMouseDragged: function (event) {
        var location = event.getLocation();
        this.updateSize(location);

        return true;
    },
    onMainMenuCallback: function () {
        var scene = cc.Scene.create();
        var layer = new MyFirstApp();
        scene.addChild(layer);
        var transition = cc.TransitionProgressRadialCCW.create(0.5, scene);
        director.replaceScene(transition);
    }
});