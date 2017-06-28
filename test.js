import test from 'tape';
import execa from 'execa';

test('cuid output length', async assert => {
  const {stdout} = await execa('./cli.js');
  assert.true(stdout.length > 0);
});

test('cuid output length', async assert => {
  const {stdout} = await execa('./cli.js', ['4']);

  const message = 'cuid output should contains 4 lines if 4 is provided';

  const actual = stdout.split('\n').length;
  const expected = 4;

  assert.equal(actual, expected, message);

  assert.end();
});

test('cuid output content', async assert => {
  const {stdout} = await execa('./cli.js', [4]);

  const message = 'cuid should contain unique values only';

  const actual = Array.from(new Set(stdout.split('\n'))).length;
  const expected = 4;

  assert.equal(actual, expected, message);

  assert.end();
});

test('cuid slug length', async assert => {
  const {stdout} = await execa('./cli.js', ['--slug']);

  const message = 'slug should be 10 characters long';

  const actual = stdout.length;
  const expected = 10;

  assert.equal(actual, expected, message);

  assert.end();
});

test('using stdin', async assert => {
  const {stdout} = await execa('./cli.js', {
    input: 0
  });

  const message = 'cuid should work with stdin and stdout should contain 1 entry';

  const actual = stdout.length;
  const expected = 1;

  assert.equal(actual, expected, message);

  assert.end();
});
