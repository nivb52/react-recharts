const data = []
let d = new Date();
for (let num = 30; num >= 0; num--){
    d.setHours(-24 * num);
    data.push({
      date: d.toISOString().substring(0, 10),
      value: 1 + (Math.random() > 0.7 ? Math.random() - 0.5 : Math.random()),
    });
}
export default data;