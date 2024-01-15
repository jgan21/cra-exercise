/** Takes an array of items and return randomly selected item. */

function choice(items){
  const randomIdx = Math.floor(Math.random() * items.length);
  return items[randomIdx];
}

/** Return first item that matches given item,
 * else, return undefined */

function remove(items, item){
  for (let i = 0; i < items.length; i++){
    if (items[i] === item){
      items.splice(i,1);
      return items;
    }
  }
}

export { choice, remove };