ALTER TABLE "users" ALTER COLUMN "payment_methods" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "payment_methods" SET DATA TYPE jsonb USING payment_methods::jsonb;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "payment_methods" SET DEFAULT '{}'::jsonb;