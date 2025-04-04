gdjs.finalCode = {};
gdjs.finalCode.localVariables = [];
gdjs.finalCode.GDback1Objects1= [];
gdjs.finalCode.GDback1Objects2= [];
gdjs.finalCode.GDback1Objects3= [];
gdjs.finalCode.GDblock4Objects1= [];
gdjs.finalCode.GDblock4Objects2= [];
gdjs.finalCode.GDblock4Objects3= [];
gdjs.finalCode.GDcursorObjects1= [];
gdjs.finalCode.GDcursorObjects2= [];
gdjs.finalCode.GDcursorObjects3= [];
gdjs.finalCode.GDfadeObjects1= [];
gdjs.finalCode.GDfadeObjects2= [];
gdjs.finalCode.GDfadeObjects3= [];
gdjs.finalCode.GDVerticalBubblesObjects1= [];
gdjs.finalCode.GDVerticalBubblesObjects2= [];
gdjs.finalCode.GDVerticalBubblesObjects3= [];
gdjs.finalCode.GDyesButtonObjects1= [];
gdjs.finalCode.GDyesButtonObjects2= [];
gdjs.finalCode.GDyesButtonObjects3= [];
gdjs.finalCode.GDnoButtonObjects1= [];
gdjs.finalCode.GDnoButtonObjects2= [];
gdjs.finalCode.GDnoButtonObjects3= [];


gdjs.finalCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\victory.mp3", 3, true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 3);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 2);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\victory.mp3", 3, true, 100, 1);
}}

}


};gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDyesButtonObjects1Objects = Hashtable.newFrom({"yesButton": gdjs.finalCode.GDyesButtonObjects1});
gdjs.finalCode.asyncCallback12919788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.finalCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro", false);
}gdjs.finalCode.localVariables.length = 0;
}
gdjs.finalCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.finalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.finalCode.asyncCallback12919788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.finalCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.finalCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.finalCode.GDfadeObjects1);
{for(var i = 0, len = gdjs.finalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.finalCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.4, true);
}
}
{ //Subevents
gdjs.finalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.finalCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.finalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.finalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDcursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("yesButton"), gdjs.finalCode.GDyesButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDyesButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12919436);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 3, 0, 0.5);
}
{ //Subevents
gdjs.finalCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.finalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.finalCode.GDback1Objects1.length = 0;
gdjs.finalCode.GDback1Objects2.length = 0;
gdjs.finalCode.GDback1Objects3.length = 0;
gdjs.finalCode.GDblock4Objects1.length = 0;
gdjs.finalCode.GDblock4Objects2.length = 0;
gdjs.finalCode.GDblock4Objects3.length = 0;
gdjs.finalCode.GDcursorObjects1.length = 0;
gdjs.finalCode.GDcursorObjects2.length = 0;
gdjs.finalCode.GDcursorObjects3.length = 0;
gdjs.finalCode.GDfadeObjects1.length = 0;
gdjs.finalCode.GDfadeObjects2.length = 0;
gdjs.finalCode.GDfadeObjects3.length = 0;
gdjs.finalCode.GDVerticalBubblesObjects1.length = 0;
gdjs.finalCode.GDVerticalBubblesObjects2.length = 0;
gdjs.finalCode.GDVerticalBubblesObjects3.length = 0;
gdjs.finalCode.GDyesButtonObjects1.length = 0;
gdjs.finalCode.GDyesButtonObjects2.length = 0;
gdjs.finalCode.GDyesButtonObjects3.length = 0;
gdjs.finalCode.GDnoButtonObjects1.length = 0;
gdjs.finalCode.GDnoButtonObjects2.length = 0;
gdjs.finalCode.GDnoButtonObjects3.length = 0;

gdjs.finalCode.eventsList2(runtimeScene);
gdjs.finalCode.GDback1Objects1.length = 0;
gdjs.finalCode.GDback1Objects2.length = 0;
gdjs.finalCode.GDback1Objects3.length = 0;
gdjs.finalCode.GDblock4Objects1.length = 0;
gdjs.finalCode.GDblock4Objects2.length = 0;
gdjs.finalCode.GDblock4Objects3.length = 0;
gdjs.finalCode.GDcursorObjects1.length = 0;
gdjs.finalCode.GDcursorObjects2.length = 0;
gdjs.finalCode.GDcursorObjects3.length = 0;
gdjs.finalCode.GDfadeObjects1.length = 0;
gdjs.finalCode.GDfadeObjects2.length = 0;
gdjs.finalCode.GDfadeObjects3.length = 0;
gdjs.finalCode.GDVerticalBubblesObjects1.length = 0;
gdjs.finalCode.GDVerticalBubblesObjects2.length = 0;
gdjs.finalCode.GDVerticalBubblesObjects3.length = 0;
gdjs.finalCode.GDyesButtonObjects1.length = 0;
gdjs.finalCode.GDyesButtonObjects2.length = 0;
gdjs.finalCode.GDyesButtonObjects3.length = 0;
gdjs.finalCode.GDnoButtonObjects1.length = 0;
gdjs.finalCode.GDnoButtonObjects2.length = 0;
gdjs.finalCode.GDnoButtonObjects3.length = 0;


return;

}

gdjs['finalCode'] = gdjs.finalCode;
