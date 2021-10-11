let fs = require('fs')
let fabric = require('fabric').fabric


class CharacterGenertor {

    constructor(backgroundColor, shirtColor, skinColor, laptopColor, tableColor) {
        this.layers = []
        this.createBase(backgroundColor, shirtColor, skinColor, laptopColor, tableColor)
    }

    generate(filename) {
        let out = fs.createWriteStream(__dirname + '/' + filename);
        let canvas = new fabric.StaticCanvas(null, { width: 800, height: 800 });
        canvas.add(...this.layers);
        canvas.renderAll();

        let stream = canvas.createPNGStream();
        stream.on('data', function(chunk) {
            out.write(chunk);
        });
    }

    createBase(backgroundColor="#fff", shirtColor="#8094DB", skinColor="#DBB180", laptopColor="#C4C4C4", tableColor="#A66E2C") {

        let background = new fabric.Rect({ x: 0, y: 0, width: 800, height: 800, fill: backgroundColor })

        // Shirt
        let rightSleeve = new fabric.Rect({left: 690, top: 450.74, width: 80, height: 160, rx: 20, ry: 20, fill: shirtColor })
        let leftSleeve = new fabric.Rect({left: 30, top: 450.74, width: 80, height: 160, rx: 20, ry: 20, fill: shirtColor })

        // Skin
        let head = new fabric.Rect({left: 212, top: 151.74, width: 355, height: 274, rx: 100, ry: 100, fill: skinColor })
        let rightHand = new fabric.Rect({left: 690, top: 590.74, width: 80, height: 86, rx: 20, ry: 20, fill: skinColor })
        let leftHand = new fabric.Rect({left: 30, top: 590.74, width: 80, height: 86, rx: 20, ry: 20, fill: skinColor })

        // Eyes
        let whiteEyeLeft = new fabric.Ellipse({left: 318, top: 318.24, rx: 43, ry: 59.5, fill: 'white',  originX: 'center', originY: 'center' })
        let whiteEyeRight = new fabric.Ellipse({left: 457, top: 318.24, rx: 43, ry: 59.5, fill: 'white', originX: 'center', originY: 'center' })
        let pupilLeft = new fabric.Circle({left: 335, top: 330.74, radius: 17, fill: 'black', originX: 'center', originY: 'center' })
        let pupilRight = new fabric.Circle({left: 470, top: 330.74, radius: 17, fill: 'black', originX: 'center', originY: 'center' })

        // Laptop
        let lTop = new fabric.Rect({left: 110, top: 363.74, width: 580, height: 334, rx: 20, ry: 20, fill: laptopColor })
        let lBottom = new fabric.Rect({left: 110, top: 701.74, width: 580, height: 18, rx: 9, ry: 9, fill: laptopColor})
        let lJoint = new fabric.Rect({left: 164, top: 696.74, width: 473, height: 6, rx: 3, ry: 3, fill: 'black' })

        // Table
        let table = new fabric.Rect({left: 30, top: 719.74, width: 740, height: 80, rx: 20, ry: 20, fill: tableColor })

        this.layers.push(background, leftSleeve, rightSleeve, head, rightHand, leftHand, whiteEyeLeft, whiteEyeRight, pupilLeft, pupilRight, lTop, lBottom, lJoint, table)
    }

    addGlasses(color="black") {
        // Glasses
        let g1 = new fabric.Rect({left: 265, top: 280.74, width: 98, height: 70, rx: 16, ry: 16, stroke: color , strokeWidth: 8, fill: 'rgba(0,0,0,0)'})
        let g2 = new fabric.Rect({left: 405, top: 280.74, width: 98, height: 70, rx: 16, ry: 16, stroke: color, strokeWidth: 8, fill: 'rgba(0,0,0,0)'})
        let g3 = new fabric.Line([370, 314.74, 410, 314.74], { stroke: color, strokeWidth: 8 })
        let g4 = new fabric.Line([270, 314.74, 212, 314.74], { stroke: color, strokeWidth: 8 })
        let g5 = new fabric.Line([567, 314.74, 503, 314.74], { stroke: color, strokeWidth: 8 })

        this.layers.push(g1, g2, g3, g4, g5)
    }

    addHair(color="#DB9C4A") {
        // Hair
        let hair = new fabric.Path("M240.5 246.74L214.5 220.74C224.9 175.54 273.833 155.907 297 151.74H455.5C514.7 139.74 552.167 192.74 563.5 220.74L518 246.74L501 205.74L475 246.74L436 220.74L401 246.74L351 205.74L297 231.74L273 205.74L240.5 246.74Z", {
            fill: color
        })
        this.layers.push(hair)
    }

    addLaptopLogo(color="white") {
        // Logo
        let l1 = new fabric.Rect({left: 356, top: 487, width: 41, height: 41, rx: 6, ry: 6, fill: color })
        let l2 = new fabric.Rect({left: 356, top: 533, width: 41, height: 41, rx: 6, ry: 6, fill: color })
        let l3 = new fabric.Rect({left: 402, top: 487, width: 41, height: 41, rx: 6, ry: 6, fill: color })
        let l4 = new fabric.Rect({left: 402, top: 533, width: 41, height: 41, rx: 6, ry: 6, fill: color })

        this.layers.push(l1,l2,l3,l4)
    }

    addHeadphones(color="black") {
        let h1 = new fabric.Path("M226 243C238.128 209.747 288.579 143.598 393.363 145.023", {
            stroke: color,
            strokeWidth: 15
        })
        let h2 = new fabric.Path("M556 243C543.872 209.747 493.421 143.598 388.637 145.023", {
            stroke: color,
            strokeWidth: 15
        })
        let h3 = new fabric.Rect({left: 574, top: 248, width: 24, height: 73, rx: 12, ry: 12, fill: color})
        let h4 = new fabric.Rect({left: 180, top: 248, width: 24, height: 73, rx: 12, ry: 12, fill: color})
        let h5 = new fabric.Rect({left: 529, top: 217, width: 40, height: 131, rx: 20, ry: 20, fill: color})
        let h6 = new fabric.Rect({left: 209, top: 217, width: 40, height: 131, rx: 20, ry: 20, fill: color})

        this.layers.push(h1, h2, h3, h4, h5, h6)
    }
}

// Create the base character
let character = new CharacterGenertor(
    backgroundColor="#fff", 
    shirtColor="#8094DB", 
    skinColor="#DBB180", 
    laptopColor="#C4C4C4", 
    tableColor="#A66E2C"
)
// Generate Image
character.generate("baseCharacter.png")
character.addHair("#FFD700")
character.addLaptopLogo()
character.addGlasses()
character.addHeadphones()
character.generate("fullCharacter.png")

