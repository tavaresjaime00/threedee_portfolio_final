import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(
  scene,
  glbPath,
  options = { recieveShadow: true, castShadow: true }
) {
  const { recieveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(glbPath, gltf => {
      var obj = gltf.scene;
      obj.name = "donut";
      obj.position.y = 0;
      obj.position.x = 0;
      obj.receiveShadow = recieveShadow;
      obj.castShadow = castShadow;
      scene.add(obj);

      obj.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = castShadow;
          child.receiveShadow = recieveShadow;
        }
      });
      resolve(obj);
    }),
      undefined,
      function (error) {
        console.log(error);
        reject(error);
      };
  });
}
