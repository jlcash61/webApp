
if (typeof gdjs.evtsExt__Tween3D__EaseExp !== "undefined") {
  gdjs.evtsExt__Tween3D__EaseExp.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Tween3D__EaseExp = {};


gdjs.evtsExt__Tween3D__EaseExp.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.exp(gdjs.evtTools.tween.ease((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Easing") : ""), Math.log((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("InitialValue")) || 0 : 0)), Math.log((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TargetedValue")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Weighting")) || 0 : 0))); }}}

}


};

gdjs.evtsExt__Tween3D__EaseExp.func = function(runtimeScene, Easing, InitialValue, TargetedValue, Weighting, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Tween3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Tween3D"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Easing") return Easing;
if (argName === "InitialValue") return InitialValue;
if (argName === "TargetedValue") return TargetedValue;
if (argName === "Weighting") return Weighting;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Tween3D__EaseExp.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Tween3D__EaseExp.registeredGdjsCallbacks = [];