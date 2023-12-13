export const solutions: ((data: string) => void)[] = [
  // DAY 1
  (data: string) => {
    console.log("Day 1");
    const result = data
      .split("\n")
      .map((x: string) => {
        const arr = x
          .split("")
          .map((y) => parseInt(y))
          .filter((y) => !isNaN(y));
        return arr[0] * 10 + arr[arr.length - 1];
      })
      .reduce((a, b) => a + b, 0);
    console.log(result);
  },
  // DAY 2
  (data: string) => {
    type GameSet = {
      red: number;
      green: number;
      blue: number;
    };
    console.log("Day 2");
    const formData: GameSet[][] = data.split("\n").map((x) =>
      x
        .slice(8)
        .split(";")
        .map((y) => {
          let set: GameSet = { blue: 0, red: 0, green: 0 };
          const sep = y.split(",").map((y) => y.trim().split(" "));
          sep.forEach((element: string[]) => {
            const value = parseInt(element[0]);
            switch (element[1]) {
              case "green":
                set.green = value;
                break;
              case "blue":
                set.blue = value;
                break;
              case "red":
                set.red = value;
                break;
            }
          });
          return set;
        })
    );
    const elements = formData.map(
      (x) =>
        !new Set(
          x.map((y) =>
            y.red <= 12 && y.green <= 13 && y.blue <= 14 ? true : false
          )
        ).has(false)
    );
    let res = 0;
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element) {
        res += i + 1;
      }
    }
    console.log(res);
  },
  // DAY 3
  (data: string) => {
    console.log(data);
  },
];
