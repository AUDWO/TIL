// 애초에 undefined인 property에 접근하는 것을 방지해

function printCatName(user) {
  console.log(user.cat && user.cat.name);
}
// 업그레이드 

function printCatName(user) {
  console.log(user.cat?.name);
}

//서로 같

function printCatName(user) {
  console.log((user.cat === null || user.cat === undefined) ? undefined : user.cat.name);
}