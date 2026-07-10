// import { useEffect } from 'react';

// const TriangleBG = (props) => {
//   useEffect(() => {
//     if (props.canvas.tagName !== "CANVAS") {
//       console.log("Warning: triangles.js requires a canvas element!");
//       return;
//     }

//     const canvas = props.canvas;
//     const ctx = canvas.getContext("2d");

//     const triangle = new TriangleBG({
//       canvas: canvas,
//       alternateElem: altBG,
//       cellHeight: 60,
//       cellWidth: 80,    
//       mouseLight: true,
//       mouseLightRadius: 500,
//       mouseLightIncrement: 6,
//       resizeAdjustment: true,
//       variance: 1.1,
//       pattern: "x*y",
//       baseColor1: {
//         baseHue: 201,
//         baseSaturation: 80,
//         baseLightness: 26,
//       },
//       baseColor2: {
//         baseHue: 201,
//         baseSaturation: 80,
//         baseLightness: 26.5,
//       },
//       colorDelta: {
//         hue: 0.2,
//         lightness: 0.15,
//         saturation: 0,
//       },
//     });

//     return () => {
//       triangle.delete();
//     };
//   }, [props.canvas]);

//   return null;
// };

// export default TriangleBG;
