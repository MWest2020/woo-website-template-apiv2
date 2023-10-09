import * as React from "react";
import * as styles from "./TableResultsTemplate.module.css";
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby";
import { translateDate } from "../../../services/dateFormat";
import { useTranslation } from "react-i18next";

interface TableResultsTemplateProps {
  requests: any[];
}

export const TableResultsTemplate: React.FC<TableResultsTemplateProps> = ({ requests }) => {
  const { t, i18n } = useTranslation();

  return (
    <Table className={styles.table}>
      <TableHeader className={styles.tableHeader}>
        <TableRow>
          <TableHeaderCell>{t("Subject")}</TableHeaderCell>
          <TableHeaderCell>{t("Publication date")}</TableHeaderCell>
          <TableHeaderCell>{t("Summary")}</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody className={styles.tableBody}>
        {requests.map((request) => (
          <TableRow className={styles.tableRow} key={request.id} onClick={() => navigate(request.id)} tabIndex={0}>
            <TableCell>{request.Titel ?? t("No subject available")}</TableCell>
            <TableCell>
              {request.Publicatiedatum
                ? translateDate(i18n.language, request.Publicatiedatum)
                : t("No publication date available")}
            </TableCell>
            <TableCell>{request.Samenvatting ?? t("No summary available")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
