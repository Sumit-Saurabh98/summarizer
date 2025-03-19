-- AlterTable
ALTER TABLE "User" ALTER COLUMN "verificationToken" DROP NOT NULL,
ALTER COLUMN "verificationToken" SET DEFAULT '';
