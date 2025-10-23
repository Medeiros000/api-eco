-- CreateTable
CREATE TABLE "tips" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "impact" TEXT NOT NULL,
    "liked" BOOLEAN NOT NULL DEFAULT false,
    "implemented" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tips_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tips" ADD CONSTRAINT "tips_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
