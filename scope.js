var a = "phillip",
    b = 38,
    obj1 =  {
              value: 'test'
            },
    obj2 =  {
              value: 'probe'
            },
    obj3 =  obj2

function change (a, b, obj1, obj2, obj3) {
  a = "Jones";
  b = 40;
  obj1 = obj2;
  obj2 = { value: "new" };
};

change(a, b, obj1, obj2, obj3)

console.log(a);
console.log(b);
console.log(obj1);
console.log(obj2);
console.log(obj3);
