const linesCount = require('../../src/files/files');

describe('test server side callback', () => {
  it('should return correct line count for a valid file', () => {
    const callback = async count => {
      await expect(linesCount('src/files.js', callback)).toBe(15);
      return count;
    };

    linesCount('src/files.js', callback, undefined);
  });

  it('should report an error for an invalid file name', () => {
    const onError = async error => {
      await expect(error).toBe('unable to open file src/files.js');
    };

    linesCount('src/files.js', undefined, onError);
  })
})
