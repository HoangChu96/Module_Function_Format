export const coin = (s) => {
    var s2 = ("" + s).replace(/\D/g, '');
    if (s2.length <= 4) {
        var m4 = s2.match(/^(\d{1})(\d{3})$/);
        return (!m4) ? null : m4[1] + "," + m4[2];
    }
    else if (s2.length <= 5) {
        var m5 = s2.match(/^(\d{2})(\d{3})$/);
        return (!m5) ? null : m5[1] + "," + m5[2];
    }
    if (s2.length <= 6) {
        var m6 = s2.match(/^(\d{3})(\d{3})$/);
        return (!m6) ? null : m6[1] + "," + m6[2];
    }
    if (s2.length <= 7) {
        var m7 = s2.match(/^(\d{1})(\d{3})(\d{3})$/);
        return (!m7) ? null : m7[1] + "," + m7[2] + "," + m7[3];
    }
    else {
        var m8 = s2.match(/^(\d{2})(\d{3})(\d{3})$/);
        return (!m8) ? null : m8[1] + "," + m8[2] + "," + m8[3];
    }
}

export const phoneNumber = (s) => {
    var s2 = ("" + s).replace(/\D/g, '');
    if (s2.length <= 10) {
        var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
        return (!m) ? null : m[1] + " " + m[2] + " " + m[3];
    }
    else {
        var n = s2.match(/^(\d{4})(\d{3})(\d{4})$/);
        return (!n) ? null : n[1] + " " + n[2] + " " + n[3];
    }
}

// tìm và thay thế 1 string
export const findAndReplace = (string, target, replacement) => {
    var i = 0, length = string.length;
    for (i; i < length; i++) {
        string = string.replace(target, replacement);
    }
    return string;
}

// change color intensity
const shadeBlend = (p, c0, c1) => {
    var n = p < 0 ? p * -1 : p, u = Math.round, w = parseInt;
    if (c0.length > 7) {
        var f = c0.split(","), t = (c1 ? c1 : p < 0 ? "rgb(0,0,0)" : "rgb(255,255,255)").split(","), R = w(f[0].slice(4)), G = w(f[1]), B = w(f[2]);
        return "rgb(" + (u((w(t[0].slice(4)) - R) * n) + R) + "," + (u((w(t[1]) - G) * n) + G) + "," + (u((w(t[2]) - B) * n) + B) + ")"
    } else {
        var f = w(c0.slice(1), 16), t = w((c1 ? c1 : p < 0 ? "#000000" : "#FFFFFF").slice(1), 16), R1 = f >> 16, G1 = f >> 8 & 0x00FF, B1 = f & 0x0000FF;
        return "#" + (0x1000000 + (u(((t >> 16) - R1) * n) + R1) * 0x10000 + (u(((t >> 8 & 0x00FF) - G1) * n) + G1) * 0x100 + (u(((t & 0x0000FF) - B1) * n) + B1)).toString(16).slice(1)
    }
}

export const lighten = (color, per) => {
    return shadeBlend(per, color, '#ffffff');
}

export const darken = (color, per) => {
    return shadeBlend(per, color, '#000000');
}
