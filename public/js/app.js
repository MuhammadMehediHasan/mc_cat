function renderMCColor(text = "") {
    let final = "";
    let sign = [
        {i: "4", color: "#AA0000", tag: "span"},
        {i: "c", color: "#FF5555", tag: "span"},
        {i: "6", color: "#FFAA00", tag: "span"},
        {i: "e", color: "#FFFF55", tag: "span"},
        {i: "a", color: "#39ad39", tag: "span"},
        {i: "b", color: "#55FFFF", tag: "span"},

        {i: "3", color: "#00AAAA", tag: "span"},
        {i: "1", color: "#0000AA", tag: "span"},
        {i: "9", color: "#5555FF", tag: "span"},
        {i: "d", color: "#AA00AA", tag: "span"},
        {i: "5", color: "#AA00AA", tag: "span"},
        {i: "f", color: "#FFFFFF", tag: "span"},
        {i: "7", color: "#AAAAAA", tag: "span"},
        {i: "8", color: "#555555", tag: "span"},
        {i: "0", color: "#000000", tag: "span"},

        {i: "l", color: "#000000", tag: "b"},
        {i: "r", color: "#000000", tag: "normal"},
        {i: "m", color: "#000000", tag: "strike"},
        {i: "n", color: "#000000", tag: "u"},
        {i: "o", color: "#000000", tag: "i"},
        {i: "0", color: "#000000", tag: "span"},
    ]

    for (let s of sign) {
        let tag = [`<${s.tag} style="color:${s.color ? s.color : "black"}">`, `<${s.tag}>`]
        let r = new RegExp("§" + s.i, "gi");
        text = text.replace(r, tag[0]) + tag[1];    
    }

    return text;
}


let text = "§aHypixel Network §c[1.8-1.16] §6§lSKYBLOCK 0.11 §7- §5§lDWARVEN MINES";
let dummy = "§4 Red §4 red";


console.log(renderMCColor(dummy));