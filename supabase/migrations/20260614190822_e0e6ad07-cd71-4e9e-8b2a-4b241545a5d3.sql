
-- Set search_path on helpers
ALTER FUNCTION public.set_updated_at() SET search_path = public;

-- Revoke execute from public/authenticated on security-definer + helper functions
REVOKE EXECUTE ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.log_audit() FROM PUBLIC, anon, authenticated;
