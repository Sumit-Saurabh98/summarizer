-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verificarionStatus" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verificationToken" TEXT;
