import { healthcheck } from "./modules/healthcheck";

function InitModule(ctx: nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, initializer: nkruntime.Initializer) {
  logger.info('TypeScript module loaded.');

  initializer.registerRpc("healthcheck", healthcheck);
}

!InitModule && InitModule.bind(null);