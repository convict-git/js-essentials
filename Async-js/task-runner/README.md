# Task Runner

Requirements:

- This should behave a like a pipe-line. We will give some tasks to be ran sequentially.
- Task will be function, and ofc, may require inputs from the last task and hence provide output to the next task.
- Tasks can async (waiting on some promise) or sync.
- Ofcourse, the order shouldn't change (it's a pipeline!).

```ts
taskRunner: (inp, ...fn) => out;
/* do something like reduce, where you have an accumulator 
 but it respects the async behavior of some functions 
 */
```
