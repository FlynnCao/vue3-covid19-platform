type SuperHero = {
  name: string;
  nickname: string;
  age: number;
};

export const axios = (url: string): Promise<SuperHero[]> => {
  return new Promise((resolve) => {
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // request done and successfully received data
        setTimeout(() => {
          resolve(JSON.parse(xhr.responseText));
        }, 2000);
      }
    };
    xhr.send(null);
  });
};
