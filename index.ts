import { from } from 'rxjs'
import { map } from 'rxjs/operators';

interface ServerFruit {
  name: string,
  icon: string,
  isFresh: boolean
}
interface Fruit {
    name: string;
}

const serverFruit1: ServerFruit = {
   name: 'apple',
   icon: '🍎',
   isFresh: true
}

// Transform the given source `fruitSource$` to match the data structure of the `Fruit` interface.
const fruitSource$ = from([serverFruit1]);
const fruitResult$ = fruitSource$.pipe(
  map(({icon, name}) => { 
    const fruit: Fruit = {
      name: `(${icon}) ${name}`
    };
    return fruit;
  })
);
fruitResult$.subscribe({
    next(fruit) {console.log('Transformed fruit', fruit)}
});

