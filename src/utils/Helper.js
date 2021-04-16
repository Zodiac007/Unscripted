const requestImageFile = require.context(
  "../../public/images",
  true,
  /.(png|jpg)$/
);

export const getImgSrc = (id) => {
  const allowedExtension = ["png", "jpg"];
  let detectedExtension = null;
  const checkIfExist = (id) => {
    let isFound = false;
    if (id) {
      allowedExtension.forEach((e) => {
        if (requestImageFile.keys().includes(`./${id}.${e}`)) {
          detectedExtension = e;
          isFound = true;
        }
      });
    }
    return isFound;
  };
  const isRequestedImgExists = checkIfExist(id);
  return isRequestedImgExists
    ? requestImageFile(`./${id}.${detectedExtension}`)
    : requestImageFile(`./1.png`);
};
