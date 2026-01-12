ALTER TABLE "users" ADD COLUMN "subscription_tier" text DEFAULT 'free' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "lemon_squeezy_customer_id" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "lemon_squeezy_subscription_id" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "current_period_end" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "payment_methods" text DEFAULT '{}';