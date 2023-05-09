interface User {
  name: string;
}

const user: Readonly<User> = {
  name: 'William',
};

// Cannot assign to 'name' because it is a read-only property.
user.name = '';

console.log({ user });
/**
 { user: { name: 'William' } }
 */
