// game file

// loads assets on seperate thread
async function appEntry(canvas, localStorage) {
    // driver, instance, scene
    // driving is wrapping everything.
    // instance is the world of the game. Objects and interaction.
    // scene the current "level" loaded in the game.
    new whm.Driver(new whm.Instance(new TestScene()), canvas, localStorage).start();
}

function TestScene(){
        this.start = function() {
        buildMap(this.instance, 10, 10);
        this.instance.addObject(controls(this.instance));
    }
}
TestScene.prototype = new whm.Scene;

// create tile object
Tile = function(name) {
    // string name of terrain
    this.name = name;
    // hexcode color
    this.color = null;
}

// create specialized keys to track coordinates of tiles
Key = function(x,y) {
    this.x = x;
    this.y = y;
}

function buildMap(instance,w,h){
        // create grid of a given size
        let width = w;
        let height = h;
        // initalize tile
        let tile = new Tile;
        // object array with keys to track what tile is what
        let tileSet = [];
        // track number of runs to manipulate tile placement.
        let counter = 0;
        while (counter < 4) {

            for (let i = 0; i <= width; i++) {
                for (let j = 0; j <= height; j++){
                    // CONVERT TERRAIN NAMES TO NUMBER IDS
                    pickTile(tile);
                    // generate objects and add a renderer to them
                    let o = new whm.GameObject(tile.name);
                    o.renderer = new whm.RectangleRenderer(1,1,whm.Color.fromHexString(tile.color));
                    if (counter == 0) {
                        o.transform.position = new whm.Vector2(i,j);
                        tileSet.push([new Key(i,j),new Tile(tile.name)]);
                    }
                    if (counter == 1) {
                        o.transform.position = new whm.Vector2(-i,j);
                        tileSet.push([new Key(-i,j),new Tile(tile.name)]);
                    }
                    if (counter == 2) {
                        o.transform.position = new whm.Vector2(i,-j);
                        tileSet.push([new Key(i,-j),new Tile(tile.name)]);
                    }
                    if (counter == 3) {
                        o.transform.position = new whm.Vector2(-i,-j);
                        tileSet.push([new Key(-i,-j),new Tile(tile.name)]);
                    }
                    instance.addObject(o);
                }
            }
            counter++;
        }
        console.log(tileSet)
}

function pickTile(tile){
    // run a random var
    r = Math.floor(Math.random() * 10);
    // pick a random tile
    if (r == 0) {
        tile.name = "Mountain";
        tile.color = "#995500";
    }
    if (r == 1) {
        tile.name = "Water";
        tile.color = "#0000FF";
    }
    if (r == 2) {
        tile.name = "Grass";
        tile.color = "#00FF00";
    }
    if (r == 3) {
        tile.name = "Desert";
        tile.color = "#FFFF00";
    }
    if (r == 4) {
        tile.name = "Dungeon";
        tile.color = "#666666";
    }
    return tile;
}



// this function controls user input and moves the character.
function controls(instance){
    let player = new whm.GameObject();
    player.renderer = new whm.RectangleRenderer(1,1,whm.Color.WHITE);
    instance.addObject(player);
    // create an object
    let o = new whm.GameObject("controller");
    // assign a camera to the object to track it
    let camera = new whm.Camera();
    camera.aspect = 9/16;
    camera.orthographicSize = 20;
    camera.backgroundColor = whm.Color.BLACK;
    // add camera to object
    o.addComponent(camera);
    // create a script
    let s = new whm.Script();
    // update that script when user hits a key
    s.update = function(){
        movePlayer(player);
    }
    o.addComponent(s);
    return o;
}

function movePlayer(player) {
    let x = player.transform.position.x;
    let y = player.transform.position.y;
    // left
    if (whm.Input.getKeyDown("A") || whm.Input.getKeyDown(37)){
        player.transform.position = new whm.Vector2(x-1,y);
    }
    // down
    if (whm.Input.getKeyDown("S") || whm.Input.getKeyDown(38)){
        player.transform.position = new whm.Vector2(x,y+1);
    }
    // right
    if (whm.Input.getKeyDown("D") || whm.Input.getKeyDown(39)){
        player.transform.position = new whm.Vector2(x+1,y);
    }
    // up
    if (whm.Input.getKeyDown("W") || whm.Input.getKeyDown(40)){
        player.transform.position = new whm.Vector2(x,y-1);
    }
}

