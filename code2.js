gdjs.main1Code = {};
gdjs.main1Code.localVariables = [];
gdjs.main1Code.GDback2Objects1= [];
gdjs.main1Code.GDback2Objects2= [];
gdjs.main1Code.GDback2Objects3= [];
gdjs.main1Code.GDblock3Objects1= [];
gdjs.main1Code.GDblock3Objects2= [];
gdjs.main1Code.GDblock3Objects3= [];
gdjs.main1Code.GDcursorObjects1= [];
gdjs.main1Code.GDcursorObjects2= [];
gdjs.main1Code.GDcursorObjects3= [];
gdjs.main1Code.GDfadeObjects1= [];
gdjs.main1Code.GDfadeObjects2= [];
gdjs.main1Code.GDfadeObjects3= [];
gdjs.main1Code.GDcheck_9595areaObjects1= [];
gdjs.main1Code.GDcheck_9595areaObjects2= [];
gdjs.main1Code.GDcheck_9595areaObjects3= [];
gdjs.main1Code.GDcheck_9595area2Objects1= [];
gdjs.main1Code.GDcheck_9595area2Objects2= [];
gdjs.main1Code.GDcheck_9595area2Objects3= [];
gdjs.main1Code.GDcheck_9595area3Objects1= [];
gdjs.main1Code.GDcheck_9595area3Objects2= [];
gdjs.main1Code.GDcheck_9595area3Objects3= [];
gdjs.main1Code.GDgirlObjects1= [];
gdjs.main1Code.GDgirlObjects2= [];
gdjs.main1Code.GDgirlObjects3= [];
gdjs.main1Code.GDgoogleObjects1= [];
gdjs.main1Code.GDgoogleObjects2= [];
gdjs.main1Code.GDgoogleObjects3= [];
gdjs.main1Code.GDcafe1Objects1= [];
gdjs.main1Code.GDcafe1Objects2= [];
gdjs.main1Code.GDcafe1Objects3= [];
gdjs.main1Code.GDcafe2Objects1= [];
gdjs.main1Code.GDcafe2Objects2= [];
gdjs.main1Code.GDcafe2Objects3= [];
gdjs.main1Code.GDcafe3Objects1= [];
gdjs.main1Code.GDcafe3Objects2= [];
gdjs.main1Code.GDcafe3Objects3= [];
gdjs.main1Code.GDcafe4Objects1= [];
gdjs.main1Code.GDcafe4Objects2= [];
gdjs.main1Code.GDcafe4Objects3= [];
gdjs.main1Code.GDcafe5Objects1= [];
gdjs.main1Code.GDcafe5Objects2= [];
gdjs.main1Code.GDcafe5Objects3= [];
gdjs.main1Code.GDcafe6Objects1= [];
gdjs.main1Code.GDcafe6Objects2= [];
gdjs.main1Code.GDcafe6Objects3= [];


gdjs.main1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\Casual-Game-Background-Looped-Version-1.mp3", 2, false, 70, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 2);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 3);
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\Casual-Game-Background-Looped-Version-1.mp3", 2, true, 100, 1);
}}

}


};gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcafe6Objects1Objects = Hashtable.newFrom({"cafe6": gdjs.main1Code.GDcafe6Objects1});
gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcheck_95959595area2Objects1Objects = Hashtable.newFrom({"check_area2": gdjs.main1Code.GDcheck_9595area2Objects1});
gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcafe5Objects1Objects = Hashtable.newFrom({"cafe5": gdjs.main1Code.GDcafe5Objects1});
gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcheck_95959595area2Objects1Objects = Hashtable.newFrom({"check_area2": gdjs.main1Code.GDcheck_9595area2Objects1});
gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcafe4Objects1Objects = Hashtable.newFrom({"cafe4": gdjs.main1Code.GDcafe4Objects1});
gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcheck_95959595area3Objects1Objects = Hashtable.newFrom({"check_area3": gdjs.main1Code.GDcheck_9595area3Objects1});
gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcafe3Objects1Objects = Hashtable.newFrom({"cafe3": gdjs.main1Code.GDcafe3Objects1});
gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcheck_95959595area3Objects1Objects = Hashtable.newFrom({"check_area3": gdjs.main1Code.GDcheck_9595area3Objects1});
gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcafe2Objects1Objects = Hashtable.newFrom({"cafe2": gdjs.main1Code.GDcafe2Objects1});
gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.main1Code.GDcheck_9595areaObjects1});
gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcafe1Objects1Objects = Hashtable.newFrom({"cafe1": gdjs.main1Code.GDcafe1Objects1});
gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcheck_95959595areaObjects1Objects = Hashtable.newFrom({"check_area": gdjs.main1Code.GDcheck_9595areaObjects1});
gdjs.main1Code.asyncCallback12840276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main1Code.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "final", false);
}gdjs.main1Code.localVariables.length = 0;
}
gdjs.main1Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.main1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.main1Code.asyncCallback12840276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main1Code.asyncCallback12839412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main1Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("google"), gdjs.main1Code.GDgoogleObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "sucess.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main1Code.GDgoogleObjects2.length ;i < len;++i) {
    gdjs.main1Code.GDgoogleObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(1, 5, 5, 5, 5, 0.1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.main1Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.main1Code.localVariables.length = 0;
}
gdjs.main1Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.main1Code.asyncCallback12839412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main1Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cafe1"), gdjs.main1Code.GDcafe1Objects1);
gdjs.copyArray(runtimeScene.getObjects("cafe2"), gdjs.main1Code.GDcafe2Objects1);
gdjs.copyArray(runtimeScene.getObjects("cafe3"), gdjs.main1Code.GDcafe3Objects1);
gdjs.copyArray(runtimeScene.getObjects("cafe4"), gdjs.main1Code.GDcafe4Objects1);
gdjs.copyArray(runtimeScene.getObjects("cafe5"), gdjs.main1Code.GDcafe5Objects1);
gdjs.copyArray(runtimeScene.getObjects("cafe6"), gdjs.main1Code.GDcafe6Objects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main1Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.main1Code.GDfadeObjects1);
{for(var i = 0, len = gdjs.main1Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main1Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.main1Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.main1Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.4, true);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe1Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe1Objects1[i].getBehavior("Effect").enableEffect("drag_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe2Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe2Objects1[i].getBehavior("Effect").enableEffect("drag_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe3Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe3Objects1[i].getBehavior("Effect").enableEffect("drag_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe4Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe4Objects1[i].getBehavior("Effect").enableEffect("drag_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe5Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe5Objects1[i].getBehavior("Effect").enableEffect("drag_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe6Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe6Objects1[i].getBehavior("Effect").enableEffect("drag_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe1Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe1Objects1[i].getBehavior("Effect").enableEffect("shadow_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe2Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe2Objects1[i].getBehavior("Effect").enableEffect("shadow_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe3Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe3Objects1[i].getBehavior("Effect").enableEffect("shadow_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe4Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe4Objects1[i].getBehavior("Effect").enableEffect("shadow_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe5Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe5Objects1[i].getBehavior("Effect").enableEffect("shadow_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe6Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe6Objects1[i].getBehavior("Effect").enableEffect("shadow_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe1Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe1Objects1[i].getBehavior("Effect").enableEffect("checked", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe2Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe2Objects1[i].getBehavior("Effect").enableEffect("checked", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe3Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe3Objects1[i].getBehavior("Effect").enableEffect("checked", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe4Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe4Objects1[i].getBehavior("Effect").enableEffect("checked", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe5Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe5Objects1[i].getBehavior("Effect").enableEffect("checked", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe6Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe6Objects1[i].getBehavior("Effect").enableEffect("checked", false);
}
}
{ //Subevents
gdjs.main1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main1Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.main1Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main1Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.main1Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main1Code.GDcursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe6"), gdjs.main1Code.GDcafe6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main1Code.GDcafe6Objects1.length;i<l;++i) {
    if ( gdjs.main1Code.GDcafe6Objects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.main1Code.GDcafe6Objects1[k] = gdjs.main1Code.GDcafe6Objects1[i];
        ++k;
    }
}
gdjs.main1Code.GDcafe6Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe6Objects1 */
{for(var i = 0, len = gdjs.main1Code.GDcafe6Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe6Objects1[i].getBehavior("Effect").enableEffect("drag_h", true);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe6Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe6Objects1[i].getBehavior("Effect").enableEffect("shadow_h", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe6"), gdjs.main1Code.GDcafe6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main1Code.GDcafe6Objects1.length;i<l;++i) {
    if ( !(gdjs.main1Code.GDcafe6Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.main1Code.GDcafe6Objects1[k] = gdjs.main1Code.GDcafe6Objects1[i];
        ++k;
    }
}
gdjs.main1Code.GDcafe6Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe6Objects1 */
{for(var i = 0, len = gdjs.main1Code.GDcafe6Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe6Objects1[i].getBehavior("Effect").enableEffect("drag_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe6Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe6Objects1[i].getBehavior("Effect").enableEffect("shadow_h", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe6"), gdjs.main1Code.GDcafe6Objects1);
gdjs.copyArray(runtimeScene.getObjects("check_area2"), gdjs.main1Code.GDcheck_9595area2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcafe6Objects1Objects, gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcheck_95959595area2Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12817140);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe6Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "diamond-sparkle.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main1Code.GDcafe6Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe6Objects1[i].getBehavior("Tween").addObjectPositionTween2("check1", 1370, 357, "easeOutQuad", 0.3, false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe6Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe6Objects1[i].activateBehavior("Draggable", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.main1Code.GDcafe6Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe6Objects1[i].getBehavior("Effect").enableEffect("checked", true);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe6Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe6Objects1[i].setLayer("UI_checkek");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe5"), gdjs.main1Code.GDcafe5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main1Code.GDcafe5Objects1.length;i<l;++i) {
    if ( gdjs.main1Code.GDcafe5Objects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.main1Code.GDcafe5Objects1[k] = gdjs.main1Code.GDcafe5Objects1[i];
        ++k;
    }
}
gdjs.main1Code.GDcafe5Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe5Objects1 */
{for(var i = 0, len = gdjs.main1Code.GDcafe5Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe5Objects1[i].getBehavior("Effect").enableEffect("drag_h", true);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe5Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe5Objects1[i].getBehavior("Effect").enableEffect("shadow_h", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe5"), gdjs.main1Code.GDcafe5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main1Code.GDcafe5Objects1.length;i<l;++i) {
    if ( !(gdjs.main1Code.GDcafe5Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.main1Code.GDcafe5Objects1[k] = gdjs.main1Code.GDcafe5Objects1[i];
        ++k;
    }
}
gdjs.main1Code.GDcafe5Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe5Objects1 */
{for(var i = 0, len = gdjs.main1Code.GDcafe5Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe5Objects1[i].getBehavior("Effect").enableEffect("drag_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe5Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe5Objects1[i].getBehavior("Effect").enableEffect("shadow_h", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe5"), gdjs.main1Code.GDcafe5Objects1);
gdjs.copyArray(runtimeScene.getObjects("check_area2"), gdjs.main1Code.GDcheck_9595area2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcafe5Objects1Objects, gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcheck_95959595area2Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12821164);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe5Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "diamond-sparkle.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main1Code.GDcafe5Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe5Objects1[i].getBehavior("Tween").addObjectPositionTween2("check1", 992, 357, "easeOutQuad", 0.3, false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe5Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe5Objects1[i].activateBehavior("Draggable", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.main1Code.GDcafe5Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe5Objects1[i].getBehavior("Effect").enableEffect("checked", true);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe5Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe5Objects1[i].setLayer("UI_checkek");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe4"), gdjs.main1Code.GDcafe4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main1Code.GDcafe4Objects1.length;i<l;++i) {
    if ( gdjs.main1Code.GDcafe4Objects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.main1Code.GDcafe4Objects1[k] = gdjs.main1Code.GDcafe4Objects1[i];
        ++k;
    }
}
gdjs.main1Code.GDcafe4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe4Objects1 */
{for(var i = 0, len = gdjs.main1Code.GDcafe4Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe4Objects1[i].getBehavior("Effect").enableEffect("drag_h", true);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe4Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe4Objects1[i].getBehavior("Effect").enableEffect("shadow_h", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe4"), gdjs.main1Code.GDcafe4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main1Code.GDcafe4Objects1.length;i<l;++i) {
    if ( !(gdjs.main1Code.GDcafe4Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.main1Code.GDcafe4Objects1[k] = gdjs.main1Code.GDcafe4Objects1[i];
        ++k;
    }
}
gdjs.main1Code.GDcafe4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe4Objects1 */
{for(var i = 0, len = gdjs.main1Code.GDcafe4Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe4Objects1[i].getBehavior("Effect").enableEffect("drag_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe4Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe4Objects1[i].getBehavior("Effect").enableEffect("shadow_h", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe4"), gdjs.main1Code.GDcafe4Objects1);
gdjs.copyArray(runtimeScene.getObjects("check_area3"), gdjs.main1Code.GDcheck_9595area3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcafe4Objects1Objects, gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcheck_95959595area3Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12825124);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe4Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "diamond-sparkle.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main1Code.GDcafe4Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe4Objects1[i].getBehavior("Tween").addObjectPositionTween2("check1", 992, 528, "easeOutQuad", 0.3, false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe4Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe4Objects1[i].activateBehavior("Draggable", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.main1Code.GDcafe4Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe4Objects1[i].getBehavior("Effect").enableEffect("checked", true);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe4Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe4Objects1[i].setLayer("UI_checkek");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe3"), gdjs.main1Code.GDcafe3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main1Code.GDcafe3Objects1.length;i<l;++i) {
    if ( gdjs.main1Code.GDcafe3Objects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.main1Code.GDcafe3Objects1[k] = gdjs.main1Code.GDcafe3Objects1[i];
        ++k;
    }
}
gdjs.main1Code.GDcafe3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe3Objects1 */
{for(var i = 0, len = gdjs.main1Code.GDcafe3Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe3Objects1[i].getBehavior("Effect").enableEffect("drag_h", true);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe3Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe3Objects1[i].getBehavior("Effect").enableEffect("shadow_h", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe3"), gdjs.main1Code.GDcafe3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main1Code.GDcafe3Objects1.length;i<l;++i) {
    if ( !(gdjs.main1Code.GDcafe3Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.main1Code.GDcafe3Objects1[k] = gdjs.main1Code.GDcafe3Objects1[i];
        ++k;
    }
}
gdjs.main1Code.GDcafe3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe3Objects1 */
{for(var i = 0, len = gdjs.main1Code.GDcafe3Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe3Objects1[i].getBehavior("Effect").enableEffect("drag_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe3Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe3Objects1[i].getBehavior("Effect").enableEffect("shadow_h", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe3"), gdjs.main1Code.GDcafe3Objects1);
gdjs.copyArray(runtimeScene.getObjects("check_area3"), gdjs.main1Code.GDcheck_9595area3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcafe3Objects1Objects, gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcheck_95959595area3Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12829116);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe3Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "diamond-sparkle.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main1Code.GDcafe3Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe3Objects1[i].getBehavior("Tween").addObjectPositionTween2("check1", 1370, 528, "easeOutQuad", 0.3, false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe3Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe3Objects1[i].activateBehavior("Draggable", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.main1Code.GDcafe3Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe3Objects1[i].getBehavior("Effect").enableEffect("checked", true);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe3Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe3Objects1[i].setLayer("UI_checkek");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe2"), gdjs.main1Code.GDcafe2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main1Code.GDcafe2Objects1.length;i<l;++i) {
    if ( gdjs.main1Code.GDcafe2Objects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.main1Code.GDcafe2Objects1[k] = gdjs.main1Code.GDcafe2Objects1[i];
        ++k;
    }
}
gdjs.main1Code.GDcafe2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe2Objects1 */
{for(var i = 0, len = gdjs.main1Code.GDcafe2Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe2Objects1[i].getBehavior("Effect").enableEffect("drag_h", true);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe2Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe2Objects1[i].getBehavior("Effect").enableEffect("shadow_h", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe2"), gdjs.main1Code.GDcafe2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main1Code.GDcafe2Objects1.length;i<l;++i) {
    if ( !(gdjs.main1Code.GDcafe2Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.main1Code.GDcafe2Objects1[k] = gdjs.main1Code.GDcafe2Objects1[i];
        ++k;
    }
}
gdjs.main1Code.GDcafe2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe2Objects1 */
{for(var i = 0, len = gdjs.main1Code.GDcafe2Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe2Objects1[i].getBehavior("Effect").enableEffect("drag_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe2Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe2Objects1[i].getBehavior("Effect").enableEffect("shadow_h", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe2"), gdjs.main1Code.GDcafe2Objects1);
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main1Code.GDcheck_9595areaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcafe2Objects1Objects, gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12833004);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe2Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "diamond-sparkle.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main1Code.GDcafe2Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe2Objects1[i].getBehavior("Tween").addObjectPositionTween2("check1", 1370, 193, "easeOutQuad", 0.3, false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe2Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe2Objects1[i].activateBehavior("Draggable", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.main1Code.GDcafe2Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe2Objects1[i].getBehavior("Effect").enableEffect("checked", true);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe2Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe2Objects1[i].setLayer("UI_checkek");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe1"), gdjs.main1Code.GDcafe1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main1Code.GDcafe1Objects1.length;i<l;++i) {
    if ( gdjs.main1Code.GDcafe1Objects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.main1Code.GDcafe1Objects1[k] = gdjs.main1Code.GDcafe1Objects1[i];
        ++k;
    }
}
gdjs.main1Code.GDcafe1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe1Objects1 */
{for(var i = 0, len = gdjs.main1Code.GDcafe1Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe1Objects1[i].getBehavior("Effect").enableEffect("drag_h", true);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe1Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe1Objects1[i].getBehavior("Effect").enableEffect("shadow_h", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe1"), gdjs.main1Code.GDcafe1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main1Code.GDcafe1Objects1.length;i<l;++i) {
    if ( !(gdjs.main1Code.GDcafe1Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.main1Code.GDcafe1Objects1[k] = gdjs.main1Code.GDcafe1Objects1[i];
        ++k;
    }
}
gdjs.main1Code.GDcafe1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe1Objects1 */
{for(var i = 0, len = gdjs.main1Code.GDcafe1Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe1Objects1[i].getBehavior("Effect").enableEffect("drag_h", false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe1Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe1Objects1[i].getBehavior("Effect").enableEffect("shadow_h", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe1"), gdjs.main1Code.GDcafe1Objects1);
gdjs.copyArray(runtimeScene.getObjects("check_area"), gdjs.main1Code.GDcheck_9595areaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcafe1Objects1Objects, gdjs.main1Code.mapOfGDgdjs_9546main1Code_9546GDcheck_95959595areaObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12837084);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main1Code.GDcafe1Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "diamond-sparkle.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main1Code.GDcafe1Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe1Objects1[i].getBehavior("Tween").addObjectPositionTween2("check1", 992, 193, "easeOutQuad", 0.3, false);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe1Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe1Objects1[i].activateBehavior("Draggable", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.main1Code.GDcafe1Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe1Objects1[i].getBehavior("Effect").enableEffect("checked", true);
}
}{for(var i = 0, len = gdjs.main1Code.GDcafe1Objects1.length ;i < len;++i) {
    gdjs.main1Code.GDcafe1Objects1[i].setLayer("UI_checkek");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12839340);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 2, 0, 0.5);
}
{ //Subevents
gdjs.main1Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.main1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main1Code.GDback2Objects1.length = 0;
gdjs.main1Code.GDback2Objects2.length = 0;
gdjs.main1Code.GDback2Objects3.length = 0;
gdjs.main1Code.GDblock3Objects1.length = 0;
gdjs.main1Code.GDblock3Objects2.length = 0;
gdjs.main1Code.GDblock3Objects3.length = 0;
gdjs.main1Code.GDcursorObjects1.length = 0;
gdjs.main1Code.GDcursorObjects2.length = 0;
gdjs.main1Code.GDcursorObjects3.length = 0;
gdjs.main1Code.GDfadeObjects1.length = 0;
gdjs.main1Code.GDfadeObjects2.length = 0;
gdjs.main1Code.GDfadeObjects3.length = 0;
gdjs.main1Code.GDcheck_9595areaObjects1.length = 0;
gdjs.main1Code.GDcheck_9595areaObjects2.length = 0;
gdjs.main1Code.GDcheck_9595areaObjects3.length = 0;
gdjs.main1Code.GDcheck_9595area2Objects1.length = 0;
gdjs.main1Code.GDcheck_9595area2Objects2.length = 0;
gdjs.main1Code.GDcheck_9595area2Objects3.length = 0;
gdjs.main1Code.GDcheck_9595area3Objects1.length = 0;
gdjs.main1Code.GDcheck_9595area3Objects2.length = 0;
gdjs.main1Code.GDcheck_9595area3Objects3.length = 0;
gdjs.main1Code.GDgirlObjects1.length = 0;
gdjs.main1Code.GDgirlObjects2.length = 0;
gdjs.main1Code.GDgirlObjects3.length = 0;
gdjs.main1Code.GDgoogleObjects1.length = 0;
gdjs.main1Code.GDgoogleObjects2.length = 0;
gdjs.main1Code.GDgoogleObjects3.length = 0;
gdjs.main1Code.GDcafe1Objects1.length = 0;
gdjs.main1Code.GDcafe1Objects2.length = 0;
gdjs.main1Code.GDcafe1Objects3.length = 0;
gdjs.main1Code.GDcafe2Objects1.length = 0;
gdjs.main1Code.GDcafe2Objects2.length = 0;
gdjs.main1Code.GDcafe2Objects3.length = 0;
gdjs.main1Code.GDcafe3Objects1.length = 0;
gdjs.main1Code.GDcafe3Objects2.length = 0;
gdjs.main1Code.GDcafe3Objects3.length = 0;
gdjs.main1Code.GDcafe4Objects1.length = 0;
gdjs.main1Code.GDcafe4Objects2.length = 0;
gdjs.main1Code.GDcafe4Objects3.length = 0;
gdjs.main1Code.GDcafe5Objects1.length = 0;
gdjs.main1Code.GDcafe5Objects2.length = 0;
gdjs.main1Code.GDcafe5Objects3.length = 0;
gdjs.main1Code.GDcafe6Objects1.length = 0;
gdjs.main1Code.GDcafe6Objects2.length = 0;
gdjs.main1Code.GDcafe6Objects3.length = 0;

gdjs.main1Code.eventsList3(runtimeScene);
gdjs.main1Code.GDback2Objects1.length = 0;
gdjs.main1Code.GDback2Objects2.length = 0;
gdjs.main1Code.GDback2Objects3.length = 0;
gdjs.main1Code.GDblock3Objects1.length = 0;
gdjs.main1Code.GDblock3Objects2.length = 0;
gdjs.main1Code.GDblock3Objects3.length = 0;
gdjs.main1Code.GDcursorObjects1.length = 0;
gdjs.main1Code.GDcursorObjects2.length = 0;
gdjs.main1Code.GDcursorObjects3.length = 0;
gdjs.main1Code.GDfadeObjects1.length = 0;
gdjs.main1Code.GDfadeObjects2.length = 0;
gdjs.main1Code.GDfadeObjects3.length = 0;
gdjs.main1Code.GDcheck_9595areaObjects1.length = 0;
gdjs.main1Code.GDcheck_9595areaObjects2.length = 0;
gdjs.main1Code.GDcheck_9595areaObjects3.length = 0;
gdjs.main1Code.GDcheck_9595area2Objects1.length = 0;
gdjs.main1Code.GDcheck_9595area2Objects2.length = 0;
gdjs.main1Code.GDcheck_9595area2Objects3.length = 0;
gdjs.main1Code.GDcheck_9595area3Objects1.length = 0;
gdjs.main1Code.GDcheck_9595area3Objects2.length = 0;
gdjs.main1Code.GDcheck_9595area3Objects3.length = 0;
gdjs.main1Code.GDgirlObjects1.length = 0;
gdjs.main1Code.GDgirlObjects2.length = 0;
gdjs.main1Code.GDgirlObjects3.length = 0;
gdjs.main1Code.GDgoogleObjects1.length = 0;
gdjs.main1Code.GDgoogleObjects2.length = 0;
gdjs.main1Code.GDgoogleObjects3.length = 0;
gdjs.main1Code.GDcafe1Objects1.length = 0;
gdjs.main1Code.GDcafe1Objects2.length = 0;
gdjs.main1Code.GDcafe1Objects3.length = 0;
gdjs.main1Code.GDcafe2Objects1.length = 0;
gdjs.main1Code.GDcafe2Objects2.length = 0;
gdjs.main1Code.GDcafe2Objects3.length = 0;
gdjs.main1Code.GDcafe3Objects1.length = 0;
gdjs.main1Code.GDcafe3Objects2.length = 0;
gdjs.main1Code.GDcafe3Objects3.length = 0;
gdjs.main1Code.GDcafe4Objects1.length = 0;
gdjs.main1Code.GDcafe4Objects2.length = 0;
gdjs.main1Code.GDcafe4Objects3.length = 0;
gdjs.main1Code.GDcafe5Objects1.length = 0;
gdjs.main1Code.GDcafe5Objects2.length = 0;
gdjs.main1Code.GDcafe5Objects3.length = 0;
gdjs.main1Code.GDcafe6Objects1.length = 0;
gdjs.main1Code.GDcafe6Objects2.length = 0;
gdjs.main1Code.GDcafe6Objects3.length = 0;


return;

}

gdjs['main1Code'] = gdjs.main1Code;
