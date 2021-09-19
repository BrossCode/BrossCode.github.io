var Constants = { EMPTY: "_", PLAYER: "P"}
var GameObjects = {WALL: "W", STAIRS: "S", EMPTY: "_", TRAP: "T"}
var player = {x: 0, y: 0, hp: 50, atk: 0}
var enemy = {x: 0, y:0, hp:0, atk: 0}
var game = {w: 5, h:6, walls: 4, stairs: 1, traps: 2}
var dungeon = []
var floorCounter = 0;
var trapDamage = 0;
var lost = false;
var timeLimit = 5;
var timePassed = 0;

function hello() { 
    // need on off switch
    var toggled = false;

    // switch the status of the button
    document.getElementById("timer").onclick = function toggle() {
        document.getElementById("timer").innerHTML = "Game In Progress.";
        lost = false;
        makeDungeon(game.w, game.h)
        render(dungeon)
        document.onkeydown = function() {

            if (lost == false && toggled == true) {
                if (event.keyCode == '40') {
                    move(0, 1)
                    // down arrow
                }
                else if (event.keyCode == '38') {
                    move(0, -1)
                    // up arrow
                }
                else if (event.keyCode == '37') {
                    move(-1, 0)
                // left arrow
                }
                else if (event.keyCode == '39') {
                    move(1, 0)
                // right arrow
                }
            }
        }
        if (toggled == false) {
            toggled = true;

            timer = setInterval(function(){
            timeLimit = 5 - (timePassed*0.5);
            timePassed = timePassed + 1;
            console.log(timeLimit + " Seconds Remaining.");
                

            // failstate
                if (timeLimit < 0.1) {
                    clearInterval(timer);
                    console.log("You Lose");
                    lost = true;
                    timeLimit = 5;
                    timePassed = 0;
                    floorCounter = 0;
                    toggled = false;
                    document.getElementById("timer").innerHTML = "Restart";
                    return lost;
                }

            }, 500);
            }
        }
}

function makeDungeon(x, y){
    dungeon = [];
    for(let i = 0; i < x; i++){
        let row = []
        for(let j = 0; j < y; j++){
            row[j] = {obj: GameObjects.EMPTY}
        }
        dungeon.push(row)
    }
    makeWalls(game.walls)
    makeTraps(game.traps)
    makeStairs(game.stairs)
    document.getElementById("counter").innerHTML = floorCounter;
}

function makeWalls(n){
    let wallsLeft = n
    while(wallsLeft > 0){
        let y = Math.floor(Math.random() * dungeon[0].length)
        let x = Math.floor(Math.random() * dungeon.length)
        if(dungeon[x][y].obj == GameObjects.EMPTY && !(player.x == x && player.y == y)){
            wallsLeft -= 1
            dungeon[x][y].obj = GameObjects.WALL
        }
    }
}

function makeTraps(n){
    let needTraps = 0;
    while (needTraps < n) {
        let y = Math.floor(Math.random() * dungeon[0].length)
        let x = Math.floor(Math.random() * dungeon.length)
        if(dungeon[x][y].obj == GameObjects.EMPTY && !(player.x == x && player.y == y)){
            needTraps += 1;
            dungeon[x][y].obj = GameObjects.TRAP;
        }
    }
}

function makeStairs(n) {
    let needstairs = 0;
    while (needstairs < n) {
        let y = Math.floor(Math.random() * dungeon[0].length)
        let x = Math.floor(Math.random() * dungeon.length)
        if(dungeon[x][y].obj == GameObjects.EMPTY && !(player.x == x && player.y == y)){
            needstairs += 1;
            dungeon[x][y].obj = GameObjects.STAIRS
        }
    }
}

function move(dx, dy){
    let newx = player.x + dx
    let newy = player.y + dy
    if(newx < 0) newx = 0
    if(newy < 0) newy = 0
    if(newx > dungeon.length-1) newx = dungeon.length-1
    if(newy > dungeon[0].length-1) newy = dungeon[0].length-1
    if(dungeon[newx][newy].obj == GameObjects.EMPTY){
        player.x = newx
        player.y = newy
        render(dungeon)
    }
    else if(dungeon[newx][newy].obj == GameObjects.STAIRS){
        player.x = newx;
        player.y = newy;
        timePassed = 0;
        floorCounter += 1;
        makeDungeon(game.w, game.h)
        render(dungeon)
    }
    else if(dungeon[newx][newy].obj == GameObjects.TRAP){
        player.x = newx;
        player.y = newy;
        trapDamage = Math.random() * 10;
        trapDamageDealt(trapDamage);
        render(dungeon);
    }

}

function getDungeonString() {
    let s = ""
    for(let i = 0 ; i < dungeon[0].length; i++){
        for(let j = 0; j < dungeon.length; j++){
            if(player.y == i && player.x == j) s += Constants.PLAYER
            else s += dungeon[j][i].obj
            s += " "
        }
        s += "<br>"
    }
    return s
}

function render(dungeon){
    document.getElementById("output").innerHTML = getDungeonString(dungeon);
}

function trapDamageDealt(n) {
    let damage = n;
    player.hp = player.hp -= damage;
    return player.hp;
}

// REEEEE