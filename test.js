const test = require('tape');
const execa = require('execa');

test('cuid output length', async assert => {
  const {stdout} = await execa('./cli.js', [1]);

  const message = 'slug should be more than 10 characters long';

  const actual = stdout.length;
  const expected = 10;

  assert.true(actual > expected, message);

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
  const {stdout} = await execa('./cli.js', [1, '--slug']);

  const message = 'slug should be up to 10 characters long';

  const actual = stdout.length;
  const expected = 10;

  assert.true(actual <= expected, message);

  assert.end();
});

test('using stdin', async assert => {
  const {stdout} = await execa('./cli.js', [], {input: '1'});

  const message = 'cuid should work with stdin and stdout should contain 1 entry';

  const actual = Array.from(new Set(stdout.split('\n'))).length;
  const expected = 1;

  assert.equal(actual, expected, message);

  assert.end();
});

test('using stdin slug', async assert => {
  const {stdout} = await execa('./cli.js', ['--slug'], {input: '1'});

  const message = 'cuid should work with stdin and stdout should contain a slug entry';

  const actual = stdout.length;
  const expected = 10;

  assert.true(actual <= expected, message);

  assert.end();
});
