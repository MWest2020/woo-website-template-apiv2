import * as React from "react";
import * as styles from "./LandingTemplate.module.css";
import { Page, PageContent } from "@utrecht/component-library-react/dist/css-module";
import { FiltersTemplate } from "../templateParts/filters/FiltersTemplate";
import { ResultsDisplayTemplate } from "../templateParts/resultsDisplayTemplate/ResultsDisplayTemplate";
import { JumbotronTemplate } from "../jumbotronTemplate/JumbotronTemplate";
import { useOpenWoo } from "../../hooks/openWoo";
import { useFiltersContext } from "../../context/filters";
import Skeleton from "react-loading-skeleton";
import { QueryClient } from "react-query";
import { Pagination } from "@conduction/components";
import { usePaginationContext } from "../../context/pagination";
import { useTranslation } from "react-i18next";

export const LandingTemplate: React.FC = () => {
  const { currentPage, setCurrentPage } = usePaginationContext();
  const { filters } = useFiltersContext();
  const { t } = useTranslation();

  const queryClient = new QueryClient();
  const getItems = useOpenWoo(queryClient).getAll(filters, currentPage);

  return (
    <>
      <h1 className={styles.header1}></h1>
      <JumbotronTemplate />

      <Page>
        <PageContent className={styles.container}>
          <FiltersTemplate isLoading={getItems.isLoading} />
          {getItems.data?.results?.length === 0 && !getItems.isLoading && <span>{t("No results found")}.</span>}

          {getItems.data?.results && getItems.data?.results?.length > 0 && (
            <div id="mainContent">
              <ResultsDisplayTemplate displayKey="landing-results" requests={getItems.data.results} />

              <Pagination
                ariaLabels={{ previousPage: t("Previous page"), nextPage: t("Next page"), page: t("Page") }}
                totalPages={getItems.data.pages}
                {...{ currentPage, setCurrentPage }}
              />
            </div>
          )}
          {getItems.isLoading && <Skeleton height={"200px"} />}
        </PageContent>
      </Page>
    </>
  );
};
