function count(param) {
  if (
    param.length == 0 ||
    (typeof param == "object" &&
      param.includes(""))
  )
    return 0;
  return param;
}
console.log(count([""]));
// export { count };

// console.log(
//   typeof {} == "object",
//   typeof "" == "string"
// );
