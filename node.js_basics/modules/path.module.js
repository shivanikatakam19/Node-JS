const path = require('path')

const filePath = '/users/john/docs/file.txt';

// Returns the last portion (the base) of a path (i.e., the file name).
const base = path.basename(filePath);
const baseWithoutExt = path.basename(filePath, '.txt');
console.log('base:', base) // Returns file name with extension: 'file.txt'
console.log('base wihout extension:', baseWithoutExt) // Returns file name without extension: 'file'

// Returns the directory name of a path (everything before the file name).
const dir = path.dirname(filePath);
console.log('directory name:', dir) // Returns '/users/john/docs'

// Returns the file extension from the given path.
const ext = path.extname(filePath);
console.log('file extension:', ext)// Returns '.txt'

// Joins all arguments together to form a normalized path. 
// It automatically inserts the correct path separators based on the operating system.
const fullPath = path.join('/users', 'john', 'docs', 'file.txt');
console.log('join:', fullPath);  // On Windows: '\users\john\docs\file.txt' On Linux/Mac: '/users/john/docs/file.txt'

// Normalizes a given path by resolving .. and . segments and removing redundant slashes.
const unnormalizedPath = '/users/john//docs/../file.txt';
const normalizedPath = path.normalize(unnormalizedPath);
console.log('normalize:', normalizedPath);  // Outputs '\users\john\file.txt'

// Returns true if the given path is an absolute path, otherwise false.
console.log('absolute:', path.isAbsolute('/users/john'));  // Returns true
console.log('absolute:', path.isAbsolute('docs/file.txt'));  // Returns false

// Returns the relative path from one directory to another.
const from = '/users/john/docs';
const to = '/users/john/photos/vacation.jpg';
const relativePath = path.relative(from, to);
console.log('relative:', relativePath) // Returns '..\photos\vacation.jpg'

//Returns an object with information about the given path, including its root, directory, 
// base (filename with extension), name (filename without extension), and extension.
const parsedPath = path.parse(filePath);
console.log('parsed path:', parsedPath);
/* Output:
{
  root: '/',
  dir: '/users/john/docs',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
} */

// Opposite of path.parse(). Takes an object and returns a path string.
const format = {
    dir: '/users/john/docs',
    base: 'file.txt'
};
const formattedPath = path.format(format);
console.log('formatted path:', formattedPath);
// Output: '/users/john/docs\file.txt'

