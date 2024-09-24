-- CreateTable
CREATE TABLE "Subscribe" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Subscribe_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscribe_email_key" ON "Subscribe"("email");
