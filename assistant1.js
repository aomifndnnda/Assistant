TPspeed = 100

class commons{
getRoot = null
getReactRoot = null
getChatState = null 
searchObject = null
getRandom = null
}


class game{
getTankPhysics = null
getTank = null  
getWorld = null  
getMines = null
getFlags = null
getPlayers = null
getMapBoundary = null    
getBattleState = null
getSupplies = null
getHealth = null
getStriker = null
getCamera = null
getAirwalk = null
}


class hacks{
airWalk = null
clicker = null
flagTP = null
oneHitKill = null
noLaser = null
autoHeal = null
simpleTP = null
playerTP = null
rapidUpdate = null
randomTP = null
TPFlagB = null
TPFlagB = null
goldTP = null
speedhack = null


}

class vars{
FlagA = null
FlagB = null
tpName = null  
rocketCount = null
shellCache = null
  
  
}




commons.searchObject = function(object,item){
try {
for(let i=0; i<object.length;i++){
if(object[i].hasOwnProperty(item))
return object[i]

}      
} catch (error) {
    
}  
}


 function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}



commons.getRoot = function(){
root = document.querySelector("#root")  
return root
}

commons.getReactRoot = function(){
return root._reactRootContainer._internalRoot.current.memoizedState.element.type.prototype.store.subscribers.array_hd7ov6$_0  
  
}



commons.getRandom = function(min,max){
return Math.floor(Math.random() * (max - min + 1) + min)
  
  
}

//keypressing


class KeyPressing{static k=[];static i(){document.addEventListener('keydown',(e)=>{const c=e.keyCode;if(KeyPressing.k.includes(c)==!1){KeyPressing.k.push(c)}}); document.addEventListener('keyup',(e)=>{const c=e.keyCode;if(KeyPressing.k.includes(c)==!0){const a=KeyPressing.k.indexOf(c);if(a!==-1){KeyPressing.k.splice(a,1)}}})} static isKeyPressed(c){return KeyPressing.k.includes(c)}}KeyPressing.i()




//GAME ITEMS



game.getTank = function(){
return commons.searchObject(commons.getReactRoot(),"tank").tank

  
  
  
}

game.getWorld = function(){
return game.getTank().world  
  
}

game.getMines = function(){
return game.getWorld().entities_0.array_hd7ov6$_0.at(0).components_0.array.at(15);  
  
  
  
}

game.getMapBoundary = function(){
return game.getWorld().entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds
}


game.getPlayers = function(){
return game.getTank().components_0.array[33].gameMode_0.tanksOnField
  
}
game.getBattleState = function(){
  
return commons.getReactRoot().at(1).state.inBattle
}

commons.getChatState = function(){
return document.querySelector(".sc-bwzfXH.iokmvL")
}


game.getStriker = function(){
return commons.searchObject(game.getTank().components_0.array,"strikerWeapon_jjsiik$_0").strikerWeapon_jjsiik$_0
  
  
  
  
}


game.getHealth = function(){
return game.getTank().components_0.array[1].isFullHealth()
  
  
}

game.getTankPhysics = function(){
return game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0
  
  
  
}

game.getCamera = function(){
for (let i = 0; i < game.getTank().components_0.array.length; i++)
  {
    if(game.getTank().components_0.array[i].hasOwnProperty("followCamera_w8ai3w$_0"))
    return game.getTank().components_0.array[i].followCamera_0.currState_0
    
  }
}


game.getFlags = function(){
try {
if(game.getWorld().triggers_0.triggers_0.array[0].flagBaseTriggerListener_0.flags_0.internalMap_uxhen5$_0.backingMap_0[1]._value_0.teamType.name == "TEAM_A"){
vars.FlagA = game.getWorld().triggers_0.triggers_0.array[0].flagBaseTriggerListener_0.flags_0.internalMap_uxhen5$_0.backingMap_0[1]._value_0.getPosition()

vars.FlagB = game.getWorld().triggers_0.triggers_0.array[0].flagBaseTriggerListener_0.flags_0.internalMap_uxhen5$_0.backingMap_0[0]._value_0.getPosition()

    
}    
} catch (error) {
    
}}


gtf = setInterval(game.getFlags,150)


game.getAirwalk = function(){
return commons.searchObject(game.getTank().components_0.array,"trackedChassis_eytv59$_0").trackedChassis_eytv59$_0  
  
}



game.getSupplies = function(supply){
try {
for(key in game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0){
if(game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[key].key_5xhq3d$_0.name$ == supply){
return key 
}


}    
} catch (error) {
    
}  
  

}

function getSupplyArrays(){
try {
window.mines = game.getSupplies("MINE")  
window.repairs = game.getSupplies("FIRST_AID")
window.DA = game.getSupplies("DOUBLE_ARMOR")
window.DD = game.getSupplies("DOUBLE_DAMAGE")
window.NITRO = game.getSupplies("NITRO")  
    
} catch (error) {
    
}
}

supps = setInterval(getSupplyArrays,500)




//HACKS

hacks.noLaser = function(){

try {
commons.searchObject(game.getTank().components_0.array,"laserDirectionMessage_0").turnOffLaser_0()
} catch (error) {
 
}

 
}








hacks.speedhack = function(){
try{
game.getTank().components_0.array[14].chassisLocker_kjqurp$_0.chassis_x8422y$_0.maxSpeedSmoother_fqgjkx$_0.currentValue_58o4vw$_0 = slider.value
game.getTank().components_0.array[14].chassisLocker_kjqurp$_0.chassis_x8422y$_0.maxSpeedSmoother_fqgjkx$_0.targetValue_mmhheo$_0 = slider.value
game.getAirwalk().speedCharacteristics_0.acceleration = slider2.value
 
}catch (error) {
 return Error
}

}






hacks.simpleTP = function()

 {

try {
if (KeyPressing.isKeyPressed(87 /*key: W*/) && commons.getChatState()==null && game.getTankPhysics().body.state.position.x != game.getMapBoundary().maxX )
    {
       

        
            
            game.getTankPhysics().body.state.position.x += TPspeed * Math.sin(-game.getCamera().direction);
            game.getTankPhysics().body.state.position.y += TPspeed * Math.cos(-game.getCamera().direction);
        
    }

    if (KeyPressing.isKeyPressed(83 /*key: S*/) && commons.getChatState()==null)
    {
        
        game.getTankPhysics().body.state.position.x -= TPspeed * Math.sin(-game.getCamera().direction);
            game.getTankPhysics().body.state.position.y -= TPspeed * Math.cos(-game.getCamera().direction);
    }

    if (KeyPressing.isKeyPressed(65 /*key: A*/) && commons.getChatState()==null)
    {
        

       
           

            game.getTankPhysics().body.state.position.x -= TPspeed * Math.sin(-(game.getCamera().direction - Math.PI / 2));
            game.getTankPhysics().body.state.position.y -= TPspeed * Math.cos(-(game.getCamera().direction - Math.PI / 2));
        
    }

    if (KeyPressing.isKeyPressed(68 /*key: D*/) && commons.getChatState()==null)
    {
        

       
            game.getTankPhysics().body.state.position.x +=TPspeed * Math.sin(-(game.getCamera().direction - Math.PI / 2));
            game.getTankPhysics().body.state.position.y += TPspeed * Math.cos(-(game.getCamera().direction - Math.PI / 2));
        
    }
   
   if (KeyPressing.isKeyPressed(103 /*key: Numpad7*/) && commons.getChatState()==null)
    {
        

       
            game.getTankPhysics().body.state.position.z+=80
        
    }

   
   if (KeyPressing.isKeyPressed(104 /*key: Numpad8*/) && commons.getChatState()==null)
    {
        

       
            game.getTankPhysics().body.state.position.z-=80
        
    }
   
   
   
   
    
} catch (error) {
 
}
 
 
 
 

}


function getTarget(){
try {
enemyID = game.getStriker().playerIdQuery_0.playerId 
//window.target = game.getStriker().getPreferredTarget_0(enemyID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition
 
} catch (error) {
 
}
}
 
let gtr = setInterval(getTarget,100)



hacks.clicker = function(){ 
try {
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply() 
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply() 
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DD]._value_0._value_0.onUserActivatedSupply() 
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DA]._value_0._value_0.onUserActivatedSupply() 
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[NITRO]._value_0._value_0.onUserActivatedSupply() 

    
} catch (error) {
    
} 


}



hacks.autoHeal = function(){
try {
if(game.getHealth()==false){
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply() 
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply() 

  
}  
      
} catch (error) {
    
}

  
}





hacks.rapidUpdate = function(){
                      
try {
   game.getTank().components_0.array[37].sendState_0(game.getTankPhysics().getInterpolatedBodyState())    
} catch (error) {
     
 }}


hacks.TPFlagA = function(){
try {
if(commons.getChatState()==null){
game.getTankPhysics().body_xsop3k$_0.state.position.x = vars.FlagA.x
game.getTankPhysics().body_xsop3k$_0.state.position.y = vars.FlagA.y
game.getTankPhysics().body_xsop3k$_0.state.position.z = vars.FlagA.z
} 
} catch (error) {
 
}
}


hacks.TPFlagB = function(){
try {
if(commons.getChatState()==null){  
game.getTankPhysics().body_xsop3k$_0.state.position.x = vars.FlagB.x
game.getTankPhysics().body_xsop3k$_0.state.position.y = vars.FlagB.y
game.getTankPhysics().body_xsop3k$_0.state.position.z = vars.FlagB.z
} 
} catch (error) {
 
}
}

function getNames(){
try {
Table = document.getElementsByTagName("table")
cName = Table[0].children[1].children[1].children[0].className
tElems = document.getElementsByClassName(cName)  
for(let i=0;i<tElems.length;i++){
tElems[i].addEventListener("click",function(){
splitArray = (tElems[i].innerText).split("]") 
if(splitArray.length == 1){
tpName = (tElems[i].innerText).trim()
}
if(splitArray.length == 2){
tpName = (splitArray[1]).trim()
}  
  
  
  
  
})  
}
} catch (error) {
    
}
}




let gn = setInterval(getNames,100)






function tpByName(){
try {
for (key in commons.searchObject(commons.getReactRoot(),"tank").store_0.state.battleUsers.uids.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0){
if (commons.searchObject(commons.getReactRoot(),"tank").store_0.state.battleUsers.uids.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[key]._value_0._value_0 == tpName){
tpUserID = commons.searchObject(commons.getReactRoot(),"tank").store_0.state.battleUsers.uids.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[key].key_5xhq3d$_0
}


}
    
} catch (error) {
    
}  




}

setInterval(tpByName,1)


hacks.playerTP = function(){
try {
if(commons.getChatState()==null){ 
try {
game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0.body_xsop3k$_0.state.position.x = game.getPlayers().getTank_s8cxhz$(tpUserID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.x
game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0.body_xsop3k$_0.state.position.y = game.getPlayers().getTank_s8cxhz$(tpUserID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.y
game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0.body_xsop3k$_0.state.position.z = game.getPlayers().getTank_s8cxhz$(tpUserID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.z+120
    
} catch (error) {
    
}
} 
} catch (error) {
 
}
}


hacks.randomTP = function(){
try {
game.getTank().components_0.array[5].tankPhysicsComponent_0.interpolatedPosition.x = commons.getRandom(game.getMapBoundary().minX,game.getMapBoundary().maxX)
game.getTank().components_0.array[5].tankPhysicsComponent_0.interpolatedPosition.y = commons.getRandom(game.getMapBoundary().minY,game.getMapBoundary().maxY)

window.fakeR = requestAnimationFrame(hacks.randomTP)

} catch (error) {
  
}  
  
}


 
hacks.airWalk = function(){
try {
game.getAirwalk().params_nd1j3b$_0.maxRayLength = 11111111  
game.getAirwalk().params_nd1j3b$_0.dampingCoeff = 0
game.getAirwalk().params_nd1j3b$_0.springCoeff= 0
   
} catch (error) {
 
}
  
}






function sap(){try {
for (let i = 0; i < vars.shellCache.length; i++)
                            {   vars.shellCache.at(i).components_0.array.at(1).maxSpeed_0 = 0
                                vars.shellCache.at(i).components_0.array.at(1).minSpeed_0 = 0;
                                

                            }    
} catch (error) {
    
}}


function sapm(){try {
for (let i = 0; i < vars.shellCache.length; i++)
                            {
                               vars.shellCache.at(i).components_0.array.at(1).maxSpeed_0 = 35000
                                vars.shellCache.at(i).components_0.array.at(1).minSpeed_0 = 2000;
                                

                            }    
} catch (error) {
    
}}




function ap(){try {
for (let i = 0; i < vars.shellCache.length; i++)
                            {
                                vars.shellCache.at(i).components_0.array.at(1).direction.x = 0;
                                vars.shellCache.at(i).components_0.array.at(1).direction.y = 0;
                                vars.shellCache.at(i).components_0.array.at(1).direction.z = 0;                          
                                

                            }    
} catch (error) {
    
}}


function apm(){try {
 for (let i = 0; i < vars.shellCache.length; i++)
                            {
                                
                                vars.shellCache.at(i).components_0.array.at(1).position.x = game.getPlayers().getTank_s8cxhz$(enemyID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.x
                                vars.shellCache.at(i).components_0.array.at(1).position.y = game.getPlayers().getTank_s8cxhz$(enemyID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.y
                                vars.shellCache.at(i).components_0.array.at(1).position.z = game.getPlayers().getTank_s8cxhz$(enemyID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.z


                            }
} catch (error) {
 
}}


function tapm(){try {
for (let i = 0; i < vars.shellCache.length; i++)
                            {
                                
                                vars.shellCache.at(i).components_0.array.at(1).position.x = game.getPlayers().getTank_s8cxhz$(tpUserID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.x
                                vars.shellCache.at(i).components_0.array.at(1).position.y = game.getPlayers().getTank_s8cxhz$(tpUserID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.y
                                vars.shellCache.at(i).components_0.array.at(1).position.z = game.getPlayers().getTank_s8cxhz$(tpUserID).components_0.array[5].tankPhysicsComponent_tczrao$_0.interpolatedPosition.z


                            } 
} catch (error) {
 
}}




isTarget = false

hacks.oneHitKill = function(){
try {
vars.shellCache = commons.searchObject(game.getTank().components_0.array,"shellCache_0").shellCache_0.itemsInUse_123ot1$_0.array_hd7ov6$_0

    
if(tprc%2==1){
if(vars.shellCache.length<8){
ap()

    
}

if(vars.shellCache.length==8){
ap()
if(isTarget){ 
setTimeout(tapm,1500)
}
if(isTarget==false){ 
setTimeout(apm,1500)




 
}
    
    
}


if(tprc%2==0){
if(vars.shellCache.length<8){
sap()

    
}

if(vars.shellCache.length==8){
sap()
setTimeout(sapm,1500)
    
}

    
}



    
}
 
} catch (error) {
 
}
}
 if (KeyPressing.isKeyPressed(84 /*key: T*/) && Utils.isNotOpenChat())
    {
                for (let i = 0; i < vars.shellCache.length; i++)
        {
            strikerData.shellCache.at(i).components_0.array.at(1).position.x = targetBody.state.position.x;
            strikerData.shellCache.at(i).components_0.array.at(1).position.y = targetBody.state.position.y;
            strikerData.shellCache.at(i).components_0.array.at(1).position.z = targetBody.state.position.z;
    }}


hacks.goldTP = function(){
try {
if(commons.getChatState()==null){
for(let i =0;i<game.getWorld().triggers_0.triggers_0.array.length;i++){try {
if(game.getWorld().triggers_0.triggers_0.array[i].bonus_0.bonusData_cqilaj$_0.bonusLight.lightColor.color==16777215){    
game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0.body_xsop3k$_0.state.position.x = game.getWorld().triggers_0.triggers_0.array[i].collisionBox_0.aabb.minX
game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0.body_xsop3k$_0.state.position.y = game.getWorld().triggers_0.triggers_0.array[i].collisionBox_0.aabb.minY
game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0.body_xsop3k$_0.state.position.z = game.getWorld().triggers_0.triggers_0.array[i].collisionBox_0.aabb.minZ+150
}     
} catch (error) {
    
}}


}
 
} catch (error) {
 
}
}


function noZVelocity(){


try {
game.getTankPhysics().body_xsop3k$_0.state.velocity.z = 0
game.getWorld().physicsScene_0.gravity.z  = 0

} catch (error) {
    
}
    
}

function nt(){try {
game.getTankPhysics().body.state.orientation.x = 0;
    game.getTankPhysics().body.state.orientation.y = 0;
   game.getTankPhysics().body.state.angularVelocity.y= 0
    game.getTankPhysics().body.state.angularVelocity.x = 0; 
} catch (error) {
 
}}



function removeAllMines(){
try {
 for(player in game.getPlayers().list_0.array
){

mineOwnerID = game.getPlayers().list_0.array[player]
.components_0.array[4].userId 
game.getMines().removeAllMines_0(mineOwnerID)


    
}
} catch (error) {
 
}


    
}


window.mineDecluster= function(){
for(let i=0;i<16;i++){
for(let j=0;j<game.getWorld().triggers_0.triggers_0.array.length;j++){
try {
if(i<16){    
parentMine = game.getWorld().triggers_0.triggers_0.array[j]
childMine = game.getWorld().triggers_0.triggers_0.array[j+1]

if(parentMine.position.x==childMine.position.x){


childMine.removeMine_0()
    
}


}    
} catch (error) {
    
}

}
}

}







function removeMyMines(){for(key in game.getWorld().triggers_0.triggers_0.array){

try {
if(game.getWorld().triggers_0.triggers_0.array[key].ownerId.low_==game.getTank().components_0.array[4].userId.low_)

{
game.getWorld().triggers_0.triggers_0.array[key].removeMine_0()


    
}    
} catch (error) {
    
}



}}




//event listeners



WpressCount = 0
document.addEventListener('keydown', function (event) { if (event.key === 'F10'){
WpressCount ++
if(WpressCount%2==1){
root.appendChild(hackWindow)

   
}

if(WpressCount%2==0){

root.removeChild(hackWindow)
   
}


}})

  

root = document.querySelector("#root")
hackWindow = document.createElement("div")
hackWindow_style={
    display: "flex",
    backgroundColor: "rgb(12 12 12 / 28%)",
    height:"500px",
    width:"250px",
    position:"absolute",
    opacity: "0.55",
    left:"50%",
    right:"50%",
    transform:"translate(-50%,-50%)",
    borderRadius:"20px",
    borderBottom:"1px solid black",
    borderLeft:"1px solid black",
    borderTop:"1px solid black",
    borderRight:"1px solid black",
    borderWidth:"3px"
}
hackWindow.style.outline = "1px solid black"
//Object.assign():
Object.assign(hackWindow.style,hackWindow_style);
root.appendChild(hackWindow)

function draggable(el) {
 
  el.addEventListener('mousedown', function(e) {
    var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
    var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
    
    function mouseMoveHandler(e) {
     if(e.target!=slider && e.target!=slider2 && e.target!=slider3 && e.target!=slider4){
      el.style.top = (e.clientY - offsetY) + 'px';
      el.style.left = (e.clientX - offsetX) + 'px';
     }
     }

    function reset() {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseup', reset);
    }

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseup', reset);
  }
                     
                     );
}



title = document.createElement("span")
title.innerText = "Wolf"
hackWindow.appendChild(title)

title_style = {

color:"white",
textAlign:"center",
fontSize : "15px",
padding: "23px 30%",
   


    
}



Object.assign(title.style,title_style)


notiltButton = document.createElement("div")
autoclickerButton = document.createElement("div")
autoHealButton = document.createElement("div")
PlayerTPButton = document.createElement("div")
SpeedhackButton = document.createElement("div")
SimpleTPButton = document.createElement("div")
rapidUpdateButton = document.createElement("div")
//AirwalkButton = document.createElement("div")
//GoldTPButton = document.createElement("div")



checkboxUnticked_style = {
position:"absolute",
width:"0.1px",
height:"0.1px",
backgroundColor:"#8080803b",
outline:"none",
borderRadius:"12px",
boxShadow:"inset 0 0 5px tgba(0,0,0,.2)",
transition:".5s",
padding:"6px 8%", 


    
}



checkboxTicked_style = {
backgroundColor:"#97cdea",





    
}




function applyButtons(b1,b2,b3,b4,b5,b6,b7){

Object.assign(b1.style,checkboxUnticked_style)
Object.assign(b2.style,checkboxUnticked_style)
Object.assign(b3.style,checkboxUnticked_style)
Object.assign(b4.style,checkboxUnticked_style)
Object.assign(b5.style,checkboxUnticked_style)
Object.assign(b6.style,checkboxUnticked_style)
Object.assign(b7.style,checkboxUnticked_style)

    
b1.style.marginLeft = "70%"
b2.style.marginLeft = "70%"
b3.style.marginLeft = "70%"
b4.style.marginLeft = "70%"
b5.style.marginLeft = "70%"
b6.style.marginLeft = "70%"
b7.style.marginLeft = "70%"


b1.style.bottom = "80%"                                                
b2.style.bottom = "71.9%"
b3.style.bottom = "64%"
b4.style.bottom = "56%"
b5.style.bottom = "47.8%"
b6.style.bottom = "40%"
b7.style.bottom = "32%"







}



function applyLabels(l1,l2,l3,l4,l5,l6,l7){

l1.style.fontSize = "15px"
l2.style.fontSize = "15px"
l3.style.fontSize = "15px"
l4.style.fontSize = "15px"
l5.style.fontSize = "15px"
l6.style.fontSize = "15px"
l7.style.fontSize = "15px"

l1.style.position = "absolute"
l2.style.position = "absolute"
l3.style.position = "absolute"
l4.style.position = "absolute"
l5.style.position = "absolute"
l6.style.position = "absolute"
l7.style.position = "absolute"


l1.style.bottom = "80%"
l1.style.padding = "35% 0px 0px 25px"
l2.style.padding = "50% 0px 0px 25px"
l3.style.padding = "65.8% 0px 0px 25px"
l4.style.padding = "65.8% 0px 0px 25px"
l4.style.bottom = "55%"    
l5.style.bottom = "47%"
l5.style.padding = "65.8% 0px 0px 25px"
l6.style.bottom = "39%"
l6.style.padding = "65.8% 0px 0px 25px"
l7.style.padding = "65.8% 0px 0px 25px"
l7.style.bottom = "31%"

    
}


applyButtons(notiltButton,autoclickerButton,autoHealButton,PlayerTPButton,SpeedhackButton,SimpleTPButton,rapidUpdateButton)


//page1

Notilt = document.createElement("span")
Autoclicker= document.createElement("span")
Autoheal= document.createElement("span")
PlayerTP= document.createElement("span")
GoldTP= document.createElement("span")
rapidUpdate= document.createElement("span")
Airwalk= document.createElement("span")
SimpleTP= document.createElement("span")
Speedhack= document.createElement("span")

Notilt.innerText = "Notilt:"
Autoclicker.innerText = "Autoclicker:"
Autoheal.innerText = "Autoheal:"
PlayerTP.innerText = "Player TP [V]:"
SimpleTP.innerText = "Fly Hack:"
rapidUpdate.innerText = "Rapid Update:"
Speedhack.innerText = "Speedhack:"




applyLabels(Notilt,Autoclicker,Autoheal,PlayerTP,Speedhack,SimpleTP,rapidUpdate)

















hackWindow.appendChild(notiltButton)
hackWindow.appendChild(autoclickerButton)
hackWindow.appendChild(autoHealButton)
hackWindow.appendChild(PlayerTPButton)
hackWindow.appendChild(SpeedhackButton)
hackWindow.appendChild(SimpleTPButton)
hackWindow.appendChild(rapidUpdateButton)


hackWindow.appendChild(Notilt)
hackWindow.appendChild(Autoclicker)
hackWindow.appendChild(Autoheal)
hackWindow.appendChild(PlayerTP)
hackWindow.appendChild(Speedhack)
hackWindow.appendChild(SimpleTP)
hackWindow.appendChild(PlayerTP)
hackWindow.appendChild(rapidUpdate)




innerCircle1  = document.createElement("div")
innerCircle2  = document.createElement("div")
innerCircle3  = document.createElement("div")
innerCircle4  = document.createElement("div")
innerCircle5  = document.createElement("div")
innerCircle6  = document.createElement("div")
innerCircle7  = document.createElement("div")

innerCircle_style = {
width:"30%",
height:"100%",
backgroundColor:"white",
position:"absolute",
borderRadius:"10px",
top: "2%",
right: "63%",
transition:"right 0.7s"
    
}

Object.assign(innerCircle1.style,innerCircle_style)
Object.assign(innerCircle2.style,innerCircle_style)
Object.assign(innerCircle3.style,innerCircle_style)
Object.assign(innerCircle4.style,innerCircle_style)
Object.assign(innerCircle5.style,innerCircle_style)
Object.assign(innerCircle6.style,innerCircle_style)
Object.assign(innerCircle7.style,innerCircle_style)


notiltButton.appendChild(innerCircle1)
autoclickerButton.appendChild(innerCircle2)
autoHealButton.appendChild(innerCircle3)
PlayerTPButton.appendChild(innerCircle4)
SpeedhackButton.appendChild(innerCircle5)
SimpleTPButton.appendChild(innerCircle6)
rapidUpdateButton.appendChild(innerCircle7)






page1 = document.createElement("div")
page2 = document.createElement("div")
page3 = document.createElement("div")
page4 = document.createElement("div")


page_style = {
position:'absolute',
width:"6%",
height:"3%",
borderRadius : "20px",
backgroundColor:"black",
bottom:"11%",



    
}

Object.assign(page1.style,page_style)
Object.assign(page2.style,page_style)
Object.assign(page3.style,page_style)
Object.assign(page4.style,page_style)


hackWindow.appendChild(page1)
hackWindow.appendChild(page2)
hackWindow.appendChild(page3)
hackWindow.appendChild(page4)




page1.style.marginLeft = "20%"
page2.style.marginLeft = "38%"
page3.style.marginLeft = "57%"
page4.style.marginLeft = "76%"

//page1 end


//page2


hackWindow.style.backdropFilter = "blur(1.7px)"














//page2 end





//click count vars
ncc =0
acc=0
ahc=0
ptc = 0
shc = 0
smc = 0
rtc = 0

//end vars


//js for buttons
notiltButton.addEventListener("click",function(){
ncc +=1


if(ncc%2==1){
notiltButton.style.backgroundColor="rgb(109 24 137)"
notiltButton.children[0].style.right = "10%"
notiltButton.children[0].style.backgroundColor = "black"

window.NZR = setInterval(noZVelocity,1)
window.ntr = setInterval(nt,1)
window.rgt = game.getWorld().physicsScene_0.gravity.z 

  

}

if(ncc%2==0){
notiltButton.style.backgroundColor="#8080803b"
notiltButton.children[0].style.right = "63%"
notiltButton.children[0].style.backgroundColor = "white" 
clearInterval(window.NZR)
clearInterval(window.ntr)
game.getWorld().physicsScene_0.gravity.z = window.rgt
game.getTankPhysics().body_xsop3k$_0.state.velocity.z = -1.3

}


    
})


autoclickerButton.addEventListener("click",function(){
acc +=1


if(acc%2==1){
autoclickerButton.style.backgroundColor="rgb(109 24 137)"
autoclickerButton.children[0].style.right = "10%"
autoclickerButton.children[0].style.backgroundColor = "black"   
window.p = setInterval(hacks.clicker,slider4.value)
}

if(acc%2==0){
autoclickerButton.style.backgroundColor="#8080803b"
autoclickerButton.children[0].style.right = "63%"
autoclickerButton.children[0].style.backgroundColor = "white"   
clearInterval(window.p)
}


    
})


autoHealButton.addEventListener("click",function(){
ahc +=1


if(ahc%2==1){
autoHealButton.style.backgroundColor="rgb(109 24 137)"
autoHealButton.children[0].style.right = "10%"
autoHealButton.children[0].style.backgroundColor = "black"   
window.autoR = setInterval(hacks.autoHeal,1)
}

if(ahc%2==0){
autoHealButton.style.backgroundColor="#8080803b"
autoHealButton.children[0].style.right = "63%"
autoHealButton.children[0].style.backgroundColor = "white"   
clearInterval(window.autoR)


}


    
})



PlayerTPButton.addEventListener("click",function(){
ptc +=1


if(ptc%2==1){
PlayerTPButton.style.backgroundColor="rgb(109 24 137)"
PlayerTPButton.children[0].style.right = "10%"
PlayerTPButton.children[0].style.backgroundColor = "black"   
document.addEventListener('keydown',  window.tpS = function (event) { if (event.key === 'v'){hacks.playerTP()
root.style.backgroundColor = "black"

}})

}

if(ptc%2==0){
PlayerTPButton.style.backgroundColor="#8080803b"
PlayerTPButton.children[0].style.right = "63%"
PlayerTPButton.children[0].style.backgroundColor = "white"   
document.removeEventListener("keydown",window.tpS)

}

    
})


SpeedhackButton.addEventListener("click",function(){
shc +=1


if(shc%2==1){
SpeedhackButton.style.backgroundColor="rgb(109 24 137)"
SpeedhackButton.children[0].style.right = "10%"
SpeedhackButton.children[0].style.backgroundColor = "black"   
window.speed = setInterval(hacks.speedhack,500)
}

if(shc%2==0){
SpeedhackButton.style.backgroundColor="#8080803b"
SpeedhackButton.children[0].style.right = "63%"
SpeedhackButton.children[0].style.backgroundColor = "white"   
clearInterval(window.speed)
}


    
})




SimpleTPButton.addEventListener("click",function(){
smc +=1


if(smc%2==1){
SimpleTPButton.style.backgroundColor="rgb(109 24 137)"
SimpleTPButton.children[0].style.right = "10%"
SimpleTPButton.children[0].style.backgroundColor = "black"   
window.ckp = setInterval(hacks.simpleTP)
}

if(smc%2==0){
SimpleTPButton.style.backgroundColor="#8080803b"
SimpleTPButton.children[0].style.right = "63%"
SimpleTPButton.children[0].style.backgroundColor = "white"   
clearInterval(window.ckp)
}


    
})


rapidUpdateButton.addEventListener("click",function(){
rtc +=1


if(rtc%2==1){
rapidUpdateButton.style.backgroundColor="rgb(109 24 137)"
rapidUpdateButton.children[0].style.right = "10%"
rapidUpdateButton.children[0].style.backgroundColor = "black"   
window.ru = setInterval(hacks.rapidUpdate,10)

  
}

if(rtc%2==0){
rapidUpdateButton.style.backgroundColor="#8080803b"
rapidUpdateButton.children[0].style.right = "63%"
rapidUpdateButton.children[0].style.backgroundColor = "white"   
clearInterval(window.ru)




}


    
})

root.removeChild(hackWindow)


//rgba(114, 56, 56, 0.08);
  
  
  
  
  
  
  
  
  
 
 
//document.addEventListener('keydown',   function (event) { if (event.key === 'r'){unAim()}})











//page2


airwalkBtn = document.createElement("div")
randomBtn = document.createElement("div")
FlagTPBtn= document.createElement("div")
GoldTPBtn =document.createElement("div")
MineHackBtn = document.createElement("div")
NoKnockbackBtn = document.createElement("div")
IgnoreTexturesBtn = document.createElement("div")



innerCircle8  = document.createElement("div")
innerCircle9  = document.createElement("div")
innerCircle10  = document.createElement("div")
innerCircle11 = document.createElement("div")
innerCircle12  = document.createElement("div")
innerCircle13  = document.createElement("div")
innerCircle14  = document.createElement("div")


Object.assign(innerCircle8.style,innerCircle_style)
Object.assign(innerCircle9.style,innerCircle_style)
Object.assign(innerCircle10.style,innerCircle_style)
Object.assign(innerCircle11.style,innerCircle_style)
Object.assign(innerCircle12.style,innerCircle_style)
Object.assign(innerCircle13.style,innerCircle_style)
Object.assign(innerCircle14.style,innerCircle_style)


airwalkBtn.appendChild(innerCircle8)
randomBtn.appendChild(innerCircle9)
FlagTPBtn.appendChild(innerCircle10)
GoldTPBtn.appendChild(innerCircle11)
MineHackBtn.appendChild(innerCircle12)
NoKnockbackBtn.appendChild(innerCircle13)
IgnoreTexturesBtn.appendChild(innerCircle14)





applyButtons(airwalkBtn,randomBtn,FlagTPBtn,GoldTPBtn,MineHackBtn,NoKnockbackBtn,IgnoreTexturesBtn)

Airwalk= document.createElement("span")
randomTP= document.createElement("span")
flagTP = document.createElement("span")
GoldTP= document.createElement("span")
Minehack = document.createElement("span")
NoKnockback = document.createElement("span")
IgnoreTextures= document.createElement("span")



applyLabels(Airwalk,randomTP,flagTP,GoldTP,Minehack,NoKnockback,IgnoreTextures)



Airwalk.innerText = "Airwalk:"
randomTP.innerText = "Random TP:"
flagTP.innerText = "Flag TP [N]:"
GoldTP.innerText = "Gold TP [T]:"
Minehack.innerText = "Minehack:"
NoKnockback.innerText = "No Knockback:"
IgnoreTextures.innerText = "Ignore Textures:"


//counts
awc = 0
rwc = 0
ftbc = 0
gtbc = 0
mhc = 0
nkc = 0
itc = 0
//inner counts
ftc = 0
gtc = 0
//end


//event listeners


airwalkBtn.addEventListener("click",function(){
awc +=1


if(awc%2==1){
airwalkBtn.style.backgroundColor="rgb(109 24 137)"
airwalkBtn.children[0].style.right = "10%"
airwalkBtn.children[0].style.backgroundColor = "black"   
airw = setInterval(hacks.airWalk,1000)  
}

if(awc%2==0){
airwalkBtn.style.backgroundColor="#8080803b"
airwalkBtn.children[0].style.right = "63%"
airwalkBtn.children[0].style.backgroundColor = "white"   
try {
clearInterval(airw)
game.getAirwalk().params_nd1j3b$_0.dampingCoeff= 2000
game.getAirwalk().params_nd1j3b$_0.maxRayLength= 50
game.getAirwalk().params_nd1j3b$_0.springCoeff= 16000 
} catch (error) {
 
}
}


    
})


randomBtn.addEventListener("click",function(){
awc +=1


if(awc%2==1){
randomBtn.style.backgroundColor="rgb(109 24 137)"
randomBtn.children[0].style.right = "10%"
randomBtn.children[0].style.backgroundColor = "black"   
hacks.randomTP()


}

if(awc%2==0){
randomBtn.style.backgroundColor="#8080803b"
randomBtn.children[0].style.right = "63%"
randomBtn.children[0].style.backgroundColor = "white"   
cancelAnimationFrame(window.fakeR)
}


    
})




FlagTPBtn.addEventListener("click",function(){
ftbc +=1


if(ftbc%2==1){
FlagTPBtn.style.backgroundColor="rgb(109 24 137)"
FlagTPBtn.children[0].style.right = "10%"
FlagTPBtn.children[0].style.backgroundColor = "black"   
document.addEventListener("keydown", window.ftp = function(e){
if(e.key=="n"){

ftc+=1
if(ftc%2==1){

hacks.TPFlagA()    
}
    
if(ftc%2==0){

hacks.TPFlagB()    
}
      
}



    
})

}

if(ftbc%2==0){
FlagTPBtn.style.backgroundColor="#8080803b"
FlagTPBtn.children[0].style.right = "63%"
FlagTPBtn.children[0].style.backgroundColor = "white"   
document.removeEventListener("keydown",window.ftp)

}


    
})





GoldTPBtn.addEventListener("click",function(){
gtbc +=1


if(gtbc%2==1){
GoldTPBtn.style.backgroundColor="rgb(109 24 137)"
GoldTPBtn.children[0].style.right = "10%"
GoldTPBtn.children[0].style.backgroundColor = "black"   
document.addEventListener("keydown", window.gtp = function(e){
if(e.key=="t" && commons.getChatState()==null){

gtc+=1
if(gtc%2==1){

window.gtr = setInterval(hacks.goldTP,10)    
}
    
if(gtc%2==0){

clearInterval(window.gtr)
}
      
}



    
})

}

if(gtbc%2==0){
GoldTPBtn.style.backgroundColor="#8080803b"
GoldTPBtn.children[0].style.right = "63%"
GoldTPBtn.children[0].style.backgroundColor = "white"   
document.removeEventListener("keydown",window.gtp)

}


    
})



MineHackBtn.addEventListener("click",function(){
mhc +=1


if(mhc%2==1){
MineHackBtn.style.backgroundColor="rgb(109 24 137)"
MineHackBtn.children[0].style.right = "10%"
MineHackBtn.children[0].style.backgroundColor = "black"   
window.ram = setInterval(removeAllMines,1000)
}

if(mhc%2==0){
MineHackBtn.style.backgroundColor="#8080803b"
MineHackBtn.children[0].style.right = "63%"
MineHackBtn.children[0].style.backgroundColor = "white"   
clearInterval(window.ram)
}


    
})




NoKnockbackBtn.addEventListener("click",function(){
nkc +=1


if(nkc%2==1){
NoKnockbackBtn.style.backgroundColor="rgb(109 24 137)"
NoKnockbackBtn.children[0].style.right = "10%"
NoKnockbackBtn.children[0].style.backgroundColor = "black"   

nkr = setInterval(function(){try {
game.getTankPhysics().body.addWorldForce_f5o1bj$ = () =>{}
 
} catch (error) {
 
}
                     },1500) 

}

if(nkc%2==0){
NoKnockbackBtn.style.backgroundColor="#8080803b"
NoKnockbackBtn.children[0].style.right = "63%"
NoKnockbackBtn.children[0].style.backgroundColor = "white"   
clearInterval(nkr)
game.getTankPhysics().body.addWorldForce_f5o1bj$ = function(t,e,n){var o=n*e.x,i=n*e.y,r=n*e.z;this.forceAccum_0.x=this.forceAccum_0.x+o,this.forceAccum_0.y=this.forceAccum_0.y+i,this.forceAccum_0.z=this.forceAccum_0.z+r;var s=this.state.position,a=t.x-s.x,c=t.y-s.y,u=t.z-s.z;this.torqueAccum_0.x=this.torqueAccum_0.x+(c*r-u*i),this.torqueAccum_0.y=this.torqueAccum_0.y+(u*o-a*r),this.torqueAccum_0.z=this.torqueAccum_0.z+(a*i-c*o)}

}


    
})



IgnoreTexturesBtn.addEventListener("click",function(){
itc +=1


if(itc%2==1){
IgnoreTexturesBtn.style.backgroundColor="rgb(109 24 137)"
IgnoreTexturesBtn.children[0].style.right = "10%"
IgnoreTexturesBtn.children[0].style.backgroundColor = "black"   
itr = setInterval(function(){
try {
game.getTankPhysics().body.scene.getBodyContacts_9pl3r9$  = function(t,e){} 
clearInterval(itre)
} catch (error) {
 
}
},1500)
}

if(itc%2==0){
IgnoreTexturesBtn.style.backgroundColor="#8080803b"
IgnoreTexturesBtn.children[0].style.right = "63%"
IgnoreTexturesBtn.children[0].style.backgroundColor = "white" 
clearInterval(itr)
itre = setInterval(function(){
try {
game.getTankPhysics().body.scene.getBodyContacts_9pl3r9$  = function(t,e){return this.$delegate_jkpsdr$_0.getBodyContacts_9pl3r9$(t,e)}
 
} catch (error) {
 
}
},1500)
}


    
})













whiteIcon = document.createElement("div")



whiteIcon.style.width = "100%"
whiteIcon.style.height = "100%"
whiteIcon.style.background = "white"
whiteIcon.style.borderRadius = "20px"




page1.appendChild(whiteIcon)


page1.addEventListener("click",page1func)
page2.addEventListener("click",page2func)
page3.addEventListener("click",page3func)
page4.addEventListener("click",page4func)






function page1func(){
hackWindow.innerHTML = ""
hackWindow.appendChild(title)
hackWindow.appendChild(notiltButton)
hackWindow.appendChild(autoclickerButton)
hackWindow.appendChild(autoHealButton)
hackWindow.appendChild(PlayerTPButton)
hackWindow.appendChild(SpeedhackButton)
hackWindow.appendChild(SimpleTPButton)
hackWindow.appendChild(rapidUpdateButton)





notiltButton.appendChild(innerCircle1)
autoclickerButton.appendChild(innerCircle2)
autoHealButton.appendChild(innerCircle3)
PlayerTPButton.appendChild(innerCircle4)
SpeedhackButton.appendChild(innerCircle5)
SimpleTPButton.appendChild(innerCircle6)
rapidUpdateButton.appendChild(innerCircle7)



    
hackWindow.appendChild(Notilt)
hackWindow.appendChild(Autoclicker)
hackWindow.appendChild(Autoheal)
hackWindow.appendChild(PlayerTP)
hackWindow.appendChild(Speedhack)
hackWindow.appendChild(SimpleTP)
hackWindow.appendChild(PlayerTP)
hackWindow.appendChild(rapidUpdate)


page1.appendChild(whiteIcon)

hackWindow.appendChild(page1)
hackWindow.appendChild(page2)
hackWindow.appendChild(page3)
hackWindow.appendChild(page4)





    
}






function page2func(){
hackWindow.innerHTML = ""
hackWindow.appendChild(title)
    


    
hackWindow.appendChild(airwalkBtn)
hackWindow.appendChild(randomBtn)
hackWindow.appendChild(GoldTPBtn)
hackWindow.appendChild(FlagTPBtn)
hackWindow.appendChild(MineHackBtn)
hackWindow.appendChild(NoKnockbackBtn)
hackWindow.appendChild(IgnoreTexturesBtn)

    
hackWindow.appendChild(Airwalk)
hackWindow.appendChild(GoldTP)
hackWindow.appendChild(flagTP)
hackWindow.appendChild(randomTP)
hackWindow.appendChild(Minehack)
hackWindow.appendChild(NoKnockback)
hackWindow.appendChild(IgnoreTextures)    


airwalkBtn.appendChild(innerCircle8)
randomBtn.appendChild(innerCircle9)
FlagTPBtn.appendChild(innerCircle10)
GoldTPBtn.appendChild(innerCircle11)
MineHackBtn.appendChild(innerCircle12)
NoKnockbackBtn.appendChild(innerCircle13)
IgnoreTexturesBtn.appendChild(innerCircle14)




    
page2.appendChild(whiteIcon)

hackWindow.appendChild(page1)
hackWindow.appendChild(page2)
hackWindow.appendChild(page3)
hackWindow.appendChild(page4)





}    








miscTitle = document.createElement("span")
miscTitle.innerText = "Wolf"
Object.assign(miscTitle.style,title_style)

page3.addEventListener("click",page3func)
miscTitle.style.padding= '24px 30% 0px 35%'


freezeTanksBtn = document.createElement("div")
noStunBtn = document.createElement("div")
declusterBtn = document.createElement("div")
playerMinesBtn = document.createElement("div")
ohkBtn = document.createElement("div")
aimbotBtn = document.createElement("div")
tprBtn = document.createElement("div")


freezeTanks = document.createElement("span")
noStun = document.createElement("span")
decluster =  document.createElement("span")
playerMines =  document.createElement("span")
ohk = document.createElement("span")
aimbot =  document.createElement("span")
tpr =  document.createElement("span")



freezeTanks.innerText = "Freeze Tanks:"
noStun.innerText = "No Stun:"
decluster.innerText = "Mine Decluster [M]:"
playerMines.innerText = "Player Mines [K]:"
ohk.innerText = "One Hit Kill:"
aimbot.innerText = "Aimbot:"
tpr.innerText = "TP Rockets:"



applyLabels(freezeTanks,noStun,decluster,playerMines,aimbot,ohk,tpr)
applyButtons(freezeTanksBtn,noStunBtn,declusterBtn,playerMinesBtn,aimbotBtn,ohkBtn,tprBtn)


innerCircle15  = document.createElement("div")
innerCircle16  = document.createElement("div")
innerCircle17  = document.createElement("div")
innerCircle18  = document.createElement("div")
innerCircle19  = document.createElement("div")
innerCircle20  = document.createElement("div")
innerCircle21  = document.createElement("div")





Object.assign(innerCircle15.style,innerCircle_style)
Object.assign(innerCircle16.style,innerCircle_style)
Object.assign(innerCircle17.style,innerCircle_style)
Object.assign(innerCircle18.style,innerCircle_style)
Object.assign(innerCircle19.style,innerCircle_style)
Object.assign(innerCircle20.style,innerCircle_style)
Object.assign(innerCircle21.style,innerCircle_style)


freezeTanksBtn.appendChild(innerCircle15)
noStunBtn.appendChild(innerCircle16)
playerMinesBtn.appendChild(innerCircle17)
declusterBtn.appendChild(innerCircle18)
ohkBtn.appendChild(innerCircle19)
aimbotBtn.appendChild(innerCircle20)
tprBtn.appendChild(innerCircle21)






function page3func(){
hackWindow.innerHTML = ""
hackWindow.appendChild(miscTitle)
    
hackWindow.appendChild(noStunBtn)
hackWindow.appendChild(tprBtn)
hackWindow.appendChild(aimbotBtn)
hackWindow.appendChild(declusterBtn)
hackWindow.appendChild(playerMinesBtn)
hackWindow.appendChild(ohkBtn)
hackWindow.appendChild(freezeTanksBtn)


hackWindow.appendChild(freezeTanks)
hackWindow.appendChild(tpr)
hackWindow.appendChild(aimbot)
hackWindow.appendChild(playerMines)
hackWindow.appendChild(ohk)
hackWindow.appendChild(noStun)
hackWindow.appendChild(decluster)
    
    
page3.appendChild(whiteIcon)

hackWindow.appendChild(page1)
hackWindow.appendChild(page2)
hackWindow.appendChild(page3)
hackWindow.appendChild(page4)





}    


ffc = 0
nsc = 0
mdc = 0
pmc = 0
amc = 0
ohkc = 0
tprc = 0



//event listeners

freezeTanksBtn.addEventListener("click",function(){
ffc +=1


if(ffc%2==1){
freezeTanksBtn.style.backgroundColor="rgb(109 24 137)"
freezeTanksBtn.children[0].style.right = "10%"
freezeTanksBtn.children[0].style.backgroundColor = "black"   

ftr = setInterval(function(){
try {
for(let i=0;i<game.getPlayers().list_0.array.length;i++){
if(game.getPlayers().list_0.array[i].components_0.array[4].userId.low_!=game.getTank().components_0.array[4].userId.low_)
{
game.getPlayers().list_0.array[i].components_0.array[5].tankPhysicsComponent_0.body.frozen=true

game.getPlayers().list_0.array[i].components_0.array[5].tankPhysicsComponent_0.body.movable=false

    
}

    
}


 
} catch (error) {
 
}
    
},1000)

}

if(ffc%2==0){
freezeTanksBtn.style.backgroundColor="#8080803b"
freezeTanksBtn.children[0].style.right = "63%"
freezeTanksBtn.children[0].style.backgroundColor = "white"   
clearInterval(ftr)


try {
for(let i=0;i<game.getPlayers().list_0.array.length;i++){

game.getPlayers().list_0.array[i].components_0.array[5].tankPhysicsComponent_0.body.frozen=false

game.getPlayers().list_0.array[i].components_0.array[5].tankPhysicsComponent_0.body.movable=true

    
}
 
} catch (error) {
 
}



    
}


    
})






noStunBtn.addEventListener("click",function(){
nsc +=1


if(nsc%2==1){
noStunBtn.style.backgroundColor="rgb(109 24 137)"
noStunBtn.children[0].style.right = "10%"
noStunBtn.children[0].style.backgroundColor = "black"   
nsr = setInterval(function(){
try {
game.getTank().components_0.array[game.getTank().components_0.array.length-1].gameObject_0.gameClass.models_0.array_hd7ov6$_0[1].stun = function(){}
    
} catch (error) {
    
}                            },1000)
}

if(nsc%2==0){
noStunBtn.style.backgroundColor="#8080803b"
noStunBtn.children[0].style.right = "63%"
noStunBtn.children[0].style.backgroundColor = "white"   


clearInterval(nsr)
try {
game.getTank().components_0.array[game.getTank().components_0.array.length-1].gameObject_0.gameClass.models_0.array_hd7ov6$_0[1].stun = function(){var t;null!=(t=this.getData_lmshww$(w(N)))&&t.send_il80ix$(_u.EnableStunEffect)} 
} catch (error) {
 
}

    
}


    
})



declusterBtn.addEventListener("click",function(){
mdc +=1


if(mdc%2==1){
declusterBtn.style.backgroundColor="rgb(109 24 137)"
declusterBtn.children[0].style.right = "10%"
declusterBtn.children[0].style.backgroundColor = "black"   


document.addEventListener("keydown",window.dcm = function(e){

if(e.key == "m"){

mineDecluster()
    
}



    
})

    
}

if(mdc%2==0){
declusterBtn.style.backgroundColor="#8080803b"
declusterBtn.children[0].style.right = "63%"
declusterBtn.children[0].style.backgroundColor = "white"   


document.removeEventListener("keydown",window.dcm)

    
}


    
})



playerMinesBtn.addEventListener("click",function(){
pmc +=1


if(pmc%2==1){
playerMinesBtn.style.backgroundColor="rgb(109 24 137)"
playerMinesBtn.children[0].style.right = "10%"
playerMinesBtn.children[0].style.backgroundColor = "black"   


document.addEventListener("keydown",window.rmm = function(e){

if(e.key == "k"){

removeMyMines()    
}



    
})

    
}

if(pmc%2==0){
playerMinesBtn.style.backgroundColor="#8080803b"
playerMinesBtn.children[0].style.right = "63%"
playerMinesBtn.children[0].style.backgroundColor = "white"   


document.removeEventListener("keydown",window.rmm)

    
}


    
})








aimbotBtn.addEventListener("click",function(){
amc +=1


if(amc%2==1){
aimbotBtn.style.backgroundColor="rgb(109 24 137)"
aimbotBtn.children[0].style.right = "10%"
aimbotBtn.children[0].style.backgroundColor = "black"   
aimb = setInterval(function(){
try {
game.getStriker().lockTarget_gcez93$ = function (t, e, n)
    {
        if (e != null)
        {
            targetId = e;
        }
        
        
        
        this.lockTarget_gcez93$$default(t, e);
        return true;
    } 
} catch (error) {
 
}
},1500)
    
}

if(amc%2==0){
aimbotBtn.style.backgroundColor="#8080803b"
aimbotBtn.children[0].style.right = "63%"
aimbotBtn.children[0].style.backgroundColor = "white"   

 try {
clearInterval(aimb)
 
game.getStriker().lockTarget_gcez93$ =function(t,e,n){return void 0===e&&(e=null),n?n(t,e):this.lockTarget_gcez93$$default(t,e)}
  
 } catch (error) {
  
 }
    
}


    
})






ohkBtn.addEventListener("click",function(){
ohkc +=1


if(ohkc%2==1){
ohkBtn.style.backgroundColor="rgb(109 24 137)"
ohkBtn.children[0].style.right = "10%"
ohkBtn.children[0].style.backgroundColor = "black"   
window.ohkr = setInterval(hacks.oneHitKill,100)

    
}

if(ohkc%2==0){
ohkBtn.style.backgroundColor="#8080803b"
ohkBtn.children[0].style.right = "63%"
ohkBtn.children[0].style.backgroundColor = "white"   
clearInterval(window.ohkr)

    
}


    
})





tprBtn.addEventListener("click",function(){
tprc +=1


if(tprc%2==1){
tprBtn.style.backgroundColor="rgb(109 24 137)"
tprBtn.children[0].style.right = "10%"
tprBtn.children[0].style.backgroundColor = "black"   

    
}

if(tprc%2==0){
tprBtn.style.backgroundColor="#8080803b"
tprBtn.children[0].style.right = "63%"
tprBtn.children[0].style.backgroundColor = "white"   

    
}


    
})



/*configTitle = document.createElement("span")
configTitle.innerText = "CONFIG"
Object.assign(configTitle.style, title_style)

tps = document.createElement("span")

plusButton = document.createElement("button")
minusButton = document.createElement("button")

tps.innerText = TPspeed

tps.style.position = "absolute"
tps.style.color = "white"
tps.style.bottom = "76%"
tps.style.right = "46%"
tps.style.fontSize = "18px"


pmb_style = {
    width: '35px',
    height: '25px',
    position: 'absolute',
    borderRadius: '100px',
   
}

Object.assign(plusButton.style, pmb_style)
Object.assign(minusButton.style, pmb_style)

minusButton.style.backgroundColor = "red"
plusButton.style.backgroundColor = "green"

minusButton.style.bottom = "76%"
plusButton.style.bottom = "76%"


minusButton.style.left = "14%"
plusButton.style.right = "14%"

//hackWindow.appendChild(plusButton)
//hackWindow.appendChild(minusButton)

pSign = document.createElement("span")
mSign = document.createElement("span")

pSign.innerText = "+"
mSign.innerText = "-"

plusButton.appendChild(pSign)
minusButton.appendChild(mSign)

plusButton.addEventListener("click", function() {

    tps.innerText = parseInt(tps.innerText) + 20
    TPspeed+=20

})
minusButton.addEventListener("click", function() {

    tps.innerText = parseInt(tps.innerText) - 20
    TPspeed-=20

})
*/
function page4func() {
    hackWindow.innerHTML = ""
    hackWindow.appendChild(miscTitle)

    page4.appendChild(whiteIcon)

    /*hackWindow.appendChild(plusButton)
    hackWindow.appendChild(minusButton)
    hackWindow.appendChild(tps)

    hackWindow.appendChild(clickPlusButton)
    hackWindow.appendChild(clickMinusButton)
    hackWindow.appendChild(cps)*/
    hackWindow.appendChild(noLaser)
    hackWindow.appendChild(noLaserBtn)
    hackWindow.appendChild(DeathSpawn)
    hackWindow.appendChild(DeathSpawnBtn)
    hackWindow.appendChild(accText)
    hackWindow.appendChild(tpText)
    hackWindow.appendChild(clickText)
    hackWindow.appendChild(slider2)
    hackWindow.appendChild(slider3)
    hackWindow.appendChild(slider4)

    hackWindow.appendChild(fastClickerBtn)
    hackWindow.appendChild(fastClicker)

    hackWindow.appendChild(targetModeBtn)
    hackWindow.appendChild(targetMode)
    hackWindow.appendChild(slider)
    hackWindow.appendChild(speedText)
    
    hackWindow.appendChild(page1)
    hackWindow.appendChild(page2)
    hackWindow.appendChild(page3)
    hackWindow.appendChild(page4)

}


/*clickSpeed = 30
cps = document.createElement("span")
cps.innerText = clickSpeed

clickPlusButton = document.createElement("button")
clickMinusButton = document.createElement("button")

cps.innerText = clickSpeed

cps.style.position = "absolute"
cps.style.color = "white"
cps.style.bottom = "62%"
cps.style.right = "46%"
cps.style.fontSize = "18px"



Object.assign(clickPlusButton.style, pmb_style)
Object.assign(clickMinusButton.style, pmb_style)

clickMinusButton.style.backgroundColor = "red"
clickPlusButton.style.backgroundColor = "green"

clickMinusButton.style.bottom = "62%"
clickPlusButton.style.bottom = "62%"


clickMinusButton.style.left = "14%"
clickPlusButton.style.right = "14%"

//hackWindow.appendChild(plusButton)
//hackWindow.appendChild(minusButton)

cpSign = document.createElement("span")
cmSign = document.createElement("span")

cpSign.innerText = "+"
cmSign.innerText = "-"

clickPlusButton.appendChild(cpSign)
clickMinusButton.appendChild(cmSign)

clickPlusButton.addEventListener("click", function() {

    cps.innerText = parseInt(cps.innerText) + 1
    clickSpeed+=1

})
clickMinusButton.addEventListener("click", function() {

    cps.innerText = parseInt(cps.innerText) - 1
    clickSpeed-=1

})

*/


fastClickerBtn = document.createElement("div")
targetModeBtn = document.createElement("div")



fastClicker = document.createElement("span")
targetMode = document.createElement("span")





Object.assign(fastClickerBtn.style,checkboxUnticked_style)
Object.assign(targetModeBtn.style,checkboxUnticked_style)








//fastClickerBtn.style.bottom = "35.5%"
fastClickerBtn.style.marginLeft = "70%"
targetModeBtn.style.marginLeft = "70%"
//targetModeBtn.style.bottom = "46.7%"



//targetMode.style.bottom = "46%"
fastClicker.style.fontSize = "15px"
fastClicker.style.padding = "65.8% 0px 0px 25px"
fastClicker.style.position = "absolute"

//fastClicker.style.bottom = "35%"
targetMode.style.fontSize = "15px"
targetMode.style.padding = "65.8% 0px 0px 25px"
targetMode.style.position = "absolute"

fastClicker.innerText = "Super Clicker:"
targetMode.innerText = "Target Mode:"

innerCircle22 = document.createElement("div")
innerCircle23 = document.createElement("div")


Object.assign(innerCircle22.style,innerCircle_style)
Object.assign(innerCircle23.style,innerCircle_style)


fastClickerBtn.appendChild(innerCircle22)
targetModeBtn.appendChild(innerCircle23)


//
slider = document.createElement("input")

slider.type = "range"


slider.step = 100

slider.min = 0
slider.max = 10000
slider.style.position = "absolute"
slider.style.bottom = "23%"
slider.style.marginLeft = "43%"


Object.assign(slider.style,{position: 'absolute',
bottom: '23%',
marginLeft: '52%',
background: 'rgb(0 ,0 ,0 ,0.47)',
opacity: '0.8',
width: '110px',
content: 'none',
appearance: 'none',
outline: 'rgb(151, 255, 118) solid 2px',
borderRadius: 'calc(100px)'})




speedText = document.createElement("span")
setInterval(function(){
try {
speedText.innerText = `Speed[${slider.value}]:`    
} catch (error) {
    
}
},100)

Object.assign(speedText.style,{fontSize: '15px',
position: 'absolute',
padding: '64.8% 0px 0px 26px',
bottom: '23%'})





twc = 0
swc = 0


targetModeBtn.addEventListener("click",function(){
twc +=1


if(twc%2==1){
targetModeBtn.style.backgroundColor="rgb(109 24 137)"
targetModeBtn.children[0].style.right = "10%"
targetModeBtn.children[0].style.backgroundColor = "black"   
isTarget = true
}

if(twc%2==0){
targetModeBtn.style.backgroundColor="#8080803b"
targetModeBtn.children[0].style.right = "63%"
targetModeBtn.children[0].style.backgroundColor = "white"   
isTarget = false
}


    
})





fastClickerBtn.addEventListener("click",function(){
swc +=1


if(swc%2==1){
fastClickerBtn.style.backgroundColor="rgb(109 24 137)"
fastClickerBtn.children[0].style.right = "10%"
fastClickerBtn.children[0].style.backgroundColor = "black"   
Superclicker()
}

if(swc%2==0){
fastClickerBtn.style.backgroundColor="#8080803b"
fastClickerBtn.children[0].style.right = "63%"
fastClickerBtn.children[0].style.backgroundColor = "white"   


cancelAnimationFrame(ck)
    
}


    
})




Superclicker = function(){ 
try {
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply() 
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply() 
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DD]._value_0._value_0.onUserActivatedSupply() 
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DA]._value_0._value_0.onUserActivatedSupply() 
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[NITRO]._value_0._value_0.onUserActivatedSupply() 

ck = requestAnimationFrame(Superclicker)
    
} catch (error) {
    
} 


}


//



DeathSpawnBtn = document.createElement("div")
noLaserBtn = document.createElement("div")

DeathSpawn = document.createElement("span")
noLaser = document.createElement("span")


Object.assign(DeathSpawnBtn.style,checkboxUnticked_style)
Object.assign(noLaserBtn.style,checkboxUnticked_style)



targetModeBtn.style.bottom = "80%"
targetMode.style.bottom = "80%"
fastClickerBtn.style.bottom = "71.9%"
fastClicker.style.bottom = "71.9%"



DeathSpawnBtn.style.marginLeft = "70%"
noLaserBtn.style.marginLeft = "70%"


DeathSpawnBtn.style.bottom = "64%"
noLaserBtn.style.bottom = "56%"



DeathSpawn.innerText = "Death Spawn:"
noLaser.innerText = "No Laser:"

DeathSpawn.style.bottom = "64%"
noLaser.style.bottom = "56%"



Object.assign(DeathSpawn.style,{fontSize: '15px',
padding: '65.8% 0px 0px 25px',
position: 'absolute',
})

Object.assign(noLaser.style,{fontSize: '15px',
padding: '65.8% 0px 0px 25px',
position: 'absolute',
})








innerCircle24 = document.createElement("div")
innerCircle25 = document.createElement("div")


Object.assign(innerCircle24.style,innerCircle_style)
Object.assign(innerCircle25.style,innerCircle_style)

DeathSpawnBtn.appendChild(innerCircle24)
noLaserBtn.appendChild(innerCircle25)


slider2= document.createElement("input")

slider2.type = "range"


slider2.step = 100

slider2.min = 0
slider2.max = 10000
slider2.style.position = "absolute"
slider2.style.marginLeft = "43%"
slider2.style.bottom  = "48.3%"


Object.assign(slider2.style,{position: 'absolute',
marginLeft: '52%',
background: 'rgb(0 ,0 ,0 ,0.47)',
opacity: '0.8',
width: '110px',
content: 'none',
appearance: 'none',
outline: 'rgb(167 25 45) solid 2px',
borderRadius: 'calc(100px)'})



slider3= document.createElement("input")

slider3.type = "range"


slider3.step = 10

slider3.min = 0
slider3.max = 500
slider3.style.position = "absolute"
slider3.style.marginLeft = "43%"
slider3.style.bottom = "39%"


Object.assign(slider3.style,{position: 'absolute',
marginLeft: '52%',
background: 'rgb(0 ,0 ,0 ,0.47)',
opacity: '0.8',
width: '110px',
content: 'none',
appearance: 'none',
outline: 'rgb(96 175 221) solid 2px',
borderRadius: 'calc(100px)'})



slider4= document.createElement("input")

slider4.type = "range"


slider4.step = 1

slider4.min = 0
slider4.max = 150
slider4.style.position = "absolute"
slider4.style.marginLeft = "30%"
slider4.style.bottom = "30%"


Object.assign(slider4.style,{position: 'absolute',
marginLeft: '52%',
background: 'rgb(0 ,0 ,0 ,0.47)',
opacity: '0.8',
width: '110px',
content: 'none',
appearance: 'none',
outline: 'rgb(211 198 38) solid 2px',
borderRadius: 'calc(100px)'})





//text


accText = document.createElement("span")
setInterval(function(){
try {
accText.innerText = `Accel [${slider2.value}]:`    
} catch (error) {
    
}
},100)

Object.assign(accText.style,{fontSize: '15px',
position: 'absolute',
padding: '64.8% 0px 0px 26px',
bottom: '48.3%'})




tpText = document.createElement("span")
setInterval(function(){
try {
tpText.innerText = `Teleport [${slider3.value}]:`    
TPspeed = slider3.value
} catch (error) {
    
}
},100)


Object.assign(tpText.style,{fontSize: '15px',
position: 'absolute',
padding: '64.8% 0px 0px 26px',
bottom: '39%'})


clickText = document.createElement("span")
setInterval(function(){
try {
clickText.innerText = `Clicker [${slider4.value}]:`    
} catch (error) {
    
}
},100)


Object.assign(clickText.style,{fontSize: '15px',
position: 'absolute',
padding: '64.8% 0px 0px 26px',
bottom: '30%'})



slider.style.bottom = "21%"
speedText.style.bottom = "21.3%"

dsc = 0
nlc = 0
DeathSpawnBtn.addEventListener("click",function(){
dsc +=1


if(dsc%2==1){
DeathSpawnBtn.style.backgroundColor="rgb(109 24 137)"
DeathSpawnBtn.children[0].style.right = "10%"
DeathSpawnBtn.children[0].style.backgroundColor = "black"   
dsr = setInterval(function(){
try {

game.getTankPhysics().onSpawn_0 = function(t){}


    
} catch (error) {
    
}



    
},1000)
}

if(dsc%2==0){
DeathSpawnBtn.style.backgroundColor="#8080803b"
DeathSpawnBtn.children[0].style.right = "63%"
DeathSpawnBtn.children[0].style.backgroundColor = "white"   
try {
clearInterval(dsr)
game.getTankPhysics().onSpawn_0 = function(t){var e=this.body.state;e.position.init_ry1qwf$(t.position),e.orientation.fromEulerAngles_ry1qwf$(t.rotation),e.velocity.init_y2kzbl$(),e.angularVelocity.init_y2kzbl$();var n=this.body;n.saveState(),n.calcDerivedData(),this.interpolatePhysicsState_mx4ult$(0)}
} catch (error) {
 
}
}


    
})







noLaserBtn.addEventListener("click",function(){
nlc +=1


if(nlc%2==1){
noLaserBtn.style.backgroundColor="rgb(109 24 137)"
noLaserBtn.children[0].style.right = "10%"
noLaserBtn.children[0].style.backgroundColor = "black"   
nlr = setInterval(hacks.noLaser,20)
}

if(nlc%2==0){
noLaserBtn.style.backgroundColor="#8080803b"
noLaserBtn.children[0].style.right = "63%"
noLaserBtn.children[0].style.backgroundColor = "white"   
try {
clearInterval(nlr)

} catch (error) {
 
}
}


    
})





draggable(hackWindow)
