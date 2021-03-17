const linesCount = require('../../src/files2/files');
require('jest');

describe('test promises', () => {
  it('should return the correct line count for a valid file', done => {
    const checkCount = count => {
      expect(count).toBe(16);

      done();
    };

    linesCount('src/files2/files.js').then(checkCount);
  });

  it('should return the correct line count - using return', () => {
    const callback = count => {
      expect(count).toBe(16);
    };

    return linesCount('src/files2/files.js').then(callback);
  });

  it('should report an error for an invalid file name', () => {
    return expect(linesCount('src/files2/wrong-file-name.js')).rejects.toThrow(
      'unable to open file src/files2/wrong-file-name.js'
    );
  });
});
