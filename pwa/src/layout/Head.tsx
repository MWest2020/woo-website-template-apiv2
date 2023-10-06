import * as React from "react";
import _ from "lodash";
import "../styling/index.css";
import { Helmet } from "react-helmet";
import { getPageTitle } from "../services/getPageTitle";
import { useGatsbyContext } from "../context/gatsby";
import { useTranslation } from "react-i18next";

export const Head: React.FC = () => {
  const { gatsbyContext } = useGatsbyContext();
  const { t, i18n } = useTranslation();

  const translatedCrumbs = gatsbyContext.pageContext?.breadcrumb.crumbs.map((crumb: any) => ({
    ...crumb,
    crumbLabel: t(_.upperFirst(crumb.crumbLabel)),
  }));

  return (
    <Helmet
      htmlAttributes={{
        lang: i18n.language,
      }}
      bodyAttributes={{
        class: process.env.GATSBY_NL_DESIGN_THEME_CLASSNAME,
      }}
    >
      <title>{`Woo | ${getPageTitle(translatedCrumbs, gatsbyContext.location) ?? "Error"}`}</title>
      <link rel="icon" type="svg" href={process.env.GATSBY_FAVICON_URL} />
    </Helmet>
  );
};
