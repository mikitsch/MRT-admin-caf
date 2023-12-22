import { useMemo, useState, ReactNode } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Transaction, testData } from "./testData";
import caffesta_icon from "../misc/png/caffesta_icon.png";

type TransactionCol = {
  type: string;
  terminalNumber: number;
  subType: string;
  date: string;
  totalSum: number;
  description: string | null;
  clientFirstName: string | undefined;
};

const dataTable: TransactionCol[] = testData.map(
  (transaction: Transaction) => ({
    type: transaction.type,
    status: transaction.status,
    terminalNumber: transaction.terminalNumber,
    subType: transaction.subType,
    date: transaction.createdAt.date,
    totalSum: transaction.totalSum,
    description: transaction.description,
    clientFirstName: transaction.client?.firstName,
  })
);

const Example = () => {
  console.error();
  const [data, setData] = useState(dataTable);
  const columns = useMemo<MRT_ColumnDef<TransactionCol>[]>(
    () => [
      {
        accessorKey: "type",
        header: "Итого",
        // size: 150,
        Cell: ({ renderedCellValue, row }) => {
            // console.log("renderedCellValue", {renderedCellValue, row});
          return (
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img
                alt="avatar"
                height={30}
                src={caffesta_icon}
                loading="lazy"
                style={{ borderRadius: "50%" }}
              />
              <span>{renderedCellValue}</span>
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: "Статус",
        // size: 150,
        Cell: ({ renderedCellValue }) => { //using renderedCellValue instead of cell.getValue() preserves filter match highlighting
          const value: ReactNode = renderedCellValue;
          let bgcolor: string;
          let lable: string | ReactNode;
          switch (value) {
            case "active":
              bgcolor = "#008B8B";
              lable = "Активный";
              break;
            case "pending":
              bgcolor = "#DDA0DD";
              lable = "В ожидании";
              break;
            case "closed":
              bgcolor = "#008000";
              lable = "Закрыт";
              break;
            case "cancel":
              bgcolor = "#800080";
              lable = "Отменён";
              break;
            case "cancel_full":
              bgcolor = "#B8860B";
              lable = "Отменён полностью";
              break;
            case "wait_cashier":
              bgcolor = "#FF6347";
              lable = "Ожидание кассира";
              break;
            default:
              bgcolor = "#FF0000";
              lable = value;
              break;
          }
          return (
            <span
              style={{
                padding: "5px",
                borderRadius: "5px",
                backgroundColor: bgcolor,
              }}
            >
              {lable}
            </span>
          );
        },
      },
      {
        accessorKey: "terminalNumber",
        header: "№",
        size: 150,
      },
      {
        accessorKey: "subType",
        header: "Тип",
        // size: 150,
      },
      {
        accessorKey: "date",
        header: "Время",
        // size: 150,
      },
      {
        accessorKey: "totalSum",
        header: "К оплате",
        // size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    renderDetailPanel: ({ row }) => {
console.log("row.original.address", {row, original: row.original});

      return(
        <div
          style={{
            display: 'grid',
            margin: 'auto',
            gridTemplateColumns: '1fr 1fr',
            width: '100%',
            gap: "10rem"
          }}
        >
          <div>Description: {row.original.description || "пусто"}</div>
          <div>Client: {row.original.clientFirstName || "пусто"}</div>
        </div>
      )
    }
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
