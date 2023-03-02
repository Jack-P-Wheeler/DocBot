const fs = require('fs')

console.log("Parsing text file...")

const parseTextFile = (fileName) => {
    const data = fs.readFileSync(fileName, {encoding:'utf8', flag:'r'})
    const lines = data.toString().split("\n")
    return lines.map((line) => line.replace(new RegExp("\t+"), "").replace(new RegExp("\r+"), "").trim()).filter((line) => line.length)
}

const getAllFunctions = (lines) => {
    let arrOfFunctions = []
    let currentFunction = []
    let bracketCount = 0
    let inFunctionFlag = false
    lines.forEach(line => {
        if (line.indexOf("function") === 0){
            inFunctionFlag = true
        }

        if (inFunctionFlag) {
            bracketCount = bracketCount + (line.split("{").length - 1) - (line.split("}").length - 1)
            currentFunction.push(line)
            if (bracketCount === 0) {
                inFunctionFlag = false
                arrOfFunctions.push(currentFunction.join("\n"))
                currentFunction = []
            }
        }
    });
    return arrOfFunctions
}

console.log(getAllFunctions(parseTextFile("functions.php")))

console.log("Done.")