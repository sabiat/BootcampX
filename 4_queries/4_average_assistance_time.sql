-- SELECT AVG(duration) as average_assistance_request_duration
-- FROM (
--   SELECT (completed_at-started_at) as duration
--   FROM assistance_requests
-- ) as total_duration

SELECT AVG(completed_at-started_at) as average_assistance_request_duration
FROM assistance_requests