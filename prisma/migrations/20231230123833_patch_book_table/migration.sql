/*
  Warnings:

  - Added the required column `image` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publicationYear" INTEGER NOT NULL,
    "isbn" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "total" INTEGER NOT NULL DEFAULT 0,
    "image" TEXT NOT NULL,
    "createTs" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Book" ("author", "createTs", "id", "isbn", "price", "publicationYear", "title", "total") SELECT "author", "createTs", "id", "isbn", "price", "publicationYear", "title", "total" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
CREATE UNIQUE INDEX "Book_title_key" ON "Book"("title");
CREATE UNIQUE INDEX "Book_isbn_key" ON "Book"("isbn");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
