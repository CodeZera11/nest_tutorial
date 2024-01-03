import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Shiv Shankar Yadav',
      email: 'shivshankar@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Ram Chandra',
      email: 'ramchandra@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'Lakshman',
      email: 'lakshman@gmail.com',
      role: 'CAPTAIN',
    },
    {
      id: 4,
      name: 'Veer Hanuman',
      email: 'veerhanuman@gmail.com',
      role: 'TEACHER',
    },
    {
      id: 5,
      name: 'Bharat',
      email: 'bharat@gmail.com',
      role: 'SIMPLE',
    },
  ];

  findAll(role?: 'SIMPLE' | 'TEACHER' | 'CAPTAIN' | 'ADMIN') {
    if (role) return this.users.filter((user) => user.role === role);

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  createUser(user: {
    name: string;
    email: string;
    role: 'SIMPLE' | 'TEACHER' | 'CAPTAIN' | 'ADMIN';
  }) {
    const userWithMaxId = [...this.users].sort((a, b) => b.id - a.id);

    const newUser = {
      id: userWithMaxId[0].id + 1,
      ...user,
    };

    this.users.push(newUser);

    return newUser;
  }

  updateUser(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'SIMPLE' | 'TEACHER' | 'CAPTAIN' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  deleteUser(id: number) {
    const userDeleted = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return userDeleted;
  }
}
