# odin-ds
Data structure implementation in JavaScript.

## Data structures
### Singly Linked list
#### Features
- <span style="background-color: grey; color=white;">append(value)</span> adds a new node containing value to the end of the list or to start if list is empty
- <span style="background-color: grey; color=white;">prepend(value)</span> adds a new node containing value to the start of the list
- <span style="background-color: grey; color=white;">size()</span> returns the total number of nodes in the list
- <span style="background-color: grey; color=white;">head()</span> returns the first node in the list
- <span style="background-color: grey; color=white;">tail()</span> returns the last node in the list
- <span style="background-color: grey; color=white;">at(index)</span> returns the node at the given index or error message if there is no node in the requested index
- <span style="background-color: grey; color=white;">pop()</span> removes the last element from the list
- <span style="background-color: grey; color=white;">contains(value)</span> returns true if the passed in value is in the list and otherwise returns false
- <span style="background-color: grey; color=white;">find(value)</span> returns the index of the node containing value, or null if not found
- <span style="background-color: grey; color=white;">toString()</span> returns your LinkedList objects as strings in the format: ( value ) -> ( value ) -> ( value ) -> null
- <span style="background-color: grey; color=white;">insertAt(value, index)</span> inserts a new node with the provided value at the given index or at the end of the list if index is bigger than list size
- <span style="background-color: grey; color=white;">removeAt(index)</span> removes the node at the given index or error message if the list is empty or if the request index is bigger than list size

To run the code:
1. You can clone or download the repo.
2. Open any filenames beginning with test from any of the folders.
3. Run "node test.mjs" in the command line. Ensure you have node.js installed.