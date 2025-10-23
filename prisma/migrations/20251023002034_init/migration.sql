-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT DEFAULT 'user',
    "household_size" TEXT,
    "transportation_type" TEXT,
    "has_solar_panels" BOOLEAN DEFAULT false,
    "heating_type" TEXT,
    "residence_size" TEXT,
    "has_garden" BOOLEAN DEFAULT false,
    "recycling_habit" TEXT,
    "monthly_income_range" TEXT,
    "has_seen_intro" BOOLEAN NOT NULL DEFAULT false,
    "onboarding_completed" BOOLEAN DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
