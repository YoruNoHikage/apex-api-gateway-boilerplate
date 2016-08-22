import λ from 'apex.js';

export default λ(({ pathParams: { name } }) => {
  if (!name) {
    throw new Error('You must provide a name');
  }

  return `Hello ${name}`;
});
