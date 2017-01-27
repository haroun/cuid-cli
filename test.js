import test from 'tape';
import execa from 'execa';

test('cuid output length', async assert => {
  const {stdout} = await execa('./cli.js', [4]);

  const actual = stdout.split('\n').length;
  const expected = 4;

  assert.equal(actual, expected, 'cuid output should contains 4 lines if 4 is provided');

  assert.end();
});

test('cuid output content', async assert => {
  const {stdout} = await execa('./cli.js', [4]);

  const actual = Array.from(new Set(stdout.split('\n'))).length;
  const expected = 4;

  assert.equal(actual, expected, 'cuid should contain unique values only');

  assert.end();
});

test('cuid slug length', async assert => {
  const {stdout} = await execa('./cli.js', ['--slug']);

  const actual = stdout.length;
  const expected = 10;

  assert.equal(actual, expected, 'slug should be 10 characters long');

  assert.end();
});

test('using stdin', async assert => {
	const {stdout} = await execa('./cli.js', {
		input: 0
	});

  const actual = stdout.length;
  const expected = 1;

  assert.equal(actual, expected, 'cuid should work with stdin and stdout should contain 1 entry');
});
