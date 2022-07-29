import { onMounted } from "vue";
type Options = {
  el: string;
};
export default function (
  options: Options
): Promise<{ baseUrl: string } | Error> {
  return new Promise((resolve, reject) => {
    onMounted(() => {
      try {
        const img: HTMLImageElement = document.querySelector(
          options.el
        ) as HTMLImageElement;
        console.log("img>>>>", img);
        img.onload = () => {
          resolve({
            baseUrl: convertBase64(img),
          });
        };
      } catch (error) {
        reject(error);
      }
    });
    const convertBase64 = (el: HTMLImageElement) => {
      const bucket = document.createElement("canvas");
      const ctx = bucket.getContext("2d");
      bucket.width = el.width;
      bucket.height = el.height;
      ctx?.drawImage(el, 0, 0, bucket.width, bucket.height);
      return bucket.toDataURL("image/png"); // export BASE64 data
    };
  });
}
