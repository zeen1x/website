import React from 'react';

function TreeGenerator() {
    var tree = new Tree(4,3);

    return (
        <>
            {tree.display()}
        </>
    );
};

function Tree(triangleHeight, repetitiveness) {
    this.size = triangleHeight * repetitiveness;
    this.triangleHeight = triangleHeight;
    this.display = function () {
        var topOut = this.top(this.size, this.triangleHeight);
        var trunkOut = this.trunk(this.size);
        var treeOut = topOut.concat(trunkOut);

        let rows = [];

        for (const [index, value] of treeOut.entries()) {
            rows.push(<li key={index}>{value}</li>)
        }

        return rows;
    };
    this.top = function (size, triangleHeight) {
        let output = [];
        for (var i = 0; i < size; i++) {
            var line = new Line();
            var mod = i + (i % triangleHeight);
    
            line.add(" ", size * 2 - mod);
            line.add("*", (mod * 2) + 1);
            output.push(line.output);
        }
        return output;
    };
    this.trunk = function (size) {
        let output = [];
        for (var i = 0; i < size / 4; i++) {
            var line = new Line();
            var mod = 2*(Math.round(size / 4)) +1;
    
            line.add(" ", size * 2 - mod / 2);
            line.add("*", mod);
            output.push(line.output);
        }
        return output;
    }
}

function Line() {
    this.output = "";
    this.add = function (token, amount) {
        for (var i = 0; i < amount; i++) {
            this.output += token;
        }
    }
};

export default TreeGenerator;