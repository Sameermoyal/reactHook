memonization is techniques to increase performance our application and reduse re rendering in javascript



Memoization in javascript is an optimization technique that stores the results of function calls in a temporary data structure and then retrieves the results whenever the stored result is needed in the program. By doing this, the execution time is reduced and the CPU performance is increased

in react for  achive memonization  use useMemo hook and useCallback hook



useMemo hook syntax is same as useEffect , it take one function and dependency. function  which call when dependency is matched ,




useMemo and useCallback hooks are similar. the main difference is  that useMemo return a memonized value and useCallback return a memoized function.


refrential equility a term used in react   in this term when page is re-render then all function re-create  whenever in function is changed or not so prevent this issue use useCallback hook