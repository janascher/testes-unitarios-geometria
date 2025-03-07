function areaQuadrado(lado) {
    return lado * lado;
}

function areaParalelogramo(base, lado) {
    if (base < 0 || lado < 0) return NaN;
    return base * lado;
}

function areaTriangulo(base, altura) {
    if (base < 0 || altura < 0) return NaN;
    return (base * altura)/2;
}

module.exports = {
    areaQuadrado,
    areaParalelogramo,
    areaTriangulo
}