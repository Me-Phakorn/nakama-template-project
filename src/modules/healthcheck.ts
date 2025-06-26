export function healthcheck(
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  payload: string
): string {
  logger.info("RPC /healthcheck called");
  return JSON.stringify({ success: true });
}
