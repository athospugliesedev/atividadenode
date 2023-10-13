import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface Curriculum {
  id?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}
