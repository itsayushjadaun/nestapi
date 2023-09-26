import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seed = async () => {
  try {
    // Seed users
    const user1 = await prisma.user.create({
      data: {
        email: 'user1@example.com',
        hash: 'password123',
        firstName: 'John',
        lastName: 'Doe',
      },
    });

    const user2 = await prisma.user.create({
      data: {
        email: 'user2@example.com',
        hash: 'password456',
        firstName: 'Jane',
        lastName: 'Smith',
      },
    });

    console.log('Seeded users:', user1, user2);

    // Seed bookmarks associated with users
    const bookmark1 = await prisma.bookmark.create({
      data: {
        title: 'Bookmark 1',
        description: 'This is the first bookmark',
        link: 'https://example.com/bookmark1',
        userId: user1.id, // Associate with user1
      },
    });

    const bookmark2 = await prisma.bookmark.create({
      data: {
        title: 'Bookmark 2',
        description: 'This is the second bookmark',
        link: 'https://example.com/bookmark2',
        userId: user2.id, // Associate with user2
      },
    });

    console.log('Seeded bookmarks for user1:', bookmark1);
    console.log('Seeded bookmarks for user2:', bookmark2);
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
