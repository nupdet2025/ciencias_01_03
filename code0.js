gdjs.introCode = {};
gdjs.introCode.localVariables = [];
gdjs.introCode.GDback1Objects1= [];
gdjs.introCode.GDback1Objects2= [];
gdjs.introCode.GDback1Objects3= [];
gdjs.introCode.GDblock1Objects1= [];
gdjs.introCode.GDblock1Objects2= [];
gdjs.introCode.GDblock1Objects3= [];
gdjs.introCode.GDbtn_9595goObjects1= [];
gdjs.introCode.GDbtn_9595goObjects2= [];
gdjs.introCode.GDbtn_9595goObjects3= [];
gdjs.introCode.GDcursorObjects1= [];
gdjs.introCode.GDcursorObjects2= [];
gdjs.introCode.GDcursorObjects3= [];
gdjs.introCode.GDfadeObjects1= [];
gdjs.introCode.GDfadeObjects2= [];
gdjs.introCode.GDfadeObjects3= [];


gdjs.introCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\FIle-A-2-18_GreenRocketAudio-Cartoon-_Full_.mp3", 1, true, 70, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 1);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 3);
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 2);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.introCode.mapOfGDgdjs_9546introCode_9546GDbtn_95959595goObjects1Objects = Hashtable.newFrom({"btn_go": gdjs.introCode.GDbtn_9595goObjects1});
gdjs.introCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.introCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.introCode.GDfadeObjects1);
{for(var i = 0, len = gdjs.introCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.introCode.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.introCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.introCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.4, true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{ //Subevents
gdjs.introCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.introCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.introCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.introCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.introCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.introCode.GDcursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_go"), gdjs.introCode.GDbtn_9595goObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.introCode.mapOfGDgdjs_9546introCode_9546GDbtn_95959595goObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro2", false);
}}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDback1Objects1.length = 0;
gdjs.introCode.GDback1Objects2.length = 0;
gdjs.introCode.GDback1Objects3.length = 0;
gdjs.introCode.GDblock1Objects1.length = 0;
gdjs.introCode.GDblock1Objects2.length = 0;
gdjs.introCode.GDblock1Objects3.length = 0;
gdjs.introCode.GDbtn_9595goObjects1.length = 0;
gdjs.introCode.GDbtn_9595goObjects2.length = 0;
gdjs.introCode.GDbtn_9595goObjects3.length = 0;
gdjs.introCode.GDcursorObjects1.length = 0;
gdjs.introCode.GDcursorObjects2.length = 0;
gdjs.introCode.GDcursorObjects3.length = 0;
gdjs.introCode.GDfadeObjects1.length = 0;
gdjs.introCode.GDfadeObjects2.length = 0;
gdjs.introCode.GDfadeObjects3.length = 0;

gdjs.introCode.eventsList1(runtimeScene);
gdjs.introCode.GDback1Objects1.length = 0;
gdjs.introCode.GDback1Objects2.length = 0;
gdjs.introCode.GDback1Objects3.length = 0;
gdjs.introCode.GDblock1Objects1.length = 0;
gdjs.introCode.GDblock1Objects2.length = 0;
gdjs.introCode.GDblock1Objects3.length = 0;
gdjs.introCode.GDbtn_9595goObjects1.length = 0;
gdjs.introCode.GDbtn_9595goObjects2.length = 0;
gdjs.introCode.GDbtn_9595goObjects3.length = 0;
gdjs.introCode.GDcursorObjects1.length = 0;
gdjs.introCode.GDcursorObjects2.length = 0;
gdjs.introCode.GDcursorObjects3.length = 0;
gdjs.introCode.GDfadeObjects1.length = 0;
gdjs.introCode.GDfadeObjects2.length = 0;
gdjs.introCode.GDfadeObjects3.length = 0;


return;

}

gdjs['introCode'] = gdjs.introCode;
