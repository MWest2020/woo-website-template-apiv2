import { getConfig } from "./getConfig";

export const initiateEnvironmentFromEnv = () => {
  window.sessionStorage.setItem("API_BASE_URL", process.env.GATSBY_API_BASE_URL ?? "");
  window.sessionStorage.setItem("NL_DESIGN_THEME_CLASSNAME", process.env.GATSBY_NL_DESIGN_THEME_CLASSNAME ?? "");
  window.sessionStorage.setItem("FAVICON_URL", process.env.GATSBY_FAVICON_URL ?? "");
  window.sessionStorage.setItem("ORGANISATION_NAME", process.env.GATSBY_ORGANISATION_NAME ?? "");
  window.sessionStorage.setItem("JUMBOTRON_IMAGE_URL", process.env.GATSBY_JUMBOTRON_IMAGE_URL ?? "");
  window.sessionStorage.setItem("FOOTER_LOGO_HREF", process.env.GATSBY_FOOTER_LOGO_HREF ?? "");
  window.sessionStorage.setItem("FOOTER_CONTENT", process.env.GATSBY_FOOTER_CONTENT ?? "");
  window.sessionStorage.setItem("FOOTER_CONTENT_HEADER", process.env.GATSBY_FOOTER_CONTENT_HEADER ?? "");
  window.sessionStorage.setItem("OIDN_NUMBER", process.env.GATSBY_OIDN_NUMBER ?? "");
};

export const initiateEnvironmentFromJSONConfig = (themeOrDomainName: string) => {
  const config = getConfig(themeOrDomainName);

  if (!config) return; // no config found, nothing else to do

  window.sessionStorage.setItem("API_BASE_URL", config.GATSBY_API_BASE_URL ?? "");
  window.sessionStorage.setItem("NL_DESIGN_THEME_CLASSNAME", config.GATSBY_NL_DESIGN_THEME_CLASSNAME ?? "");
  window.sessionStorage.setItem("FAVICON_URL", config.GATSBY_FAVICON_URL ?? "");
  window.sessionStorage.setItem("ORGANISATION_NAME", config.GATSBY_ORGANISATION_NAME ?? "");
  window.sessionStorage.setItem("JUMBOTRON_IMAGE_URL", config.GATSBY_JUMBOTRON_IMAGE_URL ?? "");
  window.sessionStorage.setItem("FOOTER_LOGO_HREF", config.GATSBY_FOOTER_LOGO_HREF ?? "");
  window.sessionStorage.setItem("FOOTER_CONTENT", config.GATSBY_FOOTER_CONTENT ?? "");
  window.sessionStorage.setItem("FOOTER_CONTENT_HEADER", config.GATSBY_FOOTER_CONTENT_HEADER ?? "");
  window.sessionStorage.setItem("OIDN_NUMBER", config.GATSBY_OIDN_NUMBER ?? "");
};
