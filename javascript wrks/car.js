var beleno={
    name:"beleno",
    model:"hatchback",
    manufacture:"maruthi",
    price:"10lac"
}

console.log(beleno.manufacture);
if ("model" in beleno) {
    console.log(beleno.model);
}

beleno.varient=["manuel"]
console.log(beleno);
beleno.varient.push("automatic")
console.log(beleno.varient);
beleno.color=["red"]
console.log(beleno.color);
beleno.color.push("blue")
console.log(beleno.color);