import { useContext } from "react";
import NotificationContext from "@/context/notification/notification-context";
import styles from "./notification-types.module.scss";

function NotificationTypes(props) {
  const NotificationCtx = useContext(NotificationContext);
  const { title, message, status } = props;

  let statusStyles = "";

  if (status === "success") {
    statusStyles = styles.success;
  }
  if (status === "error") {
    statusStyles = styles.error;
  }
  if (status === "pending") {
    statusStyles = styles.pending;
  }

  const activeStyles = `${styles.notification} ${statusStyles}`;

  return (
    <div className={activeStyles} onClick={NotificationCtx.hideNotification}>
      <div>{title}</div>
      <div>{message}</div>
      <div>{status}</div>
    </div>
  );
}

export default NotificationTypes;
