import LinkedList from "./linkedList.mjs";

const link = new LinkedList();
link.append(3);
console.log(link.toString());
link.append(7);
console.log(link.toString());
link.append(9);
console.log(link.toString());
link.prepend(8);
link.prepend(15);
console.log(link.toString());
console.log(link.size()); // 5
console.log(link.get_head()); // 15
console.log(link.get_tail()); // 9
console.log(link.contains(15)); // true
console.log("Finding 7")
console.log(link.contains(7)); // true
console.log(link.find(9)); // true
link.insertAt(25, 2);
console.log(link.toString());
link.removeAt(2);
console.log(link.toString());