const ASTRO_VERSION = "4.9.2";
const REROUTE_DIRECTIVE_HEADER = "X-Astro-Reroute";
const ROUTE_TYPE_HEADER = "X-Astro-Route-Type";
const DEFAULT_404_COMPONENT = "astro-default-404";
const REROUTABLE_STATUS_CODES = [404, 500];
const clientAddressSymbol = Symbol.for("astro.clientAddress");
const clientLocalsSymbol = Symbol.for("astro.locals");
const responseSentSymbol = Symbol.for("astro.responseSent");
const SUPPORTED_MARKDOWN_FILE_EXTENSIONS = [
  ".markdown",
  ".mdown",
  ".mkdn",
  ".mkd",
  ".mdwn",
  ".md"
];
const MIDDLEWARE_PATH_SEGMENT_NAME = "middleware";
export {
  ASTRO_VERSION,
  DEFAULT_404_COMPONENT,
  MIDDLEWARE_PATH_SEGMENT_NAME,
  REROUTABLE_STATUS_CODES,
  REROUTE_DIRECTIVE_HEADER,
  ROUTE_TYPE_HEADER,
  SUPPORTED_MARKDOWN_FILE_EXTENSIONS,
  clientAddressSymbol,
  clientLocalsSymbol,
  responseSentSymbol
};