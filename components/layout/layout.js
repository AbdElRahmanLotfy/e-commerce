import Navigation from "../navigation/navigation";
import { useContext } from "react";
import NotificationTypes from "../notification-types/notification-types";
import NotificationContext from "@/context/notification/notification-context";
const Layout = (props) => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <>
      <div className="wrapper">
        <Navigation />
        {props.children}
      </div>
      {activeNotification && (
        <NotificationTypes
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
