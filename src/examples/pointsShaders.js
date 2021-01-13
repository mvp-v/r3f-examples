export const vertexShader = `
attribute float alpha;
attribute float size;
attribute vec3 customColor;
varying vec3 vColor;
varying float vAlpha;
void main() {
    vColor = customColor;
    vAlpha = alpha;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = size;
    gl_Position = projectionMatrix * mvPosition;
}
`;

export const fragmentShader = `
uniform sampler2D pointTexture;
varying float vAlpha;
varying vec3 vColor;
void main() {
    gl_FragColor = vec4(vColor, vAlpha) * texture2D(pointTexture, gl_PointCoord);
}
`;

// https://stackoverflow.com/questions/17537879/in-webgl-what-are-the-differences-between-an-attribute-a-uniform-and-a-varying/17557438#17557438
