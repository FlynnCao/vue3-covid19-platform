import { ref } from "vue";
const msg = ref<string>("TypeScript");
const showMsg = ref<boolean>(true);
const showFooter = ref<boolean>(true);
type Dish = {
  name: string;
  price?: number;
};
const foodList: Dish[] = [
  {
    name: "Tofu",
    price: 12.3,
  },
  {
    name: "Beef",
    price: 32.4,
  },
];

type Props = {
  title: string;
};
const scoreList: number[] = [80, 35, 91, 22, 75];
const switchDisplay = () => {
  showMsg.value = !showMsg.value;
};
const handleClickItem = (index: number) => {
  console.log("index :>> ", index);
};
const handleEmitData = (ctx: any) => {
  ctx.emit("onChange", 100);
};
const renderAPPDOM = (props: Props, ctx: any) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div v-show={showMsg.value}>Hello {msg.value}</div>
      <button onClick={handleEmitData.bind(this, ctx)}>Emit Data</button>
      <button onClick={switchDisplay.bind(this)}>Switch Show Message</button>
      {/* v-for */}
      {foodList.map((item, index) => (
        <div onClick={handleClickItem.bind(this, index)} data-index={index}>
          {index}-{item.name}-{item.price ? item.price : ""}
        </div>
      ))}
      <small>{showFooter.value ? "@copyright FlynnChao" : ""}</small>
    </div>
  );
};

export default renderAPPDOM;
