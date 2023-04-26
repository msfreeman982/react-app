const { readFileSync } = require("fs");
const { createHash } = require("crypto");
const { SVGTransform } = require("svg2vectordraw");

module.exports = {
    process(src, filename) {
        const id = createHash("md5").update(filename).digest("hex");
        const svgTransform = new SVGTransform({
            input: filename,
            id: id,
        });
        const svgOutput = svgTransform.run().output;
        return `module.exports = ${JSON.stringify(svgOutput)};`;
    },
};